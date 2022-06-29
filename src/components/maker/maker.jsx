import React, { useEffect, useState } from "react";
import styles from "./maker.module.css";
import { useNavigate } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: "1",
      name: "elie",
      company: "Samaung",
      theme: "dark",
      title: "Sotfware Engineer",
      email: "elie@gmail.com",
      message: "go for it",
      fileName: "elie",
      fileURL: null,
    },
    2: {
      id: "2",
      name: "junyoung",
      company: "Samaung",
      theme: "light",
      title: "Sotfware Engineer",
      email: "junyoung@gmail.com",
      message: "go for it",
      fileName: "junyoung",
      fileURL: "/images/logo.png",
    },
    3: {
      id: "3",
      name: "bokyoung",
      company: "Samaung",
      theme: "colorful",
      title: "Sotfware Engineer",
      email: "bokyoung@gmail.com",
      message: "go for it",
      fileName: "bokyoung",
      fileURL: null,
    },
  });

  const navigate = useNavigate();
  const onLogOut = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });

  const createOrUpdateCard = (card) => {
    console.log(card.id);
    setCards((cards) => {
      const update = { ...cards };
      update[card.id] = card;
      return update;
    });
  };
  const deleteCard = (card) => {
    console.log(card.id);
    setCards((cards) => {
      const update = { ...cards };
      delete update[card.id];
      return update;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogOut} />
      <div className={styles.container}>
        <Editor
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
