// "After Class 10" paths: Arts, Commerce, Science, Diploma, ITI. ROUGH ESTIMATES. Needs verification.

var A10_ANY = [
  { n: { en: "Constable in central forces (SSC GD)", hi: "केंद्रीय बलों में कांस्टेबल (SSC GD)", mr: "केंद्रीय दलांमधील कॉन्स्टेबल (SSC GD)" },
    r: { en: "Class 10 pass is enough, and your stream does not matter. The 2026 notice asked for age 18 to 23. Selection has a computer-based exam, physical standard and efficiency tests and a document check. Seats are limited and selection is not guaranteed. Check ssc.gov.in for the latest notice.",
         hi: "कक्षा 10 पास होना काफ़ी है, स्ट्रीम से फ़र्क़ नहीं पड़ता। 2026 की सूचना में आयु 18 से 23 साल माँगी गई थी। चयन में कंप्यूटर आधारित परीक्षा, शारीरिक मानक और दक्षता परीक्षण और दस्तावेज़ जाँच होती है। सीटें सीमित हैं और चयन की गारंटी नहीं है। नवीनतम सूचना के लिए ssc.gov.in देखें।",
         mr: "दहावी उत्तीर्ण असणे पुरेसे आहे, तुमच्या शाखेने फरक पडत नाही. 2026 च्या सूचनेत वय 18 ते 23 वर्षे मागितले होते. निवडीत संगणक आधारित परीक्षा, शारीरिक मानक आणि क्षमता चाचण्या आणि कागदपत्र तपासणी असते. जागा मर्यादित आहेत आणि निवडीची हमी नाही. नवीनतम सूचनेसाठी ssc.gov.in पहा." },
    p: { en: "Pay Level 3: basic starts at about Rs 21,700 per month (scale Rs 21,700 to Rs 69,100) plus allowances.",
         hi: "पे लेवल 3: बेसिक लगभग ₹21,700 प्रति माह से शुरू (स्केल ₹21,700 से ₹69,100), साथ में भत्ते।",
         mr: "पे लेव्हल 3: बेसिक सुमारे ₹21,700 दरमहा पासून सुरू (स्केल ₹21,700 ते ₹69,100), सोबत भत्ते." } },
  { n: { en: "Railway Group D", hi: "रेलवे ग्रुप D", mr: "रेल्वे ग्रुप D" },
    r: { en: "Class 10 pass or ITI, as per the notice. Selection is through a competitive exam and other stages given in the notice. Seats are limited and selection is not guaranteed.",
         hi: "कक्षा 10 पास या ITI, सूचना के अनुसार। चयन प्रतियोगी परीक्षा और सूचना में दिए अन्य चरणों से होता है। सीटें सीमित हैं और चयन की गारंटी नहीं है।",
         mr: "दहावी उत्तीर्ण किंवा ITI, सूचनेनुसार. निवड स्पर्धा परीक्षा आणि सूचनेत दिलेल्या इतर टप्प्यांतून होते. जागा मर्यादित आहेत आणि निवडीची हमी नाही." },
    p: { en: "Level 1: basic Rs 18,000 per month plus allowances. One website puts the gross at about Rs 21,000 to Rs 25,000.",
         hi: "लेवल 1: बेसिक ₹18,000 प्रति माह, साथ में भत्ते। एक वेबसाइट के अनुसार कुल (ग्रॉस) लगभग ₹21,000 से ₹25,000।",
         mr: "लेव्हल 1: बेसिक ₹18,000 दरमहा, सोबत भत्ते. एका वेबसाइटनुसार एकूण (ग्रॉस) सुमारे ₹21,000 ते ₹25,000." } }
];

