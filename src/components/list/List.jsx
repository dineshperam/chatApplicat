import React from 'react'
import "./list.css"
import UserInfo from "./userInfo/UserInfo.jsx";
import ChatList from "./chatList/ChatList.jsx";

const List = () => {
    return (
        <div className="list">
            <UserInfo></UserInfo>
            <ChatList></ChatList>
        </div>
    )
}
export default List
