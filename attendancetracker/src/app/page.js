import Image from "next/image";
import Header from './components/Header'
import Main from "./components/Main";
import localFont from "next/font/local"



const EuroBold = localFont({ src: [
  {
    path:'./Eurostile-Bold Regular.ttf',
  }
] , variable: '--eurobold' 
})

export default function Home() {
  return (
    <div className={`container ${EuroBold.variable}`}>
        <Header />
        <Main />
    </div>
  );
}
