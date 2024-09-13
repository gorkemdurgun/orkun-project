import Breadcumb10 from "@/components/breadcumb/Breadcumb10";

import FreelancerDetails2 from "@/components/section/FreelancerDetails2";

export const metadata = {
  title:
    "Freeio - Freelance Marketplace React/Next Js Template | Freelancer Single",
};

export default function page() {
  return (
    <>
    
      <Breadcumb10 path={["Home", "Services", "Design & Creative"]} />

      <FreelancerDetails2 />
    </>
  );
}