var A10_PATHS = [
  { id: "arts",
    n: { en: "Arts (Humanities)", hi: "आर्ट्स (कला)", mr: "कला (आर्ट्स)" },
    pct: { en: "Often about 50% or more is enough in many schools. In Maharashtra, Class 11 admission is by Class 10 merit, and Arts usually closes lowest of the three streams, but top colleges still close high.",
           hi: "कई स्कूलों में अक्सर लगभग 50% या ज़्यादा काफ़ी होता है। महाराष्ट्र में कक्षा 11 का प्रवेश कक्षा 10 की मेरिट पर होता है, और आर्ट्स का कट-ऑफ़ आमतौर पर तीनों स्ट्रीम में सबसे कम रहता है, फिर भी टॉप कॉलेजों में यह ऊँचा जाता है।",
           mr: "अनेक शाळांमध्ये अनेकदा सुमारे 50% किंवा जास्त पुरेसे असते. महाराष्ट्रात अकरावी प्रवेश दहावीच्या गुणवत्तेवर होतो, आणि कला शाखेचा कट-ऑफ सहसा तिन्ही शाखांत सर्वात कमी असतो, तरीही टॉप कॉलेजांत तो जास्त जातो." },
    careers: [
      { n: { en: "School teacher", hi: "स्कूल शिक्षक", mr: "शालेय शिक्षक" },
        r: { en: "Class 11-12 (Arts) → graduation (BA) → B.Ed (2 years) → TET for government schools. For primary classes, D.El.Ed (2 years) after Class 12 is another route. Many private schools do not insist on B.Ed. Total roughly 4 to 7 years after Class 10.",
             hi: "कक्षा 11-12 (आर्ट्स) → ग्रेजुएशन (BA) → B.Ed (2 साल) → सरकारी स्कूलों के लिए TET। प्राथमिक कक्षाओं के लिए कक्षा 12 के बाद D.El.Ed (2 साल) दूसरा रास्ता है। कई निजी स्कूल B.Ed पर ज़ोर नहीं देते। कक्षा 10 के बाद कुल लगभग 4 से 7 साल।",
             mr: "अकरावी-बारावी (कला) → पदवी (BA) → B.Ed (2 वर्षे) → सरकारी शाळांसाठी TET. प्राथमिक वर्गांसाठी बारावीनंतर D.El.Ed (2 वर्षे) हा दुसरा मार्ग आहे. अनेक खाजगी शाळा B.Ed चा आग्रह धरत नाहीत. दहावीनंतर एकूण साधारण 4 ते 7 वर्षे." },
        p: { en: "Private schools: about Rs 15,000 to Rs 29,000 per month (one source: average Rs 2.01 lakh a year for private school teachers; D.El.Ed freshers Rs 2.5 to 3.5 lakh a year). Government teachers earn more under the state pay scale (we have not verified a figure).",
             hi: "निजी स्कूल: लगभग ₹15,000 से ₹29,000 प्रति माह (एक स्रोत के अनुसार निजी स्कूल शिक्षकों का औसत साल का ₹2.01 लाख; D.El.Ed फ्रेशर का साल का ₹2.5 से 3.5 लाख)। सरकारी शिक्षकों को राज्य के वेतनमान में ज़्यादा मिलता है (हमने कोई आँकड़ा सत्यापित नहीं किया)।",
             mr: "खाजगी शाळा: सुमारे ₹15,000 ते ₹29,000 दरमहा (एका स्रोतानुसार खाजगी शाळा शिक्षकांचे सरासरी वार्षिक ₹2.01 लाख; D.El.Ed फ्रेशर्सचे वार्षिक ₹2.5 ते 3.5 लाख). सरकारी शिक्षकांना राज्याच्या वेतनश्रेणीनुसार जास्त मिळते (आम्ही कोणताही आकडा पडताळलेला नाही)." } },
      { n: { en: "Police constable (state police, Maharashtra example)", hi: "पुलिस कांस्टेबल (राज्य पुलिस, महाराष्ट्र का उदाहरण)", mr: "पोलीस शिपाई (राज्य पोलीस, महाराष्ट्राचे उदाहरण)" },
        r: { en: "Class 12 pass (HSC) is the minimum for most constable posts in Maharashtra (only the Bandsman post accepts Class 10). Age is usually about 18 to 28 for the general category. Selection has a written test and physical tests. So after Class 10 you must finish Class 12 first.",
             hi: "महाराष्ट्र में ज़्यादातर कांस्टेबल पदों के लिए कक्षा 12 पास (HSC) न्यूनतम है (सिर्फ़ बैंड्समैन पद में कक्षा 10 चलती है)। सामान्य श्रेणी में उम्र आमतौर पर लगभग 18 से 28 साल। चयन में लिखित परीक्षा और शारीरिक परीक्षण होते हैं। यानी कक्षा 10 के बाद पहले कक्षा 12 पूरी करनी होगी।",
             mr: "महाराष्ट्रात बहुतेक शिपाई पदांसाठी बारावी उत्तीर्ण (HSC) ही किमान अट आहे (फक्त बँडसमन पदासाठी दहावी चालते). सर्वसाधारण प्रवर्गात वय साधारण 18 ते 28 वर्षे. निवडीत लेखी परीक्षा आणि शारीरिक चाचण्या असतात. म्हणजे दहावीनंतर आधी बारावी पूर्ण करावी लागेल." },
        p: { en: "About Rs 20,000 basic per month plus allowances (approximate; sources differ on the pay level, so check the official notice).",
             hi: "लगभग ₹20,000 बेसिक प्रति माह, साथ में भत्ते (मोटा अनुमान; पे लेवल पर स्रोत अलग-अलग हैं, इसलिए आधिकारिक सूचना देखें)।",
             mr: "सुमारे ₹20,000 बेसिक दरमहा, सोबत भत्ते (ढोबळ अंदाज; पे लेव्हलबाबत स्रोत वेगळे सांगतात, म्हणून अधिकृत सूचना पहा)." } }
    ],
    note: { en: "Other options after Arts, such as law, journalism and civil services preparation, are not covered here yet.",
            hi: "आर्ट्स के बाद के दूसरे विकल्प, जैसे कानून, पत्रकारिता और सिविल सेवा की तैयारी, यहाँ अभी शामिल नहीं हैं।",
            mr: "कला शाखेनंतरचे इतर पर्याय, जसे की कायदा, पत्रकारिता आणि नागरी सेवा तयारी, येथे अजून समाविष्ट नाहीत." } },

  { id: "commerce",
    n: { en: "Commerce", hi: "कॉमर्स", mr: "वाणिज्य (कॉमर्स)" },
    pct: { en: "Often about 55% to 60% in many schools. Popular colleges close much higher.",
           hi: "कई स्कूलों में अक्सर लगभग 55% से 60%। लोकप्रिय कॉलेजों में कट-ऑफ़ बहुत ऊँचा जाता है।",
           mr: "अनेक शाळांमध्ये अनेकदा सुमारे 55% ते 60%. लोकप्रिय कॉलेजांत कट-ऑफ खूप जास्त जातो." },
    careers: [
      { n: { en: "Accountant / account assistant", hi: "अकाउंटेंट / अकाउंट असिस्टेंट", mr: "अकाउंटंट / अकाउंट असिस्टंट" },
        r: { en: "Class 11-12 (Commerce) → B.Com (3 years) → accounts job. Learn Excel and accounting software alongside.",
             hi: "कक्षा 11-12 (कॉमर्स) → B.Com (3 साल) → अकाउंट्स की नौकरी। साथ में एक्सेल और अकाउंटिंग सॉफ्टवेयर सीखें।",
             mr: "अकरावी-बारावी (वाणिज्य) → B.Com (3 वर्षे) → अकाउंट्सची नोकरी. सोबत एक्सेल आणि अकाउंटिंग सॉफ्टवेअर शिका." },
        p: { en: "Freshers about Rs 1.5 to 3 lakh a year, roughly Rs 12,500 to Rs 25,000 per month (accountant roles up to about Rs 3.9 lakh a year in some listings).",
             hi: "फ्रेशर का साल का लगभग ₹1.5 से 3 लाख, यानी लगभग ₹12,500 से ₹25,000 प्रति माह (कुछ लिस्टिंग में अकाउंटेंट की भूमिकाओं में साल का लगभग ₹3.9 लाख तक)।",
             mr: "फ्रेशर्सना वार्षिक सुमारे ₹1.5 ते 3 लाख, म्हणजे सुमारे ₹12,500 ते ₹25,000 दरमहा (काही लिस्टिंगमध्ये अकाउंटंट भूमिकांसाठी वार्षिक सुमारे ₹3.9 लाखांपर्यंत)." } },
      { n: { en: "Chartered Accountant (CA)", hi: "चार्टर्ड अकाउंटेंट (CA)", mr: "चार्टर्ड अकाउंटंट (CA)" },
        r: { en: "Class 12 (Commerce preferred) → CA Foundation → Intermediate → articleship (training) → Final. It is long and difficult, and many students take longer. Check the ICAI website for current rules.",
             hi: "कक्षा 12 (कॉमर्स बेहतर) → CA फ़ाउंडेशन → इंटरमीडिएट → आर्टिकलशिप (प्रशिक्षण) → फ़ाइनल। यह लंबा और कठिन है, और कई विद्यार्थियों को ज़्यादा समय लगता है। मौजूदा नियमों के लिए ICAI की वेबसाइट देखें।",
             mr: "बारावी (वाणिज्य श्रेयस्कर) → CA फाउंडेशन → इंटरमिजिएट → आर्टिकलशिप (प्रशिक्षण) → फायनल. हे लांब आणि अवघड आहे, आणि अनेक विद्यार्थ्यांना जास्त वेळ लागतो. सध्याच्या नियमांसाठी ICAI ची वेबसाइट पहा." },
        p: { en: "Varies a lot. One website lists an average of about Rs 9.9 lakh a year for Chartered Accountants (all experience levels, not a fresher figure).",
             hi: "काफ़ी अलग-अलग होती है। एक वेबसाइट ने चार्टर्ड अकाउंटेंट का औसत साल का लगभग ₹9.9 लाख बताया है (सभी अनुभव स्तर, फ्रेशर का आँकड़ा नहीं)।",
             mr: "खूप बदलते. एका वेबसाइटने चार्टर्ड अकाउंटंटचे सरासरी वार्षिक सुमारे ₹9.9 लाख सांगितले आहे (सर्व अनुभव स्तर, फ्रेशरचा आकडा नाही)." } }
    ],
    note: { en: "", hi: "", mr: "" } },

  { id: "science",
    n: { en: "Science", hi: "साइंस (विज्ञान)", mr: "विज्ञान (सायन्स)" },
    pct: { en: "Many schools prefer about 60% to 70% with good Maths and Science marks. Top colleges in big cities can close above 90%.",
           hi: "कई स्कूल गणित और विज्ञान में अच्छे अंकों के साथ लगभग 60% से 70% पसंद करते हैं। बड़े शहरों के टॉप कॉलेजों में कट-ऑफ़ 90% से ऊपर जा सकता है।",
           mr: "अनेक शाळा गणित आणि विज्ञानात चांगल्या गुणांसह सुमारे 60% ते 70% पसंत करतात. मोठ्या शहरांतील टॉप कॉलेजांत कट-ऑफ 90% च्या वर जाऊ शकतो." },
    careers: [
      { n: { en: "Engineer (B.E. / B.Tech)", hi: "इंजीनियर (B.E. / B.Tech)", mr: "इंजिनिअर (B.E. / B.Tech)" },
        r: { en: "Class 11-12 (Science with Maths) → entrance exams (state or national) → B.E./B.Tech (4 years). Another route: Diploma after Class 10, then direct second-year entry.",
             hi: "कक्षा 11-12 (गणित के साथ विज्ञान) → प्रवेश परीक्षाएँ (राज्य या राष्ट्रीय) → B.E./B.Tech (4 साल)। दूसरा रास्ता: कक्षा 10 के बाद डिप्लोमा, फिर सीधे दूसरे साल में प्रवेश।",
             mr: "अकरावी-बारावी (गणितासह विज्ञान) → प्रवेश परीक्षा (राज्य किंवा राष्ट्रीय) → B.E./B.Tech (4 वर्षे). दुसरा मार्ग: दहावीनंतर डिप्लोमा, मग थेट दुसऱ्या वर्षात प्रवेश." },
        p: { en: "Many freshers about Rs 2.5 to 4.5 lakh a year (roughly Rs 17,000 to Rs 38,000 per month). Top colleges and some IT roles pay much more. It differs by branch and city.",
             hi: "कई फ्रेशर का साल का लगभग ₹2.5 से 4.5 लाख (यानी लगभग ₹17,000 से ₹38,000 प्रति माह)। टॉप कॉलेज और कुछ IT भूमिकाओं में इससे बहुत ज़्यादा। यह ब्रांच और शहर पर निर्भर करता है।",
             mr: "अनेक फ्रेशर्सना वार्षिक सुमारे ₹2.5 ते 4.5 लाख (म्हणजे सुमारे ₹17,000 ते ₹38,000 दरमहा). टॉप कॉलेज आणि काही IT भूमिकांमध्ये यापेक्षा खूप जास्त. हे शाखा आणि शहरावर अवलंबून असते." } },
      { n: { en: "B.Sc graduate jobs", hi: "B.Sc ग्रेजुएट की नौकरियाँ", mr: "B.Sc पदवीधरांच्या नोकऱ्या" },
        r: { en: "Class 11-12 (Science) → B.Sc (3 years) → jobs, or M.Sc, B.Ed, MBA and other courses.",
             hi: "कक्षा 11-12 (विज्ञान) → B.Sc (3 साल) → नौकरी, या M.Sc, B.Ed, MBA जैसे आगे के कोर्स।",
             mr: "अकरावी-बारावी (विज्ञान) → B.Sc (3 वर्षे) → नोकरी, किंवा M.Sc, B.Ed, MBA सारखे पुढील अभ्यासक्रम." },
        p: { en: "Freshers about Rs 15,000 to Rs 30,000 per month in one estimate. It depends on subject, skills and city.",
             hi: "एक अनुमान में फ्रेशर का लगभग ₹15,000 से ₹30,000 प्रति माह। यह विषय, स्किल और शहर पर निर्भर करता है।",
             mr: "एका अंदाजानुसार फ्रेशर्सना सुमारे ₹15,000 ते ₹30,000 दरमहा. हे विषय, कौशल्य आणि शहरावर अवलंबून असते." } }
    ],
    note: { en: "Medical, nursing and pharmacy paths need Biology and entrance exams. Their pay is not covered here yet.",
            hi: "मेडिकल, नर्सिंग और फार्मेसी के रास्तों के लिए जीव विज्ञान और प्रवेश परीक्षाएँ चाहिए। उनकी कमाई यहाँ अभी शामिल नहीं है।",
            mr: "वैद्यकीय, नर्सिंग आणि फार्मसीच्या मार्गांसाठी जीवशास्त्र आणि प्रवेश परीक्षा लागतात. त्यांची कमाई येथे अजून समाविष्ट नाही." } },

  { id: "diploma",
    n: { en: "Diploma (Polytechnic)", hi: "डिप्लोमा (पॉलिटेक्निक)", mr: "डिप्लोमा (पॉलिटेक्निक)" },
    pct: { en: "Class 10 pass. The marks rule differs (some pages say 35%, others 50% for Maharashtra). See the Diploma page.",
           hi: "कक्षा 10 पास। अंकों का नियम अलग है (महाराष्ट्र के लिए कुछ पेज 35%, कुछ 50% बताते हैं)। डिप्लोमा पेज देखें।",
           mr: "दहावी उत्तीर्ण. गुणांचा नियम वेगळा आहे (महाराष्ट्रासाठी काही पेज 35%, काही 50% सांगतात). डिप्लोमा पेज पहा." },
    careers: [
      { n: { en: "Technician / trainee in industry", hi: "इंडस्ट्री में टेक्नीशियन / ट्रेनी", mr: "उद्योगात तंत्रज्ञ / प्रशिक्षणार्थी" },
        r: { en: "Diploma (3 years) after Class 10 → apprentice, trainee or technician job.",
             hi: "कक्षा 10 के बाद डिप्लोमा (3 साल) → अप्रेंटिस, ट्रेनी या टेक्नीशियन की नौकरी।",
             mr: "दहावीनंतर डिप्लोमा (3 वर्षे) → अप्रेंटिस, प्रशिक्षणार्थी किंवा तंत्रज्ञ नोकरी." },
        p: { en: "Apprentice stipend about Rs 8,000 to Rs 10,900 per month in several notices. One private listing for ITI/diploma freshers showed Rs 15,500 to Rs 20,000.",
             hi: "कई सूचनाओं में अप्रेंटिस स्टाइपेंड लगभग ₹8,000 से ₹10,900 प्रति माह। ITI/डिप्लोमा फ्रेशर के लिए एक निजी लिस्टिंग में ₹15,500 से ₹20,000 दिखा।",
             mr: "अनेक सूचनांमध्ये अप्रेंटिस स्टायपेंड सुमारे ₹8,000 ते ₹10,900 दरमहा. ITI/डिप्लोमा फ्रेशर्ससाठीच्या एका खाजगी लिस्टिंगमध्ये ₹15,500 ते ₹20,000 दिसले." } },
      { n: { en: "Junior Engineer (government)", hi: "जूनियर इंजीनियर (सरकारी)", mr: "कनिष्ठ अभियंता (सरकारी)" },
        r: { en: "Diploma in the matching branch → SSC JE or RRB JE exam. Some posts ask for work experience. Seats are limited.",
             hi: "संबंधित ब्रांच में डिप्लोमा → SSC JE या RRB JE परीक्षा। कुछ पदों के लिए काम का अनुभव माँगा जाता है। सीटें सीमित हैं।",
             mr: "संबंधित शाखेचा डिप्लोमा → SSC JE किंवा RRB JE परीक्षा. काही पदांसाठी कामाचा अनुभव मागितला जातो. जागा मर्यादित आहेत." },
        p: { en: "Pay Level 6: basic Rs 35,400 per month plus allowances.",
             hi: "पे लेवल 6: बेसिक ₹35,400 प्रति माह, साथ में भत्ते।",
             mr: "पे लेव्हल 6: बेसिक ₹35,400 दरमहा, सोबत भत्ते." } }
    ],
    link: { href: "diploma.html", t: { en: "Full details: Diploma courses, fees and pay", hi: "पूरी जानकारी: डिप्लोमा कोर्स, फीस और कमाई", mr: "संपूर्ण माहिती: डिप्लोमा अभ्यासक्रम, फी आणि कमाई" } },
    note: { en: "", hi: "", mr: "" } },

  { id: "iti",
    n: { en: "ITI", hi: "ITI", mr: "ITI" },
    pct: { en: "Class 10 pass with roughly 35% to 40% marks (some trades need only Class 8). Admission is by merit. See the ITI page.",
           hi: "कक्षा 10 पास, लगभग 35% से 40% अंकों के साथ (कुछ ट्रेड में सिर्फ़ कक्षा 8 चाहिए)। प्रवेश मेरिट पर होता है। ITI पेज देखें।",
           mr: "दहावी उत्तीर्ण, सुमारे 35% ते 40% गुणांसह (काही ट्रेडसाठी फक्त आठवी लागते). प्रवेश गुणवत्तेनुसार होतो. ITI पेज पहा." },
    careers: [
      { n: { en: "Welder", hi: "वेल्डर", mr: "वेल्डर" },
        r: { en: "ITI Welder (1 year; Class 8 or Class 10 pass depending on the state) → job in a private company or an apprenticeship.",
             hi: "ITI वेल्डर (1 साल; राज्य के अनुसार कक्षा 8 या कक्षा 10 पास) → निजी कंपनी में नौकरी या अप्रेंटिसशिप।",
             mr: "ITI वेल्डर (1 वर्ष; राज्यानुसार आठवी किंवा दहावी उत्तीर्ण) → खाजगी कंपनीत नोकरी किंवा अप्रेंटिसशिप." },
        p: { en: "Freshers about Rs 15,000 to Rs 20,000 per month in several listings. One Pune listing for an ITI welder with 1 year experience offered Rs 19,000 to Rs 23,000 take-home. Apprentice stipend at the start is about Rs 7,700 to Rs 10,000.",
             hi: "कई लिस्टिंग में फ्रेशर का लगभग ₹15,000 से ₹20,000 प्रति माह। पुणे की एक लिस्टिंग में 1 साल अनुभव वाले ITI वेल्डर के लिए ₹19,000 से ₹23,000 टेक-होम दिया गया। शुरुआत में अप्रेंटिस स्टाइपेंड लगभग ₹7,700 से ₹10,000।",
             mr: "अनेक लिस्टिंगमध्ये फ्रेशर्सना सुमारे ₹15,000 ते ₹20,000 दरमहा. पुण्यातील एका लिस्टिंगमध्ये 1 वर्षाचा अनुभव असलेल्या ITI वेल्डरसाठी ₹19,000 ते ₹23,000 टेक-होम दिले होते. सुरुवातीला अप्रेंटिस स्टायपेंड सुमारे ₹7,700 ते ₹10,000." } },
      { n: { en: "Fitter", hi: "फिटर", mr: "फिटर" },
        r: { en: "ITI Fitter (2 years; Class 10 with Maths and Science) → job in a private company or an apprenticeship.",
             hi: "ITI फिटर (2 साल; गणित और विज्ञान के साथ कक्षा 10) → निजी कंपनी में नौकरी या अप्रेंटिसशिप।",
             mr: "ITI फिटर (2 वर्षे; गणित आणि विज्ञानासह दहावी) → खाजगी कंपनीत नोकरी किंवा अप्रेंटिसशिप." },
        p: { en: "Freshers about Rs 13,000 (one blog) to Rs 15,000-Rs 20,000 (listings in Mumbai and Chennai). It grows with skill and experience.",
             hi: "फ्रेशर का लगभग ₹13,000 (एक ब्लॉग) से ₹15,000 से ₹20,000 (मुंबई और चेन्नई की लिस्टिंग)। स्किल और अनुभव के साथ बढ़ता है।",
             mr: "फ्रेशर्सना सुमारे ₹13,000 (एक ब्लॉग) ते ₹15,000 ते ₹20,000 (मुंबई आणि चेन्नईतील लिस्टिंग). कौशल्य आणि अनुभवासोबत वाढते." } }
    ],
    link: { href: "iti.html", t: { en: "Full details: ITI trades, fees and pay", hi: "पूरी जानकारी: ITI ट्रेड, फीस और कमाई", mr: "संपूर्ण माहिती: ITI ट्रेड, फी आणि कमाई" } },
    note: { en: "", hi: "", mr: "" } }
];

