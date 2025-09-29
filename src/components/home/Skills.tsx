import { BootstrapIcon, CssIcon, HtmlIcon, JavascriptIcon, NextJsIcon, PrismaORMIcon, ReactJsIcon, SassIcon, TailwindIcon, TypescriptIcon } from "@/SVG/Icons";
import LogoLoop from "../reactBits/LoopSlider"
import TitleSec from "../ui/TitleSec"
import { getCurrentLocale } from "@/src/lib/getCurrentLocale";
import getTrans from "@/src/lib/translation";


const imageLogos = [
    { node: <HtmlIcon /> },
    { node: <CssIcon /> },
    { node: <SassIcon /> },
    { node: <TailwindIcon /> },
    { node: <BootstrapIcon /> },
    { node: <JavascriptIcon /> },
    { node: <TypescriptIcon /> },
    { node: <ReactJsIcon /> },
    { node: <NextJsIcon /> },
    { node: <PrismaORMIcon /> },
];


const Skills = async () => {
    const locale = await getCurrentLocale();
    const { skills } = await getTrans(locale);
    return (
        <section className="container section-gap">
            <TitleSec title={skills.title} />
            <p className="opacity-70 py-5 text-center">{skills.topDesc}</p>

            {
                locale === "en" && (
                    <div className="my-10 w-full bg-transparent flex items-center relative overflow-hidden" >
                        <LogoLoop
                            logos={imageLogos}
                            speed={150}
                            direction="right"
                            logoHeight={10}
                            gap={40}
                            pauseOnHover
                            fadeOut
                        />
                    </div>
                )
            }

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="grow">
                    <h3 className="font-semibold text-lg mb-3">{skills.department.frontend}</h3>
                    <div className="flex flex-wrap gap-3">
                        <p className="bg-accent-foreground/50 rounded-full px-5 py-1">HTML5</p>
                        <p className="bg-accent-foreground/50 rounded-full px-5 py-1">CSS3</p>
                        <p className="bg-accent-foreground/50 rounded-full px-5 py-1">Javascript</p>
                        <p className="bg-accent-foreground/50 rounded-full px-5 py-1">Typescript</p>
                        <p className="bg-accent-foreground/50 rounded-full px-5 py-1">ReactJs</p>
                        <p className="bg-accent-foreground/50 rounded-full px-5 py-1">NextJs</p>
                    </div>
                </div>
                <div className="grow">
                    <h3 className="font-semibold text-lg mb-3">{skills.department.backend}</h3>
                    <div className="flex flex-wrap gap-3">
                        <p className="bg-accent-foreground/50 rounded-full px-5 py-1">Prisma</p>
                        <p className="bg-accent-foreground/50 rounded-full px-5 py-1">Strapi</p>
                        <p className="bg-accent-foreground/50 rounded-full px-5 py-1">Json server</p>
                    </div>
                </div>
                <div className="grow">
                    <h3 className="font-semibold text-lg mb-3">{skills.department.style}</h3>
                    <div className="flex flex-wrap gap-3">
                        <p className="bg-accent-foreground/50 rounded-full px-5 py-1">Bootstrap</p>
                        <p className="bg-accent-foreground/50 rounded-full px-5 py-1">Tailwind Css</p>
                        <p className="bg-accent-foreground/50 rounded-full px-5 py-1">SASS</p>
                        <p className="bg-accent-foreground/50 rounded-full px-5 py-1">Styled Components</p>
                        <p className="bg-accent-foreground/50 rounded-full px-5 py-1">Chakra UI</p>
                        <p className="bg-accent-foreground/50 rounded-full px-5 py-1">Material UI</p>
                    </div>
                </div>
                <div className="grow">
                    <h3 className="font-semibold text-lg mb-3">{skills.department.state}</h3>
                    <div className="flex flex-wrap gap-3">
                        <p className="bg-accent-foreground/50 rounded-full px-5 py-1">Redux Toolkit</p>
                        <p className="bg-accent-foreground/50 rounded-full px-5 py-1">React Query</p>
                    </div>
                </div>
                <div className="grow">
                    <h3 className="font-semibold text-lg mb-3">{skills.department.tools}</h3>
                    <div className="flex flex-wrap gap-3">
                        <p className="bg-accent-foreground/50 rounded-full px-5 py-1">Figma</p>
                        <p className="bg-accent-foreground/50 rounded-full px-5 py-1">Git</p>
                        <p className="bg-accent-foreground/50 rounded-full px-5 py-1">npm/yarn/pnpm</p>
                        <p className="bg-accent-foreground/50 rounded-full px-5 py-1">GitHub</p>
                        <p className="bg-accent-foreground/50 rounded-full px-5 py-1">Vite</p>
                        <p className="bg-accent-foreground/50 rounded-full px-5 py-1">RESTFul API</p>
                    </div>
                </div>
            </div>

            <p className="opacity-70 mt-12 text-center">{skills.bottomDesc}</p>
        </section>
    )
}

export default Skills