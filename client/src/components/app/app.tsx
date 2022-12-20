import React, { FC } from "react";
import useHttp from "../../hooks/useHttp";
import styles from "./app.module.css";

const App: FC = () => {
  const { request } = useHttp();

  const clickHandler = async () => {
    try {
      const data = await request("http://localhost:4000/api/decoder");

      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className={styles.container}>
      <button className={styles.button} onClick={clickHandler}>Print Screen</button>
    </main>
  );
};

export default App;
