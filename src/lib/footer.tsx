import { FC } from "react";
import styles from "../styles/lib/Footer.module.scss";

const Footer: FC<{}> = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyRight}>&copy; AXZ-jp {new Date().getFullYear()}</div>
    </footer>
  );
};

export default Footer;
