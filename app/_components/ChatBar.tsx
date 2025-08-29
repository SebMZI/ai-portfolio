"use client";
import Image from "next/image";
import { useState } from "react";
import { socket } from "../../socket";

interface ChatProp {
  from: string;
  to: string;
  message: string;
}

const ChatBar = ({
  setMessages,
}: {
  setMessages: React.Dispatch<React.SetStateAction<ChatProp[]>>;
}) => {
  const [chatValue, setChatValue] = useState("");

  const handleSendChat = () => {
    if (chatValue.length > 0) {
      const message = {
        from: "Recruiter",
        to: "Assistant",
        message: chatValue,
      };
      socket.emit("chat message", message);
      setMessages((prevMessages) => [...prevMessages, message]);
      setChatValue("");
    }
  };

  return (
    <div className="bg-[#FFFFFF1A] border border-[#FFFFFF1A] shadow-xl w-full  rounded-xl flex items-end gap-2 p-1.5">
      <textarea
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendChat();
          }
        }}
        value={chatValue}
        onChange={(e) => setChatValue(e.target.value)}
        placeholder="Type a message..."
        rows={1}
        className="bg-transparent flex-1 outline-none text-[10px] md:text-sm resize-none max-h-[400px] break-words overflow-y-auto text-black p-2 rounded-lg"
      />
      <button
        onClick={handleSendChat}
        className="bg-gradient-to-tl from-[#f3deff] via-[#ffead5] to-[#ffb3d1] h-[40px] w-[56px] md:w-[64px] grid place-content-center rounded-md cursor-pointer"
      >
        <Image
          src="/icon_white_send.png"
          alt="Send"
          width={24}
          height={24}
          className="w-[16px] h-[16px] md:w-[24px] md:h-[24px]"
        />
      </button>
    </div>
  );
};

export default ChatBar;
