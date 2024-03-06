import styles from "./page.module.css";
import Link from "./components/Link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Bem-vindo a coitadolandia, Diego esta triste com o pessoal não gostar de Java</h1>
      <Link href="about">
        a
      </Link>
    </main>
  );
}


