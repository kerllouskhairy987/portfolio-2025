"use client";

import { ModeToggle } from "./ModeToggle";
import LanguageSwitcher from "./LanguageSwitcher";


const Setting = () => {
    return (
        <div className="flex items-center flex-col gap-2">
            <ModeToggle />
            <LanguageSwitcher />
        </div>
    )
}

export default Setting