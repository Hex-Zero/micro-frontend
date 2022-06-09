import type { NextPage } from "next";
import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";

const DynamicComponent = dynamic(
  async () =>
    // @ts-ignore
    await import("https://cdn.jsdelivr.net/gh/elgs/ip6/ip6-es.js").then(
      (mod) => mod.normalize
    )
);

const Home: NextPage = () => {
  console.log(DynamicComponent);
  return <div className={styles.container}>Pokemon List</div>;
};

export default Home;
