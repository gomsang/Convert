import Header from "../components/Header";
import ConvertPage from "./ConvertPage";
import "../pages/MainPage.css";
import {getRegionsInKind, getSizeName} from "../utils/size/Size";

function MainPage() {
    console.log(getSizeName("shoes", "ko", 3))
    return (<div className={"main"}>
        <Header/>
        <ConvertPage/>
    </div>)
}

export default MainPage;