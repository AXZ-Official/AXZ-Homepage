import { FC } from "react";
import Layout from "../lib/layout";
import Vars from "../env/vars";
import styles from "../styles/pages/Index.module.scss";
import Link from "next/link";

const HomePage: FC<{}> = () => {
  return (
    <Layout>
      <h1>{Vars.siteTitle} へようこそ</h1>
      <div className={styles.wrapper}>
        <div>
          <h2>AXX とは</h2>
          <p>
            AXZ
            は色々な人が集まって雑談などをするDiscordサーバーです。
          </p>
          <p>2023年に誕生しました。</p>
        </div>
        <div>
          <h2>サーバーに参加</h2>
          <p className={styles.button}><Link href="/join">招待コードを取得！</Link></p>
        </div>
        <div></div>
      </div>
    </Layout>
  );
};

export default HomePage;
