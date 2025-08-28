"use client";
import Image from "next/image";
import { useState } from "react";

const ChatBar = () => {
  const [chatInput, setChatInput] = useState("");

  const handleSendChat = () => {
    console.log(chatInput);
    setChatInput("");
  };

  return (
    <div className="bg-[#FFFFFF1A] border border-[#FFFFFF1A] shadow-xl w-full  rounded-xl flex items-end gap-2 p-1.5">
      <textarea
        value={chatInput}
        onChange={(e) => setChatInput(e.target.value)}
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
