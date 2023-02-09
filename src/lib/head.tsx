import Head from "next/head";
import { FC } from "react";
import Vars from "../env/vars";

const CustomHead: FC<{
  pageTitle?: string;
}> = ({pageTitle}) => {
  const titleText = pageTitle ? `${pageTitle} | ${Vars.siteTitle}` : Vars.siteTitle;
  return <Head>
    <title>{titleText}</title>
  </Head>
}

export default CustomHead;
