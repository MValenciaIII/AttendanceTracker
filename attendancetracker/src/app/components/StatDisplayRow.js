'use client'

import localFont from "next/font/local"


const EuroBold = localFont({ src:'../Eurostile-Bold Regular.ttf'})

function StatDisplayRow(props) {
    
    console.log(props)



    return (
        <div className={`statItem grid grid-cols-7 ${EuroBold.className} shadow-md`}>
                    <div className="name col-span-2 text-center font-bold text-md flex justify-center items-center">
                        <p className="align-middle">{props.fName} {props.lName}</p>
                    </div>
                    <div className="attendanceStat grid grid-cols-3 col-span-4 place-items-center">
                        <div className="absences text-center font-bold text-md">
                            <p className="align-middle">{props.absences}</p>
                        </div>
                        <div className="tardy text-center font-bold text-md">
                            <p className="align-middle">{props.tardies}</p>
                        </div>
                        <div className="nocall text-center font-bold text-md ">
                            <p className="align-middle">{props.nocalls}</p>
                        </div>
                    </div>
                    <div className="currentStatus col-span-1 text-center my-2">

                    </div>
                </div>
    )
}

export default StatDisplayRow