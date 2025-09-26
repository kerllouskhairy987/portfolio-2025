"use client";

import { AboutIcon, ActionIcon, CallIcon, CertificateIcon, GithubIcon, HireMeIcon, HomeIcon, LinkedInIcon, ProjectsIcon, SkillsIcon, VercelIcon, WhatsAppIcon } from "@/SVG/Icons";
import Setting from "../ui/Setting";
import { TTranslations } from "@/types/translations";

const TopHeader = ({ translations }: { translations: TTranslations }) => {
    const navActions = [
        {
            title: translations.social.linkedin,
            component: <LinkedInIcon />,
            href: "https://www.linkedin.com/in/kerolos-khairy-a6673625a/"
        },
        {
            title: translations.social.github,
            component: <GithubIcon />,
            href: "https://github.com/kerllouskhairy987"
        },
        {
            title: translations.social.vercel,
            component: <VercelIcon />,
            href: "https://github.com/kerllouskhairy987"
        },
        {
            title: translations.social.hireMe,
            component: <HireMeIcon />,
            id: "hire-me"
        },
        {
            title: translations.social.whatsapp,
            component: <WhatsAppIcon />,
            href: "https://wa.me/201032910697"
        },
        {
            title: translations.social.callMe,
            component: <CallIcon />,
            href: "tel:+201032910697"
        },
    ]

    return (
        <header id="actions" className="backdrop-blur-sm bg-sidebar-accent overflow-x-auto">
            <div className="w-fit flex items-center mx-auto px-5 rounded-md">
                <div className="flex items-center">
                    {
                        navActions.map((link) => (
                            <a key={link.title} title={link.title} href={link.title === "Hire Me" ? `#${link.id}` : link.href} target={link.title === "Hire Me" ? "_self" : "_blank"} className="hover:bg-muted rounded-sm p-4 flex flex-col items-center gap-1 hover:text-primary group">
                                <span className="p-3 bg-accent-foreground/10 rounded-md border-2 border-transparent group-hover:border-primary">
                                    {link.component}
                                </span>
                                <span className="font-normal text-xs">{link.title}</span>
                            </a>
                        ))
                    }
                </div>
                <Setting />
            </div>
        </header>
    )
}

const BottomHeader = ({ translations }: { translations: TTranslations }) => {
    const navLinks = [
    {
        title: translations.bottomHeader.actions,
        id: "actions",
        component: <ActionIcon />,
    },
    {
        title: translations.bottomHeader.home,
        id: "home",
        component: <HomeIcon />,
    },
    {
        title: translations.bottomHeader.about,
        id: "about",
        component: <AboutIcon />,
    },
    {
        title: translations.bottomHeader.skills,
        id: "skills",
        component: <SkillsIcon />,
    },
    {
        title: translations.bottomHeader.projects,
        id: "projects",
        component: <ProjectsIcon />,
    },
    {
        title: translations.bottomHeader.certificates,
        id: "certificates",
        component: <CertificateIcon />,
    }
]

    return (
        <div className="fixed bottom-0 sm:bottom-5 left-1/2 -translate-x-1/2 rounded-md px-4 py-1 w-fit flex justify-center backdrop-blur-sm bg-sidebar-accent/70">
            <div className="flex items-center gap-2">
                {
                    navLinks.map(link => (
                        <a href={`#${link.id}`} key={link.title} title={link.title}
                            className="hover:bg-muted rounded-sm p-2 flex flex-col items-center sm:gap-1 hover:text-primary group"
                        >
                            <span className="p-2 bg-accent-foreground/10 rounded-md border-2 border-transparent group-hover:border-primary">{link.component}</span>
                            <span className="hidden sm:block font-normal text-xs">{link.title}</span>
                        </a>
                    ))
                }
            </div>
        </div>
    )
}

export { TopHeader, BottomHeader }