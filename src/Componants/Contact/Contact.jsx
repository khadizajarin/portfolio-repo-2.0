import backgroundImage from './../../assets/Contact-bg.jpeg';


const Contact = () => {
    return (
        <div className="relative h-screen bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
           <div className="absolute inset-0 bg-[#1E3660] bg-opacity-90" ></div>
            <div className="relative z-10 ">
                <div className=' h-screen flex gap-8 justify-evenly items-center  '>
                    <div className='text-center'>
                        <p className='text-[#768B9C] font-bold text-md pb-2'>How to Reach.</p>
                        <h4 className='text-white font-bold text-[40px] pb-1'>Contact Us</h4>
                        <p className='text-[#768B9C] font-bold text-md pb-9'>I want to hear from you</p>
                        {/* form to contact */}
                    <form className="card-body ">
                        {/* Your Name */}
                        <div className="form-control pb-9">
                            <input type="text" placeholder="Your Name" className="bg-transparent border-b-2 border-[#768B9C] text-[#768B9C]  w-64   " required />
                        </div>
                        {/* Your Email */}
                        <div className="form-control pb-9">
                            <input type="password" placeholder="Email Address" className="bg-transparent border-b-2 border-[#768B9C] text-[#768B9C]  w-64   " required />
                        </div>
                        {/* tell us about it */}
                        <div className="form-control pb-9">
                            <input type="password" placeholder="Tell us all about it" className="bg-transparent border-b-2 border-[#768B9C] text-[#768B9C]  w-64   " required />
                        </div>
                        {/* submit button */}
                        <div className="form-control mt-6">
                            <button className="btn rounded-none text-[#1E3660] font-bold">Send</button>
                        </div>
                    </form>
                    </div>

                    {/* texts for right side */}
                    <div className='relative h-screen flex flex-col justify-evenly items-center text-center'>
                        <div>
                            <h4 className='text-white font-bold text-3xl'>Available Time</h4>
                            <p className='text-[#768B9C] tracking-wide text-md' style={{fontWeight: '550'}}>Monday - Saturday</p>
                            <p className='text-[#768B9C] tracking-wide text-md' style={{fontWeight: '550'}}>10am - 9pm</p>
                        </div>

                        <div>
                            <h4 className='text-white font-bold text-3xl'>Address</h4>
                            <p className='text-[#768B9C]  tracking-wide text-md' style={{fontWeight: '550'}}>Satirpara, Narsingdi Sadar,</p>
                            <p className='text-[#768B9C]  tracking-wide text-md' style={{fontWeight: '550'}}>Narsingdi, Bangladesh</p>
                        </div>

                        <div>
                            <h4 className='text-white font-bold text-3xl'>Support</h4>
                            <p className='text-[#768B9C]  tracking-wide text-md' style={{fontWeight: '550'}}>khadiza@gmail.com</p>
                            <p className='text-[#768B9C]  tracking-wide text-md' style={{fontWeight: '550'}}>+8801315929336</p>
                        </div>

                        <div className='flex justify-center gap-8'>
                            <div className='border-2 border-[#768B9C] bg-[#768B9C] w-8 h-8 rounded-full'></div>
                            <div className='border-2 border-[#768B9C] bg-[#768B9C] w-8 h-8 rounded-full'></div>
                            <div className='border-2 border-[#768B9C] bg-[#768B9C] w-8 h-8 rounded-full'></div>
                            <div className='border-2 border-[#768B9C] bg-[#768B9C] w-8 h-8 rounded-full'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;