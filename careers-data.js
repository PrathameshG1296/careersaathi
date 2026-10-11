// SAMPLE DATA ONLY. Every record needs verification before real use.

const STAGE_LABELS = {
  class10: "After Class 10",
  class12: "After Class 12",
  graduation: "After Graduation",
  iti: "ITI and Diploma",
  govt: "Government Jobs and Exams",
  skills: "Skills and Certifications",
  jobs: "Jobs and Internships",
  freelancing: "Freelancing",
  business: "Starting a Business"
};

const FEE_NOTE = "Fees vary a lot between institutes, states and government vs private. Check the official website of the institute for exact fees.";

const CAREERS = [
  {
    slug: "iti-electrician",
    title: "ITI Electrician",
    category: "Vocational Course",
    stages: ["class10", "iti"],
    level: "After Class 10",
    summary: "A practical trade course to learn electrical wiring, repair and maintenance.",
    minQualification: "Usually Class 10 (can vary by trade and state)",
    duration: "Usually 1 to 2 years, depending on the trade",
    fee: FEE_NOTE,
    skills: ["Basic electrical knowledge", "Safe working habits", "Reading simple circuit diagrams", "Hands-on repair skills"],
    jobs: ["Electrician in a company or workshop", "Apprentice", "Maintenance helper", "Self-employed repair and wiring work"],
    steps: [
      "Find government and private ITIs near you from your state's official ITI admission portal.",
      "Check the eligibility and last date for the trade you want.",
      "Ask about apprenticeship options after the course."
    ],
    sourceName: "Apprenticeship India portal (general information)",
    sourceUrl: "https://www.apprenticeshipindia.gov.in",
    status: "Needs verification",
    lastVerified: "Not verified yet"
  },
  {
    slug: "diploma-engineering",
    title: "Diploma in Engineering",
    category: "Diploma",
    stages: ["class10", "iti"],
    level: "After Class 10",
    summary: "A technical diploma that can lead to a job or to a later engineering degree.",
    minQualification: "Usually Class 10 (varies by state and institute)",
    duration: "Usually 3 years",
    fee: FEE_NOTE,
    skills: ["Basic maths and science", "Technical drawing", "Practical lab skills", "Problem solving"],
    jobs: ["Junior technician or supervisor roles", "Apprenticeship", "Further study through lateral entry to a degree (rules vary)"],
    steps: [
      "Check your state's diploma admission process and dates.",
      "Compare government and private polytechnic colleges.",
      "Ask each college about placement and further-study options."
    ],
    sourceName: "",
    sourceUrl: "",
    status: "Needs verification",
    lastVerified: "Not verified yet"
  },
  {
    slug: "bcom",
    title: "B.Com (Bachelor of Commerce)",
    category: "Degree",
    stages: ["class12"],
    level: "After Class 12",
    summary: "A degree in accounting, business and finance basics.",
    minQualification: "Class 12 (commerce stream is common; rules vary by college)",
    duration: "Usually 3 years (some universities offer 4-year options)",
    fee: FEE_NOTE,
    skills: ["Basic accounting", "Excel and computer skills", "Communication", "Number comfort"],
    jobs: ["Accounts or finance assistant", "Further study such as CA, CMA, M.Com or MBA", "Government exams for graduates"],
    steps: [
      "Check the admission process of the university or college you like.",
      "Check if admission is based on Class 12 marks or an entrance exam.",
      "Look for scholarships you may be eligible for."
    ],
    sourceName: "National Scholarship Portal (for scholarships)",
    sourceUrl: "https://scholarships.gov.in",
    status: "Needs verification",
    lastVerified: "Not verified yet"
  },
  {
    slug: "bca",
    title: "BCA (Bachelor of Computer Applications)",
    category: "Degree",
    stages: ["class12"],
    level: "After Class 12",
    summary: "A computer-focused degree covering programming and basic IT skills.",
    minQualification: "Class 12 (subject requirements vary by university)",
    duration: "Usually 3 years (some universities offer 4-year options)",
    fee: FEE_NOTE,
    skills: ["Logical thinking", "Basic programming", "Computer fundamentals", "Willingness to keep learning"],
    jobs: ["Entry-level IT or support roles", "Software or web development (with extra practice)", "Further study such as MCA"],
    steps: [
      "Check which universities near you offer BCA and how they admit students.",
      "Start free basic programming lessons to see if you enjoy it.",
      "Build small practice projects alongside your studies."
    ],
    sourceName: "",
    sourceUrl: "",
    status: "Needs verification",
    lastVerified: "Not verified yet"
  },
  {
    slug: "govt-exam-preparation",
    title: "Government Exam Preparation (SSC-type exams)",
    category: "Government Exams",
    stages: ["graduation", "govt"],
    level: "After Graduation",
    summary: "Preparing for competitive exams that lead to government jobs. Competition is high and results are not guaranteed.",
    minQualification: "Depends on the exam. Many posts need a graduation degree, some need Class 10 or 12.",
    duration: "Preparation time varies from person to person",
    fee: "Coaching is optional. Many students prepare with free or low-cost study material. Check the official notification for exam fees.",
    skills: ["Basic maths", "Reasoning", "English and general knowledge", "Regular study discipline"],
    jobs: ["Various government posts, depending on the exam and your rank"],
    steps: [
      "Read the official notification of the exam you want to target.",
      "Check eligibility, age limits and the syllabus.",
      "Make a simple daily study plan and practise previous papers.",
      "Keep a backup plan, since seats are limited."
    ],
    sourceName: "",
    sourceUrl: "",
    status: "Needs verification",
    lastVerified: "Not verified yet"
  },
  {
    slug: "freelance-digital-skills",
    title: "Freelancing with Digital Skills",
    category: "Freelancing",
    stages: ["skills", "freelancing", "jobs"],
    level: "Any level (skill-based)",
    summary: "Offering a skill such as design, writing or data entry to clients online. Income is not fixed and takes time to build.",
    minQualification: "No fixed qualification. Skill and portfolio matter most.",
    duration: "Learning time depends on the skill and your practice",
    fee: "Many skills can be learned with free online resources. A phone or laptop and internet are needed.",
    skills: ["One practical skill (design, writing, editing, etc.)", "Clear communication", "Time management", "Patience to build a portfolio"],
    jobs: ["Freelance projects", "Part-time online work", "Skill that can also help in regular jobs"],
    steps: [
      "Pick one skill and practise it for a few weeks.",
      "Make 3 to 5 sample works for your portfolio.",
      "Start with small projects and ask for honest feedback.",
      "Be careful of anyone asking for money to give you work."
    ],
    sourceName: "",
    sourceUrl: "",
    status: "Needs verification",
    lastVerified: "Not verified yet"
  }
];
