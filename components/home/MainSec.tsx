"use client";

import Image from "next/image";
import TextType from "../reactBits/TextTypeBits";
import { buttonVariants } from "../ui/button";
import { TTranslations } from "@/types/translations";

const MainSec = ({ translations }: { translations: TTranslations }) => {
    return (
        <main className="min-h-screen" id="home">
            <div className="container pt-8 md:pt-14 flex md:justify-center flex-col md:flex-row items-center gap-10">
                <div className="flex flex-col gap-5 max-w-[500px] order-2 md:order-1">
                    <div>
                        <h2 className="text-xl opacity-70 font-bold">{translations.mainHomeSec.welcome}</h2>
                        <TextType
                            text={[translations.mainHomeSec.myName, translations.mainHomeSec.myJob]}
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="|"
                            className="text-3xl font-bold text-primary"
                            textColors={["text-primary", "text-secondary", "text-tertiary"]}
                        />
                    </div>

                    <p className="opacity-70">{translations.mainHomeSec.desc}</p>

                    <div className="flex items-center gap-3">
                        <a href="https://drive.google.com/file/d/1SuqgBWIVr0LtM4PxNGpECTE47l30o_GZ/view?usp=sharing" target="_blank" className={buttonVariants({ variant: "outline", size: "lg" })} title="View CV">{translations.mainHomeSec.cv}</a>
                        <a href="#projects" className={buttonVariants({ variant: "default", size: "lg" })} title="View Projects">{translations.mainHomeSec.projects}</a>
                    </div>
                </div>
                <div className="order-1 md:order-2">
                    <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px]  lg:h-[500px] mx-auto">
                        <Image
                            src={"/assets/kero.jpg"}
                            alt="Kero Image"
                            fill
                            className="object-cover object-center rounded-2xl overflow-hidden border-2 border-white/50"
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MainSec