var A10_T = {};

A10_T.en = {
  title: "After Class 10: Your Paths",
  sub: "Arts, Commerce, Science, Diploma and ITI: what you can become, how to get there and the approximate starting pay.",
  disc: "Pay figures are approximate starting pay from job notices, official pay scales and general websites, not promises. Marks needed differ by state, school and year. Always check official notices.",
  hkey: "Read this first",
  key: [
    "Most careers need more than Class 10. For example, a teacher needs graduation and training, and a state police constable needs Class 12. So each path below shows the route and the years it takes.",
    "Class 10 marks decide which stream or course you can get. They do not decide your future. You can improve later through more study or skills.",
    "Pay depends on city, employer, skills and experience, and it grows with time."
  ],
  h35: "If you have around 35% in Class 10",
  p35: [
    "35% is generally the passing mark. With it, ITI is usually the most open path, and Diploma may be possible through institute-level rounds (check the marks rule).",
    "Arts is often more open than Science or Commerce, but seats in popular colleges close at much higher marks. Check the second and later admission rounds for vacant seats.",
    "Class 10 pass also lets you apply for jobs like SSC GD Constable and Railway Group D, if you meet the age and other rules.",
    "Do not give up on studies: you can grow later, for example ITI then diploma, or finishing Class 12 and graduation."
  ],
  hany: "Jobs you can apply for right after Class 10 (any stream)",
  any_sub: "These need Class 10 pass. Competition is high and selection is not guaranteed.",
  hpaths: "Your 5 paths after Class 10",
  l_pct: "Class 10 marks needed (approx):",
  l_route: "How to get there:",
  l_pay: "Starting pay (approx):",
  final: "Before any final decision, check official information and talk to a trusted person such as a teacher or counsellor. We do not guarantee admission, jobs or salary."
};

