// ITI trades, fees and pay. ROUGH ESTIMATES from general sources. Needs verification before real use.

var ITI_TRADES = [
  { id: "electrician", years: 2, elig: "e10ms", ms: true, names: { en: "Electrician", hi: "इलेक्ट्रीशियन", mr: "इलेक्ट्रिशियन" } },
  { id: "fitter", years: 2, elig: "e10ms", ms: true, names: { en: "Fitter", hi: "फिटर", mr: "फिटर" } },
  { id: "turner", years: 2, elig: "e10ms", ms: true, names: { en: "Turner", hi: "टर्नर", mr: "टर्नर" } },
  { id: "machinist", years: 2, elig: "e10ms", ms: true, names: { en: "Machinist", hi: "मशीनिस्ट", mr: "मशिनिस्ट" } },
  { id: "electronics", years: 2, elig: "e10ms", ms: true, names: { en: "Electronics Mechanic", hi: "इलेक्ट्रॉनिक्स मैकेनिक", mr: "इलेक्ट्रॉनिक्स मेकॅनिक" } },
  { id: "mmv", years: 2, elig: "e10ms", ms: true, names: { en: "Mechanic Motor Vehicle", hi: "मैकेनिक मोटर व्हीकल", mr: "मेकॅनिक मोटर व्हेईकल" } },
  { id: "draughtsman", years: 2, elig: "e10ms", ms: true, names: { en: "Draughtsman (Civil)", hi: "ड्राफ्ट्समैन (सिविल)", mr: "ड्राफ्ट्समन (सिव्हिल)" } },
  { id: "refac", years: 2, elig: "e10ms", ms: true, names: { en: "Refrigeration and AC Mechanic", hi: "रेफ्रिजरेशन और AC मैकेनिक", mr: "रेफ्रिजरेशन आणि AC मेकॅनिक" } },
  { id: "wireman", years: 2, elig: "e8", ms: false, names: { en: "Wireman", hi: "वायरमैन", mr: "वायरमन" } },
  { id: "diesel", years: 1, elig: "e10var", ms: false, names: { en: "Mechanic Diesel", hi: "मैकेनिक डीज़ल", mr: "मेकॅनिक डिझेल" } },
  { id: "welder", years: 1, elig: "e8or10", ms: false, names: { en: "Welder", hi: "वेल्डर", mr: "वेल्डर" } },
  { id: "plumber", years: 1, elig: "e8or10", ms: false, names: { en: "Plumber", hi: "प्लंबर", mr: "प्लंबर" } },
  { id: "carpenter", years: 1, elig: "e8", ms: false, names: { en: "Carpenter (Wood Work Technician)", hi: "कारपेंटर (वुड वर्क टेक्नीशियन)", mr: "सुतारकाम (कारपेंटर)" } },
  { id: "mason", years: 1, elig: "e8", ms: false, names: { en: "Mason (Building Constructor)", hi: "मेसन (बिल्डिंग कंस्ट्रक्टर)", mr: "मेसन (बिल्डिंग कन्स्ट्रक्टर)" } },
  { id: "copa", years: 1, elig: "e10", ms: false, names: { en: "COPA (Computer Operator and Programming Assistant)", hi: "COPA (कंप्यूटर ऑपरेटर और प्रोग्रामिंग असिस्टेंट)", mr: "COPA (कॉम्प्युटर ऑपरेटर आणि प्रोग्रामिंग असिस्टंट)" } },
  { id: "sewing", years: 1, elig: "e8", ms: false, names: { en: "Sewing Technology", hi: "सिलाई तकनीक (सिविंग टेक्नोलॉजी)", mr: "शिवणकाम (सिव्हिंग टेक्नॉलॉजी)" } },
  { id: "steno", years: 1, elig: "e10", ms: false, names: { en: "Stenographer and Secretarial Assistant", hi: "स्टेनोग्राफर और सेक्रेटेरियल असिस्टेंट", mr: "स्टेनोग्राफर आणि सेक्रेटरियल असिस्टंट" } }
];

var ITI_T = {};

