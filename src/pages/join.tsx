import { FC } from "react";
import Layout from "../lib/layout";
import Link from "next/link";
import styles from "../styles/pages/Join.module.scss"
import CopySpace from "../lib/copySpace";

const TemplatePage: FC<{}> = () => {
  return (
    <Layout pageTitle="サーバーに参加">
      <h1>サーバーに参加！</h1>
      <p><CopySpace type="one-line">
        <Link href="https://discord.gg/9vxwRDZaCV">https://discord.gg/9vxwRDZaCV</Link>
      </CopySpace></p>
    </Layout>
  );
};

export default TemplatePage;
