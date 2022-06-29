import React, { useRef } from "react";
import Button from "../button/button";
import ImageFileInput from "../image_file_input/image_file_input";
import styles from "./card_edit_form.module.css";

const CardEditForm = ({ card, updateCard, deleteCard }) => {
  const nameRef = useRef();
  const companyRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const themeRef = useRef();
  const messageRef = useRef();

  const { name, company, theme, title, email, message, fileName, fileURL } =
    card;
  const onChange = (e) => {
    if (e.currentTarget == null) {
      return;
    }
    e.preventDefault();
    updateCard({
      ...card,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  const onSubmit = () => {
    deleteCard(card);
  };
  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        ref={nameRef}
        type="text"
        name="name"
        defaultValue={name}
        onChange={onChange}
      />
      <input
        className={styles.input}
        ref={companyRef}
        type="text"
        name="company"
        defaultValue={company}
        onChange={onChange}
      />
      <input
        className={styles.input}
        ref={titleRef}
        type="text"
        name="title"
        value={title}
        onChange={onChange}
      />
      <input
        className={styles.input}
        ref={emailRef}
        type="text"
        name="email"
        defaultValue={email}
        onChange={onChange}
      />
      <select
        className={styles.select}
        ref={themeRef}
        name="theme"
        defaultValue={theme}
        onChange={onChange}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">ColorFul</option>
      </select>
      <textarea
        className={styles.textarea}
        ref={messageRef}
        name="message"
        defaultValue={message}
        onChange={onChange}
      />
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
