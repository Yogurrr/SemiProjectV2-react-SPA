import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <ul className="nav">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/join">회원가입</NavLink></li>
            <li><NavLink to="/login">로그인</NavLink></li>
            <li><NavLink to="/list">게시판</NavLink></li>
            <li><NavLink to="/myinfo">회원정보</NavLink></li>
        </ul>
    );
}

export default Nav;