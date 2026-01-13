"use client";

export default function ContactPage() {
  return (
    <main className="bg-white text-gray-900 pt-32 min-h-screen pb-20">
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Başlık */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">İletişime Geçin</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Projeniz hakkında konuşmak, tanışmak veya bir kahve içmek için bize ulaşın.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Sol: İletişim Bilgileri */}
          <div className="space-y-10">
            
            {/* Bilgi Kartı */}
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <h3 className="text-xl font-bold mb-6 text-[#901f3b]">İletişim Bilgileri</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#901f3b] shadow-sm flex-shrink-0">
                    📧
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">E-posta</p>
                    <p className="text-gray-600 text-sm">miraimediacontact@gmail.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#901f3b] shadow-sm flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Telefon</p>
                    <p className="text-gray-600 text-sm">+90 539 622 2758</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Harita / Görsel Alanı */}
            <div className="h-64 w-full bg-gray-200 rounded-3xl overflow-hidden relative flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
               <div className="text-center p-6">
                 <span className="text-4xl mb-2 block">🌍</span>
                 <p className="text-gray-500 font-medium">Global & Online Hizmet</p>
                 <p className="text-gray-400 text-sm">Dünyanın her yerinden bize ulaşabilirsiniz.</p>
               </div>
            </div>

          </div>

          {/* Sağ: İletişim Formu (Floating Labels) */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
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
