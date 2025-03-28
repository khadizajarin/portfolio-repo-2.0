/* eslint-disable react/display-name */
import { FaFacebookF,} from 'react-icons/fa6';
import { FaLinkedinIn } from "react-icons/fa";
import { PiGithubLogoBold } from "react-icons/pi";
import backgroundImage from './../../assets/Contact-bg.jpeg';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { forwardRef } from 'react';

const Contact = forwardRef((props, ref) => {
    const handleEmailClick = (e) => {
        e.preventDefault();
        const emailLink = 'mailto:khadiza131310@gmail.com';
        window.open(emailLink, '_blank');
      }
      const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_g2jy40u', 'template_am21qm5', e.target, '3CUphNqsVzWcbm-5F')
            .then((result) => {
                console.log(result.text);
                console.log(e);
                toast('Email sent successfully!', {
                    position: "bottom-left",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: 'Bounce',
                    style: {
                        color: '#1E3660' 
                    }
                    });
            }, (error) => {
                console.log(error.text);
                alert('An error occurred, please try again.');
            });

        e.target.reset(); 
    }
    return (
        <div ref={ref} className="relative lg:w-full lg:h-screen bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
            {/* div for blue opacity */}
            <div className="absolute inset-0 bg-[#1E3660] bg-opacity-95" ></div>
            {/* top border */}
            <div className=" hidden lg:flex justify-center items-center absolute z-10 lg:top-10 ">
                    <div className="border-t-[3px] border-white opacity-50  w-28"></div>
                    <div className="border-t-[3px] border-white opacity-50 w-2 ml-16"></div>
                    <div className="border-t-[3px] border-white opacity-50 w-10 ml-1"></div>
                    <div className="border-t-[3px] border-white opacity-50 lg:w-40 w-20 ml-16"></div>
                    <div className="lg:inline hidden border-t-[3px] border-white opacity-50 w-2 ml-16"></div>
                    <div className="lg:inline hidden border-t-[3px] border-white opacity-50 w-10 ml-1"></div>
                    <div className="lg:inline hidden border-t-[3px] border-white opacity-50 w-40 ml-16"></div>
                    <div className="lg:inline hidden border-t-[3px] border-white opacity-50 w-2 ml-16"></div>
                    <div className="lg:inline hidden border-t-[3px] border-white opacity-50 w-10 ml-1"></div>
                    <div className="lg:inline hidden border-t-[3px] border-white opacity-50 w-40 ml-16"></div>
                    <div className="lg:inline hidden border-t-[3px] border-white opacity-50 w-2 ml-16"></div>
                    <div className="lg:inline hidden border-t-[3px] border-white opacity-50 w-10 ml-1"></div>
                    <div className="lg:inline hidden border-t-[3px] border-white opacity-50 w-36 ml-16"></div>
                    <div className="lg:inline hidden border-t-[3px] border-white opacity-50 w-2 ml-16"></div>
                    <div className="lg:inline hidden border-t-[3px] border-white opacity-50 w-10 ml-1"></div>
                    <div className="lg:inline hidden border-t-[3px] border-white opacity-50 w-36 ml-16"></div>
                    
            </div>

           {/* form and text content */}
            <div className="relative z-10">
            
                <div className='lg:h-screen h-[74rem] flex lg:flex-row flex-col lg:gap-[25rem] gap-[3rem] justify-center items-center pt-10 lg:pt-0'>
                    <div className='text-center'>
                        <p className='text-[#768B9C] font-bold text-md lg:pb-2'>How to Reach.</p>
                        <h4 className='text-white font-bold text-[2.5rem] pb-1'>Contact Me</h4>
                        <p className='text-[#768B9C] font-bold text-md pb-9'>I want to hear from you</p>

                        {/* side 3 border */}
                        <div className='hidden lg:inline-block mt-10 absolute left-[20rem] top-0 bottom-0 w-[3px] bg-white opacity-50'></div>
                        <div className='hidden lg:inline-block mt-10 absolute left-[55rem] top-0 bottom-0 w-[3px] bg-white opacity-50'></div>
                        <div className='hidden lg:inline-block mt-10 absolute left-[61.75rem] top-0 bottom-0 w-[3px] bg-white opacity-50'></div>

                    {/* form to contact */}
                    <form className=" card-body lg:w-96 w-[23.125rem]" onSubmit={sendEmail}>
                        {/* Your Name */}
                        <div className="form-control pb-9">
                            <input type="text" name="from_name" placeholder="Your Name" className="bg-transparent border-b-2 border-[#768B9C] text-[#768B9C]  w-full  " required />
                        </div>
                        {/* Your Email */}
                        <div className="form-control pb-9">
                            <input type="text" name="from_email" placeholder="Email Address" className="bg-transparent border-b-2 border-[#768B9C] text-[#768B9C]  w-full" required />
                        </div>
                        {/* tell us about it */}
                        <div className="form-control pb-9">
                            <textarea type="email" name="message" placeholder="Tell me all about it" className="bg-transparent border-b-2 border-[#768B9C] text-[#768B9C]  w-full" required />
                        </div>
                        {/* submit button */}
                        <div className="form-control mt-6">
                            <button className="btn rounded-none text-[#1E3660] font-bold bg-white">Send</button>
                        </div>
                    </form>
                    <ToastContainer />
                    {/* bottom border */}
                    <div className="flex z-10 items-center absolute mt-[10rem] lg:left-[16.625rem] left-1 lg:top-[38.75rem] top-[26.5rem]">
                        <div className="border-b-[3px] border-white opacity-50 w-10 lg:w-40 "></div>
                        <div className="border-b-[3px] border-white opacity-50 w-1 lg:w-2 ml-8"></div>
                        <div className="border-b-[3px] border-white opacity-50 w-5 lg:w-10 ml-2"></div>
                        <div className="border-b-[3px] border-white opacity-50 w-14 lg:w-40 ml-10"></div>
                        <div className="border-b-[3px] border-white opacity-50 w-2 lg:w-2 ml-10"></div>
                        <div className="border-b-[3px] border-white opacity-50 w-5 lg:w-10 ml-2"></div>
                        <div className="lg:hidden border-b-[3px] border-white opacity-50 w-14 lg:w-40 ml-10"></div>
                    </div>
                </div>

                    {/* texts for right side */}
                    <div className='lg:pt-10 flex flex-col lg:h-screen h-screen lg:gap-6 gap-6 justify-evenly lg:items-stretch items-stretch text-center' >
                        <div>
                            <h4 className='text-white font-bold text-3xl mb-3'>Available Time</h4>
                            <p className='text-[#768B9C] tracking-wide leading-loose text-md' style={{fontWeight: '550'}}>Monday - Saturday</p>
                            <p className='text-[#768B9C] tracking-wide text-md' style={{fontWeight: '550'}}>10am - 9pm</p>
                        </div>

                        <div>
                            <h4 className='text-white font-bold text-3xl mb-3'>Address</h4>
                            <p className='text-[#768B9C]  tracking-wide leading-loose text-md' style={{fontWeight: '550'}}>Satirpara, Narsingdi Sadar,</p>
                            <p className='text-[#768B9C]  tracking-wide text-md' style={{fontWeight: '550'}}>Narsingdi, Bangladesh</p>
                        </div>

                        <div>
                            <h4 className='text-white font-bold text-3xl mb-3'>Support</h4>
                            <p className='text-[#768B9C] tracking-wide leading-loose text-md' style={{fontWeight: '550'}}
                             onClick={handleEmailClick}>khadiza131310@gmail.com</p>
                            {/* <p className='text-[#768B9C] tracking-wide text-md' style={{fontWeight: '550'}}></p> */}
                        </div>

                        <div className='flex justify-center gap-6'>
                            <div className='border-0 bg-[#768B9C] w-10 h-10 rounded-full text-white flex justify-center items-center'><Link to="https://www.facebook.com/khadizajarinroza?mibextid=gik2fB"><FaFacebookF></FaFacebookF></Link></div>
                            <div className='border-0 bg-[#768B9C] w-10 h-10 rounded-full text-white flex justify-center items-center'><Link to="https://github.com/khadizajarin"><PiGithubLogoBold></PiGithubLogoBold></Link></div>
                            <div className='border-0 bg-[#768B9C] w-10 h-10 rounded-full text-white flex justify-center items-center'><Link to="https://www.linkedin.com/in/khadiza-jarin-roza/"><FaLinkedinIn></FaLinkedinIn></Link></div>
                            {/* <div className='border-0 bg-[#768B9C] w-10 h-10 rounded-full text-white flex justify-center items-center'><Link to="https://wa.me/"><FaWhatsapp></FaWhatsapp></Link></div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Contact;