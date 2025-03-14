const ChatMessages = ({ messages }) => {
    return (
        <div className="flex flex-col p-4 space-y-2">
            {messages.map((msg, index) => (
                <div key={index} className={`p-2 rounded ${msg.sender === 'user' ? 'bg-blue-200 self-end' : 'bg-gray-200 self-start'}`}>
                    {msg.text}
                </div>
            ))}
        </div>
    );
};

export default ChatMessages;
