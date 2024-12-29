import MessageRenderer from "@/components/atoms/MessageRenderer/MessageRenderer";
import React from "react";

function Message({ data }) {
    const { body, createdAt, senderId } = data;

    return (
        <div className="flex items-start space-x-2 my-1">
            {/* Avatar */}
            <img
                src={senderId.avatar}
                alt={senderId.username}
                className="w-8 h-8 rounded-full object-cover"
            />

            {/* Message Details */}
            <div>
                <h4 className="text-xs font-medium text-gray-800">{senderId.username}</h4>
                <div className="bg-gray-100 text-gray-800 px-3 rounded-md max-w-sm">
                    <p className="text-sm">
                        <MessageRenderer value={body} />
                    </p>
                </div>
                <span className="text-[10px] text-gray-500 mt-0.5 block">
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
