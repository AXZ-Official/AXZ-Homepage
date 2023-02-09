import { FC } from "react";
import Layout from "../lib/layout";
import styles from "../styles/pages/ColorTest.module.scss"

const colors: string[] = [
  "dark-100",
  "dark-090",
  "dark-080",
  "dark-070",
  "dark-060",
  "dark-050",
  "gray-060",
  "gray-070",
  "gray-080",
  "gray-090",
  "gray-100",
];

const TemplatePage: FC<{}> = () => {
  return (
    <Layout pageTitle="Color Test Page">
      <h1>Color Test Page</h1>
      {colors.map((color) => {
        return <div key={color} className={`${styles.colorBlock} back-${color}`}>{color}</div>;
      })}
    </Layout>
  );
};

export default TemplatePage;
