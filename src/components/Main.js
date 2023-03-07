import {Route, Routes} from "react-router";
import Home from "../pages/Home";
import Join from "../pages/Join";
import Login from "../pages/Login";
import Board from "../pages/Board";
import Myinfo from "../pages/Myinfo";
import NoPath from "../pages/NoPath";
import Write from "../pages/Write";
import List from "../pages/List";

const Main = () => {
    return (
        <div className="main">
            <Routes>
                <Route path='' element={<Home />} />
                <Route path='/join' element={<Join />} />
                <Route path='/login' element={<Login />} />
                <Route path='/board' element={<Board />} />
                <Route path='/myinfo' element={<Myinfo />} />
                <Route path='/write' element={<Write />} />
                <Route path='/list' element={<List />} />

                <Route path='/*' element={<NoPath />} />
            </Routes>
        </div>
    );
}

export default Main;