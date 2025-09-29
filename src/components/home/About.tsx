import TitleSec from "../ui/TitleSec"
import { getCurrentLocale } from "@/src/lib/getCurrentLocale"
import getTrans from "@/src/lib/translation";
import { BookOpenCheck } from "lucide-react";

const About = async () => {
    const locale = await getCurrentLocale();
    const {aboutSec} = await getTrans(locale);

    return (
        <section className="bg-muted-foreground/20 section-inner-gap">
            <div id="about" className="container">
                <TitleSec title={aboutSec.title} />
                <div className="flex flex-col md:flex-row gap-10">
                    <div className="flex flex-col gap-3 grow">
                        <h3 className="font-bold text-2xl">{aboutSec.whoIam.title}</h3>
                        <div className="opacity-70 flex flex-col gap-4">
                            <p>{aboutSec.whoIam.descOne}</p>
                            <p>{aboutSec.whoIam.descTwo}</p>
                            <p>{aboutSec.whoIam.descThree}</p>
                            <p>{aboutSec.whoIam.descFour}</p>
                            <p>{aboutSec.whoIam.descFive}</p>
                        </div>
                    </div>

                    <div className="min-w-[300px] flex flex-col gap-4 grow">
                        <h3 className="flex gap-2 font-bold text-2xl"><span><BookOpenCheck /></span> {aboutSec.education.title}</h3>
                        <div className="flex gap-5">
                            <div className="w-[2px] bg-primary/50 rounded-full"></div>
                            <div className="">
                                <h4 className="font-medium text-xl">{aboutSec.education.two}</h4>
                                <p className="opacity-70 text-lg">{aboutSec.education.timeTwo}</p>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div className="w-[2px] bg-primary rounded-full"></div>
                            <div>
                                <h4 className="font-medium text-xl">{aboutSec.education.one}</h4>
                                <p className="opacity-70 text-lg">{aboutSec.education.timeOne}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About