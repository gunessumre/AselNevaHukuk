# ASEL NEVA Hukuk ve Arabuluculuk - Modern Hukuk Firması Web Platformu

<div align="center">
  <img src="public/images/logo.png" alt="ASEL NEVA Hukuk Logo" width="200" />
  <br />
  <h3>Profesyonel Hukuki Çözümler İçin Modern Web Deneyimi</h3>
  <p>Performans Odaklı • SEO Dostu • Kullanıcı Merkezli</p>

![Next.js](https://img.shields.io/badge/Next.js-14.0.4-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.1.6-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.3-38B2AC?style=for-the-badge&logo=tailwind-css)

</div>

## 📑 İçindekiler

- [Proje Hakkında](#-proje-hakkında)
- [Teknoloji Yığını](#-teknoloji-yığını)
- [Mimari Yapı](#-mimari-yapı)
- [Performans Optimizasyonları](#-performans-optimizasyonları)
- [SEO Stratejileri](#-seo-stratejileri)
- [İçerik Yönetimi](#-içerik-yönetimi)
- [Kurulum ve Geliştirme](#-kurulum-ve-geliştirme)
- [Dağıtım (Deployment)](#-dağıtım-deployment)
- [Güvenlik Önlemleri](#-güvenlik-önlemleri)
- [Katkıda Bulunma](#-katkıda-bulunma)
- [Lisans](#-lisans)

## 🔍 Proje Hakkında

ASEL NEVA Hukuk ve Arabuluculuk web platformu, modern bir hukuk firmasının dijital varlığını güçlendirmek için tasarlanmış kapsamlı bir çözümdür. Proje, hukuk hizmetlerinin çevrimiçi ortamda etkili bir şekilde sunulmasını, potansiyel müvekkillerin firma ile kolay iletişim kurabilmesini ve hukuki bilgi içeriklerinin SEO dostu bir yapıda paylaşılmasını amaçlamaktadır.

### 🎯 Hedefler

- **Profesyonel Marka İmajı**: Hukuk firmasının uzmanlık alanlarını ve profesyonel kimliğini yansıtan modern tasarım
- **Bilgi Merkezi**: Hukuki konularda kapsamlı ve değerli içerikler sunan blog sistemi
- **Müvekkil Etkileşimi**: Potansiyel müvekkiller için kolay iletişim kanalları
- **Mobil Uyumluluk**: Tüm cihazlarda kusursuz çalışan responsive tasarım
- **Yüksek Performans**: Hızlı sayfa yüklemeleri ve akıcı kullanıcı deneyimi
- **SEO Optimizasyonu**: Arama motorlarında üst sıralarda yer almak için kapsamlı SEO stratejileri

## 🛠 Teknoloji Yığını

### Frontend

- **Next.js 14**: App Router mimarisi ile sunucu taraflı rendering (SSR) ve statik site üretimi (SSG)
- **React 18**: Modern UI geliştirme için komponent tabanlı yapı
- **TypeScript**: Tip güvenliği ve geliştirici deneyimi için statik tip sistemi
- **TailwindCSS**: Özelleştirilebilir, utility-first CSS framework
- **React Icons**: Kapsamlı ikon kütüphanesi
- **CSS Modules**: Komponent bazlı stil izolasyonu

### Performans ve Optimizasyon

- **Next.js Image Optimization**: Otomatik görsel optimizasyonu ve lazy loading
- **Dynamic Imports**: Sayfa yükleme performansını artırmak için kod bölümleme
- **Incremental Static Regeneration (ISR)**: Statik sayfaların belirli aralıklarla yeniden oluşturulması
- **Font Optimization**: Web fontlarının optimize edilmesi ve preloading
- **CSS Minification**: Üretim ortamında CSS dosyalarının sıkıştırılması

### SEO ve Metadata

- **Next.js Metadata API**: Sayfa bazlı SEO meta etiketleri yönetimi
- **Structured Data (JSON-LD)**: Arama motoru sonuçlarını zenginleştiren yapılandırılmış veri
- **Sitemap Generation**: Otomatik site haritası oluşturma
- **Canonical URLs**: Duplicate content sorunlarını önleme

### Geliştirme Araçları

- **ESLint**: Kod kalitesi ve standartları için linting
- **Prettier**: Tutarlı kod formatı
- **Husky & lint-staged**: Commit öncesi kod kontrolleri
- **Jest & React Testing Library**: Komponent ve birim testleri

## 🏗 Mimari Yapı

Proje, Next.js 14'ün App Router mimarisi üzerine inşa edilmiştir. Bu mimari, React Server Components, Streaming, ve Suspense gibi modern React özelliklerini kullanarak performans ve geliştirici deneyimini optimize eder.

```
/
├── public/               # Statik dosyalar (görseller, fontlar)
├── src/                  # Kaynak kodları
│   ├── app/              # Next.js App Router yapısı
│   │   ├── (routes)/     # Sayfa rotaları
│   │   ├── api/          # API rotaları
│   │   ├── blog/         # Blog sayfaları
│   │   └── layout.tsx    # Kök layout
│   ├── components/       # Yeniden kullanılabilir komponentler
│   │   ├── ui/           # UI komponentleri
│   │   └── layout/       # Layout komponentleri
│   ├── lib/              # Yardımcı fonksiyonlar ve kütüphaneler
│   ├── styles/           # Global stiller
│   ├── types/            # TypeScript tip tanımlamaları
│   └── utils/            # Yardımcı fonksiyonlar
├── .env.local            # Ortam değişkenleri
├── next.config.js        # Next.js yapılandırması
├── tailwind.config.js    # TailwindCSS yapılandırması
└── tsconfig.json         # TypeScript yapılandırması
```

## 🚀 Performans Optimizasyonları

Projede kullanıcı deneyimini en üst düzeye çıkarmak için çeşitli performans optimizasyonları uygulanmıştır:

### Kod Optimizasyonu

- **Code Splitting**: Sayfa bazlı otomatik kod bölümleme
- **Tree Shaking**: Kullanılmayan kodların üretim sürümünden çıkarılması
- **Dynamic Imports**: Komponentlerin ihtiyaç duyulduğunda yüklenmesi

```javascript
// Örnek: Dinamik içe aktarma ile lazy loading
const BlogPostClient = lazyLoadBlogPostClient(() => import('./components/BlogPostClient'));
```

### Görsel Optimizasyonu

- **Next.js Image Component**: Otomatik WebP/AVIF dönüşümü, boyutlandırma ve lazy loading
- **Responsive Images**: Farklı ekran boyutları için optimize edilmiş görseller

```jsx
<Image 
  src="/images/hero.jpg"
  alt="Hero Image"
  width={1200}
  height={600}
  priority={true}
  className="object-cover"
/>
```

### Önbellek Stratejileri

- **ISR (Incremental Static Regeneration)**: Statik sayfaların belirli aralıklarla yeniden oluşturulması
- **SWR (Stale-While-Revalidate)**: Veri getirme için modern önbellek stratejisi

### CSS Optimizasyonu

- **CSS Modules**: Stil izolasyonu ve daha küçük CSS çıktıları
- **Purge CSS**: Kullanılmayan CSS'lerin temizlenmesi

## 📊 SEO Stratejileri

Hukuk sektöründe dijital görünürlük kritik öneme sahiptir. Bu nedenle, projede kapsamlı SEO stratejileri uygulanmıştır:

### Teknik SEO

- **Metadata Optimizasyonu**: Her sayfa için özel başlık, açıklama ve anahtar kelimeler
- **Canonical URL'ler**: Duplicate content sorunlarını önleme
- **Hızlı Sayfa Yükleme**: Core Web Vitals metriklerini iyileştirme
- **Mobil Uyumluluk**: Responsive tasarım ile tüm cihazlarda optimal deneyim

```typescript
// Örnek: Sayfa meta verileri
export const metadata: Metadata = {
  title: 'Arabuluculuk Nedir? Dava Açmadan Çözüm Mümkün mü? | ASEL NEVA Hukuk',
  description: 'Arabuluculuk, taraflar arasında ortaya çıkan uyuşmazlıkların mahkeme sürecine taşınmadan çözüme kavuşturulması yöntemidir. Hızlı, ekonomik ve gizli çözüm süreci hakkında detaylı bilgi.',
  keywords: ['arabuluculuk nedir', 'dava açmadan çözüm', 'Türkiye\'de arabuluculuk', 'hukukta arabulucu', 'hukuki çözüm yolları', 'zorunlu arabuluculuk', 'ihtiyari arabuluculuk', 'arabuluculuk süreci'],
};
```

### İçerik SEO

- **Zengin İçerik**: Kapsamlı hukuki bilgiler içeren blog yazıları
- **Yapılandırılmış Veri**: JSON-LD formatında schema.org markup
- **İç Bağlantılar**: İlgili içerikler arasında stratejik bağlantılar
- **Heading Hiyerarşisi**: Doğru H1-H6 yapılandırması

### Yerel SEO

- **Google Business Profile Entegrasyonu**: Yerel aramalarda görünürlük
- **Yerel Anahtar Kelimeler**: Bölgesel hedefleme için optimize edilmiş içerik
- **İletişim Bilgileri**: Tutarlı NAP (İsim, Adres, Telefon) bilgileri

## 📝 İçerik Yönetimi

Proje, hukuk firmasının içerik stratejisini desteklemek için gelişmiş bir blog sistemi içerir:

### Blog Özellikleri

- **Kategori Sistemi**: Hukuk alanlarına göre kategorize edilmiş içerikler
- **Sosyal Medya Paylaşımı**: İçeriklerin kolay paylaşımı için entegre butonlar
- **İlgili İçerikler**: Okuyucuları sitede tutmak için ilgili yazı önerileri
- **Okunma Süresi**: Makalelerin tahmini okunma süreleri

### İçerik Yapısı

Her blog yazısı, okuyucuya maksimum değer sunmak için özenle yapılandırılmıştır:

- **Bilgi Kutuları**: Önemli bilgileri vurgulayan özel tasarımlı kutular
- **Yasal Referanslar**: Kanun maddeleri ve içtihatlar için özel bölümler
- **CTA (Call to Action)**: Okuyucuları harekete geçiren çağrı butonları
- **Kaynak Bölümü**: Güvenilirliği artıran referans listeleri

## 💻 Kurulum ve Geliştirme

### Gereksinimler

- Node.js 18.17.0 veya daha yeni
- npm veya yarn

### Kurulum

```bash
# Projeyi klonlayın
git clone https://github.com/your-username/neva-hukuk.git
cd neva-hukuk

# Bağımlılıkları yükleyin
npm install
# veya
yarn install

# Geliştirme sunucusunu başlatın
npm run dev
# veya
yarn dev
```

Tarayıcınızda `http://localhost:3000` adresini açarak projeyi görüntüleyebilirsiniz.

### Ortam Değişkenleri

Projeyi çalıştırmak için gerekli ortam değişkenlerini `.env.local` dosyasında tanımlayın:

```
NEXT_PUBLIC_SITE_URL=https://www.neva-hukuk.com
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

### Komutlar

```bash
# Geliştirme sunucusu
npm run dev

# Üretim sürümü oluşturma
npm run build

# Üretim sürümünü yerel olarak çalıştırma
npm run start

# Lint kontrolü
npm run lint

# Testleri çalıştırma
npm run test
```

## 🌐 Dağıtım (Deployment)

Proje, Vercel platformunda dağıtılmak üzere optimize edilmiştir. Next.js projelerinin dağıtımı için en iyi deneyimi sunan Vercel, otomatik önbellek stratejileri, global CDN ve kolay CI/CD entegrasyonu sağlar.

### Vercel Dağıtımı

1. [Vercel](https://vercel.com)'de bir hesap oluşturun
2. GitHub/GitLab/Bitbucket hesabınızı bağlayın
3. Projenizi import edin
4. Gerekli ortam değişkenlerini yapılandırın
5. Deploy butonuna tıklayın

### Özel Dağıtım Yapılandırmaları

```javascript
a// next.config.js
module.exports = {
  // Üretim URL'si
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://www.aselnevahukuk.com' : '',
  
  // Görsel optimizasyonu
  images: {
    domains: ['images.unsplash.com'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  },
  
  // Deneysel özellikler
  experimental: {
    optimizeCss: true,
  },
  
  // Webpack yapılandırması
  webpack: (config, { dev, isServer }) => {
    // Özel webpack yapılandırmaları
    return config;
  },
}
```

## 🔒 Güvenlik Önlemleri

Hukuk firması web sitesi olarak, kullanıcı verilerinin ve site güvenliğinin korunması kritik öneme sahiptir:

- **Content Security Policy (CSP)**: XSS saldırılarına karşı koruma
- **HTTPS Zorunluluğu**: Tüm trafiğin şifrelenmesi
- **Form Doğrulama**: İstemci ve sunucu taraflı form doğrulama
- **Rate Limiting**: API isteklerini sınırlama
- **CSRF Koruması**: Cross-Site Request Forgery saldırılarına karşı önlemler

## 🤝 Katkıda Bulunma

Projeye katkıda bulunmak isterseniz:

1. Projeyi fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📄 Lisans

Bu proje [MIT Lisansı](LICENSE) altında lisanslanmıştır.

---

<div align="center">
  <p>ASEL NEVA Hukuk ve Arabuluculuk © 2024</p>
  <p>
    <a href="https://www.aselnevahukuk.com">www.aselaselnevahukuk.com</a> • 
    <a href="mailto:aselaselnevahukuk.com">aselnevahukuk@gmail.com</a> • 
    <a href="tel:+902121234567">+90 05519342030</a>
  </p>
</div>
