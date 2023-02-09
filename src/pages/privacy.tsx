import { FC } from "react";
import Layout from "../lib/layout";
import Link from "next/link";

const TemplatePage: FC<{}> = () => {
  return (
    <Layout pageTitle="プライバシーポリシー">
      <h1>プライバシーポリシー</h1>
      <p>当サイトでは、アクセス解析サービス「Googleアナリティクス」を使用しています。</p>
      <p>Googleアナリティクスはデータの収集のためにCookieを使用しています。</p>
      <p>このデータは匿名で収集されており、個人を特定するものではありません</p>
      <p>この機能はCookieを無効にすることで拒否することができますので、お使いのブラウザの設定をご確認ください。</p>
      <p>この規約に関しての詳細は<Link href="https://marketingplatform.google.com/about/analytics/terms/jp/" target="_blank">Google アナリティクス利用規約</Link>のページや<Link href="https://policies.google.com/technologies/ads?hl=ja">Google ポリシーと規約</Link>のページをご覧ください。</p>
    </Layout>
  );
};

export default TemplatePage;
