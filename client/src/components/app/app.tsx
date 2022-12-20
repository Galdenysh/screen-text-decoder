import React, { FC, useState } from "react";
import useHttp from "../../hooks/useHttp";
import styles from "./app.module.css";

const App: FC = () => {
  const { request, pending, error } = useHttp();
  const [texts, setTexts] = useState<string[]>([]);

  const clickHandler = async () => {
    try {
      const body = await request("/api/decoder");

      body.forEach((item: any) => {
        if (typeof item === "string") setTexts((array) => [...array, item]);
      });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  };

  return (
    <main className={styles.container}>
      <button
        className={styles.button}
        onClick={clickHandler}
        disabled={pending || error}
      >
        {pending ? "Loading" : "Click to decoding"}
      </button>
      {texts.map((item, index) => (
        <p className={styles.text} key={index}>{item}</p>
      ))}
    </main>
  );
};

export default App;
