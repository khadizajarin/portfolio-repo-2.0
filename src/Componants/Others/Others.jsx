import TitleBar from "../CommonComps/TitleBar/TitleBar";

const skills = [
    "Html",
    "CSS",
    "Javascript",
    "Vscode",
    "Tailwind",
    "Version Control (Git)",
    "Github",
    "Next.js",
    "Vercel",
    "Latex",
    "Node.js", 
    "Express.js", 
    "MongoDB",
    "Scrum", 
    "Agile",  
    "Firebase Authentication", 
    "TypeScript",
    "Responsive Web Design", 
    "Component-Based Architecture", 
    "API Integration"
];

const Others = () => {
    return (
        <div className="bg-white text-center lg:pt-[5rem] pt-[4rem]">
            <TitleBar title={'Beyond the Basics: Tech Stack & Toolset   '} />

            <div className="text-[#768B9C] font-semibold lg:py-[5rem] py-[3rem] flex flex-wrap justify-center items-center lg:gap-8 gap-6 lg:text-[1.75rem] text-[1.25rem] lg:px-[18rem] px-8">
                {skills.map((skill, index) => (
                    <div key={index}>
                        <span className="border-[#768B9C] rounded-full border-4 mr-4 inline-block align-middle w-2 h-2"></span>
                        {skill}
                    </div>
                ))}
            </div>

            <div className="flex justify-center">
                <hr className="border-[#768B9C] lg:opacity-20 opacity-10 border-2 lg:w-[45rem] w-[20rem]" />
            </div>
        </div>
    );
};

export default Others;
