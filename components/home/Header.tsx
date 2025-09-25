"use client";

import { AboutIcon, ActionIcon, CallIcon, CertificateIcon, GithubIcon, HireMeIcon, HomeIcon, LinkedInIcon, ProjectsIcon, SkillsIcon, VercelIcon, WhatsAppIcon } from "@/assets/Icons";

const navActions = [
    {
        title: "Linked In",
        component: <LinkedInIcon />,
        href: "https://www.linkedin.com/in/kerolos-khairy-a6673625a/"
    },
    {
        title: "Github",
        component: <GithubIcon />,
        href: "https://github.com/kerllouskhairy987"
    },
    {
        title: "Vercel",
        component: <VercelIcon />,
        href: "https://github.com/kerllouskhairy987"
    },
    {
        title: "Hire Me",
        component: <HireMeIcon />,
        id: "hire-me"
    },
    {
        title: "Whatsapp Me",
        component: <WhatsAppIcon />,
        href: "https://wa.me/201032910697"
    },
    {
        title: "Call Me",
        component: <CallIcon />,
        href: "tel:+201032910697"
    },
]

const navLinks = [
    {
        title: "Actions",
        id: "actions",
        component: <ActionIcon />,
    },
    {
        title: "Home",
        id: "home",
        component: <HomeIcon />,
    },
    {
        title: "About",
        id: "about",
        component: <AboutIcon />,
    },
    {
        title: "Skills",
        id: "skills",
        component: <SkillsIcon />,
    },
    {
        title: "Projects",
        id: "projects",
        component: <ProjectsIcon />,
    },
    {
        title: "Certificates",
        id: "certificates",
        component: <CertificateIcon />,
    }
]

const TopHeader = () => {
    return (
        <header id="actions" className="backdrop-blur-sm bg-sidebar-accent overflow-auto">
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
            </div>
        </header>
    )
}

const BottomHeader = () => {
    return (
        <div className="fixed bottom-2 sm:bottom-5 left-1/2 -translate-x-1/2 rounded-md px-4 py-1 w-fit flex justify-center backdrop-blur-sm bg-sidebar-accent/70">
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