"use client";

export default function AboutPage() {
  return (
    <main className="bg-gray-50 text-gray-900 pt-32 min-h-screen flex items-center justify-center pb-20">
      
      <div className="max-w-7xl mx-auto px-6 w-full">
        
        {/* Üst Başlık (Opsiyonel, sayfayı boş bırakmamak için) */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Hikayemiz ve Hedefimiz</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Mirai Media'yı oluşturan temel değerler ve geleceğe bakış açımız.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* 1. HAKKIMIZDA */}
          <div className="group relative bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
            {/* Hover'da gelen Bordo Arka Plan */}
            <div className="absolute inset-0 bg-[#901f3b] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-[#901f3b]/10 rounded-2xl flex items-center justify-center text-[#901f3b] text-2xl mb-8 group-hover:bg-white/20 group-hover:text-white transition-colors duration-500">
                🏢
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-white transition-colors duration-500">Hakkımızda</h2>
              <p className="leading-relaxed text-gray-600 group-hover:text-white/90 transition-colors duration-500">
                Mirai Media olarak amacımız, markaların hikâyesini estetik, duygu ve stratejiyle işleyerek geleceğe değer katan içeriklere dönüştürmektir. 
                Her projede; yenilikçi bakış açımızı, Japon sadeliğini ve premium tasarım anlayışını bir araya getiriyoruz.
              </p>
            </div>
          </div>

          {/* 2. MİSYONUMUZ */}
          <div className="group relative bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
            <div className="absolute inset-0 bg-[#901f3b] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-[#901f3b]/10 rounded-2xl flex items-center justify-center text-[#901f3b] text-2xl mb-8 group-hover:bg-white/20 group-hover:text-white transition-colors duration-500">
                🎯
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-white transition-colors duration-500">Misyonumuz</h2>
              <p className="leading-relaxed text-gray-600 group-hover:text-white/90 transition-colors duration-500">
                Müşterilerimizin hedeflerini kendi hedefimiz gibi benimser, ihtiyaçlarını anlayan, süreç boyunca güven veren ve beklentiyi aşan bir yaratıcı ortaklık sunarız. 
                Mirai Media, markaları geleceğe taşıyan güçlü ve zarif bir vizyon üretme misyonuyla çalışır.
              </p>
            </div>
          </div>

          {/* 3. VİZYONUMUZ */}
          <div className="group relative bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
            <div className="absolute inset-0 bg-[#901f3b] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-[#901f3b]/10 rounded-2xl flex items-center justify-center text-[#901f3b] text-2xl mb-8 group-hover:bg-white/20 group-hover:text-white transition-colors duration-500">
                👁️
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-white transition-colors duration-500">Vizyonumuz</h2>
              <p className="leading-relaxed text-gray-600 group-hover:text-white/90 transition-colors duration-500">
                Mirai Media’nın vizyonu, global ölçekte yaratıcı üretimin standartlarını yükselten, estetiği stratejiyle birleştiren öncü bir medya ajansı olmaktır. 
                İlhamını sakura’nın zarafetinden, gücünü ise sürekli gelişim anlayışından alarak her zaman daha iyiyi hedefleriz.
              </p>
            </div>
          </div>

        </div>
      </div>

    </main>
  );
}
