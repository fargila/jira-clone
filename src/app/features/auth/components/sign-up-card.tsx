import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { DottedSeparator } from "@/components/dotted-separator"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export const SignUpCard = () => {
    return (
        <Card className="w-full h-full md:w-[487px] border-none shadow-none">
            <CardHeader className="flex items-center justify-center text-center p-7">
                <CardTitle className="text-2xl">Sign Up, lil  bro.</CardTitle>
            </CardHeader>
            
            <CardDescription className="flex items-center justify-center mb-4">
                By signing up, you agree to our
                <Link href="/privacy" className="text-blue-700 hover:text-blue-400 mx-1">
                <span>Privacy Policy</span></Link>
                and{" "}
                <Link href="/terms" className="text-blue-700 hover:text-blue-400 ml-1">
                <span>Terms of Service</span></Link>
            </CardDescription>
            
            <div className="px-7 mb-2"><DottedSeparator/></div>

            <CardContent className="p-7">
                <form className="space-y-4">
                    <Input 
                    required 
                    type="text"
                    value={""}
                    onChange={()=> {}}
                    placeholder="Enter your username"
                    disabled={false}/>

                    <Input 
                    required 
                    type="email"
                    value={""}
                    onChange={()=> {}}
                    placeholder="Enter your email address"
                    disabled={false}/>
                    
                    <Input 
                    required 
                    type="password"
                    value={""}
                    onChange={()=> {}}
                    placeholder="Enter a password"
                    disabled={false}
                    min={8}
                    max={256}/>

                    <Button disabled={false} size="lg" className="w-full">Login</Button>
                </form>
            </CardContent>
            
            <div className="px-7"><DottedSeparator/></div>

            <CardContent className="p-7 flex flex-col gap-y-4">
                <Button variant="secondary" size="lg" disabled={false} 
                className="w-full">
                    <FcGoogle className="mr-2 size-5"/>
                    Login with Google
                </Button>

                 <Button variant="secondary" size="lg" disabled={false} 
                className="w-full">
                    <FaGithub className="mr-2 size-5"/>
                    Login with Github
                </Button>
            </CardContent>
        </Card>
    )
}

