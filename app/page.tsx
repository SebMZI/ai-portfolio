import ChatBar from "./_components/ChatBar";
import Header from "./_components/Header";

export default function Home() {
  return (
    <div className="w-full h-screen bg-[#FFFFFF33] px-2.5 py-5">
      <div className="w-full mx-auto flex flex-col h-full">
        <Header />

        <div className="max-w-[720px] mx-auto flex flex-col flex-1 justify-between py-5 gap-5">
          <div className="w-full flex flex-col justify-center pt-14 md:pt-30">
            <h1 className="text-5xl md:text-6xl">Welcome —</h1>
            <p className="text-xl md:text-2xl mt-3.5">
              I’m Sebastien’s AI assistant — ask me about his skills, projects,
              and experience.
            </p>
          </div>
          <div></div>

          <div className="w-full text-center">
            <ChatBar />
            <p className="text-xs text-[#00000080] mt-2.5">
              AI can make mistakes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
