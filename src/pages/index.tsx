import { FC } from "react";
import Layout from "../lib/layout";
import Vars from "../env/vars";
import styles from "../styles/pages/Index.module.scss";
import Link from "next/link";

<head prefix="og: https://ogp.me/ns#">
<meta property="og:url" content="https://az-jp.github.io/AXZ-Homepage" />
<meta property="og:type" content="website" />
<meta property="og:title" content="AXZ公式ホームページ" />
<meta property="og:description" content="AXZの最新情報などをお届けします。" />
<meta property="og:site_name" content="" />
<meta property="og:image" content="https://images-ext-2.discordapp.net/external/GSzGN7MNnUkEdaEsBTVwZ68rQFo7-80eePJYb6876Ro/%3Fsize%3D256/https/cdn.discordapp.com/avatars/1057957733506220062/c85e0d389fe7c89d80060657eafcdecc.png" />

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
