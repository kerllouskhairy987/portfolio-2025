"use client";

import { TTranslations } from "@/types/translations";
import { buttonVariants } from "../../ui/button";

const CvAndProjects = ({ translations }: { translations: TTranslations }) => {
    return (
        <div className="flex items-center gap-3">
            <a href="https://drive.google.com/file/d/1SuqgBWIVr0LtM4PxNGpECTE47l30o_GZ/view?usp=sharing" target="_blank" className={buttonVariants({ variant: "outline", size: "lg" })} title="View CV">{translations.mainHomeSec.cv}</a>
            <a href="#projects" className={buttonVariants({ variant: "default", size: "lg" })} title="View Projects">{translations.mainHomeSec.projects}</a>
        </div>
    )
}

export default CvAndProjects