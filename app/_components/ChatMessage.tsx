interface ChatProp {
  from: string;
  to: string;
  message: string;
}

const ChatMessage = ({
  message,
  isTyping = false,
}: {
  message: ChatProp;
  isTyping?: boolean;
}) => {
  return (
    <div
      className={`w-full flex ${
        message.from === "Recruiter" ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={` flex flex-col ${
          message.from === "Recruiter" ? "items-end" : "items-start"
        }`}
      >
        <p className={`text-[10px] md:text-xs text-[#00000033] mb-1`}>
          {message.from}
        </p>
        <div
          className={`w-fit px-2.5 py-3  border ${
            message.from === "Assistant"
              ? "border-[#0000001A] bg-[#0000001A]"
              : "border-[#FFE1B21A] bg-[#FFE1B21A]"
          } rounded-xl shadow-xl`}
        >
          {isTyping ? (
            message?.message.split("").map((char, index) => (
              <span
                key={index}
                className={`dot text-base inline-block animate-dots`}
              >
                {char}
              </span>
            ))
          ) : (
            <p className={`text-xs md:text-sm text-[#000000CC] `}>
              {message.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
