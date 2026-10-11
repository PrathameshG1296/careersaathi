var LANGS = { en: "English", hi: "हिन्दी", mr: "मराठी" };
var UI = {};
var CAREER_TX = {};
var currentLang = "en";

try {
  var savedLang = localStorage.getItem("cs_lang");
  if (savedLang && LANGS[savedLang]) { currentLang = savedLang; }
} catch (e) {}

UI.en = {
  title_home: "CareerSaathi - Free Career Guidance for Indian Students",
  title_explore: "Explore Careers - CareerSaathi",
  nav_home: "Home",
  nav_explore: "Explore Careers",
  nav_finder: "Career Finder",
  nav_about: "About",
  hero_title: "Understand your next step",
  hero_sub: "Free career guidance for every student in India, after Class 10, Class 12 and graduation.",
  btn_explore: "Explore Careers",
  btn_finder: "Start Career Finder",
  choose_stage: "Choose your stage",
  choose_sub: "Pick where you are right now and see the options available to you.",
  stage_class10: "After Class 10",
  stage_class12: "After Class 12",
  stage_graduation: "After Graduation",
  stage_iti: "ITI and Diploma",
  stage_govt: "Government Jobs and Exams",
  stage_skills: "Skills and Certifications",
  stage_jobs: "Jobs and Internships",
  stage_freelancing: "Freelancing",
  stage_business: "Starting a Business",
  desc_class10: "Choosing a stream, diplomas, ITI and other options.",
  desc_class12: "Degree courses, entrance exams and career paths.",
  desc_graduation: "Higher studies, jobs and competitive exams.",
  desc_iti: "Practical courses that help you start working sooner.",
  desc_govt: "Information about government jobs and competitive exams.",
  desc_skills: "Short courses that build your skills and resume.",
  desc_jobs: "Ways to get your first job, internship or apprenticeship.",
  desc_freelancing: "How to start working from home using your skills.",
  desc_business: "Practical steps to start a small business.",
  note_bold: "An important note:",
  note_text: "CareerSaathi gives general guidance only. Fees, eligibility and dates change every year, so always check the official website.",
  footer_disclaimer: "CareerSaathi gives general guidance only. Always verify fees, eligibility and dates on official websites. We do not guarantee admission, jobs or salary.",
  footer_copy: "© CareerSaathi",
  explore_title: "Explore Careers",
  explore_sub: "Sample records for testing. Real, verified information will be added soon.",
  all: "All",
  coming_soon: "Information for this section is coming soon.",
  back: "← Back to careers",
  not_found: "This career record was not found.",
  label_min_qual: "Minimum qualification",
  label_duration: "Duration",
  label_fees: "Estimated fees",
  fee_small: "This is a general note, not an official fee list.",
  label_skills: "Skills needed",
  label_jobs: "Possible job roles or next options",
  label_steps: "Practical next steps",
  label_source_box: "Source and verification",
  label_source: "Source:",
  label_last_verified: "Last verified:",
  label_status: "Status:",
  sample_note: "This is sample information. Always confirm details on the official website before making decisions.",
  verify_btn: "Verify on official website",
  verify_disabled: "Official link will be added after verification",
  status_needs: "Needs verification",
  not_verified: "Not verified yet",
  not_added: "Not added yet"
};

