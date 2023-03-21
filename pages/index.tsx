import { Card, Input, Section } from "@/components";
import { Inter } from "next/font/google";
import { FunctionComponent, useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import BasicForm from "@/components/forms/Basic";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const scrollDown = () => {
    let pageHeight = window.innerHeight;
    window.scrollBy(0, pageHeight);
  };

  useEffect(() => {
    AOS.init();
    // AOS.refresh();
  }, []);
  const [showDef, setShowDef] = useState<boolean>(false);
  const [yup, setYup] = useState<boolean>(false);

  return (
    <div>
      <button
        className="fixed p-3 bottom-4 right-4 border rounded-md bg-white z-50"
        onClick={scrollDown}
      >
        Scroll down
      </button>

      <Section className="bg-pink-500">
        {!showDef && (
          <div
            data-aos="fade-up"
            className="cursor-pointer"
            onClick={() => setShowDef(!showDef)}
          >
            <h1 className="transition-all text-white font-bold text-4xl hover:text-6xl select-none">
              React Hook Form
            </h1>
          </div>
        )}
        {showDef && (
          <div
            data-aos="fade-left"
            className="cursor-pointer space-y-10 w-1/2"
            onClick={() => setShowDef(!showDef)}
          >
            <h3 className="transition-all text-white font-bold text-4xl hover:text-4xl select-none">
              &gt; React library that simplifies form state handling via
              uncontrolled inputs (ref)
            </h3>
            <h3 className="transition-all text-white font-bold text-4xl hover:text-4xl select-none">
              &gt; Solves the process of setting up monitoring/syncing with form
              values while avoiding the unnecessary re-renders
            </h3>
            <h3 className="transition-all text-white font-bold text-4xl hover:text-4xl select-none">
              &gt; Has a built-in form validation and can support third-party
              schema builders
            </h3>
          </div>
        )}
      </Section>
      <Section className="bg-indigo-500">
        <div className="w-full h-screen flex">
          <div
            data-aos="fade-down"
            className="cursor-pointer w-1/3 h-full bg-yellow-500 flex items-center justify-center"
            data-aos-delay="500"
            // data-aos-easing="ease-in-sine"
          >
            <div>
              <h1 className="transition-all text-white font-bold text-6xl select-none">
                Yup
              </h1>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="cursor-pointer w-1/3 h-full flex items-center justify-center"
            data-aos-delay="1500"
            // data-aos-easing="ease-in-sine"
          >
            <h1 className="transition-all text-white font-bold text-6xl select-none">
              Zod
            </h1>
          </div>
          <div
            data-aos="fade-up"
            className="cursor-pointer w-1/3 h-full bg-red-500 flex items-center justify-center"
            data-aos-delay="1000"
            // data-aos-easing="ease-in-sine"
          >
            <h1 className="transition-all text-white font-bold text-6xl select-none">
              Joi
            </h1>
          </div>
        </div>
      </Section>
      <BasicForm />
    </div>
  );
};

export default Home;
