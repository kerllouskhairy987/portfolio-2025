import { BottomHeader, TopHeader } from "@/components/home/Header";
import MainSec from "@/components/home/MainSec";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";

export default async function Home() {
  const locale = await getCurrentLocale()
  const translations = await getTrans(locale)
  return (
    <>
      <TopHeader translations={translations} />
      <BottomHeader translations={translations} />
      <MainSec translations={translations} />
    </>
  );
}
