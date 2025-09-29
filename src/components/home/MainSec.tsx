import Image from "next/image";
import TextType from "../reactBits/TextTypeBits";
import { getCurrentLocale } from "@/src/lib/getCurrentLocale";
import getTrans from "@/src/lib/translation";
import CvAndProjects from "./clientComponents/CvAndProjects";

const MainSec = async () => {
    const locale = await getCurrentLocale();
    const translations = await getTrans(locale);
    return (
        <main className="container section-gap" id="home">
            <div className="flex md:justify-center flex-col md:flex-row items-center gap-10">
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

                    <CvAndProjects translations={translations} />
                </div>
                <div className="order-1 md:order-2">
                    <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[500px]  lg:h-[500px] mx-auto">
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