"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Logo Tasarımı",
    description: "Markanızın ilk izlenimini oluşturan logonuzu, özgünlük ve sadeliği merkeze alarak profesyonelce tasarlıyoruz.",
    details: "Kurumsal kimlik, marka rehberi, renk paleti ve tipografi çalışmalarıyla markanızın görsel dilini oluşturuyoruz.",
    features: ["Özgün Tasarım", "Vektörel Çizim", "Marka Rehberi", "Revizyon Hakkı"],
    image: "/mirai-logo.png" 
  },
  {
    id: 2,
    title: "Web Tasarımı",
    description: "Markanızı dijital ortama güçlü bir şekilde taşıyarak, kullanıcı dostu ve modern web tasarımlarıyla profesyonel bir görünüm kazandırıyoruz.",
    details: "Mobil uyumlu, SEO dostu ve hızlı açılan web siteleri ile ziyaretçilerinizi müşteriye dönüştürüyoruz.",
    features: ["Responsive Tasarım", "SEO Altyapısı", "Yönetim Paneli", "Hızlı Hosting"],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Sosyal Medya Yönetimi",
    description: "Markanızı sosyal medyada profesyonelce yönetiyor, içerik, etkileşim ve büyümeyi birlikte sağlıyoruz. Görünürlüğünüzü güce dönüştürüyoruz.",
    details: "Instagram, LinkedIn ve diğer platformlar için stratejik içerik planlaması ve topluluk yönetimi yapıyoruz.",
    features: ["İçerik Takvimi", "Reels & Post", "Moderasyon", "Aylık Rapor"],
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Dijital Reklam (Ads)",
    description: "Google ve sosyal medya reklamlarıyla hedef kitlenize nokta atışı ulaşıyor, bütçenizi en verimli şekilde kullanarak maksimum dönüşüm sağlıyoruz.",
    details: "Veri odaklı reklam yönetimi ile satışlarınızı ve marka bilinirliğinizi artırıyoruz.",
    features: ["Google Ads", "Meta Ads", "Retargeting", "Dönüşüm Takibi"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Video Prodüksiyon",
    description: "Markanızın hikayesini sinematik bir dille anlatıyor, tanıtım ve reklam filmleriyle izleyicide kalıcı bir etki bırakıyoruz.",
    details: "Senaryodan kurguya, çekimden post prodüksiyona kadar tüm süreçleri profesyonel ekibimizle yönetiyoruz.",
    features: ["Tanıtım Filmi", "Reklam Filmi", "Drone Çekimi", "Kurgu & Montaj"],
    image: "/video-edit.jpg"
  },
  {
    id: 6,
    title: "İçerik Üretimi",
    description: "Markanızın sesini doğru yansıtan, değer odaklı ve etkileyici içeriklerle hedef kitlenizle güçlü bir bağ kurmanızı sağlıyoruz.",
    details: "Blog yazıları, e-bültenler ve web sitesi metinleri ile markanızın otoritesini güçlendiriyoruz.",
    features: ["Blog Yazıları", "SEO Metinleri", "E-Bülten", "Slogan Üretimi"],
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2573&auto=format&fit=crop"
  }
];

