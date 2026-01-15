"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import VideoBackground from "@/components/VideoBackground";

const services = [
  {
    id: 5,
    title: "Video Prodüksiyon",
    description: "Markanızın hikayesini sinematik bir dille anlatıyor, tanıtım ve reklam filmleriyle izleyicide kalıcı bir etki bırakıyoruz.",
    details: "Senaryodan kurguya, çekimden post prodüksiyona kadar tüm süreçleri profesyonel ekibimizle yönetiyoruz.",
    features: ["Tanıtım Filmi", "Reklam Filmi", "Drone Çekimi", "Kurgu & Montaj"],
    image: "/video-produksiyon.jpg"
  },
  {
    id: 1,
    title: "Logo Tasarımı",
    description: "Markanızın ilk izlenimini oluşturan logonuzu, özgünlük ve sadeliği merkeze alarak profesyonelce tasarlıyoruz.",
    details: "Kurumsal kimlik, marka rehberi, renk paleti ve tipografi çalışmalarıyla markanızın görsel dilini oluşturuyoruz.",
    features: ["Özgün Tasarım", "Vektörel Çizim", "Marka Rehberi", "Revizyon Hakkı"],
    image: "/logo-tasarim.jpg" 
  },
  {
    id: 2,
    title: "Web Tasarımı",
    description: "Markanızı dijital ortama güçlü bir şekilde taşıyarak, kullanıcı dostu ve modern web tasarımlarıyla profesyonel bir görünüm kazandırıyoruz.",
    details: "Mobil uyumlu, SEO dostu ve hızlı açılan web siteleri ile ziyaretçilerinizi müşteriye dönüştürüyoruz.",
    features: ["Responsive Tasarım", "SEO Altyapısı", "Yönetim Paneli", "Hızlı Hosting"],
    image: "/web-tasarim.jpg"
  },
  {
    id: 3,
    title: "Sosyal Medya Yönetimi",
    description: "Markanızı sosyal medyada profesyonelce yönetiyor, içerik, etkileşim ve büyümeyi birlikte sağlıyoruz. Görünürlüğünüzü güce dönüştürüyoruz.",
    details: "Instagram, LinkedIn ve diğer platformlar için stratejik içerik planlaması ve topluluk yönetimi yapıyoruz.",
    features: ["İçerik Takvimi", "Reels & Post", "Moderasyon", "Aylık Rapor"],
    image: "/sosyalmedya-yonetimi.jpg"
  },
  {
    id: 4,
    title: "Dijital Reklam (Ads)",
    description: "Google ve sosyal medya reklamlarıyla hedef kitlenize nokta atışı ulaşıyor, bütçenizi en verimli şekilde kullanarak maksimum dönüşüm sağlıyoruz.",
    details: "Veri odaklı reklam yönetimi ile satışlarınızı ve marka bilinirliğinizi artırıyoruz.",
    features: ["Google Ads", "Meta Ads", "Retargeting", "Dönüşüm Takibi"],
    image: "/dijital-reklam.jpg"
  }
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(-1);
  const [showDetails, setShowDetails] = useState(false);

  const handleServiceClick = (index: number) => {
    if (activeService === index) {
      if (window.innerWidth < 1024) {
         setActiveService(-1);
      } else {
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
    <main className="bg-transparent min-h-screen lg:h-screen lg:overflow-hidden flex flex-col lg:justify-center pt-32 lg:pt-20 pb-20 lg:pb-0 relative">
      
      <VideoBackground />

      <section className="w-full px-6 z-10">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center h-full">
          
          {/* Sol: Liste */}
          <div className="space-y-3">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`group border border-gray-100 transition-all duration-300 rounded-xl overflow-hidden backdrop-blur-sm ${
                  activeService === index 
                    ? "border-l-4 border-l-[#901f3b] bg-white shadow-md pl-6 scale-[1.02]" 
                    : "border-l-4 border-l-transparent bg-white/60 hover:bg-white/90 hover:pl-2 pl-4 hover:shadow-sm"
                }`}
                onMouseEnter={() => handleServiceHover(index)}
                onClick={() => handleServiceClick(index)}
              >
                <div className="py-5 cursor-pointer pr-4">
                  {/* OK İŞARETİ KALDIRILDI */}
                  <div className="flex items-center">
                    <h3 className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${activeService === index ? "text-[#901f3b]" : "text-gray-800 group-hover:text-gray-900"}`}>
                      {service.title}
                    </h3>
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
                        className="object-cover" 
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

          {/* Sağ: Görsel ve Detay Alanı */}
          <div className="hidden lg:block h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl bg-white/95 backdrop-blur-md relative border border-gray-100">
            {activeService === -1 ? (
               <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 bg-gray-50/50">
                 <div className="text-6xl mb-4 opacity-20 grayscale">✨</div>
                 <p className="text-lg font-medium text-gray-400">Detayları görmek için bir hizmetin üzerine gelin.</p>
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
                    <div className="relative w-full h-full">
                      <Image 
                        src={service.image} 
                        alt={service.title} 
                        fill
                        className="object-cover cursor-pointer hover:scale-105 transition-transform duration-700" 
                      />
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none"></div>
                    
                    <div className="absolute bottom-0 left-0 p-10 w-full pointer-events-none">
                      <h4 className="text-4xl font-bold mb-3 text-white">{service.title}</h4>
                      <div className="flex items-center gap-2 text-white/70 text-xs uppercase tracking-widest animate-pulse font-medium">
                        <span>Detaylar için tıklayın</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* 2. DETAY KATMANI */}
                  <div 
                    className={`absolute inset-0 bg-[#901f3b] text-white p-10 flex flex-col justify-center transition-transform duration-700 ease-in-out ${showDetails ? "translate-y-0" : "translate-y-full"}`}
                  >
                    <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                    <p className="text-white/90 text-lg leading-relaxed mb-4 font-medium">{service.description}</p>
                    <p className="text-white/70 text-base leading-relaxed mb-8">{service.details}</p>
                    
                    <div className="mb-8">
                      <h5 className="text-xs font-bold uppercase tracking-widest text-white/60 mb-4">Neler Yapıyoruz?</h5>
                      <ul className="grid grid-cols-2 gap-4 text-sm">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link href="/contact" className="inline-block w-full py-4 bg-white text-[#901f3b] font-bold text-center rounded-xl hover:bg-gray-100 transition-colors shadow-lg text-base hover:-translate-y-1 transform duration-300">
                      Teklif Al
                    </Link>

                    <button onClick={() => setShowDetails(false)} className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
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
