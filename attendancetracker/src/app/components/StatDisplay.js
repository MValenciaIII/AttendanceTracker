import localFont from "next/font/local"
import StatDisplayRow from "./StatDisplayRow"

const EuroBold = localFont({ src:'../Eurostile-Bold Regular.ttf'})

function StatDisplay() {

    return(
        <div className="container statDisplay">
            <div className="grid grid-cols-1">
                <div className={`stat-header grid grid-cols-7  ${EuroBold.className} font-extrabold place-items-center`}> 
                    <div className="worker-header col-span-2 text-lg text-center"><p>Worker</p></div>
                    <div className="attendanceHeader col-span-4 grid grid-cols-3 place-items-center">
                        <div className="absencesHeader text-lg text-center"><p>Absences</p></div>
                        <div className="tardyHeader text-lg text-center"><p>Tardy</p></div>
                        <div className="nocallHeader text-lg text-center"><p>W/O Noticed</p></div>
                    </div>
                    <div className="currentStatusHeader text-lg text-center"><p> Status</p></div>
                </div>
                <StatDisplayRow />
            
            </div>
            {/* <table className="table-auto">
                <thead>
                    <tr>
                        <th>Worker Name</th>
                        <th>Absences</th>
                        <th>Tardy</th>
                        <th>No Call/No Show</th>
                        <th>Current Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Firstname Lastname</td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>COLOR</td>
                    </tr>
                </tbody>
            </table> */}
        </div>
    )
}

export default StatDisplay