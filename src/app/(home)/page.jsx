
import Hero2 from "@/components/hero/Hero2";
import OurPartner1 from "@/components/section/OurPartner1";
import BrowserCategory2 from "@/components/section/BrowserCategory2";
import BrowserCategory3 from "@/components/section/BrowserCategory3";
import CounterInfo1 from "@/components/section/CounterInfo1";
import OurCta3 from "@/components/section/OurCta3";
import CtaBanner18 from "@/components/section/CtaBanner18";
import HighestRated1 from "@/components/section/HighestRated1";




export const metadata = {
  title: "FirmaGo - İstediğin Hizmeti Bulmanın Kolay Yolu",
};

export default function page() {
  return (
    <>
    
      <Hero2 />
      <OurPartner1 />
      <BrowserCategory3 />
    
      <CtaBanner18 />
      <CounterInfo1 />
      <HighestRated1 />
    
      <OurCta3 />
      <BrowserCategory2 />
    
     
    </>
  );
}
