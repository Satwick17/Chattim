import React, { use, useEffect } from "react";
import { useChatStore } from "../../store/useChatStore";
import MessageInput from "./MessageInput";
import ChatHeader from "./ChatHeader";

const ChatContainer = () => {
  const {messages, getMessages, isMessagesLoading, selectedUser} = useChatStore();

  useEffect(()=>{
    getMessages(selectedUser?._id);
  }, [getMessages, selectedUser?._id])
  

  if(isMessagesLoading) return <div>Loading messages...</div>;
  return <div className="flex-1 flex flex-col overflow-auto">
    <ChatHeader/>

    <p>Message....</p>

    <MessageInput/>
  </div>;
};

export default ChatContainer;
