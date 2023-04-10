"use client"
import { signOut } from "next-auth/react";
import { useState } from "react";
import { Button } from "./ui/Button";


const SignOutButton = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const signUserOut = async () => {
        try {
            setIsLoading(true)
            await signOut();
        } catch (err) {
            /* toast({
*     title: 'Error sign out',
*     message: 'Please try again later',
*     type: 'error'
* }) */
            console.log(err)
        }
    }

    return (
        <Button onClick={signUserOut} isLoading={isLoading}>
            Sign out
        </Button>
    )
};

export default SignOutButton;
