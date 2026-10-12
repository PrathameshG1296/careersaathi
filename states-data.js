// State-wise ITI information. Only states with VERIFIED details have an entry in ST_INFO.
// All other states show the general "coming soon" steps.

var ST_LIST = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana",
  "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
  "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi",
  "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];

var ST_T = {};

ST_T.en = {
  title: "State-wise ITI information",
  sub: "Choose your state to see how ITI admission works there.",
  disc: "State details are added only after checking official or reliable sources. States not added yet show steps to find official information.",
  choose: "Choose your state",
  pick: "-- Select a state --",
  mh_title: "ITI admission in Maharashtra (महाराष्ट्र)",
  mh: [
    "Admission to government and private ITIs is done through the centralised online process (CAP) of the Directorate of Vocational Education and Training (DVET) at <a href='https://admission.dvet.gov.in' target='_blank' rel='noopener'><strong>admission.dvet.gov.in</strong></a>.",
    "In 2026-27 about 1,004 ITIs took part (418 government and 586 private), with roughly 1.45 to 1.58 lakh seats in different reports.",
    "How it works: register online, fill the option form with your trade and ITI preferences, get a seat by merit in the CAP rounds, and confirm admission. Remaining seats are filled in institute-level counselling rounds, where you check the vacancy list, register and report in person at the ITI.",
    "In 2026, only about 79,000 students were enrolled by late July against a much larger number of seats, and the application deadline was later extended to September 21 with institute-level rounds in September. So seats in less popular trades and private ITIs were still available late in the season. This may change in other years.",
    "The 2026 admission cycle has ended. The first merit list in 2026 came on July 2. The next cycle dates are not announced yet, so watch the DVET portal after your Class 10 result.",
    "Fees: we have not yet verified Maharashtra's government ITI fee. See the national estimate on the ITI page and check the official brochure."
  ],
  none_title: "Details for this state are coming soon",
  none: [
    "We have not added verified details for this state yet.",
    "Step 1: open <a href='https://ncvtmis.gov.in' target='_blank' rel='noopener'><strong>ncvtmis.gov.in</strong></a> and search ITIs by state and district.",
    "Step 2: find your state's official ITI admission portal (search for your state name and ITI admission).",
    "Step 3: check dates, trades, seats and eligibility only on the official notice.",
    "Do not pay anyone for a seat."
  ],
  see: "See also: <a href='iti.html'><strong>ITI trades, fees and pay</strong></a> | <a href='diploma.html'><strong>Diploma courses</strong></a>",
  final: "Before any final decision, check official information and talk to a trusted person such as a teacher or counsellor. We do not guarantee admission, jobs or salary."
};

