import MuralLOGO from '../Image/mural.jpg'
import Image from "next/image";
import localFont from "next/font/local"


const EuroBold = localFont({ src: [
    {
      path:'../Eurostile-Bold Regular.ttf',
     
    }
  ]  
  })

function Header() {


    return(
        <div className="container">
            <div className="grid grid-cols-2 gap-4 ">
                <div>
                    <Image src={MuralLOGO} height="60px" width="60px" />
                </div>
                <div className='headerTitle '>
                    <h1 className={`align-middle ${EuroBold} `}>MCA Gulf Coast Attendence Tracker</h1>
                </div>
            </div>
        </div>
    )
}


export default Header