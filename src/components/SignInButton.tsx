"use client"
import { signIn } from "next-auth/react";
import { useState } from "react";
import { Button } from "./ui/Button";


const SignInButton = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const signInWithGoogle = async () => {
        try {
            setIsLoading(true)
            await signIn('google')
        } catch (err) {
            /* toast({
*     title: 'Error signin in',
*     message: 'Please try again later',
*     type: 'error'
* }) */
            console.log(err)
        }
    }
    return (
        <Button onClick={signInWithGoogle} isLoading={isLoading}>
            Sign in
        </Button>
    )
};

export default SignInButton;
