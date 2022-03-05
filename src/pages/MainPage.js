import Header from "../components/Header";
import ConvertPage from "./ConvertPage";
import "./MainPage.css";
import ConvertPage2 from "../components/custom/ConvertPage2";

function MainPage() {
    return (<div className={"main"}>
        <Header/>
        <ConvertPage2/>
    </div>)
}

export default MainPage;