import TargetInput from "../components/TargetInput";
import SizeTable from "../components/SizeTable";
import {useEffect, useState} from "react";

function ConvertPage() {
    const [showTable, setShowTable] = useState(false);
    // 테이블을 보여줄지 말지 정하는 state

    useEffect(() => {})

    const findTable = () => {
        const a = window.document.getElementById("contents");
        setShowTable(!showTable)
        if (!showTable){
            a.style.display = "none";
        }else{
            a.style.display = "Table";
        }
    } //테이블을 보여줄지 말지 작동하는 함수

    return <div>
        <TargetInput/>
        <SizeTable/>
        <button onClick={() => {
            findTable()
        }}>{showTable?"볼래":"안 볼래"}
        </button>
    </div>
}

export default ConvertPage;