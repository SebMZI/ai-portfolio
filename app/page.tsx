import ChatBar from "./_components/ChatBar";

export default function Home() {
  return (
    <div className="w-full h-screen bg-[#FFFFFF33]">
      <div className="max-w-[1280px] w-full m-auto flex flex-col items-center justify-center p-2.5">
        <ChatBar />
        <p className="text-xs text-[#00000080] py-4">AI can make mistakes</p>
      </div>
    </div>
  );
}
