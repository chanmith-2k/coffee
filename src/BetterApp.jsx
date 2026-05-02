import React from "react";
import logoImage from "../green-lanka-logo.png";

const phone = "078 281 8230";
const whatsappNumber = "94782818230";
const whatsappLink = `https://wa.me/${whatsappNumber}`;
const address = "166/D Harangala Road, Hapugasthalawa, 20668";
const openingHours = "8.30am to 5.00pm";

const varieties = [
  {
    name: "Arabica S9",
    tag: "උසස් Arabica hybrid වර්ගයක්",
    desc: "Selection 9 යනු ඉහළ ගුණාත්මක Arabica hybrid වර්ගයකි. Leaf Rust වැනි රෝගවලට වඩා හොඳ ඉවසීමක්, හොඳ අස්වැන්නක් සහ premium aroma profile එකක් ලබාදීමට සුදුසු වර්ගයකි.",
  },
  {
    name: "Lakperakum",
    tag: "දේශීය තත්ත්වයට ගැළපෙන වර්ගයක්",
    desc: "Lakperakum යනු දේශීය වගා තත්ත්වයට ගැළපෙන ලෙස සංවර්ධනය කළ කෝපි වර්ගයකි. ගෙවතු, කුඩා වගා සහ වාණිජ වගා සඳහා සුදුසු ශක්තිමත් වර්ගයකි.",
  },
  {
    name: "Robusta",
    tag: "ශක්තිමත් වර්ධනයක් ඇති වර්ගයක්",
    desc: "Robusta කෝපි පැළ උණුසුම් ප්‍රදේශවලට සහ වැඩි තදබලතාවක් අවශ්‍ය වගා සඳහා සුදුසුයි. ආරම්භක වගාකරුවන්ටත් පහසු වර්ගයකි.",
  },
];

const prices = [
  { size: "මාස 3 කුඩා පැළ", maturity: "Small Plant", price: "රු. 15", note: "ආරම්භක වගාවන්ට සහ විශාල ප්‍රමාණයේ ඇණවුම් සඳහා සුදුසුයි." },
  { size: "මාස 6 පැළ", maturity: "Seedling", price: "රු. 50", note: "Arabica S9 සහ Lakperakum වර්ග සඳහා ලබාගත හැකි පැළ." },
  { size: "අවුරුදු 2 පැළ", maturity: "Established Plant", price: "රු. 999", note: "වඩාත් වර්ධනය වූ, ශක්තිමත් මුල් පද්ධතියක් ඇති පැළ." },
];

const careTips = [
  { title: "සෙවණ සහ ආලෝකය", text: "උදේ මෘදු හිරු එළිය සහ දහවල් අර්ධ සෙවණ කෝපි පැළවලට වඩාත් සුදුසුයි." },
  { title: "ජලය", text: "පස තෙතමනයෙන් තබන්න. නමුත් ජලය එකතු වී පස කුණු නොවීමට සැලකිලිමත් වන්න." },
  { title: "පස සහ පෝෂණය", text: "කාබනික ද්‍රව්‍ය සහිත, ජලය හොඳින් බැස යන පස කෝපි වගාවට වඩාත් සුදුසුයි." },
];

function Card({ children, className = "" }) {
  return <article className={`rounded-3xl bg-white p-7 shadow-sm ring-1 ring-[#d8c7aa] ${className}`}>{children}</article>;
}

function CTAButton({ children, href, light = false }) {
  return (
    <a href={href} className={`rounded-full px-7 py-4 text-center font-bold transition ${light ? "bg-[#96c267] text-[#102033] hover:bg-[#86b75a]" : "border border-white/60 text-white hover:bg-white hover:text-[#31572c]"}`}>
      {children}
    </a>
  );
}

