import HomeSide from "@/e-page/HomeSide";
import LeftBar from "@/navbar/LeftBar";
import TopBar from "@/navbar/TopBar";
import Image from "next/image";


export default function Home() {
  return (
    <div>
      <TopBar />
      <LeftBar />
      <HomeSide />
    </div>
  );
}
