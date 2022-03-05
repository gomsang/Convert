import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "../components/Header";

export default function MainRouter() {
    return <div>
        <Header/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<div/>}/>
            </Routes>
        </BrowserRouter>
    </div>;
}