export default function ServicesPage() {
  // BAŞLANGIÇ DURUMU: -1 (Hepsi kapalı)
  const [activeService, setActiveService] = useState(-1);
  const [showDetails, setShowDetails] = useState(false);

  const handleServiceClick = (index: number) => {
    if (activeService === index) {
      if (window.innerWidth < 1024) {
         // Mobilde kapat
         setActiveService(-1);
      } else {
         // Desktopta detay aç/kapa
         setShowDetails(!showDetails);
      }
    } else {
      setActiveService(index);
      setShowDetails(false);
    }
  };

  const handleServiceHover = (index: number) => {
    if (window.innerWidth >= 1024) {
      if (activeService !== index) {
        setActiveService(index);
        setShowDetails(false);
      }
    }
  };

  return (
    <main className="bg-white min-h-screen lg:h-screen lg:overflow-hidden flex flex-col lg:justify-center pt-32 lg:pt-20 pb-20 lg:pb-0">
      
      {/* İNTERAKTİF LİSTE */}
      <section className="w-full px-6">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center h-full">
          
          {/* Sol: Liste */}
          <div className="space-y-0">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className="group border-b border-gray-100 last:border-0"
                onMouseEnter={() => handleServiceHover(index)}
                onClick={() => handleServiceClick(index)}
              >
                <div className={`py-5 cursor-pointer transition-all duration-300 ${activeService === index ? "pl-4" : ""}`}>
                  <div className="flex items-center justify-between">
                    <h3 className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${activeService === index ? "text-[#901f3b]" : "text-gray-300 group-hover:text-gray-900"}`}>
                      {service.title}
                    </h3>
                    <span className={`text-xl transition-transform duration-300 ${activeService === index ? "rotate-90 text-[#901f3b]" : "text-gray-200"}`}>
                      ↗
                    </span>
                  </div>
                  
                  {/* Mobil Açıklama */}
                  <div 
                    className={`mt-4 overflow-hidden transition-all duration-500 lg:hidden ${activeService === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4 bg-gray-50">
                      <Image 
                        src={service.image} 
                        alt={service.title} 
                        fill 
                        className={service.id === 1 ? "object-contain p-4" : "object-cover"} 
                      />
                    </div>
                    <p className="text-gray-800 font-medium mb-2">{service.description}</p>
                    <p className="text-gray-600 text-sm mb-4">{service.details}</p>
                    <ul className="grid grid-cols-2 gap-2 text-sm text-gray-500 mb-4">
                      {service.features.map((f, i) => <li key={i}>• {f}</li>)}
                    </ul>
                    <Link href="/contact" className="inline-block w-full py-3 bg-[#901f3b] text-white font-bold text-center rounded-lg text-sm">
                      Teklif Al
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sağ: Görsel ve Detay Alanı (Sticky - Sadece Desktop) */}
          <div className="hidden lg:block h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl bg-gray-100 relative">
            {/* Eğer hiçbir şey seçili değilse (activeService === -1), varsayılan bir karşılama ekranı göster */}
            {activeService === -1 ? (
               <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 bg-gray-50">
                 <div className="text-6xl mb-4 opacity-20">✨</div>
                 <p className="text-lg font-medium">Detayları görmek için bir hizmetin üzerine gelin.</p>
               </div>
            ) : (
              services.map((service, index) => (
                <div 
                  key={service.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${activeService === index ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"}`}
                >
                  {/* 1. GÖRSEL KATMANI */}
                  <div 
                    className={`absolute inset-0 transition-transform duration-700 ease-in-out ${showDetails ? "-translate-y-full" : "translate-y-0"}`}
                    onClick={() => setShowDetails(true)}
                  >
                    <div className={`relative w-full h-full ${service.id === 1 ? "bg-white flex items-center justify-center" : ""}`}>
                      <Image 
                        src={service.image} 
                        alt={service.title} 
                        fill
                        className={`cursor-pointer ${service.id === 1 ? "object-contain p-20" : "object-cover"}`}
                      />
                    </div>
                    
                    {service.id !== 1 && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none"></div>
                    )}
                    
                    <div className="absolute bottom-0 left-0 p-8 w-full pointer-events-none">
                      <h4 className={`text-3xl font-bold mb-2 ${service.id === 1 ? "text-gray-900" : "text-white"}`}>{service.title}</h4>
                      <div className={`flex items-center gap-2 text-xs uppercase tracking-widest animate-pulse ${service.id === 1 ? "text-gray-500" : "text-white/60"}`}>
                        <span>Detaylar için tıklayın</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* 2. DETAY KATMANI */}
                  <div 
                    className={`absolute inset-0 bg-[#901f3b] text-white p-8 flex flex-col justify-center transition-transform duration-700 ease-in-out ${showDetails ? "translate-y-0" : "translate-y-full"}`}
                  >
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-white/90 text-base leading-relaxed mb-3 font-medium">{service.description}</p>
                    <p className="text-white/70 text-sm leading-relaxed mb-6">{service.details}</p>
                    
                    <div className="mb-6">
                      <h5 className="text-xs font-bold uppercase tracking-widest text-white/60 mb-3">Neler Yapıyoruz?</h5>
                      <ul className="grid grid-cols-2 gap-3 text-sm">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link href="/contact" className="inline-block w-full py-3 bg-white text-[#901f3b] font-bold text-center rounded-xl hover:bg-gray-100 transition-colors shadow-lg text-sm">
                      Teklif Al
                    </Link>

                    <button onClick={() => setShowDetails(false)} className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

        </div>
      </section>

    </main>
  );
}
