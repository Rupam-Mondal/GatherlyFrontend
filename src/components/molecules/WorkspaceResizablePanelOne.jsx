function ResizablePanelOne({ data }) {
    return (
        <>
            <div className="w-full h-14 flex justify-center items-center cursor-pointer border-b-[1px] border-gray-400">
                <div className="flex items-center justify-center bg-indigo-500 w-12 h-12 text-white font-bold text-xl rounded-full mr-4">
                    {data?.data?.name?.charAt(0)}
                </div>
                <div className="text-xl text-white font-bold">
                    {data?.data?.name || "Unknown"}
                </div>
            </div>
        </>
    );
}

export default ResizablePanelOne;