ITI_T.en = {
  title: "ITI Trades, Fees and Pay",
  sub: "After Class 10: what you can do, how long it takes, what it costs and what you may earn.",
  disc: "All fees and pay figures are rough estimates from general websites and job notices, not from one official source. They still need verification and are not a promise of any seat, job or salary.",
  h35: "If you have around 35% in Class 10",
  p35: [
    "35% is generally the passing mark, and sources say ITIs usually ask for a Class 10 pass with roughly 35% to 40% marks, so you may be eligible. Please check your state's rules.",
    "But admission is by merit. With 35% it can be hard to get a seat in popular trades or the best government ITIs. Seats in less popular trades, other ITIs or private ITIs are more likely.",
    "Trades that ask for Maths and Science in Class 10 need those subjects in your marksheet. If you did not study them, look at the trades marked 'No Maths-Science condition found' below.",
    "Fill as many preferences as the form allows, apply early, and keep checking for seats in later counselling rounds.",
    "If you did not pass Class 10, some Class 8 trades (like Carpenter, Mason or Sewing) may still be possible. Check your state's notice.",
    "Never pay an agent who promises a seat. Apply only on your state's official portal."
  ],
  htrades: "ITI trades (a sample list)",
  trades_sub: "India has 130+ ITI trades. These are common ones. Duration and eligibility differ by state, so check your state's notice.",
  f_all: "All trades",
  f_1: "1 year",
  f_2: "2 years",
  f_noms: "No Maths-Science condition found",
  l_dur: "Duration:",
  l_elig: "Eligibility:",
  dur_1: "1 year",
  dur_2: "2 years",
  e8: "Class 8 pass (varies by state)",
  e10: "Class 10 pass",
  e10ms: "Class 10 pass with Maths and Science",
  e10var: "Class 10 pass (some states ask for Maths and Science)",
  e8or10: "Class 8 or Class 10 pass (varies by state)",
  hfees: "Approximate fees: government vs private ITI",
  fg_title: "Government ITI",
  fg: [
    "About Rs 1,000 to Rs 3,000 per year in one estimate, and up to about Rs 10,000 in another.",
    "For a 2-year trade, roughly Rs 2,000 to Rs 6,000 in total (approximate).",
    "Some states give fee concessions to certain categories."
  ],
  fp_title: "Private ITI",
  fp: [
    "About Rs 10,000 to Rs 50,000 per year (examples found for Electrician: Rs 24,500 and Rs 27,000 per year).",
    "For a 2-year trade, roughly Rs 20,000 to Rs 1,00,000 in total (approximate).",
    "A central fee limit of about Rs 26,000 per year (engineering trades) and Rs 21,200 (non-engineering) was reported in 2022, with up to 5% yearly increase allowed from 2024."
  ],
  fees_more: "Hostel, uniform, tools and exam fees may be extra. Some states give scholarships. Check your state portal and the National Scholarship Portal.",
  hpay: "Approximate pay after ITI: private vs government job",
  pp_title: "Private sector job",
  pp: [
    "Apprentice stipend at the start: about Rs 7,700 to Rs 10,000 per month in several notices.",
    "One career website estimates starting salaries of ITI graduates at about Rs 10,000 to Rs 18,000 per month. Some job ads show more or less.",
    "Pay grows with skill and experience. City, company, trade and overtime change it."
  ],
  pg_title: "Government job",
  pg: [
    "Some government jobs are open to ITI holders, for example in Indian Railways. RRB Group D (Level 1) starts at Rs 18,000 basic pay per month plus allowances. One website puts the gross at about Rs 21,000 to Rs 25,000.",
    "These jobs need a competitive exam, seats are limited and selection is not guaranteed. An apprenticeship alone does not guarantee a job.",
    "Pay rules and allowances can change, so check the latest official notification."
  ],
  pay_note: "Pay mostly depends on your skills, your trade and the employer. Only NCVT-affiliated trades issue the National Trade Certificate that employers recognise, so check the ITI's affiliation before joining.",
  hfind: "How to find ITIs near you",
  find: [
    "India has around 14,000 ITIs (one source counts 2,204 government and 12,108 private), so the list depends on your state and district.",
    "Step 1: open <a href='https://ncvtmis.gov.in' target='_blank' rel='noopener'><strong>ncvtmis.gov.in</strong></a>. You can search affiliated ITIs by state and district, with their trades and seats.",
    "Step 2: also find your state's official ITI admission portal (search for your state name and ITI admission) for dates, forms and merit lists.",
    "Step 3: for a private ITI, confirm it is listed on ncvtmis.gov.in before paying any fee.",
    "State-wise ITI lists will be added here after verification."
  ],
  final: "Before any final decision, check official information and talk to a trusted person such as a teacher or counsellor. We do not guarantee admission, jobs or salary."
};