A10_T.hi = {
  title: "कक्षा 10 के बाद: आपके रास्ते",
  sub: "आर्ट्स, कॉमर्स, साइंस, डिप्लोमा और ITI: आप क्या बन सकते हैं, कैसे और शुरुआती कमाई लगभग कितनी।",
  disc: "कमाई के आँकड़े नौकरी की सूचनाओं, आधिकारिक वेतनमान और सामान्य वेबसाइटों से लिया गया अनुमानित शुरुआती वेतन हैं, वादा नहीं। ज़रूरी अंक राज्य, स्कूल और साल के अनुसार अलग होते हैं। हमेशा आधिकारिक सूचना देखें।",
  hkey: "पहले ये पढ़ें",
  key: [
    "ज़्यादातर करियर के लिए कक्षा 10 से ज़्यादा पढ़ाई चाहिए। जैसे शिक्षक के लिए ग्रेजुएशन और प्रशिक्षण, और राज्य पुलिस कांस्टेबल के लिए कक्षा 12। इसलिए नीचे हर रास्ते में तरीका और लगने वाले साल दिखाए गए हैं।",
    "कक्षा 10 के अंक तय करते हैं कि आपको कौन-सी स्ट्रीम या कोर्स मिल सकता है। वे आपका भविष्य तय नहीं करते। आप बाद में और पढ़ाई या स्किल से आगे बढ़ सकते हैं।",
    "कमाई शहर, नियोक्ता, स्किल और अनुभव पर निर्भर करती है, और समय के साथ बढ़ती है।"
  ],
  h35: "अगर कक्षा 10 में लगभग 35% अंक हैं",
  p35: [
    "35% आमतौर पर पास होने के अंक हैं। इनके साथ ITI आमतौर पर सबसे खुला रास्ता है, और डिप्लोमा संस्थान-स्तर के राउंड से संभव हो सकता है (अंकों का नियम जाँचें)।",
    "आर्ट्स अक्सर साइंस या कॉमर्स से ज़्यादा खुला होता है, लेकिन लोकप्रिय कॉलेजों में सीटें बहुत ऊँचे अंकों पर बंद होती हैं। खाली सीटों के लिए दूसरे और बाद के प्रवेश राउंड देखें।",
    "कक्षा 10 पास होने पर आप SSC GD कांस्टेबल और रेलवे ग्रुप D जैसी नौकरियों के लिए भी आवेदन कर सकते हैं, अगर आयु और बाकी शर्तें पूरी हों।",
    "पढ़ाई मत छोड़िए: आप बाद में आगे बढ़ सकते हैं, जैसे ITI फिर डिप्लोमा, या कक्षा 12 और ग्रेजुएशन पूरा करके।"
  ],
  hany: "कक्षा 10 के तुरंत बाद आवेदन करने वाली नौकरियाँ (किसी भी स्ट्रीम से)",
  any_sub: "इनके लिए कक्षा 10 पास चाहिए। प्रतिस्पर्धा बहुत ज़्यादा है और चयन की गारंटी नहीं है।",
  hpaths: "कक्षा 10 के बाद आपके 5 रास्ते",
  l_pct: "कक्षा 10 में ज़रूरी अंक (लगभग):",
  l_route: "वहाँ कैसे पहुँचें:",
  l_pay: "शुरुआती कमाई (लगभग):",
  final: "अंतिम फ़ैसले से पहले आधिकारिक जानकारी जाँचें और किसी भरोसेमंद व्यक्ति, जैसे शिक्षक या काउंसलर, से सलाह लें। हम प्रवेश, नौकरी या वेतन की गारंटी नहीं देते।"
};

