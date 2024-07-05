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
            <footer className="footer h-16 bg-white text-[#768B9C] font-semibold  justify-evenly items-center p-4">
            <aside className="grid-flow-col items-center text-base">
                <p>Copyright © ${new Date().getFullYear()} - All right reserved</p>
            </aside>
            <button style={{ display: 'flex', alignItems: 'center' }} onClick={handleScrollToTop} className="bg-[#1E3660] p-2 rounded-full text-white">
                <FaArrowUp className="h-[14px] w-[14px]"></FaArrowUp>
            </button>
            <aside className="text-base">
                <p>Terms & Conditions | Privacy Policy | FAQs</p>
            </aside>
            </footer>
        </div>
    );
};

export default Footer;