ITI_T.hi = {
  title: "ITI ट्रेड, फीस और कमाई",
  sub: "कक्षा 10 के बाद: आप क्या कर सकते हैं, कितना समय लगेगा, कितना खर्च होगा और कितनी कमाई हो सकती है।",
  disc: "फीस और कमाई के सभी आँकड़े सामान्य वेबसाइटों और नौकरी की सूचनाओं से लिए गए मोटे अनुमान हैं, किसी एक आधिकारिक स्रोत से नहीं। इनका सत्यापन बाकी है और ये किसी सीट, नौकरी या वेतन का वादा नहीं हैं।",
  h35: "अगर कक्षा 10 में लगभग 35% अंक हैं",
  p35: [
    "35% आमतौर पर पास होने के अंक हैं, और स्रोतों के अनुसार ITI में आमतौर पर कक्षा 10 पास और लगभग 35% से 40% अंक माँगे जाते हैं, इसलिए आप पात्र हो सकते हैं। अपने राज्य के नियम ज़रूर देखें।",
    "लेकिन प्रवेश मेरिट पर होता है। 35% में लोकप्रिय ट्रेड और सबसे अच्छे सरकारी ITI में सीट मिलना मुश्किल हो सकता है। कम लोकप्रिय ट्रेड, दूसरे ITI या निजी ITI में सीट मिलने की संभावना ज़्यादा है।",
    "जिन ट्रेड में कक्षा 10 में गणित और विज्ञान माँगा जाता है, उनके लिए आपकी मार्कशीट में ये विषय होने चाहिए। न पढ़े हों तो नीचे 'गणित-विज्ञान की शर्त नहीं मिली' वाले ट्रेड देखें।",
    "फ़ॉर्म में जितने विकल्प भरने की अनुमति हो उतने भरें, जल्दी आवेदन करें, और अगले काउंसलिंग राउंड में सीटें देखते रहें।",
    "अगर कक्षा 10 पास नहीं हुए हैं, तो कक्षा 8 वाले कुछ ट्रेड (जैसे कारपेंटर, मेसन, सिलाई) संभव हो सकते हैं। अपने राज्य की सूचना देखें।",
    "सीट का वादा करने वाले किसी एजेंट को पैसे न दें। सिर्फ़ अपने राज्य के आधिकारिक पोर्टल पर आवेदन करें।"
  ],
  htrades: "ITI ट्रेड (एक नमूना सूची)",
  trades_sub: "भारत में 130 से ज़्यादा ITI ट्रेड हैं। ये आम ट्रेड हैं। अवधि और पात्रता राज्य के अनुसार अलग होती है, इसलिए अपने राज्य की सूचना देखें।",
  f_all: "सभी ट्रेड",
  f_1: "1 साल",
  f_2: "2 साल",
  f_noms: "गणित-विज्ञान की शर्त नहीं मिली",
  l_dur: "अवधि:",
  l_elig: "पात्रता:",
  dur_1: "1 साल",
  dur_2: "2 साल",
  e8: "कक्षा 8 पास (राज्य के अनुसार अलग)",
  e10: "कक्षा 10 पास",
  e10ms: "कक्षा 10 पास, गणित और विज्ञान के साथ",
  e10var: "कक्षा 10 पास (कुछ राज्यों में गणित और विज्ञान चाहिए)",
  e8or10: "कक्षा 8 या कक्षा 10 पास (राज्य के अनुसार अलग)",
  hfees: "अनुमानित फीस: सरकारी बनाम निजी ITI",
  fg_title: "सरकारी ITI",
  fg: [
    "एक अनुमान के अनुसार साल का लगभग ₹1,000 से ₹3,000, और दूसरे के अनुसार लगभग ₹10,000 तक।",
    "2 साल के ट्रेड के लिए कुल मिलाकर लगभग ₹2,000 से ₹6,000 (मोटा अनुमान)।",
    "कुछ राज्य कुछ श्रेणियों को फीस में छूट देते हैं।"
  ],
  fp_title: "निजी ITI",
  fp: [
    "साल का लगभग ₹10,000 से ₹50,000 (इलेक्ट्रीशियन के उदाहरण: साल के ₹24,500 और ₹27,000)।",
    "2 साल के ट्रेड के लिए कुल मिलाकर लगभग ₹20,000 से ₹1,00,000 (मोटा अनुमान)।",
    "2022 में बताया गया था कि केंद्र ने साल की फीस की सीमा इंजीनियरिंग ट्रेड के लिए लगभग ₹26,000 और नॉन-इंजीनियरिंग के लिए ₹21,200 तय की है, और 2024 से हर साल 5% तक बढ़ोतरी की अनुमति है।"
  ],
  fees_more: "हॉस्टल, यूनिफ़ॉर्म, औज़ार और परीक्षा शुल्क अलग से लग सकते हैं। कुछ राज्य छात्रवृत्ति देते हैं। अपने राज्य का पोर्टल और नेशनल स्कॉलरशिप पोर्टल देखें।",
  hpay: "ITI के बाद अनुमानित कमाई: निजी बनाम सरकारी नौकरी",
  pp_title: "निजी क्षेत्र की नौकरी",
  pp: [
    "शुरुआत में अप्रेंटिस स्टाइपेंड: कई सूचनाओं में लगभग ₹7,700 से ₹10,000 प्रति माह।",
    "एक करियर वेबसाइट का अनुमान है कि ITI पास की शुरुआती तनख्वाह लगभग ₹10,000 से ₹18,000 प्रति माह होती है। कुछ नौकरी विज्ञापनों में इससे ज़्यादा या कम दिखता है।",
    "कमाई स्किल और अनुभव के साथ बढ़ती है। शहर, कंपनी, ट्रेड और ओवरटाइम से यह बदलती है।"
  ],
  pg_title: "सरकारी नौकरी",
  pg: [
    "कुछ सरकारी नौकरियाँ ITI वालों के लिए खुली हैं, जैसे भारतीय रेलवे में। RRB Group D (लेवल 1) में बेसिक पे ₹18,000 प्रति माह से शुरू होती है, साथ में भत्ते। एक वेबसाइट के अनुसार कुल (ग्रॉस) लगभग ₹21,000 से ₹25,000।",
    "इन नौकरियों के लिए प्रतियोगी परीक्षा देनी पड़ती है, सीटें सीमित हैं और चयन की गारंटी नहीं है। सिर्फ़ अप्रेंटिसशिप से नौकरी की गारंटी नहीं मिलती।",
    "वेतन के नियम और भत्ते बदल सकते हैं, इसलिए नवीनतम आधिकारिक सूचना देखें।"
  ],
  pay_note: "कमाई ज़्यादातर आपकी स्किल, ट्रेड और नियोक्ता पर निर्भर करती है। सिर्फ़ NCVT से संबद्ध ट्रेड ही वह नेशनल ट्रेड सर्टिफिकेट देते हैं जिसे नियोक्ता मानते हैं, इसलिए दाख़िले से पहले ITI की मान्यता जाँच लें।",
  hfind: "अपने पास के ITI कैसे खोजें",
  find: [
    "भारत में लगभग 14,000 ITI हैं (एक स्रोत के अनुसार 2,204 सरकारी और 12,108 निजी), इसलिए सूची आपके राज्य और ज़िले पर निर्भर करती है।",
    "स्टेप 1: <a href='https://ncvtmis.gov.in' target='_blank' rel='noopener'><strong>ncvtmis.gov.in</strong></a> खोलें। वहाँ राज्य और ज़िले के अनुसार संबद्ध ITI, उनके ट्रेड और सीटें खोज सकते हैं।",
    "स्टेप 2: अपने राज्य का आधिकारिक ITI प्रवेश पोर्टल भी खोजें (अपने राज्य का नाम और ITI admission खोजें), जहाँ तारीखें, फ़ॉर्म और मेरिट सूची मिलेगी।",
    "स्टेप 3: निजी ITI के लिए कोई भी फीस देने से पहले पक्का करें कि वह ncvtmis.gov.in पर सूचीबद्ध है।",
    "राज्यवार ITI सूचियाँ सत्यापन के बाद यहाँ जोड़ी जाएँगी।"
  ],
  final: "अंतिम फ़ैसले से पहले आधिकारिक जानकारी जाँचें और किसी भरोसेमंद व्यक्ति, जैसे शिक्षक या काउंसलर, से सलाह लें। हम प्रवेश, नौकरी या वेतन की गारंटी नहीं देते।"
};