A10_T.mr = {
  title: "दहावीनंतर: तुमचे मार्ग",
  sub: "कला, वाणिज्य, विज्ञान, डिप्लोमा आणि ITI: तुम्ही काय बनू शकता, कसे आणि सुरुवातीची कमाई साधारण किती.",
  disc: "कमाईची आकडेवारी नोकरीच्या सूचना, अधिकृत वेतनश्रेणी आणि सर्वसाधारण वेबसाइट्सवरून घेतलेले अंदाजे सुरुवातीचे वेतन आहे, आश्वासन नाही. लागणारे गुण राज्य, शाळा आणि वर्षानुसार वेगळे असतात. नेहमी अधिकृत सूचना पहा.",
  hkey: "आधी हे वाचा",
  key: [
    "बहुतेक करिअरसाठी दहावीपेक्षा जास्त शिक्षण लागते. उदा. शिक्षकासाठी पदवी आणि प्रशिक्षण, आणि राज्य पोलीस शिपायासाठी बारावी. म्हणून खाली प्रत्येक मार्गात पद्धत आणि लागणारी वर्षे दाखवली आहेत.",
    "दहावीचे गुण ठरवतात की तुम्हाला कोणती शाखा किंवा अभ्यासक्रम मिळू शकतो. ते तुमचे भविष्य ठरवत नाहीत. तुम्ही नंतर अधिक शिक्षण किंवा कौशल्यांनी पुढे जाऊ शकता.",
    "कमाई शहर, नियोक्ता, कौशल्य आणि अनुभवावर अवलंबून असते, आणि कालांतराने वाढते."
  ],
  h35: "दहावीत सुमारे 35% गुण असतील तर",
  p35: [
    "35% हे सहसा उत्तीर्ण होण्याचे गुण आहेत. त्यांसह ITI हा सहसा सर्वात खुला मार्ग असतो, आणि डिप्लोमा संस्था-स्तरीय फेऱ्यांतून शक्य असू शकतो (गुणांचा नियम तपासा).",
    "कला शाखा अनेकदा विज्ञान किंवा वाणिज्यपेक्षा जास्त खुली असते, पण लोकप्रिय कॉलेजांत जागा खूप जास्त गुणांवर बंद होतात. रिक्त जागांसाठी दुसरी आणि पुढील प्रवेश फेरी तपासा.",
    "दहावी उत्तीर्ण असल्यावर तुम्ही SSC GD कॉन्स्टेबल आणि रेल्वे ग्रुप D सारख्या नोकऱ्यांसाठीही अर्ज करू शकता, वय आणि इतर अटी पूर्ण असल्यास.",
    "शिक्षण सोडू नका: तुम्ही नंतर पुढे जाऊ शकता, जसे की ITI मग डिप्लोमा, किंवा बारावी आणि पदवी पूर्ण करून."
  ],
  hany: "दहावीनंतर लगेच अर्ज करता येणाऱ्या नोकऱ्या (कोणत्याही शाखेतून)",
  any_sub: "यासाठी दहावी उत्तीर्ण असणे लागते. स्पर्धा खूप जास्त आहे आणि निवडीची हमी नाही.",
  hpaths: "दहावीनंतर तुमचे 5 मार्ग",
  l_pct: "दहावीत लागणारे गुण (साधारण):",
  l_route: "तिथे कसे पोहोचावे:",
  l_pay: "सुरुवातीची कमाई (साधारण):",
  final: "अंतिम निर्णयापूर्वी अधिकृत माहिती तपासा आणि शिक्षक किंवा समुपदेशकासारख्या विश्वासू व्यक्तीचा सल्ला घ्या. आम्ही प्रवेश, नोकरी किंवा पगाराची हमी देत नाही."
};

function a10(key) {
  var l = A10_T[currentLang];
  if (l && l[key] !== undefined) { return l[key]; }
  return A10_T.en[key];
}
function pick(obj) { return obj[currentLang] || obj.en; }
A10_T.en.key.push("See also: <a href='roadmaps.html'><strong>Career roadmaps (for example, IPS to Commissioner of Police)</strong></a>");
A10_T.hi.key.push("यह भी देखें: <a href='roadmaps.html'><strong>करियर रोडमैप (जैसे IPS से पुलिस कमिश्नर तक)</strong></a>");
A10_T.mr.key.push("हेही पहा: <a href='roadmaps.html'><strong>करिअर रोडमॅप (उदा. IPS ते पोलीस आयुक्त)</strong></a>");
