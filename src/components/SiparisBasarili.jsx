import React from 'react';

const SiparisBasarili = () => {
  return (
    <div className="w-full flex flex-col font-barlow text-white">
      
      {/* --- KIRMIZI HERO ALANI --- */}
      <section className="min-h-screen w-full bg-[#CE2829] flex flex-col items-center py-10 md:py-20 px-4 text-center shrink-0">
        
        {/* Teknolojik Yemekler Logo */}
       
         <header className="pt-12 mb-10 md:mb-20">
                    <img src="images/iteration-1-images/logo.svg" alt="Logo" className="h-10 md:h-12" />
                </header>

        {/* Başlık Grubu */}
        <div className="flex flex-col items-center gap-4 md:border-b md:border-white/20 pb-12 mb-12 w-full max-w-[600px]">
          
          <p className="hidden md:block font-satisfy text-[#FDC913] text-2xl lowercase italic">lezzetin yolda</p>
          
          {/* Masaüstü Başlığı */}
          <h2 className="hidden md:block text-5xl md:text-7xl font-extralight leading-none tracking-widest uppercase">
            SİPARİŞ ALINDI
          </h2>

          
          <h2 className="md:hidden text-[52px] px-8 font-medium leading-tight mt-60 tracking-wider uppercase">
            TEBRİKLER! <br /> SİPARİŞİNİZ ALINDI!
          </h2>
        </div>

        
        <div className="hidden md:flex flex-col items-center gap-4 mb-12">
          <h3 className="text-xl md:text-2xl font-semibold">Position Absolute Acı Pizza</h3>
          <div className="w-[202px] h-[153px] flex flex-col justify-center items-center gap-2 text-base font-light tracking-wide normal-case opacity-90">
            <p>Boyut: <span className="font-bold">L</span></p>
            <p>Hamur: <span className="font-bold">Süpper İnce</span></p>
            <p>Ek Malzemeler: <span className="font-bold">Pepperoni, Sosis, Mısır, Ananas, Jalapeno</span></p>
          </div>
        </div>

       
        <div className="hidden md:flex border border-white/40 rounded-md p-8 w-full max-w-[350px] flex-col gap-4 text-left bg-white/5 backdrop-blur-sm">
          <h4 className="text-lg font-bold mb-2">Sipariş Toplamı</h4>
          <div className="flex justify-between text-sm opacity-80">
            <span>Seçimler</span>
            <span>25.00₺</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Toplam</span>
            <span>110.50₺</span>
          </div>
        </div>
      </section>

      
      <footer className="hidden md:block bg-[#1A1A1A] text-white pt-20 pb-10 w-full shrink-0">
        <div className="max-w-[1072px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          <div className="flex flex-col gap-8">
            <img src="images/iteration-2-images/footer/logo-footer.svg" alt="Footer Logo" className="w-48" />
            <ul className="space-y-4 opacity-80 normal-case tracking-normal">
              <li>📍 341 Londonderry Road, Istanbul</li>
              <li>✉️ aciktim@teknolojikyemekler.com</li>
              <li>📞 +90 216 123 45 67</li>
            </ul>
          </div>
          <div className="normal-case tracking-normal">
            <h4 className="text-xl font-bold mb-8 uppercase">Sıcak Menü</h4>
            <ul className="space-y-3 opacity-60">
              <li>Terminal Pizza</li>
              <li>5 Kişilik Hackathlon Pizza</li>
              <li>useEffect Tavuklu Pizza</li>
              <li>Beyaz Console Frosty</li>
              <li>Testler Geçti Mutlu Burger</li>
            </ul>
          </div>
          <div className="normal-case tracking-normal">
            <h4 className="text-xl font-bold mb-8 uppercase">Instagram</h4>
            <div className="grid grid-cols-3 gap-2 w-fit">
              {[0, 1, 2, 3, 4, 5].map(i => (
                <img key={i} src={`images/iteration-2-images/footer/insta/li-${i}.png`} className="w-[105px] h-[105px] object-cover rounded-md" alt="insta" />
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SiparisBasarili;