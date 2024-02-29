import {User} from "../types/User";

export const fetchUserList = async (): Promise<User[]> => {
    // 실제 API 호출을 흉내내기 위해 비동기 처리
    return new Promise((resolve) => {
        setTimeout(() => {

            // fake data
            const users = [
                { id: 1, name: '홍길동', email: 'hong@domain.com' },
                { id: 2, name: '김철수', email: 'kim@domain.com' },
                { id: 3, name: '이영희', email: 'lee@domain.com' },
            ];

            resolve(users);
        }, 1000); // 1초 후에 가짜 사용자 데이터 반환
    });
};
