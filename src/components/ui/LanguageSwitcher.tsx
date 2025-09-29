"use client";

import { Button } from "@/src/components/ui/button"
import { Locale } from "@/i18n.config";
import { Languages } from "@/types";
import { useParams, usePathname, useRouter } from "next/navigation"

const LanguageSwitcher = () => {
    const router = useRouter()

    const pathname = usePathname()

    const { locale } = useParams()

    const changeLocale = (newLocale: Locale) => {
        const path = pathname.replace(`/${locale}`, `/${newLocale}`) ?? `/${newLocale}`
        router.push(path)
    }

    return (
        <div>
            {
                locale === Languages.ENGLISH
                    ? <Button onClickCapture={() => changeLocale(Languages.ARABIC)}>العربية</Button>
                    : <Button onClick={() => changeLocale(Languages.ENGLISH)}>English</Button>
            }
        </div>

    )
}

export default LanguageSwitcher