ST_T.hi = {
  title: "राज्यवार ITI जानकारी",
  sub: "अपना राज्य चुनिए और देखिए वहाँ ITI प्रवेश कैसे होता है।",
  disc: "राज्य की जानकारी आधिकारिक या भरोसेमंद स्रोतों की जाँच के बाद ही जोड़ी जाती है। जिन राज्यों की जानकारी अभी नहीं जोड़ी गई, उनके लिए आधिकारिक जानकारी खोजने के स्टेप दिखाए गए हैं।",
  choose: "अपना राज्य चुनें",
  pick: "-- राज्य चुनें --",
  mh_title: "महाराष्ट्र में ITI प्रवेश",
  mh: [
    "सरकारी और निजी ITI में प्रवेश व्यावसायिक शिक्षा एवं प्रशिक्षण संचालनालय (DVET) की केंद्रीकृत ऑनलाइन प्रक्रिया (CAP) से होता है: <a href='https://admission.dvet.gov.in' target='_blank' rel='noopener'><strong>admission.dvet.gov.in</strong></a>।",
    "2026-27 में लगभग 1,004 ITI शामिल थे (418 सरकारी और 586 निजी), और अलग-अलग रिपोर्ट में लगभग 1.45 से 1.58 लाख सीटें बताई गईं।",
    "प्रक्रिया: ऑनलाइन रजिस्टर करें, ऑप्शन फ़ॉर्म में अपने ट्रेड और ITI की पसंद भरें, CAP राउंड में मेरिट से सीट पाएँ और प्रवेश की पुष्टि करें। बची हुई सीटें संस्थान-स्तर के काउंसलिंग राउंड में भरी जाती हैं, जहाँ आप रिक्त सीटों की सूची देखकर रजिस्टर करते हैं और ITI में खुद जाकर उपस्थिति दर्ज कराते हैं।",
    "2026 में जुलाई के अंत तक सीटों की तुलना में सिर्फ़ लगभग 79,000 विद्यार्थियों ने प्रवेश लिया था, और आवेदन की अंतिम तारीख बाद में 21 सितंबर तक बढ़ाई गई, सितंबर में संस्थान-स्तर के राउंड हुए। यानी कम लोकप्रिय ट्रेड और निजी ITI में सीटें देर तक उपलब्ध थीं। दूसरे सालों में ऐसा बदल सकता है।",
    "2026 का प्रवेश चक्र समाप्त हो चुका है। 2026 में पहली मेरिट लिस्ट 2 जुलाई को आई थी। अगले चक्र की तारीखें अभी घोषित नहीं हुई हैं, इसलिए कक्षा 10 का परिणाम आने के बाद DVET पोर्टल देखते रहें।",
    "फीस: हमने महाराष्ट्र के सरकारी ITI की फीस अभी सत्यापित नहीं की है। ITI पेज पर राष्ट्रीय अनुमान देखें और आधिकारिक ब्रोशर जाँचें।"
  ],
  none_title: "इस राज्य की जानकारी जल्द आ रही है",
  none: [
    "हमने इस राज्य की सत्यापित जानकारी अभी नहीं जोड़ी है।",
    "स्टेप 1: <a href='https://ncvtmis.gov.in' target='_blank' rel='noopener'><strong>ncvtmis.gov.in</strong></a> खोलें और राज्य व ज़िले के अनुसार ITI खोजें।",
    "स्टेप 2: अपने राज्य का आधिकारिक ITI प्रवेश पोर्टल खोजें (अपने राज्य का नाम और ITI admission खोजें)।",
    "स्टेप 3: तारीखें, ट्रेड, सीटें और पात्रता सिर्फ़ आधिकारिक सूचना पर जाँचें।",
    "सीट के लिए किसी को पैसे न दें।"
  ],
  see: "यह भी देखें: <a href='iti.html'><strong>ITI ट्रेड, फीस और कमाई</strong></a> | <a href='diploma.html'><strong>डिप्लोमा कोर्स</strong></a>",
  final: "अंतिम फ़ैसले से पहले आधिकारिक जानकारी जाँचें और किसी भरोसेमंद व्यक्ति, जैसे शिक्षक या काउंसलर, से सलाह लें। हम प्रवेश, नौकरी या वेतन की गारंटी नहीं देते।"
};

