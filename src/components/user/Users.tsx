import React from "react";
import {User} from "../../types/User";

// Users 컴포넌트의 props 타입을 정의합니다. 사용자 목록, 사용자 추가 함수, 사용자 삭제 함수를 포함합니다.
interface UsersProp {
    users: User[];
    onAddUser: (user: User) => void; // 사용자 추가 함수
    onDeleteUser: (userId: number) => void; // 사용자 삭제 함수
}

// Users 컴포넌트 정의. props는 위에서 정의한 UsersProp 타입을 따릅니다.
const Users: React.FC<UsersProp> = props => {
    // 구조 분해 할당을 통해 props에서 필요한 값들을 추출합니다.
    const { users, onAddUser, onDeleteUser } = props;

    // 새 사용자를 추가하는 핸들러 함수입니다.
    const handleAddUser = () => {
        // 새 사용자 객체를 생성합니다. id는 현재 시각의 타임스탬프를 사용합니다.
        const newUser = { id: Date.now(), name: "새 사용자" + Date.now(), email: "newuser@domain.com" };
        // onAddUser 함수를 호출하여 새 사용자를 추가합니다.
        onAddUser(newUser);
    };

    // 컴포넌트의 UI를 렌더링합니다.
    return (
        <div>
            {/* 사용자 추가 버튼. 클릭 시 handleAddUser 함수를 호출합니다. */}
            <button onClick={handleAddUser}>사용자 추가</button>
            <ul>
                {/* props로 받은 사용자 목록을 순회하며 각 사용자 정보를 리스트 항목으로 렌더링합니다. */}
                {users.map((user) => (
                    <li key={user.id}>
                        {/* 사용자 이름과 이메일을 표시합니다. */}
                        {user.name} ({user.email})
                        {/* 사용자 삭제 버튼. 클릭 시 해당 사용자의 onDeleteUser 함수를 호출합니다. */}
                        <button onClick={() => onDeleteUser(user.id)}>삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// Users 컴포넌트를 내보냅니다.
export default Users;
