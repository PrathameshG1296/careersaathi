// Diploma information. ROUGH ESTIMATES from general sources. Needs verification before real use.

var DIP_BRANCHES = [
  { n: { en: "Mechanical Engineering", hi: "मैकेनिकल इंजीनियरिंग", mr: "मेकॅनिकल इंजिनिअरिंग" },
    d: { en: "Machines, manufacturing and maintenance.", hi: "मशीनें, निर्माण और रखरखाव।", mr: "यंत्रे, उत्पादन आणि देखभाल." } },
  { n: { en: "Civil Engineering", hi: "सिविल इंजीनियरिंग", mr: "सिव्हिल इंजिनिअरिंग" },
    d: { en: "Buildings, roads, bridges and surveying.", hi: "इमारतें, सड़कें, पुल और सर्वेक्षण।", mr: "इमारती, रस्ते, पूल आणि सर्वेक्षण." } },
  { n: { en: "Electrical Engineering", hi: "इलेक्ट्रिकल इंजीनियरिंग", mr: "इलेक्ट्रिकल इंजिनिअरिंग" },
    d: { en: "Power supply, wiring, motors and electrical systems.", hi: "बिजली आपूर्ति, वायरिंग, मोटर और विद्युत प्रणालियाँ।", mr: "वीजपुरवठा, वायरिंग, मोटर आणि विद्युत प्रणाली." } },
  { n: { en: "Electronics and Telecommunication (E&TC)", hi: "इलेक्ट्रॉनिक्स और टेलीकम्युनिकेशन (E&TC)", mr: "इलेक्ट्रॉनिक्स आणि टेलिकम्युनिकेशन (E&TC)" },
    d: { en: "Electronic devices and communication systems.", hi: "इलेक्ट्रॉनिक उपकरण और संचार प्रणालियाँ।", mr: "इलेक्ट्रॉनिक उपकरणे आणि दळणवळण प्रणाली." } },
  { n: { en: "Computer Engineering", hi: "कंप्यूटर इंजीनियरिंग", mr: "कॉम्प्युटर इंजिनिअरिंग" },
    d: { en: "Programming, software and computer networks.", hi: "प्रोग्रामिंग, सॉफ्टवेयर और कंप्यूटर नेटवर्क।", mr: "प्रोग्रामिंग, सॉफ्टवेअर आणि कॉम्प्युटर नेटवर्क." } },
  { n: { en: "Information Technology (IT)", hi: "इन्फ़ॉर्मेशन टेक्नोलॉजी (IT)", mr: "इन्फॉर्मेशन टेक्नॉलॉजी (IT)" },
    d: { en: "Software, websites and databases.", hi: "सॉफ्टवेयर, वेबसाइट और डेटाबेस।", mr: "सॉफ्टवेअर, वेबसाइट आणि डेटाबेस." } },
  { n: { en: "Automobile Engineering", hi: "ऑटोमोबाइल इंजीनियरिंग", mr: "ऑटोमोबाईल इंजिनिअरिंग" },
    d: { en: "Vehicles, engines and servicing.", hi: "वाहन, इंजन और सर्विसिंग।", mr: "वाहने, इंजिन आणि सर्व्हिसिंग." } },
  { n: { en: "Industrial Electronics", hi: "इंडस्ट्रियल इलेक्ट्रॉनिक्स", mr: "इंडस्ट्रियल इलेक्ट्रॉनिक्स" },
    d: { en: "Electronics used in factories and automation.", hi: "कारख़ानों और ऑटोमेशन में काम आने वाला इलेक्ट्रॉनिक्स।", mr: "कारखाने आणि ऑटोमेशनमध्ये वापरले जाणारे इलेक्ट्रॉनिक्स." } },
  { n: { en: "Foundry Technology", hi: "फाउंड्री टेक्नोलॉजी", mr: "फाउंड्री टेक्नॉलॉजी" },
    d: { en: "Metal casting and related processes (offered in some colleges).", hi: "धातु ढलाई और संबंधित प्रक्रियाएँ (कुछ कॉलेजों में)।", mr: "धातू ओतकाम आणि संबंधित प्रक्रिया (काही कॉलेजांत)." } },
  { n: { en: "Sugar Technology", hi: "शुगर टेक्नोलॉजी", mr: "शुगर टेक्नॉलॉजी" },
    d: { en: "Sugar production processes (offered in some Maharashtra colleges).", hi: "चीनी उत्पादन की प्रक्रियाएँ (महाराष्ट्र के कुछ कॉलेजों में)।", mr: "साखर उत्पादन प्रक्रिया (महाराष्ट्रातील काही कॉलेजांत)." } },
  { n: { en: "Fashion and Textile Design", hi: "फ़ैशन और टेक्सटाइल डिज़ाइन", mr: "फॅशन आणि टेक्सटाइल डिझाइन" },
    d: { en: "Designing clothes and textiles (offered in some colleges).", hi: "कपड़े और टेक्सटाइल की डिज़ाइनिंग (कुछ कॉलेजों में)।", mr: "कपडे आणि टेक्सटाइल डिझाइन (काही कॉलेजांत)." } },
  { n: { en: "Pharmacy (after Class 12)", hi: "फार्मेसी (कक्षा 12 के बाद)", mr: "फार्मसी (बारावीनंतर)" },
    d: { en: "Medicines and pharmacy work. It is taken after Class 12, separately from engineering diplomas.", hi: "दवाओं और फार्मेसी का काम। यह कक्षा 12 के बाद होता है, इंजीनियरिंग डिप्लोमा से अलग।", mr: "औषधे आणि फार्मसीचे काम. हे बारावीनंतर घेतले जाते, इंजिनिअरिंग डिप्लोमापासून वेगळे." } }
];

