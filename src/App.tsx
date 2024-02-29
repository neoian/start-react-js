import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import UsersPage from "./pages/user/UsersPage";

// App 컴포넌트를 정의합니다. 이 컴포넌트는 앱의 루트 컴포넌트 역할을 합니다.
const App: React.FC = () => {
    // Router 컴포넌트를 사용하여 라우팅을 설정합니다.
    return (
        // BrowserRouter 컴포넌트는 HTML5의 history API를 사용하여 UI와 URL을 동기화합니다.
        <Router>
            {/* Routes 컴포넌트는 Route 컴포넌트들의 컨테이너 역할을 하며, 현재 경로에 맞는 컴포넌트를 렌더링합니다. */}
            <Routes>
                {/* Route 컴포넌트는 특정 경로에 대해 렌더링할 컴포넌트를 지정합니다. */}
                {/* "/" 경로에 대해 MainPage 컴포넌트를 렌더링합니다. */}
                <Route path="/" element={<MainPage />} />
                {/* "/users" 경로에 대해 UsersPage 컴포넌트를 렌더링합니다. */}
                <Route path="/users" element={<UsersPage />} />
            </Routes>
        </Router>
    );
}

// App 컴포넌트를 내보내어 다른 곳에서 사용할 수 있게 합니다.
export default App;