ST_T.mr = {
  title: "राज्यानुसार ITI माहिती",
  sub: "तुमचे राज्य निवडा आणि तिथे ITI प्रवेश कसा होतो ते पहा.",
  disc: "राज्याची माहिती अधिकृत किंवा विश्वासार्ह स्रोत तपासल्यानंतरच जोडली जाते. ज्या राज्यांची माहिती अजून जोडलेली नाही, त्यांच्यासाठी अधिकृत माहिती शोधण्याचे टप्पे दाखवले आहेत.",
  choose: "तुमचे राज्य निवडा",
  pick: "-- राज्य निवडा --",
  mh_title: "महाराष्ट्रातील ITI प्रवेश",
  mh: [
    "सरकारी आणि खाजगी ITI मधील प्रवेश व्यवसाय शिक्षण व प्रशिक्षण संचालनालयाच्या (DVET) केंद्रीय ऑनलाइन प्रक्रियेद्वारे (CAP) होतो: <a href='https://admission.dvet.gov.in' target='_blank' rel='noopener'><strong>admission.dvet.gov.in</strong></a>.",
    "2026-27 मध्ये सुमारे 1,004 ITI सहभागी होते (418 सरकारी आणि 586 खाजगी), आणि वेगवेगळ्या अहवालांत सुमारे 1.45 ते 1.58 लाख जागा सांगितल्या गेल्या.",
    "प्रक्रिया: ऑनलाइन नोंदणी करा, पर्याय अर्जात तुमचे ट्रेड आणि ITI चे पर्याय भरा, CAP फेऱ्यांत गुणवत्तेनुसार जागा मिळवा आणि प्रवेश निश्चित करा. उरलेल्या जागा संस्था-स्तरीय समुपदेशन फेऱ्यांत भरल्या जातात, जिथे तुम्ही रिक्त जागांची यादी पाहून नोंदणी करता आणि ITI मध्ये प्रत्यक्ष जाऊन हजेरी नोंदवता.",
    "2026 मध्ये जुलैच्या अखेरपर्यंत जागांच्या तुलनेत फक्त सुमारे 79,000 विद्यार्थ्यांनी प्रवेश घेतला होता, आणि अर्जाची अंतिम तारीख नंतर 21 सप्टेंबरपर्यंत वाढवली गेली, सप्टेंबरमध्ये संस्था-स्तरीय फेऱ्या झाल्या. म्हणजे कमी लोकप्रिय ट्रेड आणि खाजगी ITI मध्ये जागा उशिरापर्यंत उपलब्ध होत्या. इतर वर्षी हे बदलू शकते.",
    "2026 ची प्रवेश फेरी संपली आहे. 2026 मध्ये पहिली गुणवत्ता यादी 2 जुलै रोजी आली. पुढील फेरीच्या तारखा अजून जाहीर झालेल्या नाहीत, म्हणून दहावीचा निकाल लागल्यानंतर DVET पोर्टल पाहत राहा.",
    "फी: महाराष्ट्रातील सरकारी ITI ची फी आम्ही अजून पडताळलेली नाही. ITI पेजवरील राष्ट्रीय अंदाज पहा आणि अधिकृत माहितीपुस्तिका तपासा."
  ],
  none_title: "या राज्याची माहिती लवकरच येत आहे",
  none: [
    "आम्ही या राज्याची पडताळलेली माहिती अजून जोडलेली नाही.",
    "स्टेप 1: <a href='https://ncvtmis.gov.in' target='_blank' rel='noopener'><strong>ncvtmis.gov.in</strong></a> उघडा आणि राज्य व जिल्ह्यानुसार ITI शोधा.",
    "स्टेप 2: तुमच्या राज्याचे अधिकृत ITI प्रवेश पोर्टल शोधा (तुमच्या राज्याचे नाव आणि ITI admission शोधा).",
    "स्टेप 3: तारखा, ट्रेड, जागा आणि पात्रता फक्त अधिकृत सूचनेवर तपासा.",
    "जागेसाठी कोणालाही पैसे देऊ नका."
  ],
  see: "हेही पहा: <a href='iti.html'><strong>ITI ट्रेड, फी आणि कमाई</strong></a> | <a href='diploma.html'><strong>डिप्लोमा अभ्यासक्रम</strong></a>",
  final: "अंतिम निर्णयापूर्वी अधिकृत माहिती तपासा आणि शिक्षक किंवा समुपदेशकासारख्या विश्वासू व्यक्तीचा सल्ला घ्या. आम्ही प्रवेश, नोकरी किंवा पगाराची हमी देत नाही."
};

// States with verified details. Key = state name in ST_LIST, value = key prefix in ST_T.
var ST_INFO = { "Maharashtra": "mh" };

function st(key) {
  var l = ST_T[currentLang];
  if (l && l[key] !== undefined) { return l[key]; }
  return ST_T.en[key];
}