var DIP_T = {};

DIP_T.en = {
  title: "Diploma (Polytechnic) Courses",
  sub: "After Class 10: what diploma courses are, what it costs and what you may earn.",
  disc: "All fees and pay figures are rough estimates from general websites and job notices, not from one official source. They still need verification and are not a promise of any seat, job or salary.",
  hwhat: "What is a diploma?",
  what: [
    "An engineering diploma (polytechnic) is usually a 3-year course after Class 10.",
    "After it you can work as a technician or supervisor, or in many cases join a degree course directly in the second year (lateral entry).",
    "In Maharashtra, admission is based on Class 10 marks through a centralised process, and one source says there is no entrance test (CET) for diploma admission. Other states may have different rules, so check yours."
  ],
  h35: "If you have around 35% in Class 10",
  p35: [
    "The minimum marks differ between sources: some Maharashtra pages mention 35% in Class 10, while college pages linked to the state technical board mention 50% (45% for backward classes from Maharashtra). Check the latest official DTE brochure for the exact rule.",
    "Admission is on Class 10 merit, so with lower marks you may get a seat mainly through the institute-level (vacancy) rounds, often in private polytechnics.",
    "First-year admission usually needs Maths (or Algebra and Geometry), Science and English in Class 10.",
    "An ITI can be another route. Some pages mention direct second-year diploma entry for ITI holders, often with at least 60% marks in the ITI, so keep your ITI marks high.",
    "Do not pay agents for a seat. Apply only on your state's official portal."
  ],
  hbranches: "Common diploma branches (a sample list)",
  branches_sub: "Not every college offers every branch. Check each college's list.",
  hfees: "Approximate fees: government vs private polytechnic",
  fg_title: "Government polytechnic",
  fg: [
    "About Rs 6,000 to Rs 25,000 per year in one estimate, so roughly Rs 18,000 to Rs 75,000 for 3 years.",
    "Example: Government Polytechnic Kolhapur lists about Rs 7,750 for the first year in most engineering branches.",
    "Hostel, books and exam fees are extra (hostel roughly Rs 10,000 to Rs 30,000 per year in one estimate).",
    "Some states and categories get fee concessions and scholarships."
  ],
  fp_title: "Private polytechnic",
  fp: [
    "About Rs 25,000 to Rs 80,000 per year in one estimate and Rs 40,000 to over Rs 1 lakh in another, so roughly Rs 75,000 to Rs 2,40,000 or more for 3 years.",
    "Fees vary a lot by college and facilities. Compare before you join. Government colleges are usually much cheaper."
  ],
  hpay: "Approximate pay after a diploma: private vs government job",
  pp_title: "Private sector job",
  pp: [
    "Diploma apprentice stipend examples: about Rs 8,000 to Rs 10,900 per month in several notices (a research centre, a defence lab and a private company).",
    "One private job listing for ITI/diploma freshers in Haryana showed Rs 15,500 to Rs 20,000 per month. We did not find a reliable average salary for diploma holders, so treat these as examples only.",
    "Pay depends on branch, city, company and your skills."
  ],
  pg_title: "Government job",
  pg: [
    "Junior Engineer (JE) posts in central government (SSC JE, RRB JE) accept diploma holders in the matching branch. They start at Pay Level 6 with Rs 35,400 basic pay per month plus allowances. In-hand pay depends on the city.",
    "Some JE posts ask for a diploma plus work experience. Selection is by a competitive exam with limited seats and is not guaranteed.",
    "Other government jobs open to diploma holders exist at central and state level. Read each official notification."
  ],
  pay_note: "Pay rules and allowances can change. Always read the latest official notification.",
  hafter: "What can you do after a diploma?",
  after: [
    "Work as a technician, supervisor or trainee in industry.",
    "Join a degree course (B.E. or B.Tech) directly in the second year in many cases. Check each college's rule.",
    "Prepare for government exams such as Junior Engineer (JE).",
    "Start your own small workshop or service work after gaining experience."
  ],
  hfind: "How to find polytechnic colleges",
  find: [
    "Maharashtra: <a href='https://dte.maharashtra.gov.in' target='_blank' rel='noopener'><strong>dte.maharashtra.gov.in</strong></a>, the Directorate of Technical Education portal for diploma admission.",
    "Other states: search for your state's technical education department (DTE) portal.",
    "Check that a college is AICTE approved before you pay any fee.",
    "State-wise diploma details will be added after verification.",
    "See also: <a href='iti.html'><strong>ITI trades, fees and pay</strong></a>"
  ],
  final: "Before any final decision, check official information and talk to a trusted person such as a teacher or counsellor. We do not guarantee admission, jobs or salary."
};

