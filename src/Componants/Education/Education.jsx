import { FaGraduationCap, FaAward, FaBook, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import TitleBar from "../CommonComps/TitleBar/TitleBar";

const items = [
  {
    degree: "Bachelor of Science",
    field: "Computer Science & Engineering",
    institution: "University of Chittagong",
    location: "Chittagong, Bangladesh",
    period: "2020 — 2025",
    result: "CGPA 3.48 / 4.00",
   highlights: [
    "Focused on core computer science subjects like Data Structures, Algorithms, and Software Engineering",
    "Engaged in numerous academic projects that strengthened problem‑solving and analytical thinking",
    ],
    icon: FaGraduationCap,
  },
  {
    degree: "Higher Secondary Certificate",
    field: "Science Group",
    institution: "Abdul Kadir Mollad City College",
    location: "Narsingdi, Bangladesh",
    period: "2017 — 2019",
    result: "GPA 5.00 / 5.00",
    highlights: [
      "Mathematics, Physics, Chemistry & ICT",
      "Board scholarship recipient",
    ],
    icon: FaBook,
  },
  {
    degree: "Secondary School Certificate",
    field: "Science Group",
    institution: "Narsingdi Govt. Girls' High College",
    location: "Narsingdi, Bangladesh",
    period: "2008 — 2017",
    result: "GPA 5.00 / 5.00",
    highlights: [
        "Mathematics, Physics, Chemistry & ICT",
        
    ],
    icon: FaAward,
  },
];

const Education = () => {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="relative w-full bg-[#1E3660] text-white py-20 md:py-28 px-6 md:px-16 overflow-hidden"
    >
      {/* Decorative dashed lines */}
      <div className="pointer-events-none absolute inset-0">
        <div className="dashed-divider absolute top-12 left-0 right-0" />
        <div className="dashed-divider absolute bottom-12 left-0 right-0" />
        <div className="dashed-divider-v absolute top-0 bottom-0 left-12" />
        <div className="dashed-divider-v absolute top-0 bottom-0 right-12" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Pill heading */}
        <div className="flex justify-center mb-6">
            <TitleBar title="My Education" style={{ backgroundColor: "rgba(0, 255, 0, 0)" }} />
        </div>
        

        <p className="text-white lg:text-lg text-[0.75rem] font-medium lg:mt-10 mt-7 lg:leading-loose lg:tracking-wider lg:text-center px-6 text-justify">
            A timeline of my academic journey that highlights the key studies and achievements that built my foundation in computer science.
        </p>

        {/* Timeline */}
        <ol className="relative space-y-10 md:space-y-12">
          <div
            aria-hidden="true"
            className="dashed-divider-v absolute top-2 bottom-2 left-6 md:left-8"
          />

          {items.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.institution} className="relative pl-16 md:pl-24">
                {/* Timeline node */}
                <div className="absolute left-0 top-0 flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full border border-foreground/30 bg-card shadow-lg">
                  <Icon className="h-5 w-5 md:h-7 md:w-7 text-foreground" />
                </div>

                <article className="rounded-2xl border border-foreground/15 bg-card/60 backdrop-blur-sm p-6 md:p-8 transition-all duration-300 hover:border-foreground/40 hover:-translate-y-1 hover:shadow-2xl">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold leading-tight">
                        {item.degree}
                      </h3>
                      <p className="text-muted-foreground mt-1 text-sm md:text-base">
                        {item.field}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-foreground/25 bg-background/40 px-4 py-1.5 text-xs md:text-sm font-medium">
                      <FaCalendarAlt className="h-3.5 w-3.5" />
                      {item.period}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm md:text-base text-foreground/90 mb-4">
                    <span className="font-semibold">{item.institution}</span>
                    <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                      <FaMapMarkerAlt className="h-3.5 w-3.5" />
                      {item.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                      <FaAward className="h-3.5 w-3.5" />
                      {item.result}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {item.highlights.map((h, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-sm md:text-base text-muted-foreground"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/70"
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default Education;