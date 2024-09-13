import Image from "next/image";
import Breadcumb3 from "@/components/breadcumb/Breadcumb3";


export default function Breadcumb9() {
  return (
    <>
      <section className="breadcumb-section ">
      <div className="container">
        <div className="cta-service-v1 cta-banner   p100 bdrs16 position-relative overflow-hidden d-flex align-items-center mx20-lg px30-lg">
          <Image
            height={226}
            width={198}
            className="left-top-img wow zoomIn"
            src="/images/vector-img/left-top.png"
            alt="left-top"
          />
          <Image
            height={181}
            width={255}
            className="right-bottom-img wow zoomIn"
            src="/images/vector-img/right-bottom.png"
            alt="right-bottom"
          />

        
            <div className="row wow fadeInUp">
      
              <div className="col-xl-12">
              <Breadcumb3 path={["Home","Design & Creative"]} />
                <div className="position-relative">
                  <h2>Projects List</h2>
                  <p className="text breadcumb-description mb30">
                  Custom software design can be complex, but it's often the best solution for businesses who want to own their code and require an end product with large processing power, storage and scalability. Software design companies can offer; Browse popular software programming languages: SQL developers, C++ developers and Flutter developers. Also be sure to examine developers in different locations, such as developers in India , developers in the United States, or developers in Ukraine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
