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
          <h2>AXZ とは</h2>
          <p>
            AXZ
            は『れいな』により創設された組織です。
          </p>
          <p>2023年に誕生しました。</p>
        </div>
        <div>
          <h2>Discordサーバーに参加</h2>
          <p className={styles.button}><Link href="/join">招待コードを取得！</Link></p>
        </div>
        <div></div>
      </div>
    </Layout>
  );
};

export default HomePage;
