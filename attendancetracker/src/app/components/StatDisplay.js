import localFont from "next/font/local"


const EuroBold = localFont({ src:'../Eurostile-Bold Regular.ttf'})

function StatDisplay() {

    return(
        <div className="container statDisplay">
            <div className="grid grid-cols-1">
                <div className={`stat-header grid grid-cols-7 ml-5 ${EuroBold.className}`}> 
                    <div className="workerHeader col-span-2"><p>Worker</p></div>
                    <div className="attendanceHeader col-span-4 grid grid-cols-3">
                        <div className="absencesHeader"><p>Absences</p></div>
                        <div className="tardyHeader"><p>Tardy</p></div>
                        <div className="nocallHeader"><p>W/O Noticed</p></div>
                    </div>
                    <div className="currentStatusHeader"><p>Current Status</p></div>
                </div>
                <div className={`statItem grid grid-cols-7 ml-5 ${EuroBold.className}`}>
                    <div className="name col-span-2">
                        <p>Firstname Lastname</p>
                    </div>
                    <div className="attendanceStat grid grid-cols-3 col-span-4">
                        <div className="absences"><p>1</p></div>
                        <div className="tardy"><p>2</p></div>
                        <div className="nocall"><p>3</p></div>
                    </div>
                    <div className="currentStatus col-span-1">
                        COLOR
                    </div>
                </div>
                <div className={`statItem grid grid-cols-7 ml-5 ${EuroBold.className}`}>
                    <div className="name col-span-2">
                        <p>Firstname Lastname</p>
                    </div>
                    <div className="attendanceStat grid grid-cols-3 col-span-4">
                        <div className="absences"><p>1</p></div>
                        <div className="tardy"><p>2</p></div>
                        <div className="nocall"><p>3</p></div>
                    </div>
                    <div className="currentStatus col-span-1">
                        COLOR
                    </div>
                </div>
                <div className={`statItem grid grid-cols-7 ml-5 ${EuroBold.className}`}>
                    <div className="name col-span-2">
                        <p>Firstname Lastname</p>
                    </div>
                    <div className="attendanceStat grid grid-cols-3 col-span-4">
                        <div className="absences"><p>1</p></div>
                        <div className="tardy"><p>2</p></div>
                        <div className="nocall"><p>3</p></div>
                    </div>
                    <div className="currentStatus col-span-1">
                        COLOR
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatDisplay