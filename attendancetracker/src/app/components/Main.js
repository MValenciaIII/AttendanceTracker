import InputAbsent from "./InputAbsent"
import StatDisplay from "./StatDisplay"

function Main() {
    //STORE DATA IN USESTATE



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