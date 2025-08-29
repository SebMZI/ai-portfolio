"use client";
import { useEffect, useState } from "react";
import ChatBar from "./_components/ChatBar";
import ChatMessage from "./_components/ChatMessage";
import Header from "./_components/Header";
import { socket } from "../socket";

interface ChatProp {
  from: string;
  to: string;
  message: string;
}

export default function Home() {
  const [messages, setMessages] = useState<ChatProp[]>([]);

  useEffect(() => {
    socket.on("chat message", (msg) => {
      console.log("Message received:", msg);
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("chat message");
    };
  }, []);

  return (
    <div className="w-full h-screen bg-[#FFFFFF33] px-2.5">
      <div className="w-full mx-auto flex flex-col h-full">
        <Header />

        <div className="max-w-[720px] mx-auto flex flex-col flex-1 py-5 gap-5 w-full min-h-0">
          <div className="w-full pt-5  shrink-0">
            <h1 className="text-5xl md:text-6xl">Welcome —</h1>
            <p className="text-xl md:text-2xl mt-3.5">
              I’m Sebastien’s AI assistant — ask me about his skills, projects,
              and experience.
            </p>
          </div>

          <div className="flex flex-col flex-1 min-h-0">
            <div className="flex-1 overflow-y-auto flex flex-col gap-3 px-2 py-6 md:py-10 ">
              {messages?.map((messageObject, i) => (
                <ChatMessage key={i} message={messageObject} />
              ))}
            </div>
            <div className="w-full text-center shrink-0 mt-4">
              <ChatBar setMessages={setMessages} />
              <p className="text-xs text-[#00000080] mt-2.5">
                AI can make mistakes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
