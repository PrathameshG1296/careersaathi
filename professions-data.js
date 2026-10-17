/* =====================================================================
   CAREERSAATHI: ALL PROFESSION DATA LIVES IN THIS ONE FILE.
   How to add a profession: copy one block inside PROFESSIONS, change the
   values, keep the same field names. See README.md.
   RULES: never invent numbers. If unverified, say so in the text and keep
   verified: "needs-verification". Text is written as L(english, hindi, marathi).
   ===================================================================== */

function L(en, hi, mr) { return { en: en, hi: hi, mr: mr }; }
function pickL(o) { return (o && typeof o === "object") ? (o[currentLang] || o.en) : o; }

/* Paths (streams) a profession can belong to */
var P_STREAMS = {
  arts: L("Arts", "आर्ट्स", "कला"),
  commerce: L("Commerce", "कॉमर्स", "वाणिज्य"),
  science: L("Science", "साइंस", "विज्ञान"),
  iti: L("ITI", "ITI", "ITI"),
  diploma: L("Diploma", "डिप्लोमा", "डिप्लोमा")
};

/* "What should I do with my Class 10 marks?" guide */
var P_BANDS = [
  { id: "b1", t: L("Below 35% or not passed yet", "35% से कम या अभी पास नहीं", "35% पेक्षा कमी किंवा अजून उत्तीर्ण नाही"),
    items: [
      L("First complete Class 10. Ask your board about supplementary or improvement exam options.", "पहले कक्षा 10 पूरी करें। अपने बोर्ड से पूरक (सप्लीमेंट्री) या सुधार परीक्षा के विकल्प पूछें।", "आधी दहावी पूर्ण करा. तुमच्या बोर्डाकडे पुरवणी किंवा सुधार परीक्षेचे पर्याय विचारा."),
      L("Some ITI trades need only Class 8 (for example Carpenter, Mason, Sewing). Check your state's notice.", "कुछ ITI ट्रेड में सिर्फ़ कक्षा 8 चाहिए (जैसे कारपेंटर, मेसन, सिलाई)। अपने राज्य की सूचना देखें।", "काही ITI ट्रेडसाठी फक्त आठवी लागते (जसे की सुतारकाम, मेसन, शिवणकाम). तुमच्या राज्याची सूचना पहा."),
      L("Talk to a teacher or counsellor about restarting. Do not stop studying.", "फिर से शुरुआत के बारे में शिक्षक या काउंसलर से बात करें। पढ़ाई मत छोड़िए।", "पुन्हा सुरुवात करण्याबद्दल शिक्षक किंवा समुपदेशकाशी बोला. शिक्षण सोडू नका.")
    ] },
  { id: "b2", t: L("35% to 49% (for example 40%)", "35% से 49% (जैसे 40%)", "35% ते 49% (उदा. 40%)"),
    items: [
      L("ITI is usually the most open path. Many trades accept a Class 10 pass with about 35% to 40%. See the ITI page.", "ITI आमतौर पर सबसे खुला रास्ता है। कई ट्रेड लगभग 35% से 40% के साथ कक्षा 10 पास को लेते हैं। ITI पेज देखें।", "ITI हा सहसा सर्वात खुला मार्ग असतो. अनेक ट्रेड सुमारे 35% ते 40% सह दहावी उत्तीर्ण असलेल्यांना घेतात. ITI पेज पहा."),
      L("Diploma is possible in some colleges, mainly through institute-level rounds, but the marks rule differs by source (35% or 50%). See the Diploma page.", "डिप्लोमा कुछ कॉलेजों में संभव है, मुख्यतः संस्थान-स्तर के राउंड से, लेकिन अंकों का नियम स्रोत के अनुसार अलग है (35% या 50%)। डिप्लोमा पेज देखें।", "डिप्लोमा काही कॉलेजांत शक्य आहे, मुख्यतः संस्था-स्तरीय फेऱ्यांतून, पण गुणांचा नियम स्रोतानुसार वेगळा आहे (35% किंवा 50%). डिप्लोमा पेज पहा."),
      L("Arts is the stream most likely to have seats at this level, mainly in colleges with lower cut-offs. Law, teaching and police careers can start from Arts. Check second and later admission rounds.", "इस स्तर पर आर्ट्स में सीट मिलने की संभावना सबसे ज़्यादा होती है, मुख्यतः कम कट-ऑफ़ वाले कॉलेजों में। कानून, शिक्षण और पुलिस के करियर आर्ट्स से शुरू हो सकते हैं। दूसरे और बाद के प्रवेश राउंड देखें।", "या स्तरावर कला शाखेत जागा मिळण्याची शक्यता सर्वात जास्त असते, मुख्यतः कमी कट-ऑफ असलेल्या कॉलेजांत. कायदा, अध्यापन आणि पोलीस करिअर कला शाखेतून सुरू होऊ शकतात. दुसऱ्या आणि पुढील प्रवेश फेऱ्या पहा."),
      L("Science and Commerce are hard to get in popular colleges at this level, but seats may open in later rounds or in other colleges. Medicine needs Science (PCB).", "इस स्तर पर लोकप्रिय कॉलेजों में साइंस और कॉमर्स मिलना कठिन है, लेकिन बाद के राउंड में या दूसरे कॉलेजों में सीटें खुल सकती हैं। मेडिसिन के लिए साइंस (PCB) चाहिए।", "या स्तरावर लोकप्रिय कॉलेजांत विज्ञान आणि वाणिज्य मिळणे कठीण आहे, पण पुढील फेऱ्यांत किंवा इतर कॉलेजांत जागा खुल्या होऊ शकतात. वैद्यकीयसाठी विज्ञान (PCB) लागते."),
      L("Class 10 pass also allows jobs like SSC GD Constable and Railway Group D. See the After Class 10 page.", "कक्षा 10 पास होने पर SSC GD कांस्टेबल और रेलवे ग्रुप D जैसी नौकरियाँ भी संभव हैं। कक्षा 10 के बाद वाला पेज देखें।", "दहावी उत्तीर्ण झाल्यावर SSC GD कॉन्स्टेबल आणि रेल्वे ग्रुप D सारख्या नोकऱ्याही शक्य आहेत. दहावीनंतरचे पेज पहा."),
      L("Class 10 marks are not a rule for becoming a doctor or an advocate. Class 12 marks and the entrance exam matter. See the roadmaps below.", "डॉक्टर या वकील बनने के लिए कक्षा 10 के अंक कोई नियम नहीं हैं। कक्षा 12 के अंक और प्रवेश परीक्षा मायने रखते हैं। नीचे के रोडमैप देखें।", "डॉक्टर किंवा वकील होण्यासाठी दहावीचे गुण हा नियम नाही. बारावीचे गुण आणि प्रवेश परीक्षा महत्त्वाची. खालील रोडमॅप पहा.")
    ] },
  { id: "b3", t: L("50% to 59%", "50% से 59%", "50% ते 59%"),
    items: [
      L("Arts is widely open. Commerce is possible in many colleges. Science is possible in some colleges (many prefer 60% to 70%).", "आर्ट्स काफ़ी खुला है। कॉमर्स कई कॉलेजों में संभव है। साइंस कुछ कॉलेजों में संभव है (कई 60% से 70% पसंद करते हैं)।", "कला शाखा बऱ्यापैकी खुली आहे. वाणिज्य अनेक कॉलेजांत शक्य आहे. विज्ञान काही कॉलेजांत शक्य आहे (अनेक 60% ते 70% पसंत करतात)."),
      L("ITI and Diploma are good practical alternatives if you want to earn sooner.", "अगर जल्दी कमाना है तो ITI और डिप्लोमा अच्छे व्यावहारिक विकल्प हैं।", "लवकर कमवायचे असेल तर ITI आणि डिप्लोमा हे चांगले व्यावहारिक पर्याय आहेत."),
      L("Top colleges in big cities close much higher.", "बड़े शहरों के टॉप कॉलेजों में कट-ऑफ़ बहुत ऊँचा जाता है।", "मोठ्या शहरांतील टॉप कॉलेजांत कट-ऑफ खूप जास्त जातो.")
    ] },
  { id: "b4", t: L("60% to 74%", "60% से 74%", "60% ते 74%"),
    items: [
      L("Science, Commerce and Arts are open in many colleges. Many schools prefer about 60% to 70% for Science.", "कई कॉलेजों में साइंस, कॉमर्स और आर्ट्स खुले हैं। कई स्कूल साइंस के लिए लगभग 60% से 70% पसंद करते हैं।", "अनेक कॉलेजांत विज्ञान, वाणिज्य आणि कला खुले आहेत. अनेक शाळा विज्ञानासाठी सुमारे 60% ते 70% पसंत करतात."),
      L("Popular colleges in big cities can still close above this range.", "बड़े शहरों के लोकप्रिय कॉलेजों में कट-ऑफ़ इससे ऊपर जा सकता है।", "मोठ्या शहरांतील लोकप्रिय कॉलेजांत कट-ऑफ यापेक्षा जास्त जाऊ शकतो.")
    ] },
  { id: "b5", t: L("75% and above", "75% और उससे ज़्यादा", "75% आणि त्यापेक्षा जास्त"),
    items: [
      L("All streams are open in most places. Top colleges in big cities can close above 90%, so apply to several.", "ज़्यादातर जगह सभी स्ट्रीम खुले हैं। बड़े शहरों के टॉप कॉलेजों में कट-ऑफ़ 90% से ऊपर जा सकता है, इसलिए कई जगह आवेदन करें।", "बहुतेक ठिकाणी सर्व शाखा खुल्या आहेत. मोठ्या शहरांतील टॉप कॉलेजांत कट-ऑफ 90% च्या वर जाऊ शकतो, म्हणून अनेक ठिकाणी अर्ज करा."),
      L("Choose by interest and career goal, not only by marks.", "सिर्फ़ अंकों से नहीं, रुचि और करियर लक्ष्य से चुनें।", "फक्त गुणांवर नाही, आवड आणि करिअरच्या ध्येयावर आधारित निवडा.")
    ] }
];

