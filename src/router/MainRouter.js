import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "../ui/components/Header";
import ConvertPage from "../ui/pages/ConvertPage";
import "./MainRouter.css"

export default function MainRouter() {
    return <div className={"web"}>
        <Header/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ConvertPage/>}/>
            </Routes>
        </BrowserRouter>
    </div>;
}