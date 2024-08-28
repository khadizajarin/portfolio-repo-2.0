import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
  
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    return (
        <div>
            <footer className="lg:footer flex flex-row lg:gap-7 gap-3 lg:h-16 bg-white text-[#768B9C] font-semibold  justify-evenly items-center p-4 lg:mt-[4px]">
            <aside className="grid-flow-col items-center lg:text-[1rem] text-[0.75rem]  ">
                <p className="text-center">Copyright © ${new Date().getFullYear()} - All right reserved</p>
            </aside>
            <button style={{ display: 'flex', alignItems: 'center' }} onClick={handleScrollToTop} className="bg-[#1E3660] p-[6px] lg:ml-10 rounded-full text-white ">
                <FaArrowUp className="h-[0.875rem] w-[0.875rem]"></FaArrowUp>
            </button>
            <aside className="lg:text-[1rem]  text-[0.75rem]  ">
                <p className="text-center">Terms & Conditions | Privacy Policy | FAQs</p>
            </aside>
            </footer>
        </div>
    );
};

export default Footer;