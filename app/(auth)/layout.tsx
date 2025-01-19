import React, {ReactNode} from 'react'
import Image from "next/image";

const AuthLayout = ({ children }: { children: ReactNode}) => {
    return (
        <main className="relative flex gap-12">
            <section className="my-auto flex h-full min-h-screen flex-1 items-center bg-white-400 bg-cover bg-top bg-dark-100 px-5 py-10">
                <div className="gradient-vertical mx-auto flex max-w-xl flex-col gap-6 rounded-lg p-10">
                    <div className="flex flex-row gap-3">
                        {/*    Logo will go here*/}
                        <h1 className="text-2xl font-semibold text-white">Saiql</h1>
                    </div>

                    <div>{ children }</div>
                </div>
            </section>

            <section className="sticky h-40 w-full sm:top-0 sm:h-screen sm:flex-1">
                <Image src="/bike-images/cycle-a-number.jpg" alt="illustration image" height={1000} width={1000} className="size-full object-cover" />
            </section>
        </main>
    )
}
export default AuthLayout
