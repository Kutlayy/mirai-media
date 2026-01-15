"use client";

import VideoBackground from "@/components/VideoBackground";

export default function ContactPage() {
  return (
    <main className="bg-transparent text-gray-900 pt-32 min-h-screen pb-20 relative">
      
      <VideoBackground />

      <div className="max-w-7xl mx-auto px-6 z-10 relative">
        
        {/* Başlık */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">İletişime Geçin</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Projeniz hakkında konuşmak, tanışmak veya bir kahve içmek için bize ulaşın.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Sol: İletişim Bilgileri (MODERNİZE EDİLDİ) */}
          <div className="space-y-8">
            
            {/* Bilgi Kartı */}
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-[2rem] border border-white/50 shadow-xl hover:shadow-2xl transition-shadow duration-500">
              <h3 className="text-2xl font-bold mb-8 text-gray-900 flex items-center gap-3">
                <span className="w-2 h-8 bg-[#901f3b] rounded-full"></span>
                İletişim Bilgileri
              </h3>
              
              <ul className="space-y-6">
                
                {/* E-posta */}
                <li className="group">
                  <a href="mailto:miraimediacontact@gmail.com" className="flex items-start gap-5 p-4 rounded-2xl hover:bg-white transition-all duration-300 border border-transparent hover:border-gray-100">
                    <div className="w-12 h-12 bg-[#901f3b]/10 text-[#901f3b] rounded-full flex items-center justify-center group-hover:bg-[#901f3b] group-hover:text-white transition-colors duration-300 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">E-posta</p>
                      <p className="text-gray-600 text-sm break-all">miraimediacontact@gmail.com</p>
                    </div>
                  </a>
                </li>

                {/* Telefon */}
                <li className="group">
                  <a href="tel:+905396222758" className="flex items-start gap-5 p-4 rounded-2xl hover:bg-white transition-all duration-300 border border-transparent hover:border-gray-100">
                    <div className="w-12 h-12 bg-[#901f3b]/10 text-[#901f3b] rounded-full flex items-center justify-center group-hover:bg-[#901f3b] group-hover:text-white transition-colors duration-300 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">Telefon</p>
                      <p className="text-gray-600 text-sm">+90 539 622 2758</p>
                    </div>
                  </a>
                </li>

                {/* Instagram (YENİ) */}
                <li className="group">
                  <a href="https://www.instagram.com/miraimedia.co" target="_blank" rel="noopener noreferrer" className="flex items-start gap-5 p-4 rounded-2xl hover:bg-white transition-all duration-300 border border-transparent hover:border-gray-100">
                    <div className="w-12 h-12 bg-[#901f3b]/10 text-[#901f3b] rounded-full flex items-center justify-center group-hover:bg-[#901f3b] group-hover:text-white transition-colors duration-300 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">Instagram</p>
                      <p className="text-gray-600 text-sm">@miraimedia.co</p>
                    </div>
                  </a>
                </li>

              </ul>
            </div>

            {/* Harita / Görsel Alanı */}
            <div className="h-64 w-full bg-gray-200/80 backdrop-blur-sm rounded-[2rem] overflow-hidden relative flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 shadow-inner">
               <div className="text-center p-6">
                 <span className="text-4xl mb-3 block animate-bounce">🌍</span>
                 <p className="text-gray-600 font-bold text-lg">Global & Online Hizmet</p>
                 <p className="text-gray-400 text-sm mt-1">Dünyanın her yerinden bize ulaşabilirsiniz.</p>
               </div>
            </div>

          </div>

          {/* Sağ: İletişim Formu (Floating Labels) */}
          <div className="bg-white/90 backdrop-blur-md p-8 md:p-10 rounded-[2rem] shadow-2xl border border-gray-100">
            <h3 className="text-2xl font-bold mb-8 text-gray-900">Bize Yazın</h3>
            
            <form action="https://formspree.io/f/xzddpnql" method="POST" className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Ad */}
                <div className="relative">
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    className="block px-4 pb-2.5 pt-5 w-full text-gray-900 bg-gray-50 rounded-xl border border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#901f3b] peer"
                    placeholder=" "
                    required
                  />
                  <label 
                    htmlFor="name" 
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-[#901f3b]"
                  >
                    Adınız
                  </label>
                </div>

                {/* Soyad */}
                <div className="relative">
                  <input 
                    type="text" 
                    id="surname" 
                    name="surname"
                    className="block px-4 pb-2.5 pt-5 w-full text-gray-900 bg-gray-50 rounded-xl border border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#901f3b] peer"
                    placeholder=" "
                    required
                  />
                  <label 
                    htmlFor="surname" 
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-[#901f3b]"
                  >
                    Soyadınız
                  </label>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* E-posta */}
                <div className="relative">
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    className="block px-4 pb-2.5 pt-5 w-full text-gray-900 bg-gray-50 rounded-xl border border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#901f3b] peer"
                    placeholder=" "
                    required
                  />
                  <label 
                    htmlFor="email" 
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-[#901f3b]"
                  >
                    E-posta Adresiniz
                  </label>
                </div>

                {/* Telefon */}
                <div className="relative">
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    className="block px-4 pb-2.5 pt-5 w-full text-gray-900 bg-gray-50 rounded-xl border border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#901f3b] peer"
                    placeholder=" "
                  />
                  <label 
                    htmlFor="phone" 
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-[#901f3b]"
                  >
                    Telefon Numaranız
                  </label>
                </div>
              </div>

              {/* Mesaj */}
              <div className="relative">
                <textarea 
                  id="message" 
                  name="message"
                  rows={5}
                  className="block px-4 pb-2.5 pt-5 w-full text-gray-900 bg-gray-50 rounded-xl border border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#901f3b] peer resize-none"
                  placeholder=" "
                  required
                ></textarea>
                <label 
                  htmlFor="message" 
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-[#901f3b]"
                >
                  Projeniz / İhtiyacınız
                </label>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#901f3b] text-white font-bold py-4 rounded-xl hover:bg-[#7a1a32] transition-all shadow-lg shadow-[#901f3b]/20 hover:-translate-y-1 transform duration-200"
              >
                Mesajı Gönder
              </button>
            </form>
          </div>

        </div>
      </div>

    </main>
  );
}
