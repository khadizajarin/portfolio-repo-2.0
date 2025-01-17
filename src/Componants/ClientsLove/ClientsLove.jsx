import ReviewBox from "../CommonComps/ReviewBox/ReviewBox";
import TitleBar from "../CommonComps/TitleBar/TitleBar";
// import { PiArrowSquareLeftFill, PiArrowSquareRightFill } from "react-icons/pi";
import next from "../../assets/nexticon-01.png"

const ClientsLove = () => {
    return (
        <div className="relative bg-white">
            <div className="lg:pb-10 pb-[4.375rem] bg-white lg:pt-16 pt-11 flex flex-col justify-center items-center">
                <TitleBar  title="Client’s Love"></TitleBar>
            </div>

            <div className="bg-[#D6DCE1] lg:pb-32 pb-20 lg:mt-28 flex lg:flex-row flex-col justify-center items-center gap-16">
                {/* <div className="relative lg:-mt-8 -mt-7">
                    <ReviewBox
                        name={"Md. Mostafizur Rahman"}
                        designation={"Chairman, Nurunnaher Textiles"}
                        review="Khadiza is a fantastic developer! I don't know much about ReactJS, but I can see the great work she's done. The site she built is easy to use and works perfectly. Khadiza was professional, communicated well, and finished everything on time. I'm very happy with the results and highly recommend her for any project."
                    ></ReviewBox>
                </div> */}
                <div className="relative lg:-mt-8 -mt-7">
                    <ReviewBox
                        name={"Somykoron"}
                        designation={"Application Development Software Company"}
                        review="Thank you for your valuable contributions during your internship. We truly appreciate your hard work. We hope to stay connected for future opportunities. Wishing you all the best in your future endeavors."
                    ></ReviewBox>
                </div>
                <div className="relative -mt-8">
                    <ReviewBox
                        name={"Nahiyan Ahmed"}
                        designation={"CEO, Gearbros"}
                        review="Khadiza is a promising entry-level ReactJS developer. She has a solid grasp of the basics and writes clean, maintainable code. Khadiza is adept at debugging and excels in team collaborations. Her eagerness to learn and adapt to new technologies is impressive. With more experience, Khadiza is poised to become an exceptional developer, making her a valuable addition to any team."
                    ></ReviewBox>
                </div>
            </div>

            <div className="absolute z-20 flex lg:right-24 right-[2.5rem] lg:bottom-12 bottom-[1.5rem]">
                <img src={next} alt=""className="lg:w-16 w-[3.5rem] lg:h-7 h-[1.6rem]" />
                {/* <PiArrowSquareLeftFill className="w-10 h-10 text-[#1E3660] "/>
                <PiArrowSquareRightFill className="w-10 h-10 text-[#1E3660] "/>  */}
            </div>
        </div>
    );
};

export default ClientsLove;
