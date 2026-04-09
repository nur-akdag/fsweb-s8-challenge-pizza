import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const SiparisSayfasi = () => {
    const history = useHistory();
    const logoUrl = "images/iteration-1-images/logo.svg";
    const bannerUrl = "images/iteration-2-images/pictures/form-banner.png";

    const [quantity, setQuantity] = useState(1);
    const [formData, setFormData] = useState({
        boyut: "",
        hamur: "",
        malzemeler: [],
        not: ""
    });
    const [isFormDisabled, setIsFormDisabled] = useState(true);

    useEffect(() => {
        const notGecerli = formData.not.trim().length >= 3;
        const malzemelerGecerli = formData.malzemeler.length >= 4 && formData.malzemeler.length <= 10;
        const formTamam = notGecerli && malzemelerGecerli && formData.boyut !== "" && formData.hamur !== "";
        setIsFormDisabled(!formTamam);
    }, [formData]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (item) => {
        setFormData(prev => {
            const yeniMalzemeler = prev.malzemeler.includes(item)
                ? prev.malzemeler.filter(m => m !== item)
                : [...prev.malzemeler, item];
            return { ...prev, malzemeler: yeniMalzemeler };
        });
    };

    const handleOrderClick = (e) => {
        e.preventDefault();
        if (isFormDisabled) return;
        axios.post('https://reqres.in/api/pizza', formData, {
            headers: { 'x-api-key': 'pro_fa7e826108bd37e7f695466c00929013b8c115dd8c556a090895aa77f597c0b3' }
        })
        .then(res => {
            console.log("Sipariş Özeti:", res.data);
            history.push('/basarili');
        })
        .catch(() => alert("Bağlantı hatası!"));
    };

    return (
        <div className="w-full min-h-screen flex flex-col bg-white font-barlow overflow-x-hidden text-left">
            
            <header className="bg-[#CE2829] w-full h-[120px] md:h-[138px] flex flex-col items-center justify-center shrink-0">
                <img src={logoUrl} alt="Logo" className="h-10 md:h-12" />
                <nav className="md:hidden flex items-center gap-1 text-[16px] text-white mt-4">
                    <span className="opacity-80">Anasayfa</span>
                    <span className="opacity-50 mx-1">-</span>
                    <span className="font-bold">Sipariş Oluştur</span>
                </nav>
            </header>

            <main className="w-full flex-grow flex flex-col items-center">
                
                {/* --- MASAÜSTÜ BANNER --- */}
                <section className="hidden md:flex w-full bg-[#FAF7F2] h-[690px] flex-col items-center shrink-0 overflow-hidden">
                    <div className="w-full max-w-[600px] flex justify-center mt-[-40px]">
                        <img src={bannerUrl} alt="Pizza" className="w-full h-auto object-contain max-h-[350px]" />
                    </div>
                    <div className="w-full max-w-[600px] flex flex-col gap-4 pt-4">
                        <nav className="flex items-center gap-1 text-[16px] pt-4">
                            <span className="text-black">Anasayfa</span>
                            <span className="text-black/50 mx-1">-</span>
                            <span className="text-[#CE2829] font-bold">Sipariş Oluştur</span>
                        </nav>
                        <h2 className="text-[28px] font-bold text-[#292929]">Position Absolute Acı Pizza</h2>
                        <div className="flex justify-between items-center text-[28px] font-bold">
                            <span>85.50₺</span>
                            <div className="flex gap-8 text-[#5F5F5F] text-sm font-semibold"><span>4.9</span><span>(200)</span></div>
                        </div>
                        {/* MASAÜSTÜ YAZISI */}
                        <p className="text-[#5F5F5F] text-base leading-relaxed">
                            Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
                        </p>
                    </div>
                </section>

                {/* --- MOBİL BAŞLIK --- */}
                <section className="w-full md:hidden flex flex-col items-center text-center p-[35px] pt-8 bg-white">
                    <h2 className="text-[22px] font-bold text-[#292929] mb-4">Position Absolute Acı Pizza</h2>
                    <div className="flex justify-between w-full items-center mb-6">
                        <span className="text-[28px] font-bold">85.50₺</span>
                        <div className="flex gap-4 text-[#5F5F5F] text-sm font-semibold"><span>4.9</span><span>(200)</span></div>
                    </div>
                    {/* MOBİL YAZISI - */}
                    <p className="text-[#5F5F5F] text-sm text-[16px] leading-relaxed text-left">
                        Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
                    </p>
                </section>

                <section className="w-full max-w-[600px] p-[35px] md:p-0 flex flex-col gap-10 py-10 bg-white">
                    
                    <div className="flex flex-row justify-between gap-4 text-left">
                        <div className="flex-1">
                            <h3 className="text-lg font-bold mb-4 mt-10 text-[#292929]">Boyut Seç <span className="text-[#CE2829]">*</span></h3>
                            <div className="hidden md:flex gap-3 pt-10">
                                {['S', 'M', 'L'].map(size => (
                                    <label key={size} className="cursor-pointer">
                                        <input type="radio" name="size" className="hidden peer" onChange={() => setFormData({...formData, boyut: size})} />
                                        <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#D9D9D9] flex items-center justify-center font-bold text-[#5F5F5F] peer-checked:bg-[#FDC913] peer-checked:text-[#292929] transition-all">{size}</div>
                                    </label>
                                ))}
                            </div>
                            <div className="flex md:hidden flex-col gap-3">
                                {['Küçük', 'Orta', 'Büyük'].map(size => (
                                    <label key={size} className="flex items-center gap-3 cursor-pointer">
                                        <input type="radio" name="size_m" className="w-5 h-5 accent-[#CE2829]" onChange={() => setFormData({...formData, boyut: size})} />
                                        <span className="text-[#5F5F5F] font-medium">{size}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="flex-1">
                            <h3 className="text-lg font-bold mb-4 md:mb-15 mt-10 text-[#292929]">Hamur Seç <span className="text-[#CE2829]">*</span></h3>
                            <select name="hamur" onChange={handleInputChange} className="w-full h-12 px-3 mt-3 md:mt-0 bg-[#FAF7F2] border border-[#D9D9D9] rounded-[4px] text-[#5F5F5F] font-semibold text-sm focus:outline-none">
                                <option disabled selected>Hamur Kalınlığı</option>
                                <option value="İnce">İnce</option>
                                <option value="Standart">Standart</option>
                                <option value="Kalın">Kalın</option>
                            </select>
                        </div>
                    </div>

                    {/* --- MALZEMELER BÖLÜMÜ --- */}
                    <div className="text-left mt-4">
                        <h3 className="text-lg font-bold mb-2">Ek Malzemeler</h3>
                        <p className="text-sm font-medium text-[#5F5F5F] mb-6">En fazla 10 malzeme seçebilirsiniz. 5₺</p>
                        
                      
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 w-full px-2">
                            {["Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara", "Soğan", "Domates", "Mısır", "Sucuk", "Jalapeno", "Sarımsak", "Biber", "Ananas", "Zeytin", "Kabak"].map((item) => (
                                <label key={item} className="flex items-center gap-3 cursor-pointer w-full">
                                   
                                    <input 
                                        type="checkbox" 
                                        value={item}
                                        checked={formData.malzemeler.includes(item)} 
                                        onChange={() => handleCheckboxChange(item)} 
                                        className="w-6 h-6 md:w-10 md:h-10 accent-[#FDC913] rounded-md border-[#D9D9D9] shrink-0" 
                                    />
                                    <span className="font-bold text-[#5F5F5F] text-[16px] whitespace-nowrap overflow-hidden text-ellipsis">
                                        {item}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="text-left mt-4">
                        <h3 className="text-lg font-bold mb-4">Sipariş Notu</h3>
                        <textarea name="not" onChange={handleInputChange} placeholder="Siparişine eklemek istediğin bir not var mı?" className="w-full h-14 p-4 border border-[#D9D9D9] rounded-[4px] bg-[#FAF7F2] resize-none overflow-hidden focus:outline-none" />
                    </div>

                    <hr className="border-[#D9D9D9]" />

                    {/* Özet ve Butonlar */}
                    <div className="flex flex-col md:flex-row justify-between items-start gap-6 pb-20">
                        <div className="w-full md:w-[350px] md:h-[255px] border border-[#D9D9D9] rounded-md bg-[#FAF7F2] overflow-hidden flex flex-col order-1 md:order-2">
                            <div className="p-8 flex-grow">
                                <h3 className="text-lg font-bold mb-6 text-left text-[#292929]">Sipariş Toplamı</h3>
                                <div className="flex justify-between text-[#5F5F5F] mb-4 font-semibold"><span>Seçimler</span><span>{(formData.malzemeler.length * 5).toFixed(2)}₺</span></div>
                                <div className="flex justify-between text-[#CE2829] font-bold text-lg"><span>Toplam</span><span>{(85.50 + formData.malzemeler.length * 5).toFixed(2)}₺</span></div>
                            </div>
                            <button onClick={handleOrderClick} disabled={isFormDisabled} className={`hidden md:block w-full h-14 font-bold uppercase ${isFormDisabled ? 'bg-gray-300' : 'bg-[#FDC913]'}`}>SİPARİŞ VER</button>
                        </div>

                        <div className="flex flex-row gap-4 w-full md:w-auto order-2 md:order-1 items-center">
                            <div className="flex items-center w-[170px] h-[57px] shrink-0 border border-gray-200 rounded-md overflow-hidden bg-white">
                                <button onClick={() => setQuantity(q => Math.max(1, q-1))} className="w-[57px] h-full bg-[#FDC913] font-bold text-xl">-</button>
                                <div className="w-[56px] h-full flex items-center justify-center font-bold text-lg">{quantity}</div>
                                <button onClick={() => setQuantity(q => q+1)} className="w-[57px] h-full bg-[#FDC913] font-bold text-xl">+</button>
                            </div>
                            <button onClick={handleOrderClick} disabled={isFormDisabled} className={`md:hidden flex-grow h-[57px] font-bold uppercase ${isFormDisabled ? 'bg-gray-300' : 'bg-[#FDC913]'}`}>SİPARİŞ VER</button>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="hidden md:block bg-[#1A1A1A] text-white pt-20 pb-10 w-full mt-auto">
                
                <div className="max-w-[1072px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="flex flex-col gap-8">
                        <img src="images/iteration-2-images/footer/logo-footer.svg" alt="Footer Logo" className="w-48" />
                        <ul className="space-y-4 opacity-80 text-left"><li>📍 341 Londonderry Road, Istanbul</li><li>✉️ aciktim@teknolojikyemekler.com</li><li>📞 +90 216 123 45 67</li></ul>
                    </div>
                    <div><h4 className="text-xl font-bold mb-8 uppercase text-left">Sıcak Menü</h4><ul className="space-y-3 opacity-60 text-left"><li>Terminal Pizza</li><li>5 Kişilik Hackathlon Pizza</li><li>useEffect Tavuklu Pizza</li></ul></div>
                    <div><h4 className="text-xl font-bold mb-8 uppercase text-left">Instagram</h4><div className="grid grid-cols-3 gap-2 w-fit">{[0, 1, 2, 3, 4, 5].map(i => <img key={i} src={`images/iteration-2-images/footer/insta/li-${i}.png`} className="w-[105px] h-[105px] object-cover rounded-md" alt="insta" />)}</div></div>
                </div>
            </footer>
        </div>
    );
};

export default SiparisSayfasi;