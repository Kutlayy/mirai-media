"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Animasyon varyasyonları
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900 pt-32 pb-20 min-h-screen overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. MANİFESTO (GİRİŞ) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center mb-32"
        >
          <motion.h6 variants={fadeInUp} className="text-[#901f3b] font-bold text-sm uppercase tracking-[0.3em] mb-6">
            Biz Kimiz?
          </motion.h6>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-light text-gray-900 leading-[1.1] mb-8">
            Dijital dünyada <br />
            <span className="font-serif italic font-medium">iz bırakmak</span> isteyenler için buradayız.
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto font-light">
            Mirai Media, sıradanlığa meydan okuyan, estetik ve teknolojiyi kusursuz bir dengeyle birleştiren yeni nesil bir yaratıcı stüdyodur.
          </motion.p>
        </motion.div>

        {/* 2. ZIG-ZAG BÖLÜMÜ (Görsel + Metin) */}
        <div className="space-y-32">
          
          {/* Bölüm 1: Tasarım */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div className="relative h-[600px] w-full rounded-[2rem] overflow-hidden shadow-2xl group">
              <Image 
                src="/logo-tasarim.jpg" // GÜNCELLENDİ
                alt="Minimalist Design" 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Tasarım, sessiz bir elçidir.</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                İyi tasarım sadece "güzel görünmek" değildir. İyi tasarım, markanızın değerlerini tek bir kelime etmeden anlatabilme sanatıdır. Biz, her pikselde bu hikayeyi işliyoruz.
              </p>
              <ul className="space-y-3 pt-4">
                {["UI/UX Odaklı Yaklaşım", "Minimalist Estetik", "Kullanıcı Deneyimi"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <span className="w-8 h-[1px] bg-[#901f3b]"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Bölüm 2: Teknoloji (Ters Düzen) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div className="order-2 md:order-1 space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Kodun arkasındaki şiir.</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Görsellik etkiler, ama teknoloji çalıştırır. En son web teknolojilerini kullanarak, sadece şık değil, aynı zamanda ışık hızında ve kusursuz çalışan dijital deneyimler üretiyoruz.
              </p>
              <ul className="space-y-3 pt-4">
                {["Next.js & React", "Modern Animasyonlar", "SEO Uyumlu Altyapı"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <span className="w-8 h-[1px] bg-[#901f3b]"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 md:order-2 relative h-[600px] w-full rounded-[2rem] overflow-hidden shadow-2xl group">
              <Image 
                src="/web-tasarim.jpg" // GÜNCELLENDİ
                alt="Technology" 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          </motion.div>

        </div>

        {/* 3. RAKAMLARLA BİZ */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="py-32 border-t border-gray-100 mt-32"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { number: "200+", label: "Tamamlanan Proje" },
              { number: "2", label: "Yıllık Deneyim" },
              { number: "%100", label: "Müşteri Memnuniyeti" },
              { number: "24/7", label: "Destek" }
            ].map((stat, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="space-y-2">
                <div className="text-5xl md:text-6xl font-bold text-[#901f3b] font-serif">{stat.number}</div>
                <div className="text-sm uppercase tracking-widest text-gray-500 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 4. SON SÖZ (İmza) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-2xl font-serif italic text-gray-800 mb-6">
            "Gelecek, onu tasarlayanlarındır."
          </p>
          <div className="w-16 h-1 bg-[#901f3b] mx-auto mb-6"></div>
          <p className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase">
            Mirai Media Team
          </p>
        </motion.div>

      </div>
    </main>
  );
}
