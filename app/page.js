import Image from "next/image";
import HomeSearch from "./components/HomeSearch";
import Header from "./components/Header";
export default function Home() {
  return (
    <>
      <Header />
      <div className=" p-5">
        <HomeSearch />
      </div>
    </>
  );
}
