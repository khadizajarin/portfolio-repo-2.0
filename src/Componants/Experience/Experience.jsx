/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { LiaArrowRightSolid } from "react-icons/lia";
import TitleBar from '../CommonComps/TitleBar/TitleBar';
import project1 from "../../assets/project-01.png";
import project2 from "../../assets/project-02.png";
import project3 from "../../assets/project-03.png";
import project4 from "../../assets/project-04.png";
import project5 from "../../assets/project-05.png";
import project6 from "../../assets/project-06.png";
import SlidingImageText from "../CommonComps/SlidingImageText/SlidingImageText";
import { forwardRef, useState } from "react";
import { Link } from "react-router-dom";

const Experience = forwardRef(({ contactRef }, ref) => {
  const [showMoreProjects, setShowMoreProjects] = useState(false);

//   const scrollToSection = (elementRef) => {
//     if (elementRef?.current) {
//       window.scrollTo({
//         top: elementRef.current.offsetTop,
//         behavior: "smooth",
//       });
//     }
//   };

  return (
    <div ref={ref} className={`relative z-10 bg-[#1E3660] text-center  ${showMoreProjects ? 'lg:h-[85rem] md:h-[56.25rem]' : 'lg:h-[68rem] md:h-[56.25rem]'} pt-20 pb-10`}>
      <TitleBar title="Projects That Define My Craft" style={{ backgroundColor: "rgba(0, 255, 0, 0)" }} />
      
      <div className={`lg:px-72 px-6 lg:py-16 py-6 grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-3 ${showMoreProjects ? 'lg:h-[120vh] h-[150vh]' : 'lg:h-[90vh] h-[120vh]'}`}>
        {/* box 1 */}
        <SlidingImageText 
            images={project4} 
            intervalDuration={4000} 
            liveLink={'https://storied-donut-b1299b.netlify.app/'} 
            github={'https://github.com/khadizajarin/job-seeker-client'} 
            stack={'React, TypeScript, Tailwind CSS, React Router, Axios, React Hook Form, Zod, Firebase Auth, Vite, Zustand'} />

        {/* box 2 */}
         <SlidingImageText 
            images={project1} 
            intervalDuration={6000} 
            liveLink={'https://tranquil-nougat-6ba383.netlify.app/'} 
            github={'https://github.com/khadizajarin/thePortfolyo'} 
            stack={'Next.js, React, Tailwind CSS, TypeScript, Framer Motion, Google Fonts, PostCSS'} />

        {/* box 3 */}
        <SlidingImageText 
            className='lg:row-span-2' 
            images={project3} 
            intervalDuration={5000} 
            liveLink={'https://open-table-design.netlify.app/'} 
            github={'https://github.com/khadizajarin/open-table-design'} 
            stack={'Next.js, React, Tailwind CSS, Google Fonts (Ubuntu & Cinzel), ESLint, PostCSS'} />

        {/* box 4 */}
        <SlidingImageText 
            className='lg:col-span-2' 
            images={project2} 
            intervalDuration={7000} 
            liveLink={'https://silly-madeleine-e13392.netlify.app/'} 
            github={'https://github.com/khadizajarin/task-homepage'} 
            stack={'React, Tailwind CSS, Vite, TypeScript'} />

        {showMoreProjects && (
          <>
            {/* box 5 */}
            <SlidingImageText
              images={project6}
              intervalDuration={9000}
              liveLink={'https://better-mediustech.netlify.app/'}
              github={'https://github.com/khadizajarin/better-mediustech'}
              stack={'Next.js, React.js, TypeScript, Tailwind CSS, React Hook Form, Zod, TanStack Query, Zustand, Axios, Lucide React, Vite'}
            />

            {/* box 6 */}
            <SlidingImageText
              className='lg:col-span-2'
              images={project5}
              intervalDuration={8000}
              liveLink={'https://mobile-finance.netlify.app/'}
              github={'https://github.com/khadizajarin/mobile-finance-client'}
              stack={'React, Tailwind CSS, TypeScript, Vite, React Hook Form, Zod, TanStack Query, Axios'}
            />
          </>
        )}
      </div>

      <div className='flex flex-row gap-6 justify-center mt-4 flex-wrap'>
        {/* GitHub Link */}
        <Link to="https://github.com/khadizajarin">
          <button className="btn lg:h-12 min-h-5 h-7 lg:px-4 px-2 text-[10px] lg:text-[14px] bg-[#768B9C] border-0 lg:shadow-black shadow-gray-900 lg:shadow-[5px_5px_10px_0_rgba(0,0,0,0.2)] shadow-[5px_5px_3px_0_rgba(0,0,0,0.9)]  text-white lg:font-semibold hover:bg-[#768B9C] lg:pl-[20px] pl-[10px]">
            Visit Github
            <LiaArrowRightSolid className="lg:ml-1 lg:w-6 lg:h-5 stroke-1" />
          </button>
        </Link>

        {/* Toggle Projects */}
        <button
          onClick={() => setShowMoreProjects((prev) => !prev)}
          className="btn lg:h-12 min-h-5 h-7 lg:px-4 px-2 text-[10px] lg:text-[14px] bg-[#768B9C] border-0 lg:shadow-black shadow-gray-900 lg:shadow-[5px_5px_10px_0_rgba(0,0,0,0.2)] shadow-[5px_5px_3px_0_rgba(0,0,0,0.9)]  text-white lg:font-semibold hover:bg-[#768B9C] lg:pl-[20px] pl-[10px]">
          {showMoreProjects ? "Show Less" : "Let’s see more"}
          <LiaArrowRightSolid className="lg:ml-1 lg:w-6 lg:h-5 stroke-1" />
        </button>

        {/* Scroll to Contact Section */}
        {/* <button
          onClick={() => scrollToSection(contactRef)}
          className="btn lg:h-12 min-h-5 h-7 lg:px-4 px-2 text-[10px] lg:text-[14px] bg-[#768B9C] border-0 lg:shadow-black shadow-gray-900 lg:shadow-[5px_5px_10px_0_rgba(0,0,0,0.2)] shadow-[5px_5px_3px_0_rgba(0,0,0,0.9)] text-white lg:font-semibold hover:bg-[#768B9C] lg:pl-[20px] pl-[10px]">
          Contact Me
          <LiaArrowRightSolid className="lg:ml-1 lg:w-6 lg:h-5 stroke-1" />
        </button> */}
      </div>
    </div>
  );
});

export default Experience;
