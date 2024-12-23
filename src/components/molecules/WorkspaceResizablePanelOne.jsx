function ResizablePanelOne({ data }) {
    return (
        <div className="w-full max-w-lg mx-auto overflow-auto">
            {/* Header Section */}
            <div className="w-full h-16 flex justify-start items-center px-6 cursor-pointer  bg-indigo-400">
                <div className="flex items-center justify-center bg-indigo-500 w-12 h-12 text-white font-bold text-xl rounded-full">
                    {data?.data?.name?.charAt(0) || "?"}
                </div>
                <div className="ml-4 text-lg font-semibold text-gray-800">
                    {data?.data?.name || "Unknown"}
                </div>
            </div>

            {/* Content Section */}
            <div className="py-4 w-full px-4 box-border">
                <div className="text-center text-xl font-semibold text-indigo-600 mb-4">
                    Channels
                </div>
                {data?.data?.channels?.length > 0 ? (
                    <ul className="space-y-2">
                        {data.data.channels.map((channel, index) => (
                            <li
                                key={index}
                                className="px-4 py-2 cursor-pointer bg-gray-100 rounded-lg shadow-sm hover:bg-indigo-50 transition flex items-center"
                            >
                                <span className="font-semibold text-gray-800 hover:text-indigo-600 transition text-lg">
                                    # {channel.name}
                                </span>
                            </li>
                        ))}

                    </ul>
                ) : (
                    <div className="text-center text-gray-500">
                        No channels available
                    </div>
                )}
            </div>

            <div className=""></div>
        </div>
    );
}

export default ResizablePanelOne;
