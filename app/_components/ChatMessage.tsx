const ChatMessage = () => {
  return (
    <div className="">
      <p className="text-[10px] md:text-xs text-[#00000033]">Assistant</p>
      <div className="w-fit px-2.5 py-3 bg-[#0000001A] border border-[#0000001A] rounded-xl shadow-xl">
        <p className="text-xs md:text-sm text-[#000000CC]">
          Hello, how can I help you?
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;