/* Planned professions (names only, added after verification) */
var PLANNED = {
  science: ["Dentist (BDS)", "Nurse (B.Sc Nursing)", "Pharmacist", "AYUSH doctor (BAMS/BHMS)", "Engineer (B.E./B.Tech)", "Architect", "Scientist / researcher", "Pilot", "Veterinarian", "Lab technician"],
  commerce: ["Chartered Accountant (CA)", "Company Secretary (CS)", "Accountant", "Bank officer", "Tax consultant", "Business owner", "Finance and stock market", "Insurance advisor"],
  arts: ["Teacher", "Police (every rank, Constable to DGP)", "IAS / IPS officer (UPSC)", "Journalist", "Psychologist", "Social worker", "Professor", "Designer / fine arts", "Translator"],
  iti: ["Electrician", "Welder", "Fitter", "Mechanic", "Plumber", "COPA operator"],
  diploma: ["Junior Engineer", "Technician", "D.Pharmacy", "Diploma then B.Tech"]
};

/* ---------------------------------------------------------------------
   PROFESSION RECORDS. One block per profession. Same fields every time.
   id            unique, lowercase, no spaces
   name          L(...)
   streams       list of keys from P_STREAMS (which path leads to it)
   summary       L(...) one or two sentences
   with40        L(...) honest advice if Class 10 marks are around 40%
   steps         list of { title, duration, marks, exam, fees, note } (all L(...), any can be left out)
   pay           list of L(...) lines about pay or income
   alternatives  L(...) other options in the same field
   links         list of { label, url } official websites only
   verified      "needs-verification" or "verified"
   lastChecked   text like "2026-10"
   --------------------------------------------------------------------- */
