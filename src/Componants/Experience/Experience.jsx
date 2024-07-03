import { useEffect, useState } from 'react';
import { LiaArrowRightSolid } from "react-icons/lia";
import TitleBar from '../CommonComps/TitleBar/TitleBar';

const Experience = () => {

    const images = [
        'https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg',
        'https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg',
        'https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg',
        'https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg',
        'https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg',
        'https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg',
        'https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className='bg-[#1E3660] text-center mb-7 h-[1000px]'>
            <TitleBar title="Some of My Experience" style={{ backgroundColor: "rgba(0, 255, 0, 0)" }}>  </TitleBar>
            <div className='px-72 py-16 grid grid-cols-3 gap-7 '>
                {/* box 1 */}
                <div className="bg-white h-72 w-72 relative overflow-hidden flex justify-center items-center">
                    <div  style={{ display: 'flex', transition: 'transform 0.5s ease-in-out', transform: `translateX(-${currentIndex * 100}%)` }}>
                        {images.map((src, index) => (
                            <img key={index} src={src} className="" alt={`Carousel item ${index + 1}`}  />
                        ))}
                    </div>
                </div>
                <div className='bg-white h-72 w-72'></div>
                <div className='bg-white w-72 row-span-2'></div>
                <div className='bg-white h-72 col-span-2'></div>
            </div>

            <div className='flex flex-row gap-6 justify-center mt-4'>
            <button className="btn bg-[#768B9C] border-0 shadow-black shadow-[5px_5px_10px_0_rgba(0,0,0,0.2)] text-white font-semibold ">
                See More
                <LiaArrowRightSolid className= "w-6 h-5 stroke-1"/>
            </button>
            <button className="btn bg-[#768B9C] border-0 shadow-black shadow-[5px_5px_10px_0_rgba(0,0,0,0.2)] text-white font-semibold ">
                Hire Me
                <LiaArrowRightSolid className= "w-6 h-5 stroke-1"/>
            </button>
            </div>
        </div>
    );
};

export default Experience;
