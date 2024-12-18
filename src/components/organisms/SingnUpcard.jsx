import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";

function SignUpCard() {
    const [signUpform , setSignUpForm] = useState({
        email:"",
        username:"",
        password:"",
        confirmpassword:""
    })
    function handleSubmit(e){
        console.log("Hello")
    }
    return (
        <>
            <Card className="w-full h-full bg-gradient-to-b from-gray-800 to-gray-900 shadow-xl text-white rounded-md">
                <CardHeader className="w-full flex flex-col items-center">
                    <CardTitle className="text-2xl font-semibold">
                        Create Your Account
                    </CardTitle>
                    <CardDescription className="mt-2 text-gray-400">
                        Join Gatherly and connect with ease
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form>
                        <div className="w-full flex flex-col space-y-4 mt-4">
                            <Input
                                type="email"
                                placeholder="Enter your email (e.g., john@example.com)"
                                className="p-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-500"
                                required
                                onChange={(e) => setSignUpForm({...signUpform , email:e.target.value})}
                            />
                            <Input
                                placeholder="Pick a unique username"
                                className="p-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-500"
                                required
                                onChange={(e) => setSignUpForm({ ...signUpform, username: e.target.value })}
                            />
                            <Input
                                type="password"
                                placeholder="Create a strong password"
                                className="p-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-500"
                                required
                                onChange={(e) => setSignUpForm({ ...signUpform, password: e.target.value })}
                            />
                            <Input
                                type="password"
                                placeholder="Confirm your password"
                                className="p-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-500"
                                required
                                onChange={(e) => setSignUpForm({ ...signUpform, confirmpassword: e.target.value })}
                            />
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="w-full flex items-center justify-center">
                    <Button variant={"secondary"} onClick={handleSubmit}>Signup</Button>
                </CardFooter>
            </Card>
        </>
    );
}

export default SignUpCard;