var PROFESSIONS = [

  { id: "doctor",
    name: L("Doctor (MBBS)", "डॉक्टर (MBBS)", "डॉक्टर (MBBS)"),
    streams: ["science"],
    summary: L("A doctor examines and treats patients. The standard route is MBBS, which needs Science (Physics, Chemistry, Biology) in Class 12 and the NEET UG exam.",
               "डॉक्टर मरीज़ों की जाँच और इलाज करता है। सामान्य रास्ता MBBS है, जिसके लिए कक्षा 12 में विज्ञान (भौतिकी, रसायन, जीव विज्ञान) और NEET UG परीक्षा चाहिए।",
               "डॉक्टर रुग्णांची तपासणी आणि उपचार करतो. सर्वसाधारण मार्ग MBBS आहे, ज्यासाठी बारावीत विज्ञान (भौतिकशास्त्र, रसायनशास्त्र, जीवशास्त्र) आणि NEET UG परीक्षा लागते."),
    with40: L("The Class 10 percentage is not an MBBS rule. But you must first get a Science (PCB) seat in Class 11, score at least 50% in PCB in Class 12 (40% for SC/ST/OBC) and qualify NEET. With around 40% in Class 10, a Science seat in popular colleges is hard, so ask colleges that still have vacant Science seats in later rounds and study seriously from Class 11. MBBS seats are very limited and go by NEET rank, so keep a backup such as BDS, AYUSH, nursing or pharmacy.",
              "कक्षा 10 का प्रतिशत MBBS का नियम नहीं है। लेकिन आपको पहले कक्षा 11 में विज्ञान (PCB) की सीट पानी होगी, कक्षा 12 में PCB में कम से कम 50% (SC/ST/OBC के लिए 40%) लाने होंगे और NEET क्वालिफ़ाई करना होगा। कक्षा 10 में लगभग 40% पर लोकप्रिय कॉलेजों में साइंस की सीट मिलना कठिन है, इसलिए जिन कॉलेजों में बाद के राउंड में साइंस की सीटें खाली हों उनसे पूछें, और कक्षा 11 से गंभीरता से पढ़ें। MBBS की सीटें बहुत सीमित हैं और NEET रैंक से मिलती हैं, इसलिए BDS, आयुष, नर्सिंग या फार्मेसी जैसा बैकअप रखें।",
              "दहावीची टक्केवारी हा MBBS चा नियम नाही. पण तुम्हाला आधी अकरावीत विज्ञान (PCB) ची जागा मिळवावी लागेल, बारावीत PCB मध्ये किमान 50% (SC/ST/OBC साठी 40%) गुण मिळवावे लागतील आणि NEET पात्र व्हावे लागेल. दहावीत सुमारे 40% असताना लोकप्रिय कॉलेजांत विज्ञानाची जागा मिळणे कठीण आहे, म्हणून पुढील फेऱ्यांत ज्या कॉलेजांत विज्ञानाच्या जागा रिक्त आहेत त्यांना विचारा, आणि अकरावीपासून गंभीरपणे अभ्यास करा. MBBS च्या जागा खूप मर्यादित आहेत आणि NEET रँकनुसार मिळतात, म्हणून BDS, आयुष, नर्सिंग किंवा फार्मसीसारखा पर्याय ठेवा."),
    steps: [
      { title: L("Step 1: Class 10 pass", "चरण 1: कक्षा 10 पास", "टप्पा 1: दहावी उत्तीर्ण"),
        duration: L("Part of schooling.", "स्कूली पढ़ाई का हिस्सा।", "शालेय शिक्षणाचा भाग."),
        marks: L("No fixed percentage for MBBS at this stage. To get Science in Class 11, many schools prefer about 60% to 70% (see the marks guide).", "इस चरण पर MBBS के लिए कोई तय प्रतिशत नहीं। कक्षा 11 में साइंस के लिए कई स्कूल लगभग 60% से 70% पसंद करते हैं (अंक गाइड देखें)।", "या टप्प्यावर MBBS साठी कोणतीही ठरावीक टक्केवारी नाही. अकरावीत विज्ञानासाठी अनेक शाळा सुमारे 60% ते 70% पसंत करतात (गुण मार्गदर्शक पहा).") },
      { title: L("Step 2: Class 11-12 Science (Physics, Chemistry, Biology, English)", "चरण 2: कक्षा 11-12 साइंस (भौतिकी, रसायन, जीव विज्ञान, अंग्रेज़ी)", "टप्पा 2: अकरावी-बारावी विज्ञान (भौतिकशास्त्र, रसायनशास्त्र, जीवशास्त्र, इंग्रजी)"),
        duration: L("2 years.", "2 साल।", "2 वर्षे."),
        marks: L("At least 50% aggregate in Physics, Chemistry and Biology for General, 40% for SC/ST/OBC and 45% for PwD (General). The 2026 NEET bulletin is unclear on this, but the minimum is applied at counselling, so check the latest rules.", "भौतिकी, रसायन और जीव विज्ञान में कुल मिलाकर सामान्य के लिए कम से कम 50%, SC/ST/OBC के लिए 40% और PwD (सामान्य) के लिए 45%। 2026 के NEET बुलेटिन में यह साफ़ नहीं है, लेकिन काउंसलिंग में न्यूनतम अंक लागू होते हैं, इसलिए नवीनतम नियम देखें।", "भौतिकशास्त्र, रसायनशास्त्र आणि जीवशास्त्रात एकत्रित सर्वसाधारणसाठी किमान 50%, SC/ST/OBC साठी 40% आणि PwD (सर्वसाधारण) साठी 45%. 2026 च्या NEET माहितीपत्रकात हे स्पष्ट नाही, पण समुपदेशनात किमान गुण लागू होतात, म्हणून नवीनतम नियम पहा.") },
      { title: L("Step 3: NEET UG entrance exam", "चरण 3: NEET UG प्रवेश परीक्षा", "टप्पा 3: NEET UG प्रवेश परीक्षा"),
        duration: L("Preparation: usually 1 to 2 years alongside or after Class 11-12 (planning estimate).", "तैयारी: आमतौर पर कक्षा 11-12 के साथ या बाद में 1 से 2 साल (योजना का अनुमान)।", "तयारी: सहसा अकरावी-बारावीसोबत किंवा नंतर 1 ते 2 वर्षे (नियोजनाचा अंदाज)."),
        exam: L("Minimum age 17 by 31 December of the admission year, and no upper age limit. The exam is held once a year. 2026 application fee: Rs 1,700 (General), Rs 1,600 (OBC/EWS), Rs 1,000 (SC/ST/PwBD).", "प्रवेश वर्ष की 31 दिसंबर तक न्यूनतम आयु 17 साल, और अधिकतम आयु की कोई सीमा नहीं। परीक्षा साल में एक बार होती है। 2026 आवेदन शुल्क: ₹1,700 (सामान्य), ₹1,600 (OBC/EWS), ₹1,000 (SC/ST/PwBD)।", "प्रवेश वर्षाच्या 31 डिसेंबरपर्यंत किमान वय 17 वर्षे, आणि कमाल वयाची मर्यादा नाही. परीक्षा वर्षातून एकदा होते. 2026 अर्ज शुल्क: ₹1,700 (सर्वसाधारण), ₹1,600 (OBC/EWS), ₹1,000 (SC/ST/PwBD)."),
        fees: L("Coaching is optional and its cost varies a lot.", "कोचिंग वैकल्पिक है और उसका खर्च बहुत बदलता है।", "कोचिंग ऐच्छिक आहे आणि त्याचा खर्च खूप बदलतो.") },
      { title: L("Step 4: MBBS", "चरण 4: MBBS", "टप्पा 4: MBBS"),
        duration: L("5.5 years: 4.5 years of study plus 1 year of compulsory internship.", "5.5 साल: 4.5 साल की पढ़ाई और 1 साल की अनिवार्य इंटर्नशिप।", "5.5 वर्षे: 4.5 वर्षे अभ्यास आणि 1 वर्ष अनिवार्य इंटर्नशिप."),
        marks: L("Seat by NEET rank through counselling.", "काउंसलिंग के ज़रिए NEET रैंक से सीट।", "समुपदेशनाद्वारे NEET रँकनुसार जागा."),
        fees: L("Government colleges: roughly Rs 50,000 to Rs 2 lakh per year in one Q&A. Private colleges: very high and regulated per college. Examples: about Rs 8 lakh per year at one Mumbai private college and Rs 15.63 lakh per year at one Nagpur private college (before a 2026 hike). Some private and deemed universities cross Rs 1 crore in total.", "सरकारी कॉलेज: एक Q&A के अनुसार लगभग ₹50,000 से ₹2 लाख प्रति वर्ष। निजी कॉलेज: बहुत ज़्यादा और हर कॉलेज के हिसाब से नियंत्रित। उदाहरण: मुंबई के एक निजी कॉलेज में लगभग ₹8 लाख प्रति वर्ष और नागपुर के एक निजी कॉलेज में ₹15.63 लाख प्रति वर्ष (2026 की बढ़ोतरी से पहले)। कुछ निजी और डीम्ड विश्वविद्यालयों में कुल फीस ₹1 करोड़ से ऊपर जाती है।", "सरकारी कॉलेज: एका Q&A नुसार सुमारे ₹50,000 ते ₹2 लाख प्रतिवर्ष. खाजगी कॉलेज: खूप जास्त आणि प्रत्येक कॉलेजनुसार नियंत्रित. उदाहरणे: मुंबईतील एका खाजगी कॉलेजमध्ये सुमारे ₹8 लाख प्रतिवर्ष आणि नागपूरमधील एका खाजगी कॉलेजमध्ये ₹15.63 लाख प्रतिवर्ष (2026 च्या वाढीपूर्वी). काही खाजगी आणि अभिमत विद्यापीठांत एकूण फी ₹1 कोटींच्या वर जाते.") },
      { title: L("Step 5: After MBBS", "चरण 5: MBBS के बाद", "टप्पा 5: MBBS नंतर"),
        note: L("Work as a doctor or medical officer, or prepare for NEET PG to specialise (MD/MS).", "डॉक्टर या मेडिकल ऑफिसर के रूप में काम करें, या विशेषज्ञता (MD/MS) के लिए NEET PG की तैयारी करें।", "डॉक्टर किंवा वैद्यकीय अधिकारी म्हणून काम करा, किंवा विशेषज्ञतेसाठी (MD/MS) NEET PG ची तयारी करा.") }
    ],
    pay: [
      L("Internship stipend: about Rs 17,000 to Rs 18,000 per month in Maharashtra government colleges (sources differ). One Delhi institute pays Rs 30,070. Private colleges have paid much less in the past.", "इंटर्नशिप स्टाइपेंड: महाराष्ट्र के सरकारी कॉलेजों में लगभग ₹17,000 से ₹18,000 प्रति माह (स्रोत अलग-अलग)। दिल्ली का एक संस्थान ₹30,070 देता है। निजी कॉलेजों में पहले काफ़ी कम मिलता रहा है।", "इंटर्नशिप स्टायपेंड: महाराष्ट्रातील सरकारी कॉलेजांत सुमारे ₹17,000 ते ₹18,000 दरमहा (स्रोत वेगळे सांगतात). दिल्लीतील एक संस्था ₹30,070 देते. खाजगी कॉलेजांत पूर्वी खूपच कमी मिळत असे."),
      L("Senior residents and super-specialty trainees at one Delhi institute get about Rs 1.6 lakh per month.", "दिल्ली के एक संस्थान में सीनियर रेज़िडेंट और सुपर-स्पेशलिटी ट्रेनी को लगभग ₹1.6 लाख प्रति माह मिलते हैं।", "दिल्लीतील एका संस्थेत सीनियर रेसिडेंट आणि सुपर-स्पेशालिटी प्रशिक्षणार्थींना सुमारे ₹1.6 लाख दरमहा मिळतात."),
      L("Regular pay after MBBS depends on a government or private job and your specialisation. We have not verified a figure.", "MBBS के बाद की नियमित कमाई सरकारी या निजी नौकरी और आपकी विशेषज्ञता पर निर्भर करती है। हमने कोई आँकड़ा सत्यापित नहीं किया।", "MBBS नंतरची नियमित कमाई सरकारी किंवा खाजगी नोकरी आणि तुमच्या विशेषज्ञतेवर अवलंबून असते. आम्ही कोणताही आकडा पडताळलेला नाही.")
    ],
    alternatives: L("BDS (dental) and AYUSH courses (such as BAMS and BHMS) also use NEET. Nursing, pharmacy and lab technician are other health careers. They are not covered here yet.", "BDS (दंत चिकित्सा) और आयुष कोर्स (जैसे BAMS और BHMS) में भी NEET लगता है। नर्सिंग, फार्मेसी और लैब टेक्नीशियन दूसरे स्वास्थ्य करियर हैं। वे यहाँ अभी शामिल नहीं हैं।", "BDS (दंतवैद्यक) आणि आयुष अभ्यासक्रम (जसे की BAMS आणि BHMS) यांसाठीही NEET लागते. नर्सिंग, फार्मसी आणि लॅब टेक्निशियन हे इतर आरोग्य करिअर आहेत. ते येथे अजून समाविष्ट नाहीत."),
    links: [ { label: "National Medical Commission", url: "https://www.nmc.org.in" }, { label: "National Testing Agency (NEET)", url: "https://nta.ac.in" } ],
    verified: "needs-verification",
    lastChecked: "2026-10" },

  { id: "advocate",
    name: L("Advocate (Lawyer)", "वकील (एडवोकेट)", "वकील (ॲडव्होकेट)"),
    streams: ["arts", "commerce", "science"],
    summary: L("An advocate represents people in courts and gives legal advice. You can reach law from any stream: Arts, Commerce or Science.",
               "वकील अदालतों में लोगों का पक्ष रखता है और कानूनी सलाह देता है। आप किसी भी स्ट्रीम (आर्ट्स, कॉमर्स या साइंस) से कानून तक पहुँच सकते हैं।",
               "वकील न्यायालयात लोकांची बाजू मांडतो आणि कायदेशीर सल्ला देतो. तुम्ही कोणत्याही शाखेतून (कला, वाणिज्य किंवा विज्ञान) कायद्यापर्यंत पोहोचू शकता."),
    with40: L("Law is one of the more open paths if your Class 10 marks are around 40%. Class 10 marks are not a rule for law. You can take Arts (or any stream), then you need about 45% in Class 12 (40% for SC/ST) to be eligible for the 5-year BA LLB, and you must pass an entrance exam such as MH CET Law. So focus on your Class 12 marks and law entrance preparation.",
              "अगर कक्षा 10 में लगभग 40% अंक हैं, तो कानून अपेक्षाकृत खुले रास्तों में से एक है। कानून के लिए कक्षा 10 के अंक कोई नियम नहीं हैं। आप आर्ट्स (या कोई भी स्ट्रीम) ले सकते हैं, फिर 5 साल के BA LLB के लिए पात्र होने के लिए कक्षा 12 में लगभग 45% (SC/ST के लिए 40%) चाहिए, और MH CET Law जैसी प्रवेश परीक्षा पास करनी होगी। इसलिए कक्षा 12 के अंकों और कानून की प्रवेश परीक्षा की तैयारी पर ध्यान दें।",
              "दहावीत सुमारे 40% गुण असतील तर कायदा हा तुलनेने खुल्या मार्गांपैकी एक आहे. कायद्यासाठी दहावीचे गुण हा नियम नाही. तुम्ही कला (किंवा कोणतीही शाखा) घेऊ शकता, मग 5 वर्षांच्या BA LLB साठी पात्र होण्यासाठी बारावीत सुमारे 45% (SC/ST साठी 40%) लागतात, आणि MH CET Law सारखी प्रवेश परीक्षा उत्तीर्ण व्हावी लागते. म्हणून बारावीचे गुण आणि कायदा प्रवेश परीक्षेच्या तयारीवर लक्ष द्या."),
    steps: [
      { title: L("Step 1: Class 10 pass", "चरण 1: कक्षा 10 पास", "टप्पा 1: दहावी उत्तीर्ण"),
        marks: L("No percentage rule for law at this stage.", "इस चरण पर कानून के लिए कोई प्रतिशत नियम नहीं।", "या टप्प्यावर कायद्यासाठी कोणताही टक्केवारीचा नियम नाही.") },
      { title: L("Step 2: Class 11-12 in any stream", "चरण 2: किसी भी स्ट्रीम में कक्षा 11-12", "टप्पा 2: कोणत्याही शाखेत अकरावी-बारावी"),
        duration: L("2 years.", "2 साल।", "2 वर्षे."),
        marks: L("Class 12 pass with at least 45% (General), 42% (OBC) and 40% (SC/ST) in the Maharashtra pages we checked. Some national exams ask for 50% (for example AILET).", "कक्षा 12 पास, हमने जो महाराष्ट्र के पेज देखे उनके अनुसार कम से कम 45% (सामान्य), 42% (OBC) और 40% (SC/ST)। कुछ राष्ट्रीय परीक्षाएँ 50% माँगती हैं (जैसे AILET)।", "बारावी उत्तीर्ण, आम्ही तपासलेल्या महाराष्ट्रातील पेजनुसार किमान 45% (सर्वसाधारण), 42% (OBC) आणि 40% (SC/ST). काही राष्ट्रीय परीक्षा 50% मागतात (उदा. AILET).") },
      { title: L("Step 3: Law entrance exam", "चरण 3: कानून प्रवेश परीक्षा", "टप्पा 3: कायदा प्रवेश परीक्षा"),
        exam: L("CLAT (national law universities), AILET (NLU Delhi), MH CET Law (Maharashtra), LSAT India and others. Choose according to the colleges you want.", "CLAT (राष्ट्रीय विधि विश्वविद्यालय), AILET (NLU दिल्ली), MH CET Law (महाराष्ट्र), LSAT India और दूसरी। जिन कॉलेजों में जाना है उसके अनुसार चुनें।", "CLAT (राष्ट्रीय विधी विद्यापीठे), AILET (NLU दिल्ली), MH CET Law (महाराष्ट्र), LSAT India आणि इतर. तुम्हाला हव्या असलेल्या कॉलेजांनुसार निवडा.") },
      { title: L("Step 4: Law degree", "चरण 4: कानून की डिग्री", "टप्पा 4: कायद्याची पदवी"),
        duration: L("5 years (integrated BA LLB after Class 12) or 3 years (LLB after any graduation).", "5 साल (कक्षा 12 के बाद इंटीग्रेटेड BA LLB) या 3 साल (किसी भी ग्रेजुएशन के बाद LLB)।", "5 वर्षे (बारावीनंतर एकात्मिक BA LLB) किंवा 3 वर्षे (कोणत्याही पदवीनंतर LLB)."),
        fees: L("Government and state law colleges: about Rs 10,000 to Rs 1,00,000 per year. Private universities such as Symbiosis or Jindal: about Rs 3 to 6 lakh per year. Example: one Maharashtra college lists about Rs 1.6 lakh in total for the 5-year course.", "सरकारी और राज्य के लॉ कॉलेज: लगभग ₹10,000 से ₹1,00,000 प्रति वर्ष। सिम्बायोसिस या जिंदल जैसे निजी विश्वविद्यालय: लगभग ₹3 से 6 लाख प्रति वर्ष। उदाहरण: महाराष्ट्र का एक कॉलेज 5 साल के कोर्स की कुल फीस लगभग ₹1.6 लाख बताता है।", "सरकारी आणि राज्य विधी महाविद्यालये: सुमारे ₹10,000 ते ₹1,00,000 प्रतिवर्ष. सिम्बायोसिस किंवा जिंदलसारखी खाजगी विद्यापीठे: सुमारे ₹3 ते 6 लाख प्रतिवर्ष. उदाहरण: महाराष्ट्रातील एक कॉलेज 5 वर्षांच्या अभ्यासक्रमाची एकूण फी सुमारे ₹1.6 लाख सांगते.") },
      { title: L("Step 5: Enrol with the State Bar Council", "चरण 5: राज्य बार काउंसिल में नामांकन", "टप्पा 5: राज्य बार कौन्सिलमध्ये नोंदणी"),
        marks: L("You need a law degree recognised by the Bar Council of India.", "आपके पास बार काउंसिल ऑफ इंडिया से मान्य कानून की डिग्री होनी चाहिए।", "तुमच्याकडे बार कौन्सिल ऑफ इंडियाने मान्य केलेली कायद्याची पदवी असावी."),
        fees: L("One source lists the enrolment fee as Rs 750 (General) and Rs 125 (SC/ST). State bar councils differ, so check yours.", "एक स्रोत के अनुसार नामांकन शुल्क ₹750 (सामान्य) और ₹125 (SC/ST) है। राज्य बार काउंसिल अलग-अलग हैं, इसलिए अपने राज्य का देखें।", "एका स्रोतानुसार नोंदणी शुल्क ₹750 (सर्वसाधारण) आणि ₹125 (SC/ST) आहे. राज्य बार कौन्सिल वेगवेगळ्या आहेत, म्हणून तुमच्या राज्याचे तपासा.") },
      { title: L("Step 6: All India Bar Examination (AIBE)", "चरण 6: ऑल इंडिया बार एग्ज़ामिनेशन (AIBE)", "टप्पा 6: ऑल इंडिया बार परीक्षा (AIBE)"),
        exam: L("Pass the AIBE within 2 years of enrolment to get the Certificate of Practice, which lets you practise in courts across India. The AIBE fee and rules are set by the Bar Council of India and change, so check the latest notice.", "नामांकन के 2 साल के भीतर AIBE पास करें, तब प्रैक्टिस का प्रमाणपत्र मिलता है जिससे आप पूरे भारत की अदालतों में प्रैक्टिस कर सकते हैं। AIBE की फीस और नियम बार काउंसिल ऑफ इंडिया तय करती है और बदलते रहते हैं, इसलिए नवीनतम सूचना देखें।", "नोंदणीनंतर 2 वर्षांत AIBE उत्तीर्ण करा, तेव्हा प्रॅक्टिसचे प्रमाणपत्र मिळते ज्यामुळे तुम्ही देशभरातील न्यायालयांत प्रॅक्टिस करू शकता. AIBE ची फी आणि नियम बार कौन्सिल ऑफ इंडिया ठरवते आणि ते बदलतात, म्हणून नवीनतम सूचना पहा.") },
      { title: L("Step 7: Start practice", "चरण 7: प्रैक्टिस शुरू करें", "टप्पा 7: प्रॅक्टिस सुरू करा"),
        note: L("Most new advocates start by working under a senior advocate. You can also work in companies or law firms.", "ज़्यादातर नए वकील किसी वरिष्ठ वकील के अधीन काम शुरू करते हैं। आप कंपनियों या लॉ फ़र्मों में भी काम कर सकते हैं।", "बहुतेक नवे वकील एखाद्या वरिष्ठ वकिलाच्या हाताखाली काम सुरू करतात. तुम्ही कंपन्या किंवा लॉ फर्ममध्येही काम करू शकता.") }
    ],
    pay: [
      L("Income in court practice varies hugely and is often low at the start. We did not find a reliable average.", "अदालत की प्रैक्टिस में कमाई बहुत अलग-अलग होती है और शुरुआत में अक्सर कम होती है। हमें कोई भरोसेमंद औसत नहीं मिला।", "न्यायालयीन प्रॅक्टिसमधील कमाई खूप वेगवेगळी असते आणि सुरुवातीला अनेकदा कमी असते. आम्हाला विश्वासार्ह सरासरी सापडली नाही."),
      L("Some support exists for new advocates: the Bar Council of India announced a Rs 5,000 per month stipend plan in 2014, and some state schemes pay up to Rs 5,000 per month for a limited time (for example Kerala). It depends on your state.", "नए वकीलों के लिए कुछ सहायता है: बार काउंसिल ऑफ इंडिया ने 2014 में ₹5,000 प्रति माह स्टाइपेंड की योजना घोषित की थी, और कुछ राज्यों की योजनाएँ सीमित समय के लिए ₹5,000 प्रति माह तक देती हैं (जैसे केरल)। यह आपके राज्य पर निर्भर करता है।", "नव्या वकिलांसाठी काही मदत आहे: बार कौन्सिल ऑफ इंडियाने 2014 मध्ये दरमहा ₹5,000 स्टायपेंड योजना जाहीर केली होती, आणि काही राज्यांच्या योजना मर्यादित काळासाठी दरमहा ₹5,000 पर्यंत देतात (उदा. केरळ). हे तुमच्या राज्यावर अवलंबून आहे."),
      L("Top-tier corporate law firm associates: about Rs 12 to 20 lakh a year (one website). This is for graduates of top law schools and is not typical.", "टॉप कॉर्पोरेट लॉ फ़र्म के एसोसिएट: साल का लगभग ₹12 से 20 लाख (एक वेबसाइट के अनुसार)। यह टॉप लॉ स्कूलों के ग्रेजुएट के लिए है और आम नहीं है।", "टॉप कॉर्पोरेट लॉ फर्मचे असोसिएट: वार्षिक सुमारे ₹12 ते 20 लाख (एका वेबसाइटनुसार). हे टॉप लॉ स्कूलच्या पदवीधरांसाठी आहे आणि सर्वसाधारण नाही.")
    ],
    alternatives: L("Other law careers (judiciary, legal jobs in companies, government legal posts) are not covered here yet.", "कानून के दूसरे करियर (न्यायपालिका, कंपनियों में कानूनी नौकरियाँ, सरकारी कानूनी पद) यहाँ अभी शामिल नहीं हैं।", "कायद्यातील इतर करिअर (न्यायपालिका, कंपन्यांतील कायदेशीर नोकऱ्या, सरकारी कायदेशीर पदे) येथे अजून समाविष्ट नाहीत."),
    links: [ { label: "Bar Council of India", url: "https://www.barcouncilofindia.org" } ],
    verified: "needs-verification",
    lastChecked: "2026-10" }

];

