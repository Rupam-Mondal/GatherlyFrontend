import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { useNavigate } from "react-router-dom";
import useSignIn from "@/hooks/apiHooks/useSignin";
import { LucideLoader2, TriangleAlert } from "lucide-react";

function SignInCard() {
    const [signUpform, setSignUpForm] = useState({
        email: "",
        username: "",
        password: "",
    });
    const navigate = useNavigate();
    const [validationError, setValidationError] = useState(null);
    const { isPending, isSuccess, error, mutateAsync: Signinmutation } = useSignIn();
    async function handleSubmit(e) {
        e.preventDefault();
        if (!signUpform.email || !signUpform.username || !signUpform.password) {
            setValidationError({ message: "All fields are required" });
            return;
        }
        await Signinmutation({
            email: signUpform.email,
            username: signUpform.username,
            password: signUpform.password
        })
    }
    useEffect(() => {
        if(isSuccess){
            navigate('/home');
        }
    } , [isSuccess , navigate])
    return (
        <>
            <Card className="w-full h-full bg-gradient-to-b from-gray-800 to-gray-900 shadow-xl text-white rounded-md">
                <CardHeader className="w-full flex flex-col items-center">
                    <CardTitle className="text-2xl font-semibold">
                        Login to your account
                    </CardTitle>
                    <CardDescription className="mt-2 text-gray-400">
                        Join Gatherly and connect with ease
                    </CardDescription>
                    {
                        validationError && (
                            <div className='bg-destructive/15 p-4 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6'>
                                <TriangleAlert className='size-5' />
                                <p>{validationError?.message}</p>
                            </div>
                        )
                    }
                    {
                        error && (
                            <div className='bg-destructive/15 p-4 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6'>
                                <TriangleAlert className='size-5' />
                                <p>{error?.message}</p>
                            </div>
                        )
                    }
                    {
                        isPending && (
                            <div className="bg-zinc-600 rounded-lg p-2 flex items-center justify-center text-white text-sm">
                                <p>Sign up may take longer than usual due to a slow connection.</p>
                                <LucideLoader2 className="animate-spin" />
                            </div>
                        )
                    }
                    {
                        isSuccess && (
                            <div className="bg-zinc-600 rounded-lg p-2 flex items-center justify-center text-white text-sm">
                                <p>Successfully signed up. You will be redirected to the home page in a few seconds.</p>
                                <LucideLoader2 className="animate-spin" />
                            </div>
                        )
                    }
                </CardHeader>

                <CardContent>
                    <form>
                        <div className="w-full flex flex-col space-y-4 mt-4">
                            <Input
                                type="email"
                                placeholder="Enter your email (e.g., john@example.com)"
                                className="p-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-500"
                                required
                                onChange={(e) => setSignUpForm({ ...signUpform, email: e.target.value })}
                            />
                            <Input
                                placeholder="Enter your username"
                                className="p-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-500"
                                required
                                onChange={(e) => setSignUpForm({ ...signUpform, username: e.target.value })}
                            />
                            <Input
                                type="password"
                                placeholder="enter your password"
                                className="p-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-500"
                                required
                                onChange={(e) => setSignUpForm({ ...signUpform, password: e.target.value })}
                            />
                        </div>
                    </form>

                    <p className="cursor-pointer">Don't have account ?{" "}<span className="text-blue-500 hover:underline" onClick={() => {
                        navigate('/auth/signup')
                    }}>Sign up</span></p>
                </CardContent>
                <CardFooter className="w-full flex items-center justify-center">
                    <Button variant={"secondary"} onClick={handleSubmit}>Signin</Button>
                </CardFooter>
            </Card>
        </>
    );
}

export default SignInCard;
