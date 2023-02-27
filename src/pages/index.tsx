import { FC } from "react";
import Layout from "../lib/layout";
import Vars from "../env/vars";
import styles from "../styles/pages/Index.module.scss";
import Link from "next/link";

const PRIMARY_MAIN_COLOR = process.env.NEXT_PUBLIC_PRIMARY_MAIN_COLOR;

const Document: FC = () => (
  <Html lang='ja'>
    <Head>
      <link rel='apple-touch-icon' sizes='180x180' href='/favicons/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicons/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='194x194' href='/favicons/favicon-194x194.png' />
      <link rel='icon' type='image/png' sizes='192x192' href='/favicons/android-chrome-192x192.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicons/favicon-16x16.png' />
      <link rel='manifest' href='/favicons/site.webmanifest' />
      <link rel='shortcut icon' href='/favicons/favicon.ico' />
      <meta name='msapplication-TileColor' content='#da532c' />
      <meta name='msapplication-TileImage' content='/favicons/mstile-144x144.png' />
      <meta name='msapplication-config' content='/favicons/browserconfig.xml' />
      <meta name='theme-color' content={PRIMARY_MAIN_COLOR} />
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
        crossOrigin='anonymous'
        referrerPolicy='no-referrer'
      />
      <GoogleSiteVerification />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

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