/* ---------------------------------------------------------------------
   PAGE TEXT (labels used by professions.html and profession.html)
   --------------------------------------------------------------------- */
var PF_T = {
  en: {
    title: "Professions and Roadmaps",
    sub: "Find a profession, see the step-by-step path from Class 10 and what to study.",
    disc: "Fees and pay are rough or reported figures and need verification. Rules change every year, so always check official websites. This is guidance, not a promise of admission, jobs or income.",
    h_marks: "What should I do with my Class 10 marks?",
    marks_sub: "Choose your approximate Class 10 percentage.",
    marks_note: "These are general patterns, not guarantees. In Maharashtra, Class 11 admission goes by Class 10 merit and cut-offs change every year.",
    h_prof: "Roadmaps available now",
    h_filter: "Filter by path:",
    all: "All",
    h_planned: "Planned roadmaps (added after verification)",
    planned_note: "Names are shown in English. We add a roadmap only after checking official sources.",
    view: "View roadmap",
    back: "← Back to professions",
    nf: "Profession not found.",
    h_with: "If your Class 10 marks are low (around 40%)",
    h_steps: "Step-by-step roadmap",
    l_dur: "Duration:", l_marks: "Marks / eligibility:", l_exam: "Exam:", l_fees: "Approx. fees:", l_note: "Note:",
    h_pay: "Pay and income",
    h_alt: "Other options in this field",
    h_links: "Official websites",
    l_status: "Status:",
    s_needs: "Needs verification",
    s_ok: "Verified",
    l_last: "Last checked:",
    final: "Before any final decision, check official information and talk to a trusted person such as a teacher or counsellor. We do not guarantee admission, jobs or salary."
  },
  hi: {
    title: "प्रोफ़ेशन और रोडमैप",
    sub: "कोई प्रोफ़ेशन चुनिए, कक्षा 10 से कदम-दर-कदम रास्ता और क्या पढ़ना है देखिए।",
    disc: "फीस और कमाई के आँकड़े मोटे या रिपोर्ट किए गए हैं और इनका सत्यापन बाकी है। नियम हर साल बदलते हैं, इसलिए हमेशा आधिकारिक वेबसाइट देखें। यह मार्गदर्शन है, प्रवेश, नौकरी या आमदनी का वादा नहीं।",
    h_marks: "कक्षा 10 के अंकों के हिसाब से मुझे क्या करना चाहिए?",
    marks_sub: "कक्षा 10 में अपना लगभग प्रतिशत चुनिए।",
    marks_note: "ये सामान्य पैटर्न हैं, गारंटी नहीं। महाराष्ट्र में कक्षा 11 का प्रवेश कक्षा 10 की मेरिट पर होता है और कट-ऑफ़ हर साल बदलते हैं।",
    h_prof: "अभी उपलब्ध रोडमैप",
    h_filter: "रास्ते के अनुसार छाँटें:",
    all: "सभी",
    h_planned: "योजना में शामिल रोडमैप (सत्यापन के बाद जुड़ेंगे)",
    planned_note: "नाम अंग्रेज़ी में दिखाए गए हैं। हम आधिकारिक स्रोत जाँचने के बाद ही रोडमैप जोड़ते हैं।",
    view: "रोडमैप देखें",
    back: "← प्रोफ़ेशन की सूची पर वापस",
    nf: "यह प्रोफ़ेशन नहीं मिला।",
    h_with: "अगर कक्षा 10 के अंक कम हैं (लगभग 40%)",
    h_steps: "कदम-दर-कदम रोडमैप",
    l_dur: "अवधि:", l_marks: "अंक / पात्रता:", l_exam: "परीक्षा:", l_fees: "अनुमानित फीस:", l_note: "नोट:",
    h_pay: "कमाई और आमदनी",
    h_alt: "इस क्षेत्र के दूसरे विकल्प",
    h_links: "आधिकारिक वेबसाइट",
    l_status: "स्थिति:",
    s_needs: "सत्यापन बाकी",
    s_ok: "सत्यापित",
    l_last: "आख़िरी जाँच:",
    final: "अंतिम फ़ैसले से पहले आधिकारिक जानकारी जाँचें और किसी भरोसेमंद व्यक्ति, जैसे शिक्षक या काउंसलर, से सलाह लें। हम प्रवेश, नौकरी या वेतन की गारंटी नहीं देते।"
  },
  mr: {
    title: "व्यवसाय आणि रोडमॅप",
    sub: "एखादा व्यवसाय निवडा, दहावीपासूनचा पायरी-पायरीचा मार्ग आणि काय शिकायचे ते पहा.",
    disc: "फी आणि कमाईचे आकडे ढोबळ किंवा नोंदवलेले आहेत आणि पडताळणी बाकी आहे. नियम दरवर्षी बदलतात, म्हणून नेहमी अधिकृत वेबसाइट पहा. हे मार्गदर्शन आहे, प्रवेश, नोकरी किंवा उत्पन्नाचे आश्वासन नाही.",
    h_marks: "दहावीच्या गुणांनुसार मी काय करावे?",
    marks_sub: "दहावीत तुमची साधारण टक्केवारी निवडा.",
    marks_note: "हे सर्वसाधारण नमुने आहेत, हमी नाही. महाराष्ट्रात अकरावी प्रवेश दहावीच्या गुणवत्तेवर होतो आणि कट-ऑफ दरवर्षी बदलतात.",
    h_prof: "सध्या उपलब्ध रोडमॅप",
    h_filter: "मार्गानुसार निवडा:",
    all: "सर्व",
    h_planned: "नियोजित रोडमॅप (पडताळणीनंतर जोडले जातील)",
    planned_note: "नावे इंग्रजीत दाखवली आहेत. आम्ही अधिकृत स्रोत तपासल्यानंतरच रोडमॅप जोडतो.",
    view: "रोडमॅप पहा",
    back: "← व्यवसायांच्या यादीकडे परत",
    nf: "हा व्यवसाय सापडला नाही.",
    h_with: "दहावीचे गुण कमी असतील तर (सुमारे 40%)",
    h_steps: "पायरी-पायरीचा रोडमॅप",
    l_dur: "कालावधी:", l_marks: "गुण / पात्रता:", l_exam: "परीक्षा:", l_fees: "अंदाजे फी:", l_note: "नोंद:",
    h_pay: "कमाई आणि उत्पन्न",
    h_alt: "या क्षेत्रातील इतर पर्याय",
    h_links: "अधिकृत वेबसाइट",
    l_status: "स्थिती:",
    s_needs: "पडताळणी बाकी",
    s_ok: "पडताळलेले",
    l_last: "शेवटची तपासणी:",
    final: "अंतिम निर्णयापूर्वी अधिकृत माहिती तपासा आणि शिक्षक किंवा समुपदेशकासारख्या विश्वासू व्यक्तीचा सल्ला घ्या. आम्ही प्रवेश, नोकरी किंवा पगाराची हमी देत नाही."
  }
};

function pf(key) {
  var l = PF_T[currentLang];
  if (l && l[key] !== undefined) { return l[key]; }
  return PF_T.en[key];
}
