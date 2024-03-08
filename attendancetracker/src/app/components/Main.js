import InputAbsent from "./InputAbsent"
import StatDisplay from "./StatDisplay"

function Main() {
    //STORE DATA IN USESTATE



    return(
        <div className="container">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <InputAbsent />
                </div>
                <div>
                    <StatDisplay />
                </div>
            </div>
        </div>
    )
}


export default Main