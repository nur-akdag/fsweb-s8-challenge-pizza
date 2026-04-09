import React from 'react';
import { useHistory } from 'react-router-dom';

const categories = [
  { id: 1, name: 'YENİ! Kore', icon: 'images/iteration-2-images/icons/1.svg' },
  { id: 2, name: 'Pizza', icon: 'images/iteration-2-images/icons/2.svg' },
  { id: 3, name: 'Burger', icon: 'images/iteration-2-images/icons/3.svg' },
  { id: 4, name: 'Kızartmalar', icon: 'images/iteration-2-images/icons/4.svg' },
  { id: 5, name: 'Fast Food', icon: 'images/iteration-2-images/icons/5.svg' },
  { id: 6, name: 'Gazlı İçecek', icon: 'images/iteration-2-images/icons/6.svg' },
];

const foodItems = [
  { id: 1, name: 'Terminal Pizza', rating: 4.9, reviews: 200, price: 60, img: 'images/iteration-2-images/pictures/food-1.png' },
  { id: 2, name: 'Position Absolute Acı Pizza', rating: 4.9, reviews: 200, price: 60, img: 'images/iteration-2-images/pictures/food-2.png' },
  { id: 3, name: 'useEffect Tavuklu Burger', rating: 4.9, reviews: 200, price: 60, img: 'images/iteration-2-images/pictures/food-3.png' },
];

