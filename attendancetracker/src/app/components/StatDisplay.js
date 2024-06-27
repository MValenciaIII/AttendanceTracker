import localFont from "next/font/local"


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
                <div className={`statItem grid grid-cols-7 ${EuroBold.className} shadow-md`}>
                    <div className="name col-span-2 text-center font-bold text-md">
                        <p>Firstname Lastname</p>
                    </div>
                    <div className="attendanceStat grid grid-cols-3 col-span-4 place-items-center">
                        <div className="absences text-center font-bold text-md">
                            <p className="align-middle">1</p>
                        </div>
                        <div className="tardy text-center font-bold text-md">
                            <p className="align-middle">2</p>
                        </div>
                        <div className="nocall text-center font-bold text-md ">
                            <p className="align-middle">3</p>
                        </div>
                    </div>
                    <div className="currentStatus col-span-1 text-center">
 
                    </div>
                </div>
            
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