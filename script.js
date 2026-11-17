document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('generatorForm');
    const topicInput = document.getElementById('topicInput');
    const categoryInput = document.getElementById('categoryInput');
    const durationInput = document.getElementById('durationInput');
    const loadingOverlay = document.getElementById('loadingOverlay');

    // Elemen Output
    const outputBadge = document.getElementById('outputBadge');
    const outIdea = document.getElementById('outIdea');
    const outScript = document.getElementById('outScript');
    const outCaption = document.getElementById('outCaption');
    const outHashtag = document.getElementById('outHashtag');

    function cleanTag(text) {
        return text.replace(/[^a-zA-Z0-9]/g, '');
    }

    // Engine Deteksi Spesifik Produk
    function getProductSpecification(topic, category) {
        const t = topic.toLowerCase();

        // ================= 1. KATEGORI BEAUTY & SKINCARE =================
        if (category === 'beauty' || t.includes('sunscreen') || t.includes('serum') || t.includes('moisturizer') || t.includes('lip') || t.includes('tint') || t.includes('powder') || t.includes('bedak') || t.includes('cushion') || t.includes('cleanser') || t.includes('toner') || t.includes('mascara') || t.includes('foundation') || t.includes('skincare')) {
            
            // Sub 1: Sunscreen / SPF
            if (t.includes('sunscreen') || t.includes('sunblock') || t.includes('spf')) {
                return {
                    idea: `"Uji Ketahanan Proteksi UV ${topic}: Bebas Whitecast & Gak Bikin Kilang Minyak?"`,
                    hook: `Percuma pakai skincare mahal kalau kamu masih sering skip ${topic}!`,
                    problem: `Sinar UV bikin kulit kusam dan muncul flek hitam. Tapi banyak orang malas pakai sunscreen karena bikin kusam, lengket, atau merusak makeup.`,
                    feature: `teksturnya yang super cair, cepat meresap tanpa meninggalkan whitecast, serta tidak menyumbat pori-pori`,
                    benefit: `memberikan proteksi maksimal dari paparan matahari dan nyaman dipakai re-apply seharian di atas makeup`,
                    hashtag: `#SunscreenReview #ProteksiKulit #SkincareAman #FYPBeauty`
                };
            }
            // Sub 2: Lip Products (Lip Tint, Lipstick, Lip Cream, Lip Gloss)
            if (t.includes('lip') || t.includes('tint') || t.includes('stik') || t.includes('shade') || t.includes('gloss') || t.includes('glam')) {
                return {
                    idea: `"Swatch & Test Ketahanan ${topic}: Beneran Stain Awet & Gak Bikin Bibir Kering?"`,
                    hook: `Suka keki gak sih kalau lip tint favorit kamu gampang hilang dan bikin bibir kelihatan pecah-pecah?`,
                    problem: `Susah nyari pewarna bibir yang stain-nya tahan lama tapi tetap terasa ringan dan lembap saat dipakai aktivitas harian.`,
                    feature: `pigmentasi warna yang pekat, kandungan moisturizing agent melembapkan, serta formula transferproof`,
                    benefit: `memberikan warna bibir yang segar, natural, tahan lama dipakai makan, dan tidak menyerap ke garis bibir`,
                    hashtag: `#LipTintViral #OmbreLips #LipstickReview #FYPMakeup`
                };
            }
            // Sub 3: Bedak / Cushion / Foundation
            if (t.includes('powder') || t.includes('bedak') || t.includes('cushion') || t.includes('foundation') || t.includes('concealer')) {
                return {
                    idea: `"Uji Ketahanan Kompleksi ${topic}: Mampu Menahan Minyak & Anti-Crack Selama 12 Jam?"`,
                    hook: `Makeup gampang luntur dan crack di area T-zone pas jam siang? Ini solusinya!`,
                    problem: `Minyak berlebih di wajah sering membuat makeup bertekstur, cakey, dan kusam dalam beberapa jam pemakaian.`,
                    feature: `partikel micro-fine pencerah yang mengunci base makeup serta mengontrol sebum tanpa membuat kering`,
                    benefit: `menghasilkan tampilan kulit matte natural, pore-blurring halus, dan tahan lama seharian`,
                    hashtag: `#FlawlessMakeup #BedakViral #OilControl #MakeupHacks`
                };
            }
            // Sub 4: Serum / Moisturizer
            if (t.includes('serum') || t.includes('moisturizer') || t.includes('pelembab') || t.includes('cream') || t.includes('toner')) {
                return {
                    idea: `"Transformasi Kulit Pakai ${topic}: Efektif Memperbaiki Skin Barrier & Mencerahkan?"`,
                    hook: `Kulit lagi ngamuk, kusam, atau kemerahan? Jangan sembarangan pilih penolong skin barrier!`,
                    problem: `Penggunaan produk skincare yang salah sering membuat skin barrier rusak, kering, dan gampang jerawatan.`,
                    feature: `konsentrasi bahan aktif tingkat tinggi yang menutrisi hingga ke lapisan kulit terdalam`,
                    benefit: `menjaga kelembapan murni kulit, meredakan kemerahan, dan mencerahkan secara bertahap`,
                    hashtag: `#SkinBarrier #SerumGlow #HealthySkin #SkincareRoutine`
                };
            }
            // Default Skincare/Beauty Umum
            return {
                idea: `"Review Jujur ${topic}: Perawatan Esensial Buat Tampilan Kulit Sehat & Glowing!"`,
                hook: `Lagi bingung nyari perawatan ${topic} yang aman dan hasilnya kelihatan nyata?`,
                problem: `Banyak produk kecantikan di pasaran yang memberikan klaim berlebihan tanpa hasil yang efektif.`,
                feature: `formula dermatologis berkualitas tinggi yang lembut dan cocok untuk semua jenis kulit`,
                benefit: `merawat kebersihan dan kesehatan kulit wajah secara menyeluruh tanpa efek samping`,
                hashtag: `#BeautyReview #GlowUp #SkincareViral #SelfCare`
            };
        }

        // ================= 2. KATEGORI FASHION & APPAREL =================
        if (category === 'fashion' || t.includes('hijab') || t.includes('pashmina') || t.includes('baju') || t.includes('dress') || t.includes('celana') || t.includes('sepatu') || t.includes('tas') || t.includes('outfit')) {
            
            // Sub 1: Hijab / Pashmina
            if (t.includes('hijab') || t.includes('pashmina') || t.includes('kerudung') || t.includes('segi empat')) {
                return {
                    idea: `"3 Trik Pakai ${topic} Biar Kelihatan Tirus, Rapi, & Gak Mudah Melorot!"`,
                    hook: `Capek gak sih kalau hijab yang kamu pakai gampang kusut dan melorot pas beraktivitas?`,
                    problem: `Sering kali bahan hijab terasa panas, kaku, dan sulit dibentuk sesuai dengan bentuk wajah.`,
                    feature: `bahan kain premium yang lembut, adem, flowy, dan gampang dibentuk sekali usap`,
                    benefit: `memberikan tampilan bentuk wajah yang tirus, rapi seharian, dan tidak pekak di telinga`,
                    hashtag: `#TutorialHijab #PashminaJersey #HijabStyle #OOTDHijab`
                };
            }
            // Sub 2: Pakaian (Baju, Dress, Kemeja, Celana)
            if (t.includes('baju') || t.includes('dress') || t.includes('kemeja') || t.includes('kaos') || t.includes('celana') || t.includes('outer') || t.includes('rok')) {
                return {
                    idea: `"Mix & Match ${topic}: Tampil Elegan & Mewah Tanpa Bikin Kantong Bolong!"`,
                    hook: `Bosan sama outfit yang gitu-gitu aja dan mau kelihatan berkelas tanpa ribet?`,
                    problem: `Nyari pakaian yang bahannya adem, tidak menerawang, tapi punya potongan (cutting) yang pas di badan itu gak mudah.`,
                    feature: `material serat kain adem yang menyerap keringat serta jahitan presisi standar boutique`,
                    benefit: `memberikan siluet tubuh yang proporsional, nyaman dipakai seharian, dan fleksibel untuk semua acara`,
                    hashtag: `#OutfitInspiration #StylingHack #LocalBrand #SpillBaju`
                };
            }
            // Default Fashion
            return {
                idea: `"Review Detail ${topic}: Item Fashion Wajib Punya Buat Upgrade OOTD Kamu!"`,
                hook: `Mau tampil stylish tiap hari tanpa kelihatan berlebihan? Coba cek item ini!`,
                problem: `Kadang kita bingung memadukan aksesori atau fashion item yang tahan lama dan tidak mudah ketinggalan zaman.`,
                feature: `desain yang versatile (serbaguna), material kokoh, dan pilihan warna trendi`,
                benefit: `meningkatkan ketajaman gaya OOTD kamu secara instan dan sangat durable`,
                hashtag: `#FashionUpdate #OOTDIndo #FashionRekomendasi #StyleCheck`
            };
        }

        // ================= 3. KATEGORI GADGET & ELEKTRONIK =================
        if (category === 'gadget' || t.includes('hp') || t.includes('phone') || t.includes('tws') || t.includes('laptop') || t.includes('charger') || t.includes('smartwatch') || t.includes('headphone') || t.includes('powerbank')) {
            
            // Sub 1: Audio (TWS, Headphone, Speaker)
            if (t.includes('tws') || t.includes('headphone') || t.includes('earphone') || t.includes('speaker') || t.includes('audio')) {
                return {
                    idea: `"Uji Kualitas Audio ${topic}: Suara Bass Jernih & Active Noise Cancellation Mantap?"`,
                    hook: `Lagi cari earphone dengan suara bass mantap tapi harganya tetap terjangkau?`,
                    problem: `Audio murah sering kali suaranya cempreng, koneksi Bluetooth sering putus, dan baterainya cepat habis.`,
                    feature: `driver audio canggih dengan bass bertenaga, fitur noise reduction, dan konektivitas Bluetooth latensi rendah`,
                    benefit: `memberikan pengalaman mendengarkan musik dan telepon yang jernih tanpa gangguan suara bising dari luar`,
                    hashtag: `#TWSReview #AudioQuality #GadgetMurah #TechInspo`
                };
            }
            // Sub 2: Smartphone / Gadget Utama
            if (t.includes('hp') || t.includes('phone') || t.includes('laptop') || t.includes('tab') || t.includes('ipad')) {
                return {
                    idea: `"Bedah Performa ${topic}: Performa Chipset Kencang & Baterai Awet Buat Seharian?"`,
                    hook: `Gadget kamu sekarang sering lemot, panas, dan baterainya boros banget?`,
                    problem: `Aktivitas kerja atau main game sering terganggu karena perangkat sering frame drop dan pengisian daya lambat.`,
                    feature: `dapur pacu chipset efisien, layar jernih refresh rate tinggi, dan sistem pengisian daya cepat (fast charging)`,
                    benefit: `menjamin multitasking lancar tanpa lag, visual jernih memanjakan mata, dan efisiensi waktu`,
                    hashtag: `#ReviewGadget #TechReview #GadgetGamer #RekomendasiHP`
                };
            }
            // Default Gadget
            return {
                idea: `"Unboxing & Review ${topic}: Aksesori Elektronik Fungsional Penunjang Produktivitas!"`,
                hook: `Mempermudah hidup dan pekerjaan harian kamu dengan aksesori canggih satu ini!`,
                problem: `Peralatan elektronik sehari-hari sering kali cepat rusak dan materialnya tidak aman untuk jangka panjang.`,
                feature: `build quality material kokoh, perlindungan sirkuit listrik aman, dan fleksibilitas penggunaan tinggi`,
                benefit: `memberikan kemudahan aktivitas, daya tahan penggunaan yang awet, serta kepraktisan maksimal`,
                hashtag: `#AksesoriGadget #TechUpdate #GadgetUnik #RacunTekno`
            };
        }

        // ================= 4. KATEGORI MAKANAN & MINUMAN (KULINER) =================
        if (category === 'kuliner' || t.includes('makanan') || t.includes('minuman') || t.includes('snack') || t.includes('kopi') || t.includes('pedas') || t.includes('keripik') || t.includes('cokelat') || t.includes('sambal')) {
            return {
                idea: `"Battle Rasa ${topic}: Beneran Bumbu Gurih Pedas Renyah yang Bikin Ketagihan?"`,
                hook: `Lagi ngidam camilan atau minuman lezat yang rasanya langsung bikin nagih di gigitan pertama?`,
                problem: `Sering kali kecewa beli camilan yang bumbunya pelit, teksturnya lempem, atau rasanya terlalu berlebihan.`,
                feature: `perpaduan resep bumbu rempah pilihan berlimpah, bahan higienis, dan pengolahan tekstur yang pas`,
                benefit: `memberikan sensasi rasa lezat yang otentik, renyah/segar di tenggorokan, dan pas dinikmati kapan saja`,
                hashtag: `#KulinerViral #CamilanEnak #RacunKuliner #FoodieIndo`
            };
        }

        // ================= 5. KATEGORI UMUM / LAINNYA =================
        return {
            idea: `"Honest Review ${topic}: Solusi Praktis & Fungsional yang Wajib Kamu Miliki!"`,
            hook: `Barang viral ${topic} ini beneran berguna atau cuma sekadar gimmick? Yuk kita bedah!`,
            problem: `Banyak barang yang kelihatannya menarik di foto, tapi begitu datang kualitasnya mengecewakan dan tidak berguna.`,
            feature: `desain ergonomis, kemudahan fungsi pemakaian, serta material tahan lama`,
            benefit: `mempermudah rutinitas harian kamu, lebih efisien, dan sangat worth it untuk dibeli`,
            hashtag: `#RacunShopee #SpillBarangUnik #RekomendasiProduk #BarangViral`
        };
    }

    // Generator Naskah Presisi Sesuai Durasi
    function generateScript(topic, spec, duration) {
        if (duration === '15 Detik') {
            return `
                <p><strong>[Hook 0-3s]:</strong> ${spec.hook}</p>
                <p><strong>[Isi 4-12s]:</strong> Cobain <b>${topic}</b> ini! Keunggulannya ada di ${spec.feature}, jadi ${spec.benefit}.</p>
                <p><strong>[CTA 13-15s]:</strong> Langsung amankan di keranjang kuning sekarang mumpung promo!</p>
            `;
        } else if (duration === '30 Detik') {
            return `
                <p><strong>[Hook 0-3s]:</strong> ${spec.hook} Tonton video ini sampai habis!</p>
                <p><strong>[Masalah 4-10s]:</strong> Banyak dari kita ngalamin masalah ini: ${spec.problem}</p>
                <p><strong>[Solusi & Keunggulan 11-22s]:</strong> Solusinya kamu wajib punya <b>${topic}</b>. Produk ini punya ${spec.feature}. Hasilnya ${spec.benefit}, jadi nyaman banget buat harian.</p>
                <p><strong>[CTA 23-30s]:</strong> Mumpung stok lagi ready dan ada promo potongan harga, klik keranjang kuning buat checkout <b>${topic}</b> sekarang!</p>
            `;
        } else { // 60 Detik Presisi (0-60 Detik Penuh)
            return `
                <p><strong>[Hook 0-5s]:</strong> Review Jujur Pemakaian <b>${topic}</b>: Beneran Rekomended & Worth It Dibeli?</p>
                <p><strong>[Masalah & Reality Check 6-18s]:</strong> Jujur aja, kita sering banget ngalamin masalah ini: ${spec.problem} Padahal kalau dapet produk yang tepat, masalah itu bisa beres dengan gampang.</p>
                <p><strong>[Detail Keunggulan & Review 19-42s]:</strong> Nah, setelah coba <b>${topic}</b> ini, ada 3 poin utama yang bikin produk ini beda:<br>
                1. <b>Kualitas Material/Formula:</b> Memiliki ${spec.feature}.<br>
                2. <b>Hasil Nyata:</b> Terbukti ${spec.benefit}.<br>
                3. <b>Kenyamanan:</b> Sangat praktis digunakan untuk kebutuhan jangka panjang tanpa ribet.</p>
                <p><strong>[Saran Pemakaian 43-52s]:</strong> Produk ini cocok banget dipakai sehari-hari buat kamu yang mau hasil instan tanpa ribet.</p>
                <p><strong>[CTA 53-60s]:</strong> Promo terbatas khusus pembelian hari ini! Klaim voucher gratis ongkir kamu dan checkout <b>${topic}</b> di keranjang kuning sekarang juga sebelum kehabisan!</p>
            `;
        }
    }

    // Submit Event Handling
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const topic = topicInput.value.trim();
        const category = categoryInput.value;
        const duration = durationInput.value;

        if (!topic) return;

        loadingOverlay.classList.remove('hidden');
        loadingOverlay.classList.add('flex');

        setTimeout(() => {
            // Update Tanda Durasi
            outputBadge.textContent = `Hasil AI (${duration})`;

            // Dapatkan Spesifikasi Produk
            const spec = getProductSpecification(topic, category);
            const clean = cleanTag(topic);

            // Render Hasil Output ke Layar
            outIdea.textContent = spec.idea;
            outScript.innerHTML = generateScript(topic, spec, duration);
            outCaption.innerText = `Lagi cari ${topic} yang beneran berkualitas? ✨\n\n${topic} hadir dengan keunggulan ${spec.feature}, yang memberikan manfaat ${spec.benefit}.\n\nSolusi tepat buat kamu tanpa perlu pusing! Yuk klik keranjang kuning sekarang mumpung ada promo diskon terbatas! 🛒👇`;
            outHashtag.textContent = `#${clean} ${spec.hashtag}`;

            loadingOverlay.classList.remove('flex');
            loadingOverlay.classList.add('hidden');
        }, 1000);
    });
});