UI.hi = {
  title_home: "CareerSaathi - भारतीय विद्यार्थियों के लिए मुफ़्त करियर मार्गदर्शन",
  title_explore: "करियर देखें - CareerSaathi",
  nav_home: "होम",
  nav_explore: "करियर देखें",
  nav_finder: "करियर फाइंडर",
  nav_about: "हमारे बारे में",
  hero_title: "अपने भविष्य का अगला कदम समझें",
  hero_sub: "भारत के हर विद्यार्थी के लिए मुफ़्त करियर मार्गदर्शन: कक्षा 10, कक्षा 12 और ग्रेजुएशन के बाद।",
  btn_explore: "करियर देखें",
  btn_finder: "करियर फाइंडर शुरू करें",
  choose_stage: "अपना चरण चुनें",
  choose_sub: "अपनी मौजूदा स्थिति चुनिए और देखिए आपके पास कौन-से विकल्प हैं।",
  stage_class10: "कक्षा 10 के बाद",
  stage_class12: "कक्षा 12 के बाद",
  stage_graduation: "ग्रेजुएशन के बाद",
  stage_iti: "ITI और डिप्लोमा",
  stage_govt: "सरकारी नौकरी और परीक्षाएँ",
  stage_skills: "स्किल्स और सर्टिफिकेट",
  stage_jobs: "नौकरी और इंटर्नशिप",
  stage_freelancing: "फ्रीलांसिंग",
  stage_business: "अपना बिज़नेस शुरू करना",
  desc_class10: "स्ट्रीम चुनना, डिप्लोमा, ITI और दूसरे विकल्प।",
  desc_class12: "डिग्री कोर्स, प्रवेश परीक्षाएँ और करियर के रास्ते।",
  desc_graduation: "आगे की पढ़ाई, नौकरी और प्रतियोगी परीक्षाएँ।",
  desc_iti: "जल्दी काम शुरू करने वाले व्यावहारिक कोर्स।",
  desc_govt: "सरकारी नौकरी और प्रतियोगी परीक्षाओं की जानकारी।",
  desc_skills: "छोटे कोर्स जो स्किल्स और रिज़्यूमे को मज़बूत करते हैं।",
  desc_jobs: "पहली नौकरी, इंटर्नशिप और अप्रेंटिसशिप के रास्ते।",
  desc_freelancing: "अपनी स्किल से घर बैठे काम कैसे शुरू करें।",
  desc_business: "छोटा बिज़नेस शुरू करने के व्यावहारिक कदम।",
  note_bold: "एक ज़रूरी बात:",
  note_text: "CareerSaathi सामान्य जानकारी देता है। फीस, पात्रता और तारीखें हर साल बदलती हैं, इसलिए हमेशा आधिकारिक वेबसाइट पर जाँच करें।",
  footer_disclaimer: "CareerSaathi केवल सामान्य मार्गदर्शन देता है। फीस, पात्रता और तारीखें हमेशा आधिकारिक वेबसाइट पर जाँचें। हम प्रवेश, नौकरी या वेतन की गारंटी नहीं देते।",
  footer_copy: "© CareerSaathi",
  explore_title: "करियर देखें",
  explore_sub: "ये परीक्षण के लिए नमूना रिकॉर्ड हैं। असली, सत्यापित जानकारी जल्द जोड़ी जाएगी।",
  all: "सभी",
  coming_soon: "इस हिस्से की जानकारी जल्द आ रही है।",
  back: "← करियर की सूची पर वापस",
  not_found: "यह करियर रिकॉर्ड नहीं मिला।",
  label_min_qual: "न्यूनतम योग्यता",
  label_duration: "अवधि",
  label_fees: "अनुमानित फीस",
  fee_small: "यह एक सामान्य नोट है, आधिकारिक फीस सूची नहीं।",
  label_skills: "ज़रूरी स्किल्स",
  label_jobs: "संभावित नौकरी की भूमिकाएँ या आगे के विकल्प",
  label_steps: "व्यावहारिक अगले कदम",
  label_source_box: "स्रोत और सत्यापन",
  label_source: "स्रोत:",
  label_last_verified: "आख़िरी सत्यापन:",
  label_status: "स्थिति:",
  sample_note: "यह नमूना जानकारी है। कोई भी फ़ैसला लेने से पहले आधिकारिक वेबसाइट पर जानकारी ज़रूर जाँचें।",
  verify_btn: "आधिकारिक वेबसाइट पर जाँचें",
  verify_disabled: "सत्यापन के बाद आधिकारिक लिंक जोड़ा जाएगा",
  status_needs: "सत्यापन बाकी",
  not_verified: "अभी सत्यापित नहीं",
  not_added: "अभी जोड़ा नहीं गया"
};