export default function BetterApp() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#102033]">
      <nav className="sticky top-0 z-50 border-b border-[#d8c7aa] bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-3">
            <img src={logoImage} alt="Green Lanka Spicy logo" className="h-12 w-12 rounded-full object-contain ring-1 ring-[#d8c7aa]" />
            <div>
              <p className="text-lg font-extrabold">Green Lanka Spicy</p>
              <p className="text-xs font-bold tracking-[0.35em] text-[#4f8f3a]">COFFEE PLANTS</p>
            </div>
          </a>
          <div className="hidden gap-7 text-sm font-semibold md:flex">
            <a href="#varieties" className="hover:text-[#4f8f3a]">වර්ග</a>
            <a href="#prices" className="hover:text-[#4f8f3a]">මිල</a>
            <a href="#care" className="hover:text-[#4f8f3a]">රැකවරණය</a>
            <a href="#contact" className="hover:text-[#4f8f3a]">සම්බන්ධ වන්න</a>
          </div>
          <a href={whatsappLink} className="rounded-full bg-[#31572c] px-5 py-3 text-sm font-bold text-white">WhatsApp</a>
        </div>
      </nav>

      <section id="top" className="relative overflow-hidden bg-gradient-to-br from-[#102033] via-[#1f4d3a] to-[#4f8f3a] px-5 py-20 text-white md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold">ශ්‍රී ලංකාවේ ගුණාත්මක කෝපි පැළ</p>
            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">Green Lanka Spicy වෙතින් ශක්තිමත් කෝපි පැළ</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/85">Arabica S9, Lakperakum සහ Robusta කෝපි පැළ ගෙවතු වගාවට, කුඩා වගා ව්‍යාපෘතිවලට සහ වාණිජ වගාවන්ට ලබාගත හැක.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton href="#prices" light>මිල බලන්න</CTAButton>
              <CTAButton href={whatsappLink}>WhatsApp හරහා විමසන්න</CTAButton>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-md">
            <div className="rounded-[1.5rem] bg-white p-8 text-center text-[#102033]">
              <img src={logoImage} alt="Green Lanka Spicy logo" className="mx-auto h-40 w-40 object-contain" />
              <h2 className="mt-4 text-3xl font-extrabold">Green Lanka Spicy</h2>
              <p className="mt-2 text-sm font-bold tracking-[0.5em] text-[#4f8f3a]">SPICY</p>
              <div className="mt-8 grid grid-cols-2 gap-4 text-left">
                <div className="rounded-3xl bg-[#e7f2df] p-5"><p className="text-3xl font-extrabold">3+</p><p className="text-sm text-[#506070]">Coffee varieties</p></div>
                <div className="rounded-3xl bg-[#102033] p-5 text-white"><p className="text-3xl font-extrabold">රු. 15</p><p className="text-sm text-white/70">සිට පැළ</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="varieties" className="mx-auto max-w-7xl px-5 py-20">
        <p className="mb-3 font-bold uppercase tracking-[0.25em] text-[#4f8f3a]">Variety Specifications</p>
        <h2 className="mb-10 text-3xl font-extrabold md:text-5xl">කෝපි පැළ වර්ග</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {varieties.map((item) => (
            <Card key={item.name}>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e7f2df] text-xl">🌱</span>
              <p className="mt-5 text-sm font-bold text-[#4f8f3a]">{item.tag}</p>
              <h3 className="mt-2 text-2xl font-extrabold">{item.name}</h3>
              <p className="mt-3 leading-7 text-[#506070]">{item.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      <section id="prices" className="bg-[#e7f2df] px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-center font-bold uppercase tracking-[0.25em] text-[#4f8f3a]">Official Price List</p>
          <h2 className="mb-10 text-center text-3xl font-extrabold md:text-5xl">නිල මිල ලේඛනය</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {prices.map((item) => (
              <Card key={item.size} className="text-center">
                <span className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#102033] text-xl">☕</span>
                <h3 className="mt-5 text-2xl font-extrabold">{item.size}</h3>
                <p className="mt-2 text-sm font-bold text-[#506070]">{item.maturity}</p>
                <p className="mt-4 text-4xl font-extrabold text-[#4f8f3a]">{item.price}</p>
                <p className="mt-4 leading-7 text-[#506070]">{item.note}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="care" className="mx-auto max-w-7xl px-5 py-20">
        <p className="mb-3 font-bold uppercase tracking-[0.25em] text-[#4f8f3a]">Plant Care</p>
        <h2 className="mb-10 text-3xl font-extrabold md:text-5xl">පැළ සිටුවීමෙන් පසු උපදෙස්</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {careTips.map((tip) => <Card key={tip.title}><h3 className="text-xl font-extrabold">{tip.title}</h3><p className="mt-3 leading-7 text-[#506070]">{tip.text}</p></Card>)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20">
        <div className="rounded-[2rem] bg-[#102033] p-8 text-white md:p-12">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div><p className="mb-3 font-bold uppercase tracking-[0.25em] text-[#96c267]">Order Now</p><h2 className="text-3xl font-extrabold md:text-5xl">ඔබේ වගාවට කෝපි පැළ අවශ්‍යද?</h2><p className="mt-5 leading-8 text-white/80">වර්ගය, ප්‍රමාණය සහ ඔබේ ප්‍රදේශය WhatsApp හරහා දන්වන්න.</p></div>
            <a href={whatsappLink} className="rounded-full bg-[#96c267] px-7 py-4 text-center font-bold text-[#102033]">078 281 8230</a>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-[#102033] px-5 py-12 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <div><img src={logoImage} alt="Green Lanka Spicy logo" className="mb-4 h-14 w-14 rounded-full bg-white object-contain" /><h3 className="text-2xl font-extrabold">Green Lanka Spicy</h3><p className="mt-3 text-white/70">ගුණාත්මක කෝපි පැළ සැපයීම.</p></div>
          <div><h4 className="mb-4 font-bold">සම්බන්ධ වන්න</h4><p className="text-white/70">WhatsApp / Hotline: {phone}</p><p className="mt-2 text-white/70">Address: {address}</p></div>
          <div><h4 className="mb-4 font-bold">විවෘත වේලාවන්</h4><p className="text-white/70">Daily: {openingHours}</p></div>
        </div>
      </footer>
    </main>
  );
}
