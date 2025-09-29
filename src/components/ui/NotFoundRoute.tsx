'use client';

import { usePathname } from 'next/navigation';
import LottieHandler from './LottieHandler';
import { buttonVariants } from './button';
import Link from 'next/link';

const NotFoundRoute = () => {
    const pathname = usePathname();

    return (
        <section className='flex items-center h-screen'>
            <div className='container flex flex-col justify-center items-center gap-4 capitalize'>
                <LottieHandler lottieType='ErrorLottie' />
                <h1 className='text-2xl md:text-3xl'>this page is not found!</h1>
                <p>Oops! The page you are looking for does not exist.</p>
                <div className='flex gap-4'>
                    <Link href={pathname} className={`${buttonVariants({ variant: 'outline', size: "lg" })}`} >Refresh</Link>
                    <Link href={"/"} className={`${buttonVariants({ size: "lg" })}`} >Home</Link>
                </div>
            </div>
        </section>
    )
}

export default NotFoundRoute