DIP_T.hi = {
  title: "डिप्लोमा (पॉलिटेक्निक) कोर्स",
  sub: "कक्षा 10 के बाद: डिप्लोमा कोर्स क्या हैं, कितना खर्च होगा और कितनी कमाई हो सकती है।",
  disc: "फीस और कमाई के सभी आँकड़े सामान्य वेबसाइटों और नौकरी की सूचनाओं से लिए गए मोटे अनुमान हैं, किसी एक आधिकारिक स्रोत से नहीं। इनका सत्यापन बाकी है और ये किसी सीट, नौकरी या वेतन का वादा नहीं हैं।",
  hwhat: "डिप्लोमा क्या है?",
  what: [
    "इंजीनियरिंग डिप्लोमा (पॉलिटेक्निक) आमतौर पर कक्षा 10 के बाद का 3 साल का कोर्स होता है।",
    "इसके बाद आप टेक्नीशियन या सुपरवाइज़र के रूप में काम कर सकते हैं, या कई मामलों में सीधे दूसरे साल में डिग्री कोर्स (लेटरल एंट्री) में जा सकते हैं।",
    "महाराष्ट्र में प्रवेश कक्षा 10 के अंकों पर केंद्रीकृत प्रक्रिया से होता है, और एक स्रोत के अनुसार डिप्लोमा प्रवेश के लिए कोई प्रवेश परीक्षा (CET) नहीं होती। दूसरे राज्यों में नियम अलग हो सकते हैं, इसलिए अपने राज्य के नियम देखें।"
  ],
  h35: "अगर कक्षा 10 में लगभग 35% अंक हैं",
  p35: [
    "न्यूनतम अंकों पर स्रोत अलग-अलग बताते हैं: महाराष्ट्र के कुछ पेज कक्षा 10 में 35% बताते हैं, जबकि राज्य तकनीकी बोर्ड से जुड़े कॉलेज पेज 50% बताते हैं (महाराष्ट्र के पिछड़े वर्ग के लिए 45%)। सटीक नियम के लिए नवीनतम आधिकारिक DTE ब्रोशर देखें।",
    "प्रवेश कक्षा 10 की मेरिट पर होता है, इसलिए कम अंकों में सीट मुख्य रूप से संस्थान-स्तर (खाली सीट) वाले राउंड से मिल सकती है, अक्सर निजी पॉलिटेक्निक में।",
    "पहले साल के प्रवेश के लिए आमतौर पर कक्षा 10 में गणित (या बीजगणित और ज्यामिति), विज्ञान और अंग्रेज़ी चाहिए।",
    "ITI भी एक रास्ता हो सकता है। कुछ पेज ITI वालों के लिए डिप्लोमा में सीधे दूसरे साल के प्रवेश की बात करते हैं, अक्सर ITI में कम से कम 60% अंकों के साथ, इसलिए ITI के अंक अच्छे रखें।",
    "सीट के लिए एजेंट को पैसे न दें। सिर्फ़ अपने राज्य के आधिकारिक पोर्टल पर आवेदन करें।"
  ],
  hbranches: "आम डिप्लोमा ब्रांच (एक नमूना सूची)",
  branches_sub: "हर कॉलेज में हर ब्रांच नहीं होती। हर कॉलेज की सूची देखें।",
  hfees: "अनुमानित फीस: सरकारी बनाम निजी पॉलिटेक्निक",
  fg_title: "सरकारी पॉलिटेक्निक",
  fg: [
    "एक अनुमान के अनुसार साल का लगभग ₹6,000 से ₹25,000, यानी 3 साल में लगभग ₹18,000 से ₹75,000।",
    "उदाहरण: गवर्नमेंट पॉलिटेक्निक कोल्हापुर में ज़्यादातर इंजीनियरिंग ब्रांच के लिए पहले साल की फीस लगभग ₹7,750 बताई गई है।",
    "हॉस्टल, किताबें और परीक्षा शुल्क अलग हैं (एक अनुमान में हॉस्टल लगभग ₹10,000 से ₹30,000 प्रति वर्ष)।",
    "कुछ राज्यों और श्रेणियों को फीस में छूट और छात्रवृत्ति मिलती है।"
  ],
  fp_title: "निजी पॉलिटेक्निक",
  fp: [
    "एक अनुमान में साल का लगभग ₹25,000 से ₹80,000 और दूसरे में ₹40,000 से ₹1 लाख से ऊपर, यानी 3 साल में लगभग ₹75,000 से ₹2,40,000 या उससे ज़्यादा।",
    "फीस कॉलेज और सुविधाओं के अनुसार काफ़ी अलग होती है। दाख़िले से पहले तुलना करें। सरकारी कॉलेज आमतौर पर बहुत सस्ते होते हैं।"
  ],
  hpay: "डिप्लोमा के बाद अनुमानित कमाई: निजी बनाम सरकारी नौकरी",
  pp_title: "निजी क्षेत्र की नौकरी",
  pp: [
    "डिप्लोमा अप्रेंटिस स्टाइपेंड के उदाहरण: कई सूचनाओं (एक शोध केंद्र, एक रक्षा लैब और एक निजी कंपनी) में लगभग ₹8,000 से ₹10,900 प्रति माह।",
    "हरियाणा में ITI/डिप्लोमा फ्रेशर के लिए एक निजी नौकरी लिस्टिंग में ₹15,500 से ₹20,000 प्रति माह दिखा। डिप्लोमा वालों के लिए हमें कोई भरोसेमंद औसत वेतन नहीं मिला, इसलिए इन्हें सिर्फ़ उदाहरण समझें।",
    "कमाई ब्रांच, शहर, कंपनी और आपकी स्किल पर निर्भर करती है।"
  ],
  pg_title: "सरकारी नौकरी",
  pg: [
    "केंद्र सरकार के जूनियर इंजीनियर (JE) पदों (SSC JE, RRB JE) के लिए संबंधित ब्रांच के डिप्लोमा वाले आवेदन कर सकते हैं। ये पे लेवल 6 में ₹35,400 बेसिक पे प्रति माह और भत्तों के साथ शुरू होते हैं। हाथ में आने वाली राशि शहर पर निर्भर करती है।",
    "कुछ JE पदों के लिए डिप्लोमा के साथ काम का अनुभव माँगा जाता है। चयन प्रतियोगी परीक्षा से होता है, सीटें सीमित हैं और चयन की गारंटी नहीं है।",
    "डिप्लोमा वालों के लिए केंद्र और राज्य स्तर पर और भी सरकारी नौकरियाँ हैं। हर आधिकारिक सूचना पढ़ें।"
  ],
  pay_note: "वेतन के नियम और भत्ते बदल सकते हैं। हमेशा नवीनतम आधिकारिक सूचना पढ़ें।",
  hafter: "डिप्लोमा के बाद आप क्या कर सकते हैं?",
  after: [
    "उद्योग में टेक्नीशियन, सुपरवाइज़र या ट्रेनी के रूप में काम करें।",
    "कई मामलों में सीधे दूसरे साल में डिग्री कोर्स (B.E. या B.Tech) में जाएँ। हर कॉलेज का नियम देखें।",
    "जूनियर इंजीनियर (JE) जैसी सरकारी परीक्षाओं की तैयारी करें।",
    "अनुभव के बाद अपनी छोटी वर्कशॉप या सर्विस का काम शुरू करें।"
  ],
  hfind: "पॉलिटेक्निक कॉलेज कैसे खोजें",
  find: [
    "महाराष्ट्र: <a href='https://dte.maharashtra.gov.in' target='_blank' rel='noopener'><strong>dte.maharashtra.gov.in</strong></a>, डिप्लोमा प्रवेश के लिए तकनीकी शिक्षा संचालनालय (DTE) का पोर्टल।",
    "दूसरे राज्य: अपने राज्य के तकनीकी शिक्षा विभाग (DTE) का पोर्टल खोजें।",
    "कोई भी फीस देने से पहले जाँच लें कि कॉलेज AICTE से मान्यता प्राप्त है।",
    "राज्यवार डिप्लोमा जानकारी सत्यापन के बाद जोड़ी जाएगी।",
    "यह भी देखें: <a href='iti.html'><strong>ITI ट्रेड, फीस और कमाई</strong></a>"
  ],
  final: "अंतिम फ़ैसले से पहले आधिकारिक जानकारी जाँचें और किसी भरोसेमंद व्यक्ति, जैसे शिक्षक या काउंसलर, से सलाह लें। हम प्रवेश, नौकरी या वेतन की गारंटी नहीं देते।"
};

