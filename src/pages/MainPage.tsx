import React from 'react';
import {Link} from "react-router-dom";

const MainPage: React.FC = () => {
    return (
        <div>
            <h1>Main Page</h1>
            <Link to="/users">사용자 목록 페이지 이동</Link>
        </div>
    );
}

export default MainPage;
