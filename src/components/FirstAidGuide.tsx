import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Plus, Minus, Droplets, Flame, AlertTriangle, 
  Wind, Ghost, Zap, Bandage, HeartPulse, Sparkles, 
  Skull, Syringe, Eye
} from 'lucide-react';

/**
 * FirstAidGuide Component
 * Modular, self-contained multilingual emergency guide for Sehat Saathi.
 * Supports: English, Hindi, Bengali, Marathi, Bhojpuri, Maithili.
 */

interface GuideData {
  title: string;
  subtitle: string;
  categories: {
    [key: string]: {
      label: string;
      steps: string[];
    };
  };
}

const FirstAidGuide: React.FC = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<string | null>(null);

  // Centralized Multilingual Data
  const translations: Record<string, GuideData> = {
    en: {
      title: "Quick First Aid Guide",
      subtitle: "Trusted Medical Guidance",
      categories: {
        cuts: { label: "Cuts & Bleeding", steps: ["Clean with water.", "Apply pressure with cloth.", "Apply antiseptic.", "Bandage firmly."] },
        burns: { label: "Minor Burns", steps: ["Cool water for 20 mins.", "Remove tight jewelry.", "Cover loosely.", "No ice/butter."] },
        choking: { label: "Choking", steps: ["5 back blows.", "5 abdominal thrusts.", "Repeat until clear.", "Call 112 if unconscious."] },
        fainting: { label: "Fainting", steps: ["Lay flat on back.", "Elevate legs.", "Loosen clothing.", "Check breathing."] },
        fracture: { label: "Fractures", steps: ["Don’t move the limb.", "Apply ice pack.", "Use a splint/sling.", "Get X-ray immediately."] },
        snake: { label: "Snake Bite", steps: ["Keep area still.", "Keep bite below heart.", "Do NOT suck poison.", "Seek Anti-venom."] },
        heat: { label: "Heatstroke", steps: ["Move to shade.", "Cool wet cloths.", "Fan the person.", "Call 112."] },
        poison: { label: "Poisoning", steps: ["Identify substance.", "Call hospital.", "Don’t induce vomiting.", "Check airway."] },
        eye: { label: "Eye Injury", steps: ["Don’t rub eye.", "Flush with clean water.", "Cover with eye shield.", "See eye specialist."] },
        nose: { label: "Nosebleed", steps: ["Sit up, lean forward.", "Pinch nose (10 mins).", "Breathe via mouth.", "Apply ice on bridge."] }
      }
    },
    hi: {
      title: "त्वरित प्राथमिक उपचार गाइड",
      subtitle: "विश्वसनीय चिकित्सा मार्गदर्शन",
      categories: {
        cuts: { label: "चोट और रक्तस्राव", steps: ["पानी से साफ करें।", "कपड़े से दबाव डालें।", "एंटीसेप्टिक लगाएं।", "पट्टी बांधें।"] },
        burns: { label: "मामूली जलन", steps: ["20 मिनट ठंडा पानी डालें।", "गहने हटा दें।", "ढीला ढकें।", "बर्फ न लगाएं।"] },
        choking: { label: "दम घुटना", steps: ["पीठ थपथपाएं।", "पेट दबाएं।", "साफ होने तक दोहराएं।", "112 बुलाएं।"] },
        fainting: { label: "बेहोश होना", steps: ["सीधे लेटें।", "पैर ऊपर उठाएं।", "कपड़े ढीले करें।", "साँस जांचें।"] },
        fracture: { label: "हड्डी टूटना", steps: ["अंग न हिलाएं।", "आइस पैक लगाएं।", "स्प्लिंट का उपयोग करें।", "एक्स-रे कराएं।"] },
        snake: { label: "सांप का काटना", steps: ["स्थिर रहें।", "काटे को दिल से नीचे रखें।", "जहर न चूसें।", "एंटी-वेनम लें।"] },
        heat: { label: "लू लगना", steps: ["छाया में जाएं।", "गीले कपड़े।", "हवा दें।", "112 कॉल करें।"] },
        poison: { label: "विषाक्तता", steps: ["पदार्थ पहचानें।", "अस्पताल बुलाएं।", "उल्टी न कराएं।", "सांस जांचें।"] },
        eye: { label: "आँख की चोट", steps: ["आँख न मलें।", "पानी से धोएं।", "शील्ड से ढकें।", "विशेषज्ञ को दिखाएं।"] },
        nose: { label: "नाक से खून", steps: ["आगे झुकें।", "नाक दबाएं।", "मुंह से सांस लें।", "बर्फ लगाएं।"] }
      }
    },
    bn: {
      title: "প্রাথমিক চিকিৎসা গাইড",
      subtitle: "নির্ভরযোগ্য চিকিৎসা নির্দেশিকা",
      categories: {
        cuts: { label: "কাটা ও রক্তপাত", steps: ["জল দিয়ে পরিষ্কার করুন।", "কাপড় দিয়ে চাপ দিন।", "ব্যান্ডেজ করুন।"] },
        burns: { label: "পোড়া", steps: ["২০ মিনিট ঠান্ডা জল দিন।", "ঢিলেঢালা ভাবে ঢাকুন।", "বরফ দেবেন না।"] },
        choking: { label: "দমবন্ধ হওয়া", steps: ["পিঠে চাপ দিন।", "পেটে চাপ দিন।", "১১২-এ কল করুন।"] },
        snake: { label: "সর্প দংশন", steps: ["স্থির থাকুন।", "বিষ চুষবেন না।", "অ্যান্টি-ভেনম নিন।"] },
        heat: { label: "সানস্ট্রোক", steps: ["ছায়ায় যান।", "ভেজা কাপড় দিন।", "জল পান করান।"] }
      }
    },
    mr: {
      title: "प्रथम उपचार मार्गदर्शिका",
      subtitle: "वैद्यकीय मार्गदर्शन",
      categories: {
        cuts: { label: "जखम आणि रक्तस्त्राव", steps: ["पाण्याने स्वच्छ करा।", "दाब देऊन धरा।", "पट्टी बांधा।"] },
        burns: { label: "भाजणे", steps: ["थंड पाणी ओता।", "दागिने काढून टाका।", "बर्फ लावू नका।"] },
        heat: { label: "उष्माघात", steps: ["सावलीत जा।", "ओले कपडे लावा।", "हवा द्या।"] }
      }
    },
    bho: {
      title: "प्राथमिक उपचार गाइड",
      subtitle: "भरोसेमंद डॉक्टरी सलाह",
      categories: {
        cuts: { label: "चोट अउर खून", steps: ["पानी से साफ करीं।", "कपड़ा से दाबीं।", "पट्टी बाँधीं।"] },
        snake: { label: "साँप काटल", steps: ["अंग मत डोलाईं।", "जहर मत चूसीं।", "डॉक्टर के बुलाईं।"] }
      }
    },
    mai: {
      title: "प्राथमिक उपचार गाइड",
      subtitle: "चिकित्सा सलाह",
      categories: {
        cuts: { label: "चोट आ रक्त", steps: ["पानि सँ साफ करू।", "कपड़ा सँ दाबू।", "पट्टी बाँधू।"] },
        fever: { label: "तेज बुखार", steps: ["पानि पीबू।", "पट्टी लगाऊ।", "डॉक्टर सँ मिलू।"] }
      }
    }
  };

  const iconMap: Record<string, JSX.Element> = {
    cuts: <Bandage className="w-6 h-6 text-rose-500" />,
    burns: <Flame className="w-6 h-6 text-orange-500" />,
    choking: <Wind className="w-6 h-6 text-sky-500" />,
    fainting: <Ghost className="w-6 h-6 text-indigo-400" />,
    fracture: <Zap className="w-6 h-6 text-yellow-600" />,
    snake: <Skull className="w-6 h-6 text-emerald-600" />,
    heat: <AlertTriangle className="w-6 h-6 text-orange-600" />,
    poison: <Syringe className="w-6 h-6 text-purple-500" />,
    eye: <Eye className="w-6 h-6 text-blue-500" />,
    nose: <Droplets className="w-6 h-6 text-red-500" />
  };

  // Language mapping logic: Fallback to English, always show Hindi subtitle
  const activeContent = translations[language] || translations['en'];
  const hindiContent = translations['hi'];

  return (
    <div className="w-full mx-auto my-12 transition-all duration-700 font-sans">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-t-3xl p-8 text-white shadow-2xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-md shadow-inner">
              <HeartPulse className="w-10 h-10 animate-pulse" />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight">{activeContent.title}</h2>
              <p className="text-white/80 font-medium opacity-90">{hindiContent.title}</p>
            </div>
          </div>
          <div className="bg-white/10 px-4 py-2 rounded-full border border-white/20 text-sm flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> {activeContent.subtitle}
          </div>
        </div>
      </div>

      {/* Grid Section */}
      <div className="bg-card border-x-2 border-b-2 border-border rounded-b-3xl p-8 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.keys(translations['en'].categories).map((id) => {
            const item = activeContent.categories[id] || translations['en'].categories[id];
            const itemHi = hindiContent.categories[id];
            
            return (
              <div key={id} className="relative">
                <button
                  onClick={() => setActiveTab(activeTab === id ? null : id)}
                  className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between ${
                    activeTab === id 
                    ? 'border-emerald-500 bg-emerald-50/30 ring-1 ring-emerald-500' 
                    : 'border-muted bg-background hover:border-emerald-400 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${activeTab === id ? 'bg-emerald-100' : 'bg-muted'}`}>
                      {iconMap[id]}
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg leading-tight">{item.label}</h3>
                      <p className="text-[10px] text-muted-foreground font-bold uppercase mt-1">{itemHi.label}</p>
                    </div>
                  </div>
                  {activeTab === id ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </button>

                {/* Animated Drawer */}
                <div className={`overflow-hidden transition-all duration-300 ${activeTab === id ? 'max-h-80 mt-2' : 'max-h-0'}`}>
                  <div className="p-5 bg-emerald-50/20 border border-emerald-100 rounded-2xl">
                    <ul className="space-y-2">
                      {item.steps.map((step, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm font-medium">
                          <span className="w-5 h-5 bg-emerald-600 text-white rounded-full flex items-center justify-center text-[10px] shrink-0">
                            {i + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FirstAidGuide;