ITI_T.mr = {
  title: "ITI ट्रेड, फी आणि कमाई",
  sub: "दहावीनंतर: तुम्ही काय करू शकता, किती वेळ लागेल, किती खर्च येईल आणि किती कमाई होऊ शकते.",
  disc: "फी आणि कमाईची सर्व आकडेवारी सर्वसाधारण वेबसाइट्स आणि नोकरीच्या सूचनांमधून घेतलेला ढोबळ अंदाज आहे, एकाच अधिकृत स्रोतातून नाही. पडताळणी बाकी आहे आणि हे कोणत्याही जागेचे, नोकरीचे किंवा पगाराचे आश्वासन नाही.",
  h35: "दहावीत सुमारे 35% गुण असतील तर",
  p35: [
    "35% हे सहसा उत्तीर्ण होण्याचे गुण आहेत, आणि स्रोतांनुसार ITI मध्ये साधारणपणे दहावी उत्तीर्ण आणि सुमारे 35% ते 40% गुण लागतात, त्यामुळे तुम्ही पात्र असू शकता. तुमच्या राज्याचे नियम नक्की तपासा.",
    "पण प्रवेश गुणवत्तेनुसार होतो. 35% मध्ये लोकप्रिय ट्रेड आणि सर्वोत्तम सरकारी ITI मध्ये जागा मिळणे कठीण असू शकते. कमी लोकप्रिय ट्रेड, इतर ITI किंवा खाजगी ITI मध्ये जागा मिळण्याची शक्यता जास्त आहे.",
    "ज्या ट्रेडसाठी दहावीत गणित आणि विज्ञान लागते, त्यासाठी तुमच्या गुणपत्रिकेत हे विषय हवेत. ते नसतील तर खालील 'गणित-विज्ञानाची अट आढळली नाही' असलेले ट्रेड पहा.",
    "फॉर्ममध्ये जितके पर्याय भरण्याची परवानगी असेल तितके भरा, लवकर अर्ज करा आणि पुढील समुपदेशन फेऱ्यांमध्ये जागा तपासत राहा.",
    "दहावी उत्तीर्ण नसाल तर आठवीची अट असलेले काही ट्रेड (जसे की सुतारकाम, मेसन, शिवणकाम) शक्य असू शकतात. तुमच्या राज्याची सूचना पहा.",
    "जागेचे आश्वासन देणाऱ्या कोणत्याही एजंटला पैसे देऊ नका. फक्त तुमच्या राज्याच्या अधिकृत पोर्टलवर अर्ज करा."
  ],
  htrades: "ITI ट्रेड (नमुना यादी)",
  trades_sub: "भारतात 130 पेक्षा जास्त ITI ट्रेड आहेत. हे सर्वसाधारण ट्रेड आहेत. कालावधी आणि पात्रता राज्यानुसार वेगळी असते, म्हणून तुमच्या राज्याची सूचना पहा.",
  f_all: "सर्व ट्रेड",
  f_1: "1 वर्ष",
  f_2: "2 वर्षे",
  f_noms: "गणित-विज्ञानाची अट आढळली नाही",
  l_dur: "कालावधी:",
  l_elig: "पात्रता:",
  dur_1: "1 वर्ष",
  dur_2: "2 वर्षे",
  e8: "आठवी उत्तीर्ण (राज्यानुसार वेगळे)",
  e10: "दहावी उत्तीर्ण",
  e10ms: "दहावी उत्तीर्ण, गणित आणि विज्ञानासह",
  e10var: "दहावी उत्तीर्ण (काही राज्यांत गणित आणि विज्ञान लागते)",
  e8or10: "आठवी किंवा दहावी उत्तीर्ण (राज्यानुसार वेगळे)",
  hfees: "अंदाजे फी: सरकारी विरुद्ध खाजगी ITI",
  fg_title: "सरकारी ITI",
  fg: [
    "एका अंदाजानुसार वर्षाला सुमारे ₹1,000 ते ₹3,000, तर दुसऱ्या अंदाजानुसार सुमारे ₹10,000 पर्यंत.",
    "2 वर्षांच्या ट्रेडसाठी एकूण सुमारे ₹2,000 ते ₹6,000 (ढोबळ अंदाज).",
    "काही राज्ये काही प्रवर्गांना फीमध्ये सवलत देतात."
  ],
  fp_title: "खाजगी ITI",
  fp: [
    "वर्षाला सुमारे ₹10,000 ते ₹50,000 (इलेक्ट्रिशियनची उदाहरणे: वर्षाला ₹24,500 आणि ₹27,000).",
    "2 वर्षांच्या ट्रेडसाठी एकूण सुमारे ₹20,000 ते ₹1,00,000 (ढोबळ अंदाज).",
    "2022 मध्ये सांगितले होते की केंद्राने वार्षिक फीची मर्यादा इंजिनिअरिंग ट्रेडसाठी सुमारे ₹26,000 आणि नॉन-इंजिनिअरिंगसाठी ₹21,200 ठरवली आहे, आणि 2024 पासून दरवर्षी 5% पर्यंत वाढीची परवानगी आहे."
  ],
  fees_more: "वसतिगृह, गणवेश, साधने आणि परीक्षा शुल्क वेगळे असू शकते. काही राज्ये शिष्यवृत्ती देतात. तुमच्या राज्याचे पोर्टल आणि नॅशनल स्कॉलरशिप पोर्टल पहा.",
  hpay: "ITI नंतर अंदाजे कमाई: खाजगी विरुद्ध सरकारी नोकरी",
  pp_title: "खाजगी क्षेत्रातील नोकरी",
  pp: [
    "सुरुवातीला अप्रेंटिस स्टायपेंड: अनेक सूचनांमध्ये दरमहा सुमारे ₹7,700 ते ₹10,000.",
    "एका करिअर वेबसाइटच्या अंदाजानुसार ITI उत्तीर्णांचा सुरुवातीचा पगार दरमहा सुमारे ₹10,000 ते ₹18,000 असतो. काही नोकरीच्या जाहिरातींत यापेक्षा जास्त किंवा कमी दिसते.",
    "कौशल्य आणि अनुभवासोबत कमाई वाढते. शहर, कंपनी, ट्रेड आणि ओव्हरटाइममुळे ती बदलते."
  ],
  pg_title: "सरकारी नोकरी",
  pg: [
    "काही सरकारी नोकऱ्या ITI धारकांसाठी खुल्या आहेत, उदा. भारतीय रेल्वेत. RRB Group D (लेव्हल 1) मध्ये बेसिक पे दरमहा ₹18,000 पासून सुरू होतो, सोबत भत्ते. एका वेबसाइटनुसार एकूण (ग्रॉस) सुमारे ₹21,000 ते ₹25,000.",
    "या नोकऱ्यांसाठी स्पर्धा परीक्षा द्यावी लागते, जागा मर्यादित आहेत आणि निवडीची हमी नाही. फक्त अप्रेंटिसशिपमुळे नोकरीची हमी मिळत नाही.",
    "वेतनाचे नियम आणि भत्ते बदलू शकतात, म्हणून नवीनतम अधिकृत सूचना पहा."
  ],
  pay_note: "कमाई मुख्यतः तुमचे कौशल्य, ट्रेड आणि नियोक्त्यावर अवलंबून असते. फक्त NCVT संलग्न ट्रेडच नियोक्ते मानतात ते नॅशनल ट्रेड सर्टिफिकेट देतात, म्हणून प्रवेश घेण्यापूर्वी ITI ची मान्यता तपासा.",
  hfind: "तुमच्या जवळचे ITI कसे शोधावे",
  find: [
    "भारतात सुमारे 14,000 ITI आहेत (एका स्रोतानुसार 2,204 सरकारी आणि 12,108 खाजगी), म्हणून यादी तुमच्या राज्य आणि जिल्ह्यावर अवलंबून असते.",
    "स्टेप 1: <a href='https://ncvtmis.gov.in' target='_blank' rel='noopener'><strong>ncvtmis.gov.in</strong></a> उघडा. तिथे राज्य आणि जिल्ह्यानुसार संलग्न ITI, त्यांचे ट्रेड आणि जागा शोधू शकता.",
    "स्टेप 2: तुमच्या राज्याचे अधिकृत ITI प्रवेश पोर्टलही शोधा (तुमच्या राज्याचे नाव आणि ITI admission शोधा), तिथे तारखा, फॉर्म आणि गुणवत्ता यादी मिळेल.",
    "स्टेप 3: खाजगी ITI साठी कोणतीही फी भरण्यापूर्वी ती ncvtmis.gov.in वर नोंदलेली आहे याची खात्री करा.",
    "राज्यानुसार ITI याद्या पडताळणीनंतर येथे जोडल्या जातील."
  ],
  final: "अंतिम निर्णयापूर्वी अधिकृत माहिती तपासा आणि शिक्षक किंवा समुपदेशकासारख्या विश्वासू व्यक्तीचा सल्ला घ्या. आम्ही प्रवेश, नोकरी किंवा पगाराची हमी देत नाही."
};

function it(key) {
  var l = ITI_T[currentLang];
  if (l && l[key] !== undefined) { return l[key]; }
  return ITI_T.en[key];
}
