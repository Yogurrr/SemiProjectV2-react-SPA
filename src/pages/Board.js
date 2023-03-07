import React from "react";
import './Board.css';
import {NavLink} from "react-router-dom";

const Board = () => {
    return (
        <div>
            <h3>게시판 본문글</h3>
            <div className="view">
                <div><label>제&nbsp;&nbsp;&nbsp;목</label>
                    <span>시간은 금이라구, 친구!! 진짜라구, 친구!!
                    정말이라구, 친구!!</span></div>

                <div><label>작성자</label>
                    <span>yogurrr</span></div>

                <div><label>작성일</label>
                    <span>2023-01-11 09:44:05 (777)</span></div>

                <div><label className="dragup">본&nbsp;&nbsp;&nbsp;문</label>
                    <span className="contents">
                    시간은 금이라구, 친구!! 진짜라구, 친구!! 정말이라구, 친구!!
                    시간은 금이라구, 친구!! 진짜라구, 친구!! 정말이라구, 친구!!
                    시간은 금이라구, 친구!! 진짜라구, 친구!! 정말이라구, 친구!!
                    시간은 금이라구, 친구!! 진짜라구, 친구!! 정말이라구, 친구!!
                    시간은 금이라구, 친구!! 진짜라구, 친구!! 정말이라구, 친구!!
                    시간은 금이라구, 친구!! 진짜라구, 친구!! 정말이라구, 친구!!
                    시간은 금이라구, 친구!! 진짜라구, 친구!! 정말이라구, 친구!!
                    시간은 금이라구, 친구!! 진짜라구, 친구!! 정말이라구, 친구!!
                </span></div>

                <div><label></label>
                    <button type="button"><NavLink to='/write'>새글쓰기</NavLink>
                    </button>
                    <button type="button"><NavLink to='/list'>목록으로</NavLink></button>
                    <button type="button">수정하기</button>
                    <button type="button">삭제하기</button>
                </div>
            </div>
        </div>
    )
}

export default Board;