UI.mr = {
  title_home: "CareerSaathi - भारतीय विद्यार्थ्यांसाठी मोफत करिअर मार्गदर्शन",
  title_explore: "करिअर पहा - CareerSaathi",
  nav_home: "मुख्यपृष्ठ",
  nav_explore: "करिअर पहा",
  nav_finder: "करिअर फाइंडर",
  nav_about: "आमच्याबद्दल",
  hero_title: "तुमचे पुढचे पाऊल समजून घ्या",
  hero_sub: "भारतातील प्रत्येक विद्यार्थ्यासाठी मोफत करिअर मार्गदर्शन: दहावी, बारावी आणि पदवीनंतर.",
  btn_explore: "करिअर पहा",
  btn_finder: "करिअर फाइंडर सुरू करा",
  choose_stage: "तुमचा टप्पा निवडा",
  choose_sub: "तुम्ही सध्या कुठे आहात ते निवडा आणि तुमच्यासाठी कोणते पर्याय आहेत ते पहा.",
  stage_class10: "दहावीनंतर",
  stage_class12: "बारावीनंतर",
  stage_graduation: "पदवीनंतर",
  stage_iti: "ITI आणि डिप्लोमा",
  stage_govt: "सरकारी नोकरी आणि परीक्षा",
  stage_skills: "कौशल्ये आणि प्रमाणपत्रे",
  stage_jobs: "नोकरी आणि इंटर्नशिप",
  stage_freelancing: "फ्रीलान्सिंग",
  stage_business: "स्वतःचा व्यवसाय सुरू करणे",
  desc_class10: "शाखा निवडणे, डिप्लोमा, ITI आणि इतर पर्याय.",
  desc_class12: "पदवी अभ्यासक्रम, प्रवेश परीक्षा आणि करिअरचे मार्ग.",
  desc_graduation: "पुढील शिक्षण, नोकऱ्या आणि स्पर्धा परीक्षा.",
  desc_iti: "लवकर काम सुरू करण्यास मदत करणारे व्यावहारिक अभ्यासक्रम.",
  desc_govt: "सरकारी नोकरी आणि स्पर्धा परीक्षांची माहिती.",
  desc_skills: "कौशल्ये आणि रिझ्युमे मजबूत करणारे छोटे अभ्यासक्रम.",
  desc_jobs: "पहिली नोकरी, इंटर्नशिप आणि अप्रेंटिसशिपचे मार्ग.",
  desc_freelancing: "तुमच्या कौशल्यातून घरबसल्या काम कसे सुरू करावे.",
  desc_business: "छोटा व्यवसाय सुरू करण्याच्या व्यावहारिक पायऱ्या.",
  note_bold: "एक महत्त्वाची गोष्ट:",
  note_text: "CareerSaathi सर्वसाधारण मार्गदर्शन देते. फी, पात्रता आणि तारखा दरवर्षी बदलतात, म्हणून नेहमी अधिकृत वेबसाइट तपासा.",
  footer_disclaimer: "CareerSaathi फक्त सर्वसाधारण मार्गदर्शन देते. फी, पात्रता आणि तारखा नेहमी अधिकृत वेबसाइटवर तपासा. आम्ही प्रवेश, नोकरी किंवा पगाराची हमी देत नाही.",
  footer_copy: "© CareerSaathi",
  explore_title: "करिअर पहा",
  explore_sub: "हे चाचणीसाठी नमुना रेकॉर्ड आहेत. खरी, पडताळलेली माहिती लवकरच जोडली जाईल.",
  all: "सर्व",
  coming_soon: "या विभागाची माहिती लवकरच येत आहे.",
  back: "← करिअर यादीकडे परत",
  not_found: "हे करिअर रेकॉर्ड सापडले नाही.",
  label_min_qual: "किमान पात्रता",
  label_duration: "कालावधी",
  label_fees: "अंदाजे फी",
  fee_small: "ही सर्वसाधारण नोंद आहे, अधिकृत फी यादी नाही.",
  label_skills: "आवश्यक कौशल्ये",
  label_jobs: "संभाव्य नोकरीच्या भूमिका किंवा पुढील पर्याय",
  label_steps: "व्यावहारिक पुढील पावले",
  label_source_box: "स्रोत आणि पडताळणी",
  label_source: "स्रोत:",
  label_last_verified: "शेवटची पडताळणी:",
  label_status: "स्थिती:",
  sample_note: "ही नमुना माहिती आहे. कोणताही निर्णय घेण्यापूर्वी अधिकृत वेबसाइटवर माहिती नक्की तपासा.",
  verify_btn: "अधिकृत वेबसाइटवर तपासा",
  verify_disabled: "पडताळणीनंतर अधिकृत लिंक जोडली जाईल",
  status_needs: "पडताळणी बाकी",
  not_verified: "अजून पडताळलेले नाही",
  not_added: "अजून जोडलेले नाही"
};

function t(key) {
  if (UI[currentLang] && UI[currentLang][key] !== undefined) { return UI[currentLang][key]; }
  if (UI.en[key] !== undefined) { return UI.en[key]; }
  return key;
}

function tc(career, field) {
  var tx = CAREER_TX[currentLang];
  if (tx && tx[career.slug] && tx[career.slug][field] !== undefined) {
    return tx[career.slug][field];
  }
  return career[field];
}

function statusLabel(s) { return s === "Needs verification" ? t("status_needs") : s; }
function verifiedLabel(s) { return s === "Not verified yet" ? t("not_verified") : s; }

function applyStatic() {
  document.documentElement.lang = currentLang;
  var els = document.querySelectorAll("[data-i18n]");
  for (var i = 0; i < els.length; i++) {
    els[i].textContent = t(els[i].getAttribute("data-i18n"));
  }
  var sel = document.getElementById("lang-select");
  if (sel) { sel.value = currentLang; }
}

function setLang(lang) {
  if (!LANGS[lang]) { return; }
  currentLang = lang;
  try { localStorage.setItem("cs_lang", lang); } catch (e) {}
  applyStatic();
  if (typeof renderPage === "function") { renderPage(); }
}

function buildLangSwitcher() {
  var inner = document.querySelector(".header-inner");
  if (!inner) { return; }
  var style = document.createElement("style");
  style.textContent = ".lang-select{font-size:1rem;padding:6px 10px;border:2px solid #1f4fa3;border-radius:10px;background:#fff;color:#1f4fa3;font-family:inherit;}";
  document.head.appendChild(style);

  var sel = document.createElement("select");
  sel.id = "lang-select";
  sel.className = "lang-select";
  sel.setAttribute("aria-label", "Language");
  Object.keys(LANGS).forEach(function (code) {
    var opt = document.createElement("option");
    opt.value = code;
    opt.textContent = LANGS[code];
    sel.appendChild(opt);
  });
  sel.value = currentLang;
  sel.addEventListener("change", function () { setLang(sel.value); });
  inner.appendChild(sel);
}
