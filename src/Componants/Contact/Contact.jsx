/* eslint-disable react/display-name */
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa6';
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
                    });
            }, (error) => {
                console.log(error.text);
                alert('An error occurred, please try again.');
            });

        e.target.reset(); // Reset form fields
    }
    return (
        <div ref={ref} className="relative h-screen bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
           <div className="absolute inset-0 bg-[#1E3660] bg-opacity-90" ></div>
            <div className="relative z-10 ">
                <div className=' h-screen flex gap-8 justify-evenly items-center  '>
                    <div className='text-center'>
                        <p className='text-[#768B9C] font-bold text-md pb-2'>How to Reach.</p>
                        <h4 className='text-white font-bold text-[40px] pb-1'>Contact Us</h4>
                        <p className='text-[#768B9C] font-bold text-md pb-9'>I want to hear from you</p>
                        {/* form to contact */}
                    <form className="card-body w-96" onSubmit={sendEmail}>
                        {/* Your Name */}
                        <div className="form-control pb-9">
                            <input type="text" name="from_name" placeholder="Your Name" className="bg-transparent border-b-2 border-[#768B9C] text-[#768B9C]  w-full  " required />
                        </div>
                        {/* Your Email */}
                        <div className="form-control pb-9">
                            <input type="text" name="from_email" placeholder="Email Address" className="bg-transparent border-b-2 border-[#768B9C] text-[#768B9C]  w-full   " required />
                        </div>
                        {/* tell us about it */}
                        <div className="form-control pb-9">
                            <textarea type="text" name="message" placeholder="Tell us all about it" className="bg-transparent border-b-2 border-[#768B9C] text-[#768B9C]  w-full   " required />
                        </div>
                        {/* submit button */}
                        <div className="form-control mt-6">
                            <button className="btn rounded-none text-[#1E3660] font-bold">Send</button>
                        </div>
                    </form>
                    <ToastContainer />
                    </div>

                    {/* texts for right side */}
                    <div className='relative h-screen flex flex-col justify-evenly items-center text-center'>
                        <div>
                            <h4 className='text-white font-bold text-3xl mb-3'>Available Time</h4>
                            <p className='text-[#768B9C] tracking-wide text-md' style={{fontWeight: '550'}}>Monday - Saturday</p>
                            <p className='text-[#768B9C] tracking-wide text-md' style={{fontWeight: '550'}}>10am - 9pm</p>
                        </div>

                        <div>
                            <h4 className='text-white font-bold text-3xl mb-3'>Address</h4>
                            <p className='text-[#768B9C]  tracking-wide text-md' style={{fontWeight: '550'}}>Satirpara, Narsingdi Sadar,</p>
                            <p className='text-[#768B9C]  tracking-wide text-md' style={{fontWeight: '550'}}>Narsingdi, Bangladesh</p>
                        </div>

                        <div>
                            <h4 className='text-white font-bold text-3xl mb-3'>Support</h4>
                            <p className='text-[#768B9C] tracking-wide text-md' style={{fontWeight: '550'}}
                             onClick={handleEmailClick}>khadiza131310@gmail.com</p>
                            <p className='text-[#768B9C] tracking-wide text-md' style={{fontWeight: '550'}}>+8801315929336</p>
                        </div>

                        <div className='flex justify-center gap-6'>
                            <div className='border-0 bg-[#768B9C] w-10 h-10 rounded-full text-white flex justify-center items-center'><Link to="https://www.facebook.com/khadizajarinroza?mibextid=gik2fB"><FaFacebookF></FaFacebookF></Link></div>
                            <div className='border-0 bg-[#768B9C] w-10 h-10 rounded-full text-white flex justify-center items-center'><Link to="https://github.com/khadizajarin"><PiGithubLogoBold></PiGithubLogoBold></Link></div>
                            <div className='border-0 bg-[#768B9C] w-10 h-10 rounded-full text-white flex justify-center items-center'><Link to="https://www.linkedin.com/in/khadiza-jarin-roza/"><FaLinkedinIn></FaLinkedinIn></Link></div>
                            <div className='border-0 bg-[#768B9C] w-10 h-10 rounded-full text-white flex justify-center items-center'><Link to="https://wa.me/8801315929336"><FaWhatsapp></FaWhatsapp></Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Contact;