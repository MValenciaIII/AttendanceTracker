import Image from "next/image";
import Header from './containers/Header'
import Main from "./containers/Main";
import localFont from "next/font/local"





export default function Home() {
  return (
    <div className={`container `}>
        <Header />
        <Main />
        
    </div>
  );
}
