import Breadcumb1 from "@/components/breadcumb/Breadcumb1";

import ContactInfo1 from "@/components/section/ContactInfo1";
import GoogleMap1 from "@/components/section/GoogleMap1";

export const metadata = {
  title: "Freeio - Freelance Marketplace React/Next Js Template | Contact",
};

export default function page() {
  return (
    <>
    
      <Breadcumb1
        title={"İLetişim"}
        brief={`Size nasıl yardımcı olabileceğimizi konuşmak isteriz.`}
        isBtnActive={false}
      />
      <ContactInfo1 />
      <GoogleMap1 />

    </>
  );
}
