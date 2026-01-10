"use client";

import { useState, useRef } from "react";

const services = [
  {
    id: 1,
    title: "Logo Tasarımı",
    subtitle: "Marka Kimliği",
    description: "Markanızın imzasını atıyoruz. Akılda kalıcı ve özgün.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799314346d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Web Tasarım",
    subtitle: "UI/UX Deneyimi",
    description: "Modern, hızlı ve dönüşüm odaklı web siteleri.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Sosyal Medya",
    subtitle: "İçerik Yönetimi",
    description: "Etkileşimi artıran yaratıcı içerik stratejileri.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Video Prodüksiyon",
    subtitle: "Kurgu & Montaj",
    description: "Hikayenizi sinematik bir dille anlatıyoruz.",
    image: "https://images.unsplash.com/photo-1574717432707-c25c8587a3ea?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Dijital Strateji",
    subtitle: "Büyüme Odaklı",
    description: "Veri odaklı pazarlama ve büyüme planları.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function ServicesSlider() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="relative w-full h-screen flex flex-col lg:flex-row bg-white overflow-hidden pt-20 lg:pt-0">
      
      {/* SOL TARAF: Sabit Bilgi Alanı */}
      <div className="w-full lg:w-[40%] p-8 lg:p-20 flex flex-col justify-center relative z-10 bg-white border-r border-gray-100">
        <div className="relative animate-fade-in-up">
          <span className="inline-block py-1 px-3 rounded-full bg-[#901f3b]/10 text-[#901f3b] text-xs font-bold tracking-widest uppercase mb-6">
            Mirai Media
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-8">
            Yaratıcı <br />
            <span className="text-[#901f3b]">Çözümler.</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-12 max-w-md">
            Markanızın dijital dünyadaki varlığını güçlendirmek için buradayız. 
            Modern tasarım, güçlü strateji ve etkileyici içerikler.
          </p>
          
          <div className="flex items-center gap-4 text-sm font-medium text-gray-400">
            <div className="w-12 h-[1px] bg-gray-300"></div>
            <span>KAYDIRIN</span>
            <div className="w-12 h-[1px] bg-gray-300"></div>
          </div>
        </div>
      </div>

      {/* SAĞ TARAF: Slider Alanı */}
      <div className="w-full lg:w-[60%] h-full relative bg-gray-50">
        <div
          ref={scrollContainerRef}
          className="flex h-full items-center overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              className="relative min-w-[85vw] md:min-w-[50vw] lg:min-w-[30vw] h-full border-r border-white/20 group"
            >
              {/* Görsel */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />

              {/* İçerik */}
              <div className="absolute bottom-0 left-0 w-full p-10 lg:p-14 flex flex-col justify-end h-full">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[#901f3b] font-bold text-sm tracking-wider uppercase mb-3 block bg-white/90 px-3 py-1 rounded w-fit">
                    {service.subtitle}
                  </span>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 text-base lg:text-lg leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {service.description}
                  </p>
                  
                  <div className="mt-8 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-[#901f3b] group-hover:border-[#901f3b] transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Numara */}
              <div className="absolute top-10 right-10 text-7xl font-bold text-white/10 group-hover:text-white/30 transition-colors">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
