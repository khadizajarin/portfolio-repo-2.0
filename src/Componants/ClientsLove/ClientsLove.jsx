import ReviewBox from "../CommonComps/ReviewBox/ReviewBox";
import TitleBar from "../CommonComps/TitleBar/TitleBar";

const ClientsLove = () => {
    return (
        <div >

            <div className="flex flex-col justify-center items-center ">
                <TitleBar title="Client’s Love"></TitleBar>    
            </div>
            

            <div className="bg-[#D6DCE1] mt-20 flex flex-row justify-center items-center gap-16">
                <ReviewBox 
                    name={"Mr. Michel Martin"}
                    designation={"CEO Martin International"}
                    review="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    lorem ipsum has been the industry's standard dummy text ever since the 1500s.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the ndustry's standard dummy text ever since the 1500s. "
                ></ReviewBox>
                <ReviewBox 
                    name={"Mr. Michel Martin"}
                    designation={"CEO Martin International"}
                    review="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    lorem ipsum has been the industry's standard dummy text ever since the 1500s.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the ndustry's standard dummy text ever since the 1500s. "
                ></ReviewBox>

            </div>
            
        </div>
    );
};

export default ClientsLove;