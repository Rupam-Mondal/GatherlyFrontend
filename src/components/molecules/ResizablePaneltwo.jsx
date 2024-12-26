function ResizablePanelTwo({ name }) {
    return (
        <>
            <div className="w-full h-full flex flex-col justify-center items-center p-6 text-center rounded-lg shadow-lg">
                <h1 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4">
                    Welcome to {name} workspace
                </h1>
                <p className="text-md md:text-lg text-indigo-800">
                    Click any channels to start messaging
                </p>
            </div>
        </>
    );
}

export default ResizablePanelTwo;
