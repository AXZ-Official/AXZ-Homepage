type HeaderNavContentType = {
  name: string;
  url: string;
  id: string
};

const HeaderNavContents: HeaderNavContentType[] = [
  {
    name: "HOME",
    url: "/",
    id: "home",
  },
  {
    name: "PRIVACY POLICY",
    url: "/privacy",
    id: "privacyPolicy",
  }
];

export default HeaderNavContents;
