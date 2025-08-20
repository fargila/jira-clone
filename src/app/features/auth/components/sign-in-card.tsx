import { z } from "zod"
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { DottedSeparator } from "@/components/dotted-separator"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema } from "../schemas"
import Link from "next/link"

export const SignInCard = () => {
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const onSubmit = (values: z.infer<typeof loginSchema>) => {
        console.log({ values })
    }

    return (
        <Card className="w-full h-full md:w-[487px] border-none shadow-none">
            <CardHeader className="flex items-center justify-center text-center p-7">
                <CardTitle className="text-2xl">Login, lil  bro.</CardTitle>
            </CardHeader>
            
            <div className="px-7 mb-2"><DottedSeparator/></div>

            <CardContent className="p-7">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField 
                        name="email"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input 
                                    type="email"
                                    placeholder="Enter your email"
                                    {...field}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}/>
                        
                        <FormField 
                        name="password"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input 
                                    type="password"
                                    placeholder="Enter your password"
                                    {...field}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}/>

                        <Button disabled={false} size="lg" className="w-full">Login</Button>
                    </form>
                </Form>
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
            
            <div><DottedSeparator/></div>

            <CardContent className="p-7 flex items-center justify-center">
                <p>
                    <Link href="/sign-up">
                        <span className="text-blue-700 hover:text-blue-400">Sign Up</span>
                    </Link>
                    &nbsp;if you&apos;re not affiliated with us.
                </p>
            </CardContent>
        </Card>
    )
}

