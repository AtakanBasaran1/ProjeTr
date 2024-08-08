
import Image from "next/image";
import HomeSide from "./e-page/HomeSide";
import TopBar from "./navbar/TopBar";
import LeftBar from "./navbar/LeftBar";


export default function Home() {
  return (
    <div>
      <TopBar />
      <LeftBar />
      <HomeSide />
    </div>
  );
}
