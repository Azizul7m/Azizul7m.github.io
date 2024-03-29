import Link from "next/link";
import { buttonVariants } from "./ui/Button";
import { getServerSession } from 'next-auth'
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";
import Dropdwon from "./ui/Dropdwon";

const Navbar = async () => {
    const session = await getServerSession();
    return (
        <nav className="fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900/75 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between">
            <div className="container max-w-7xl mx-auto w-full flex justify-between items-center">
                <Link href='/' className={buttonVariants({ variant: 'link' })} >
                    AZIZUL7M
                </Link>
                <Dropdwon />
                <div className="md:hidden">
                    {/* <ThemeToggle /> */}
                    <Link
                        href='/documentation'
                        className={buttonVariants({ variant: "ghost" })}
                    >
                        Dashboard
                    </Link>
                    {
                        session ? (
                            <>
                                <Link
                                    href='/dashboard'
                                    className={buttonVariants({ variant: "ghost" })}
                                >
                                    Dashboard
                                </Link>
                                <SignOutButton />
                            </>
                        ) : (
                            <SignInButton />
                        )}
                </div>
            </div>
        </nav>
    )
}
export default Navbar;