const GirisSayfasi = () => {
    const history = useHistory();

    const handleOrderClick = () => {
        history.push('/siparis');
    }; 

    return (
        <div className="w-full font-barlow overflow-x-hidden">
            {/* --- HERO SECTION --- */}
           <section className="relative min-h-screen w-full bg-[#CE2829] md:bg-[url('images/iteration-1-images/home-banner.png')] bg-cover bg-center flex flex-col items-center overflow-hidden">
    
                {/* Üst İçerik Grubu */}
                <header className="pt-12 mb-10 md:mb-20">
                    <img src="images/iteration-1-images/logo.svg" alt="Logo" className="h-10 md:h-12" />
                </header>

                <div className="flex flex-col items-center text-center px-4 z-10">
                    <p className="font-satisfy text-[#FDC913] text-2xl md:text-4xl mb-4 italic">fırsatı kaçırma</p>
                    <h1 className="font-roboto-condensed text-white text-5xl md:text-[86px] font-light leading-tight mb-8 tracking-wider text-balance max-w-[320px] md:max-w-full">
                        KOD ACIKTIRIR <br className="hidden md:block" /> PIZZA, DOYURUR
                    </h1>
                    <button 
                        onClick={handleOrderClick} 
                        className="bg-[#FDC913] text-[#292929] font-bold py-3 px-10 rounded-full text-lg mb-4"
                    >
                        ACIKTIM
                    </button>
                </div>

                {/* --- MOBİL PİZZA BANNER --- */}
                <div className="md:hidden w-full mt-auto relative overflow-hidden" style={{ height: '200px' }}>
                    <img 
                        src="images/iteration-2-images/pictures/form-banner.png" 
                        className="w-full h-full object-cover object-bottom block" 
                        alt="Pizza"
                        style={{ transform: 'rotate(180deg) scale(1.1)' }} 
                    />
                    
                </div>

                {/* --- CATEGORY BAR --- */}
                
                <nav className="relative md:absolute md:bottom-0 left-0 w-full bg-white shadow-sm z-20 h-[268px] md:h-[94px] flex items-center justify-center">
                    <div className="max-w-[1072px] w-full px-6 md:px-10">
                        
                        <div className="grid grid-cols-2 gap-y-10 gap-x-20 md:flex md:justify-between md:items-center mx-auto w-fit md:w-full">
                            {categories.map((cat) => (
                                <div 
                                    key={cat.id} 
                                    className="flex items-center gap-4 cursor-pointer hover:text-[#CE2829] transition-colors font-semibold text-[#292929] justify-start"
                                >
                                    <img src={cat.icon} alt={cat.name} className="w-8 h-8 md:w-8 md:h-8 object-contain" />
                                    <span className="text-[15px] md:text-base whitespace-nowrap">{cat.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </nav>
            </section>
        
            
           
            {/* --- PROMOTIONS (CARDS) --- */}
            <main className="bg-[#FAF7F2] py-20 px-12">
                <div className="max-w-[1072px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Card 1 (Large) */}
                    <div className="bg-[#CE2829] rounded-xl p-8 bg-[url('images/iteration-2-images/cta/kart-1.png')] bg-cover bg-center min-h-[400px] text-white flex flex-col justify-start items-start">
                        <h2 className="font-quattrocento text-5xl md:text-[68px] font-bold leading-none mb-4">Özel <br /> Lezzetus</h2>
                        <p className="text-xl font-semibold mb-6">Position:Absolute Acı Burger</p>
                        <button onClick={handleOrderClick} className="bg-white text-[#CE2829] px-6 py-2 rounded-full font-bold text-sm">SİPARİŞ VER</button>
                    </div>

                    <div className="flex flex-col gap-4">
                        {/* Card 2 */}
                        <div className="bg-[#292929] rounded-xl p-8 bg-[url('images/iteration-2-images/cta/kart-2.png')] bg-contain bg-no-repeat bg-right text-white min-h-[192px]">
                            <h3 className="text-2xl font-bold mb-4">Hackathlon <br /> Burger Menü</h3>
                            <button onClick={handleOrderClick} className="bg-white text-[#CE2829] px-6 py-2 rounded-full font-bold text-sm">SİPARİŞ VER</button>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-[#FAF7F2] border border-[#D9D9D9] rounded-xl p-8 bg-[url('images/iteration-2-images/cta/kart-3.png')] bg-cover  bg-no-repeat bg-right text-[#292929] min-h-[192px]">
                            <h3 className="text-2xl font-bold mb-4"><span className="text-[#CE2829]">Çoooook</span> hızlı <br /> npm gibi kurye</h3>
                            <button onClick={handleOrderClick} className="bg-white text-[#CE2829] px-6 py-2 rounded-full font-bold text-sm">SİPARİŞ VER</button>
                        </div>
                    </div>
                </div>

                {/* --- MENU CATALOG --- */}
                <section className="max-w-[1072px] mx-auto mt-24 text-center">
                    <p className="font-satisfy text-[#CE2829] text-2xl mb-2">en çok paketlenen menüler</p>
                    <h2 className="text-4xl font-bold text-[#292929] mb-12">Acıktıran Kodlara Doyuran Lezzetler</h2>
                    
                    <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-4 mb-12">
                        {categories.map(cat => (
                            <button key={cat.id} className="bg-white px-6 py-3 rounded-full flex items-center gap-3 shadow-sm hover:bg-[#292929] hover:text-white transition-all text-[#5F5F5F] font-semibold">
                                <img src={cat.icon} alt="" className="w-5 h-5" />
                                {cat.name}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {foodItems.map(item => (
                            <div key={item.id} className="bg-white p-6 rounded-xl flex flex-col text-left hover:shadow-lg transition-shadow">
                                <img src={item.img} alt={item.name} className="w-full h-auto mb-4" />
                                <h4 className="font-bold text-lg text-[#292929] mb-4">{item.name}</h4>
                                <div className="flex justify-between items-center font-semibold text-[#5F5F5F]">
                                    <span>{item.rating}</span>
                                    <span>({item.reviews})</span>
                                    <span className="text-xl text-[#292929]">{item.price}₺</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* --- FOOTER --- */}
            <footer className="bg-[#1A1A1A] text-white pt-20 pb-12 px-12">
                <div className="max-w-[1072px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="flex flex-col gap-8">
                        <img src="images/iteration-2-images/footer/logo-footer.svg" alt="Footer Logo" className="w-48" />
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3"><img src="images/iteration-2-images/footer/icons/icon-1.png" alt="" /> 341 Londonderry Road, Istanbul</li>
                            <li className="flex items-center gap-3"><img src="images/iteration-2-images/footer/icons/icon-2.png" alt="" /> aciktim@teknolojikyemekler.com</li>
                            <li className="flex items-center gap-3"><img src="images/iteration-2-images/footer/icons/icon-3.png" alt="" /> +90 216 123 45 67</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold mb-8">Sıcak Menü</h4>
                        <ul className="space-y-3 opacity-100 flex flex-col">
                            <li>Terminal Pizza</li>
                            <li>5 Kişilik Hackathlon Pizza</li>
                            <li>useEffect Tavuklu Pizza</li>
                            <li>Beyaz Console Frosty</li>
                            <li>Testler Geçti Mutlu Burger</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold mb-8">Instagram</h4>
                        <div className="grid grid-cols-3 gap-2">
                            {[0,1,2,3,4,5].map(i => (
                                <img key={i} src={`images/iteration-2-images/footer/insta/li-${i}.png`} className="w-full rounded-md" />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="max-w-[100%] mx-auto px-4 mt-20 border-t border-pizza-light-gray pt-8 flex justify-between items-center text-sm opacity-60">
                    <p>© 2023 Teknolojik Yemekler.</p>
                </div>
            </footer>
        </div>
    );
};

export default GirisSayfasi; 
