'use client'
import InputAbsent from "../components/InputAbsent"
import StatDisplay from "../components/StatDisplay"
import React from "react"


function Main() {
    //STORE DATA IN USESTATE
    const [workers, setWorkers] = React.useState([
    {
        fname: 'Margarito',
        lname: 'Valencia',
        absences: 0,
        tardy: 0,
        nocalls: 0, 
        currentStatus: 0,
        datesMissed: ['2000-01-31']
    },
    {
        fname: 'Zachary',
        lname: 'Dubroc',
        absences: 2,
        tardy: 1,
        nocalls: 1, 
        currentStatus: 2,
        datesMissed: ['2000-01-31']
    },
    {
        fname: 'Sara',
        lname: 'Dedeaux',
        absences: 5,
        tardy: 2,
        nocalls: 0, 
        currentStatus: 1,
        datesMissed: ['2000-01-31']
    }
])


    return(
        <div className="container">
            <div className="grid grid-cols-1 gap-4">
                    <InputAbsent />
                    <StatDisplay />
            </div>
        </div>
    )
}


export default Main