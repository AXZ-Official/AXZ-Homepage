import { FC } from "react";
import Vars from "../env/vars";
import styles from "../styles/lib/Header.module.scss";
import HeaderNavContents from "../env/headerNavContents";
import Link from "next/link";

const Header: FC<{}> = ({}) => {
  return (
    <header className={styles.header} id="header">
      <div className={styles.siteTitle} id="siteTitle">
        <Link href="/">{Vars.siteTitle}</Link>
      </div>
      <div className={styles.headerNav} id="headerNav">
        <ul>
          {HeaderNavContents.map((value) => {
            return (
              <li key={value.id}>
                <Link href={value.url}>{value.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;
