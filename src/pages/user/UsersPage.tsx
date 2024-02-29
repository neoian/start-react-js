import React, {useEffect, useState} from 'react';
import {User} from "../../types/User";
import {fetchUserList} from "../../api/user-api";
import Users from "../../components/user/Users";

const UsersPage: React.FC = () => {
    // 사용자 목록 상태를 관리합니다. 초기 상태는 빈 배열입니다.
    const [users, setUsers] = useState<User[]>([]);

    // 컴포넌트가 마운트되었을 때 실행됩니다.
    useEffect(() => {
        // 비동기 함수를 정의하여 사용자 목록을 가져옵니다.
        const getUsers = async () => {
            try {
                // API 호출을 통해 사용자 목록을 가져옵니다.
                const userList = await fetchUserList();
                // 가져온 사용자 목록으로 상태를 업데이트합니다.
                setUsers(userList);
            } catch (error) {
                // 에러가 발생했을 경우 콘솔에 에러를 출력합니다.
                console.error('사용자 정보를 가져오는 중 오류가 발생했습니다.', error);
            }
        };

        // getUsers 함수를 호출합니다.
        getUsers();
    }, []); // 의존성 배열이 비어 있으므로, 컴포넌트가 마운트될 때 한 번만 실행됩니다.

    // 새로운 사용자를 추가하는 함수입니다.
    const addUser = (user: User) => {
        // 현재 사용자 목록에 새로운 사용자를 추가하여 상태를 업데이트합니다.
        setUsers([...users, user]);
    };

    // 사용자를 삭제하는 함수입니다.
    const deleteUser = (userId: number) => {
        // userId가 일치하지 않는 사용자만 필터링하여 상태를 업데이트합니다.
        setUsers(users.filter(user => user.id !== userId));
    };

    // UI 렌더링 부분입니다.
    return (
        <div>
            <h1>Users Page</h1>
            {/* Users 컴포넌트에 사용자 목록, 추가, 삭제 함수를 props로 전달합니다. */}
            <Users users={users} onAddUser={addUser} onDeleteUser={deleteUser} />
        </div>
    );
}

export default UsersPage;
