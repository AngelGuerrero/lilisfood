import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lilis Food</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=Courgette&family=Nunito+Sans&family=Roboto:wght@500&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.main__header}>
            <h1 className={styles.lilis}>Lilis</h1>
            <h1 className={styles.food}>food</h1>
          </div>
          <p>Sitio web en construcción</p>
        </main>
      </div>
    </div>
  );
}
