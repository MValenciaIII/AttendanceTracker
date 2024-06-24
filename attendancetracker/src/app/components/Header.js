import MuralLOGO from '../Image/mural.jpg'
import Image from "next/image";
import localFont from "next/font/local"


const EuroBold = localFont({ src:'../Eurostile-Bold Regular.ttf'})
const Gothic = localFont({ src: '../Trade Gothic LT Std Condensed No. 18.otf'})

function Header() {


    return(
        <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
                <div>
                    <Image className='object-fill' src={MuralLOGO}  fill={false}/>
                </div>
                <div className='headerTitle text-center '>
                    <h1 className={`align-middle ${EuroBold.className} text-4xl font-extrabold `}>MCA Gulf Coast Attendence Tracker</h1>
                </div>
                
            </div>
        </div>
    )
}


export default Header