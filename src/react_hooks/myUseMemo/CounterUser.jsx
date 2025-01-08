import React, { useState, useRef, useMemo } from "react";
import CreateUser from "./CreateUser";
import UserList from "./User";

//활성 사용자 수를 계산하는 함수
const countActiveUsers = (users) => {
  console.log("활성 사용자수 counting...");
  return users.filter((user) => user.active).length;
};

/**
 * 활성화된 사용자 개수를 구해서 화면에 보여줄겁니다.
 */
const CounterUser = () => {
  //기본 데이터 셋팅
  const [totalUsers, setTotalUsers] = useState([
    {
      id: 1,
      username: "user1",
      email: "user1@gmail.com",
      active: true, //active가 true이면 활성화된 유저
    },
    {
      id: 2,
      username: "user2",
      email: "user2@gmail.com",
      active: false, //active가 false이면 비활성화 유저
    },
    {
      id: 3,
      username: "user3",
      email: "user3@gmail.com",
      active: true,
    },
  ]);

  const [inputs, setInputs] = useState({
    ussername: "",
    email: "",
  });

  const nextId = useRef(4);

  const { username, email } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onCreate = () => {
    console.log("oncreate 호출");

    const user = {
      id: nextId.current,
      username,
      email,
    };

    setTotalUsers(totalUsers.concat(user)); //생성한 user 추가

    setInputs({
      //input값 초기화
      username: "",
      email: "",
    });

    nextId.current += 1; //id 증가
  };

  const onRemove = (id) => {
    console.log("onRemove 호출");
    setTotalUsers(totalUsers.filter((user) => user.id !== id));
  };

  const onToggle = (id) => {
    console.log("onToggle 호출");
    setTotalUsers(
      totalUsers.map(
        (user) => (user.id === id ? { ...user, active: !user.active } : user) //user id같으면 active 필드값만 변경해서 setUsers 진행
      )
    );
  };

  //활성 사용자수를 저장
  // const count = countActiveUsers(totalUsers);
  const count = useMemo(
    () => countActiveUsers(totalUsers),
     [totalUsers]);

  return (
    <div>
      <CreateUser
        email={email}
        onChange={onChange}
        onCreate={onCreate}
        username={username}
      />
      <UserList users={totalUsers} onRemove={onRemove} onToggle={onToggle} />
      <div>활성사용자 수 : {count}</div>
    </div>
  );
};

export default CounterUser;
