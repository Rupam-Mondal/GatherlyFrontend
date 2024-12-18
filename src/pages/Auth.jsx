import SignUpCard from "@/components/organisms/SingnUpcard";

function Auth({children}){
    return (
        <>
            <div className="h-[100vh] flex items-center justify-center bg-[#5765F2]">
                <div className="h-auto w-[420px]">
                    {children}
                </div>
            </div>
        </>
    )
}

export default Auth;