DIP_T.mr = {
  title: "डिप्लोमा (पॉलिटेक्निक) अभ्यासक्रम",
  sub: "दहावीनंतर: डिप्लोमा अभ्यासक्रम म्हणजे काय, किती खर्च येतो आणि किती कमाई होऊ शकते.",
  disc: "फी आणि कमाईची सर्व आकडेवारी सर्वसाधारण वेबसाइट्स आणि नोकरीच्या सूचनांमधून घेतलेला ढोबळ अंदाज आहे, एकाच अधिकृत स्रोतातून नाही. पडताळणी बाकी आहे आणि हे कोणत्याही जागेचे, नोकरीचे किंवा पगाराचे आश्वासन नाही.",
  hwhat: "डिप्लोमा म्हणजे काय?",
  what: [
    "इंजिनिअरिंग डिप्लोमा (पॉलिटेक्निक) हा सहसा दहावीनंतरचा 3 वर्षांचा अभ्यासक्रम असतो.",
    "यानंतर तुम्ही तंत्रज्ञ किंवा पर्यवेक्षक म्हणून काम करू शकता, किंवा अनेक बाबतीत थेट दुसऱ्या वर्षात पदवी अभ्यासक्रमात (लॅटरल एंट्री) जाऊ शकता.",
    "महाराष्ट्रात प्रवेश दहावीच्या गुणांवर केंद्रीय प्रक्रियेद्वारे होतो, आणि एका स्रोतानुसार डिप्लोमा प्रवेशासाठी प्रवेश परीक्षा (CET) नाही. इतर राज्यांत नियम वेगळे असू शकतात, म्हणून तुमच्या राज्याचे नियम तपासा."
  ],
  h35: "दहावीत सुमारे 35% गुण असतील तर",
  p35: [
    "किमान गुणांबाबत स्रोत वेगवेगळे सांगतात: महाराष्ट्रातील काही पेज दहावीत 35% सांगतात, तर राज्य तंत्र मंडळाशी जोडलेले कॉलेज पेज 50% सांगतात (महाराष्ट्रातील मागासवर्गीयांसाठी 45%). अचूक नियमासाठी नवीनतम अधिकृत DTE माहितीपुस्तिका पहा.",
    "प्रवेश दहावीच्या गुणवत्तेनुसार होतो, म्हणून कमी गुणांत जागा मुख्यत्वे संस्था-स्तरीय (रिक्त जागा) फेऱ्यांतून मिळू शकते, अनेकदा खाजगी पॉलिटेक्निकमध्ये.",
    "पहिल्या वर्षाच्या प्रवेशासाठी सहसा दहावीत गणित (किंवा बीजगणित आणि भूमिती), विज्ञान आणि इंग्रजी लागते.",
    "ITI हाही एक मार्ग असू शकतो. काही पेज ITI धारकांसाठी डिप्लोमाच्या थेट दुसऱ्या वर्षाच्या प्रवेशाबद्दल सांगतात, अनेकदा ITI मध्ये किमान 60% गुणांसह, म्हणून ITI चे गुण चांगले ठेवा.",
    "जागेसाठी एजंटला पैसे देऊ नका. फक्त तुमच्या राज्याच्या अधिकृत पोर्टलवर अर्ज करा."
  ],
  hbranches: "सर्वसाधारण डिप्लोमा शाखा (नमुना यादी)",
  branches_sub: "प्रत्येक कॉलेजमध्ये प्रत्येक शाखा नसते. प्रत्येक कॉलेजची यादी तपासा.",
  hfees: "अंदाजे फी: सरकारी विरुद्ध खाजगी पॉलिटेक्निक",
  fg_title: "सरकारी पॉलिटेक्निक",
  fg: [
    "एका अंदाजानुसार वर्षाला सुमारे ₹6,000 ते ₹25,000, म्हणजे 3 वर्षांसाठी सुमारे ₹18,000 ते ₹75,000.",
    "उदाहरण: गव्हर्नमेंट पॉलिटेक्निक कोल्हापूरमध्ये बहुतेक इंजिनिअरिंग शाखांसाठी पहिल्या वर्षाची फी सुमारे ₹7,750 दिली आहे.",
    "वसतिगृह, पुस्तके आणि परीक्षा शुल्क वेगळे आहे (एका अंदाजानुसार वसतिगृह सुमारे ₹10,000 ते ₹30,000 प्रतिवर्ष).",
    "काही राज्ये आणि प्रवर्गांना फी सवलत आणि शिष्यवृत्ती मिळते."
  ],
  fp_title: "खाजगी पॉलिटेक्निक",
  fp: [
    "एका अंदाजानुसार वर्षाला सुमारे ₹25,000 ते ₹80,000 आणि दुसऱ्या अंदाजानुसार ₹40,000 ते ₹1 लाखांपेक्षा जास्त, म्हणजे 3 वर्षांसाठी सुमारे ₹75,000 ते ₹2,40,000 किंवा जास्त.",
    "फी कॉलेज आणि सुविधांनुसार खूप वेगळी असते. प्रवेशापूर्वी तुलना करा. सरकारी कॉलेज सहसा खूप स्वस्त असतात."
  ],
  hpay: "डिप्लोमानंतर अंदाजे कमाई: खाजगी विरुद्ध सरकारी नोकरी",
  pp_title: "खाजगी क्षेत्रातील नोकरी",
  pp: [
    "डिप्लोमा अप्रेंटिस स्टायपेंडची उदाहरणे: अनेक सूचनांमध्ये (एक संशोधन केंद्र, एक संरक्षण प्रयोगशाळा आणि एक खाजगी कंपनी) दरमहा सुमारे ₹8,000 ते ₹10,900.",
    "हरियाणातील ITI/डिप्लोमा फ्रेशर्ससाठीच्या एका खाजगी नोकरी लिस्टिंगमध्ये दरमहा ₹15,500 ते ₹20,000 दिसले. डिप्लोमा धारकांसाठी विश्वासार्ह सरासरी पगार आम्हाला सापडला नाही, म्हणून ही फक्त उदाहरणे समजा.",
    "कमाई शाखा, शहर, कंपनी आणि तुमच्या कौशल्यावर अवलंबून असते."
  ],
  pg_title: "सरकारी नोकरी",
  pg: [
    "केंद्र सरकारच्या कनिष्ठ अभियंता (JE) पदांसाठी (SSC JE, RRB JE) संबंधित शाखेचे डिप्लोमा धारक अर्ज करू शकतात. ही पदे पे लेव्हल 6 मध्ये दरमहा ₹35,400 बेसिक पे आणि भत्त्यांसह सुरू होतात. हातात येणारी रक्कम शहरावर अवलंबून असते.",
    "काही JE पदांसाठी डिप्लोमासोबत कामाचा अनुभव मागितला जातो. निवड स्पर्धा परीक्षेतून होते, जागा मर्यादित आहेत आणि निवडीची हमी नाही.",
    "डिप्लोमा धारकांसाठी केंद्र आणि राज्य स्तरावर इतरही सरकारी नोकऱ्या आहेत. प्रत्येक अधिकृत सूचना वाचा."
  ],
  pay_note: "वेतनाचे नियम आणि भत्ते बदलू शकतात. नेहमी नवीनतम अधिकृत सूचना वाचा.",
  hafter: "डिप्लोमानंतर तुम्ही काय करू शकता?",
  after: [
    "उद्योगात तंत्रज्ञ, पर्यवेक्षक किंवा प्रशिक्षणार्थी म्हणून काम करा.",
    "अनेक बाबतीत थेट दुसऱ्या वर्षात पदवी अभ्यासक्रमात (B.E. किंवा B.Tech) जा. प्रत्येक कॉलेजचा नियम तपासा.",
    "कनिष्ठ अभियंता (JE) सारख्या सरकारी परीक्षांची तयारी करा.",
    "अनुभवानंतर स्वतःची लहान वर्कशॉप किंवा सर्व्हिसचे काम सुरू करा."
  ],
  hfind: "पॉलिटेक्निक कॉलेज कसे शोधावेत",
  find: [
    "महाराष्ट्र: <a href='https://dte.maharashtra.gov.in' target='_blank' rel='noopener'><strong>dte.maharashtra.gov.in</strong></a>, डिप्लोमा प्रवेशासाठी तंत्रशिक्षण संचालनालयाचे (DTE) पोर्टल.",
    "इतर राज्ये: तुमच्या राज्याच्या तंत्रशिक्षण विभागाचे (DTE) पोर्टल शोधा.",
    "कोणतीही फी भरण्यापूर्वी कॉलेज AICTE मान्यताप्राप्त आहे याची खात्री करा.",
    "राज्यानुसार डिप्लोमा माहिती पडताळणीनंतर जोडली जाईल.",
    "हेही पहा: <a href='iti.html'><strong>ITI ट्रेड, फी आणि कमाई</strong></a>"
  ],
  final: "अंतिम निर्णयापूर्वी अधिकृत माहिती तपासा आणि शिक्षक किंवा समुपदेशकासारख्या विश्वासू व्यक्तीचा सल्ला घ्या. आम्ही प्रवेश, नोकरी किंवा पगाराची हमी देत नाही."
};

function dt(key) {
  var l = DIP_T[currentLang];
  if (l && l[key] !== undefined) { return l[key]; }
  return DIP_T.en[key];
}
