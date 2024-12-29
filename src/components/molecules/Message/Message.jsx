import MessageRenderer from "@/components/atoms/MessageRenderer/MessageRenderer";
import React from "react";

function Message({ data }) {
    const { body, createdAt, senderId } = data;

    return (
        <div className="flex items-start space-x-3 my-2">
            {/* Avatar */}
            <img
                src={senderId.avatar}
                alt={senderId.username}
                className="w-10 h-10 rounded-full object-cover"
            />

            {/* Message Details */}
            <div>
                <h4 className="text-sm font-semibold text-gray-800">{senderId.username}</h4>
                <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg max-w-md">
                    <p className="text-sm">
                        <MessageRenderer value={body} />
                    </p>
                </div>
                <span className="text-xs text-gray-500 mt-1 block">
                    {new Date(createdAt).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                    })}
                </span>
            </div>
        </div>
    );
}

export default Message;
