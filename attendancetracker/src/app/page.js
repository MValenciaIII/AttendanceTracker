import Image from "next/image";
import Header from './components/Header'
import Main from "./components/Main";
import localFont from "next/font/local"





export default function Home() {
  return (
    <div className={`container `}>
        <Header />
        <Main />
    </div>
  );
}
