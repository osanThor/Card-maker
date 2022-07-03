import React, { useCallback, useEffect, useState } from "react";
import styles from "./maker.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

const Maker = ({ FileInput, authService, cardRepository }) => {
  const location = useLocation();
  const historyState = location.state;
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(historyState && historyState.id);

  const navigate = useNavigate();
  const onLogOut = useCallback(() => {
    authService.logout();
  }, [authService]);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardRepository.syncCards(userId, (cards) => {
      setCards(cards);
    });
    return () => stopSync();
  }, [userId, cardRepository]);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        navigate("/");
      }
    });
  }, [authService, navigate]);

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const update = { ...cards };
      update[card.id] = card;
      return update;
    });
    cardRepository.saveCard(userId, card);
  };
  const deleteCard = (card) => {
    setCards((cards) => {
      const update = { ...cards };
      delete update[card.id];
      return update;
    });
    cardRepository.removeCard(userId, card);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogOut} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
