const ChatMessage = () => {
  const acc = false;
  return (
    <div className="w-full flex justify-end">
      <div>
        <p
          className={`text-[10px] md:text-xs text-[#00000033] ${
            acc ? "text-left" : "text-right"
          }`}
        >
          Assistant
        </p>
        <div
          className={`w-fit px-2.5 py-3  border ${
            acc
              ? "border-[#0000001A] bg-[#0000001A]"
              : "border-[#FFE1B21A] bg-[#FFE1B21A]"
          } rounded-xl shadow-xl`}
        >
          <p className="text-xs md:text-sm text-[#000000CC]">
            Hello, how can I help you?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
