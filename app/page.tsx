import { Metadata } from "next";
import Body from "./component/Body";

export const metadata: Metadata = {
  title: "KimJongYeop's portfolio",
  description: "포트폴리오",
};

export default function Home() {
  return (
    <>
      <Body />
    </>
  );
}
