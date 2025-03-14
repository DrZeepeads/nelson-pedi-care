import { useState } from 'react';

const ChatInput = ({ onSendMessage }) => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim()) {
            onSendMessage(message);
            setMessage('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 p-4 border-t">
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 p-2 border rounded"
                placeholder="Type your message..."
            />
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                Send
            </button>
        </form>
    );
};

export default ChatInput;
