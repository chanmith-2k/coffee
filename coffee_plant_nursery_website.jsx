import React from "react";

const logoSrc = "./green-lanka-logo.png";

function Icon({ type, className = "h-6 w-6" }) {
  const commonProps = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  const icons = {
    leaf: (
      <svg {...commonProps}>
        <path d="M11 20A7 7 0 0 1 4 13c0-6 7-10 16-10 0 9-4 16-10 16" />
        <path d="M4 20c4-7 8-10 16-17" />
      </svg>
    ),
    sprout: (
      <svg {...commonProps}>
        <path d="M12 20V10" />
        <path d="M12 10C8 10 5 7 5 3c4 0 7 3 7 7Z" />
        <path d="M12 14c4 0 7-3 7-7-4 0-7 3-7 7Z" />
      </svg>
    ),
    truck: (
      <svg {...commonProps}>
        <path d="M3 7h11v9H3z" />
        <path d="M14 10h4l3 3v3h-7z" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
      </svg>
    ),
    phone: (
      <svg {...commonProps}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.6 2.61a2 2 0 0 1-.45 2.11L8 9.7a16 16 0 0 0 6.3 6.3l1.26-1.26a2 2 0 0 1 2.11-.45c.84.28 1.71.48 2.61.6A2 2 0 0 1 22 16.92Z" />
      </svg>
    ),
    mapPin: (
      <svg {...commonProps}>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    sun: (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="M4.93 4.93l1.41 1.41" />
        <path d="M17.66 17.66l1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="M4.93 19.07l1.41-1.41" />
        <path d="M17.66 6.34l1.41-1.41" />
      </svg>
    ),
    droplets: (
      <svg {...commonProps}>
        <path d="M7 14c0 2.21 1.79 4 4 4s4-1.79 4-4c0-3-4-8-4-8s-4 5-4 8Z" />
        <path d="M17 18c1.66 0 3-1.34 3-3 0-2.2-3-6-3-6s-1.2 1.52-2.12 3.13" />
      </svg>
    ),
    shield: (
      <svg {...commonProps}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    star: (
      <svg {...commonProps}>
        <path d="m12 2 3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2Z" />
      </svg>
    ),
  };

  return icons[type] || icons.leaf;
}

function Button({ children, variant = "solid", className = "", href = "#contact" }) {
  const baseClass =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantClass =
    variant === "outline"
      ? "border border-white/60 bg-transparent text-white hover:bg-white hover:text-[#31572c] focus:ring-white"
      : "bg-[#31572c] text-white hover:bg-[#24411f] focus:ring-[#31572c]";

  return (
    <a href={href} className={`${baseClass} ${variantClass} ${className}`}>
      {children}
    </a>
  );
}

function Logo({ size = "small" }) {
  const sizeClass = size === "large" ? "h-28 w-28 md:h-36 md:w-36" : "h-12 w-12";

  return (
    <div className={`${sizeClass} overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-[#d8c7aa]`}>
      <img
        src={logoSrc}
        alt="Green Lanka Spicy logo"
        className="h-full w-full object-contain p-1"
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />
    </div>
  );
}

const nurseryData = {
  businessName: "Green Lanka Spicy",
  sinhalaName: "ග්‍රීන් ලංකා ස්පයිසි",
  tagline: "උසස් තත්ත්වයේ කෝපි පැළ",
  phone: "+94 77 000 0000",
  location: "ශ්‍රී ලංකාව",
  plants: [
    {
      name: "Arabica කෝපි පැළ",
      desc: "සීතල කඳුකර ප්‍රදේශවලට සුදුසු, ගුණාත්මක කෝපි අස්වැන්නක් සඳහා වගා කළ හැකි Arabica කෝපි පැළ.",
      tag: "උසස් රසය සඳහා",
      price: "මිල විමසන්න",
    },
    {
      name: "S9 කෝපි පැළ",
      desc: "වගාකරුවන් අතර ප්‍රචලිත S9 වර්ගයේ කෝපි පැළ. නිසි රැකවරණය සමඟ හොඳ වර්ධනයක් ලබාගත හැක.",
      tag: "විශේෂ වර්ගය",
      price: "මිල විමසන්න",
    },
    {
      name: "Lakperakum කෝපි පැළ",
      desc: "දේශීය වගා අවශ්‍යතාවලට ගැළපෙන Lakperakum වර්ගයේ කෝපි පැළ. ගෙවතු සහ කුඩා වගා සඳහා සුදුසුයි.",
      tag: "දේශීය වගා සඳහා",
      price: "මිල විමසන්න",
    },
    {
      name: "Robusta කෝපි පැළ",
      desc: "ශක්තිමත් වර්ධනයක් ඇති Robusta කෝපි පැළ. උණුසුම් ප්‍රදේශවලට සහ වැඩි තදබලතාවක් අවශ්‍ය වගාවලට සුදුසුයි.",
      tag: "ශක්තිමත් වර්ධනය",
      price: "රු. 15 සිට",
    },
  ],
  priceList: [
    {
      size: "කුඩා පැළ",
      price: "රු. 15",
      note: "ආරම්භක වගාකරුවන්ට සහ විශාල ප්‍රමාණයේ ඇණවුම් සඳහා සුදුසුයි.",
    },
    {
      size: "මධ්‍යම ප්‍රමාණයේ පැළ",
      price: "රු. 50",
      note: "ගෙවතු වගාවට සහ ඉක්මන් රෝපණය සඳහා සුදුසු ප්‍රමාණය.",
    },
    {
      size: "මාස 6 පැළ",
      price: "රු. 1,000",
      note: "වඩාත් වර්ධනය වූ, ශක්තිමත් මුල් පද්ධතියක් ඇති පැළ.",
    },
  ],
  services: [
    {
      icon: "sprout",
      title: "නිරෝගී පැළ",
      text: "හොඳ මුල් වර්ධනයක් සහ නැවුම් කොළ වර්ධනයක් ඇති කෝපි පැළ සැපයීම.",
    },
    {
      icon: "shield",
      title: "තත්ත්ව තේරීම",
      text: "පාරිභෝගිකයාට ලබාදීමට පෙර ශක්තිමත් සහ සුදුසු පැළ පමණක් තෝරා ගැනීම.",
    },
    {
      icon: "truck",
      title: "තොග ඇණවුම්",
      text: "ගෙවතු, කුඩා වගා, වතු සහ කෘෂිකාර්මික ව්‍යාපෘති සඳහා පැළ ලබාදීම.",
    },
  ],
  careTips: [
    {
      icon: "sun",
      title: "ආලෝකය",
      text: "කෝපි පැළට උදේ මෘදු හිරු එළිය සහ දහවල් කාලයේ අර්ධ සෙවණ වඩාත් සුදුසුයි.",
    },
    {
      icon: "droplets",
      title: "ජලය",
      text: "පස තෙතමනය සහිතව තබන්න. නමුත් ජලය වැඩියෙන් එකතු නොවීමට සැලකිලිමත් වන්න.",
    },
    {
      icon: "leaf",
      title: "පස",
      text: "කාබනික ද්‍රව්‍ය සහිත, ජලය හොඳින් බැස යන සාරවත් පස කෝපි පැළ සඳහා සුදුසුයි.",
    },
  ],
};

function runSmokeTests(data) {
  const testCases = [
    {
      name: "has Green Lanka Spicy brand name",
      passed: data.businessName === "Green Lanka Spicy",
    },
    {
      name: "has four plant varieties",
      passed: Array.isArray(data.plants) && data.plants.length === 4,
    },
    {
      name: "includes Arabica, S9, Lakperakum, and Robusta",
      passed: ["Arabica", "S9", "Lakperakum", "Robusta"].every((keyword) =>
        data.plants.some((plant) => plant.name.includes(keyword))
      ),
    },
    {
      name: "has three price tiers",
      passed: Array.isArray(data.priceList) && data.priceList.length === 3,
    },
    {
      name: "has contact phone number",
      passed: typeof data.phone === "string" && data.phone.trim().length > 0,
    },
    {
      name: "has local SVG icon names for services",
      passed: data.services.every((service) => typeof service.icon === "string" && service.icon.length > 0),
    },
  ];

  return testCases;
}

const smokeTests = runSmokeTests(nurseryData);
const failedTests = smokeTests.filter((test) => !test.passed);

if (failedTests.length > 0) {
  throw new Error(`Green Lanka Spicy website data failed smoke tests: ${failedTests.map((test) => test.name).join(", ")}`);
}

export default function CoffeePlantNurseryWebsite() {
  const { businessName, sinhalaName, tagline, phone, location, plants, priceList, services, careTips } = nurseryData;

  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#102033]">
      <nav className="sticky top-0 z-50 border-b border-[#d8c7aa] bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-3" aria-label={`${businessName} home`}>
            <Logo />
            <div>
              <p className="text-lg font-extrabold tracking-tight text-[#102033]">{businessName}</p>
              <p className="text-xs font-semibold tracking-[0.25em] text-[#4f8f3a]">SPICY</p>
            </div>
          </a>

          <div className="hidden items-center gap-7 text-sm font-semibold md:flex">
            <a href="#plants" className="hover:text-[#4f8f3a]">වර්ග</a>
            <a href="#prices" className="hover:text-[#4f8f3a]">මිල</a>
            <a href="#services" className="hover:text-[#4f8f3a]">සේවා</a>
            <a href="#care" className="hover:text-[#4f8f3a]">රැකවරණය</a>
            <a href="#contact" className="hover:text-[#4f8f3a]">සම්බන්ධ වන්න</a>
          </div>

          <Button className="px-5" href="#contact">දැන් ඇණවුම් කරන්න</Button>
        </div>
      </nav>

      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#102033] via-[#1f4d3a] to-[#4f8f3a]" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "36px 36px",
          }}
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 md:grid-cols-2 md:py-28">
          <div className="animate-[fadeInUp_0.7s_ease-out]">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
              <Icon type="star" className="h-4 w-4" /> ශ්‍රී ලංකාවේ ගෙවතු සහ වගා සඳහා කෝපි පැළ
            </div>

            <h1 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">
              ශක්තිමත් කෝපි පැළ සමඟ ඔබේම කෝපි වගාව ආරම්භ කරන්න
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/85">
              {sinhalaName} වෙතින් Arabica, S9, Lakperakum සහ Robusta කෝපි පැළ ලබාගත හැක. ගෙවතු වගාව, කුඩා වගා සහ තොග ඇණවුම් සඳහා සුදුසු පැළ අපි සපයන්නෙමු.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#prices" className="bg-[#96c267] px-7 py-4 text-base text-[#102033] hover:bg-[#86b75a] focus:ring-[#96c267]">
                මිල ලැයිස්තුව බලන්න
              </Button>
              <Button href="#contact" variant="outline" className="px-7 py-4 text-base">
                WhatsApp හරහා විමසන්න
              </Button>
            </div>
          </div>

          <div className="relative animate-[fadeIn_0.8s_ease-out]">
            <div className="rounded-[2rem] border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-md">
              <div className="rounded-[1.5rem] bg-white p-7 text-center">
                <div className="mx-auto mb-5 flex justify-center">
                  <Logo size="large" />
                </div>
                <p className="text-3xl font-extrabold tracking-tight text-[#102033]">{businessName}</p>
                <p className="mt-2 text-sm font-bold tracking-[0.5em] text-[#4f8f3a]">SPICY</p>
                <div className="mt-8 grid grid-cols-2 gap-4 text-left">
                  <div className="rounded-3xl bg-[#e7f2df] p-5">
                    <Icon type="sprout" className="mb-8 h-9 w-9 text-[#4f8f3a]" />
                    <p className="text-2xl font-extrabold">4</p>
                    <p className="text-sm text-[#506070]">කෝපි වර්ග</p>
                  </div>
                  <div className="rounded-3xl bg-[#102033] p-5 text-white">
                    <Icon type="leaf" className="mb-8 h-9 w-9 text-[#96c267]" />
                    <p className="text-2xl font-extrabold">රු. 15</p>
                    <p className="text-sm text-white/70">සිට පැළ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="plants" className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 font-semibold uppercase tracking-[0.25em] text-[#4f8f3a]">Coffee Varieties</p>
          <h2 className="text-3xl font-extrabold md:text-5xl">අපගෙන් ලබාගත හැකි කෝපි පැළ වර්ග</h2>
          <p className="mt-4 leading-8 text-[#506070]">ඔබේ ප්‍රදේශය, පස, වගා ප්‍රමාණය සහ අවශ්‍ය අස්වැන්න අනුව සුදුසු කෝපි පැළ වර්ගය තෝරාගන්න.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plants.map((plant) => (
            <article key={plant.name} className="rounded-3xl border border-[#d8c7aa] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e7f2df] text-[#4f8f3a]">
                <Icon type="leaf" className="h-7 w-7" />
              </div>
              <span className="rounded-full bg-[#96c267]/30 px-3 py-1 text-xs font-bold text-[#31572c]">{plant.tag}</span>
              <h3 className="mt-5 text-2xl font-extrabold">{plant.name}</h3>
              <p className="mt-3 leading-7 text-[#506070]">{plant.desc}</p>
              <p className="mt-5 rounded-2xl bg-[#f7f3ea] px-4 py-3 text-sm font-bold text-[#102033]">{plant.price}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="prices" className="bg-[#e7f2df] py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-10 text-center">
            <p className="mb-3 font-semibold uppercase tracking-[0.25em] text-[#4f8f3a]">Price List</p>
            <h2 className="text-3xl font-extrabold md:text-5xl">කෝපි පැළ මිල ගණන්</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-8 text-[#506070]">ප්‍රමාණය සහ වර්ධන අවධිය අනුව මිල වෙනස් වේ. තොග ඇණවුම් සඳහා විශේෂ මිල ලබාගැනීමට අපව සම්බන්ධ කරගන්න.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {priceList.map((item) => (
              <article key={item.size} className="rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-[#d8c7aa]">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#102033] text-[#96c267]">
                  <Icon type="sprout" className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-extrabold">{item.size}</h3>
                <p className="mt-4 text-4xl font-extrabold text-[#4f8f3a]">{item.price}</p>
                <p className="mt-4 leading-7 text-[#506070]">{item.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-10 text-center">
          <p className="mb-3 font-semibold uppercase tracking-[0.25em] text-[#4f8f3a]">Why Choose Us</p>
          <h2 className="text-3xl font-extrabold md:text-5xl">ගුණාත්මක පැළ, විශ්වාසදායක සේවාව</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-[#d8c7aa]">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4f8f3a] text-white">
                <Icon type={service.icon} className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-extrabold">{service.title}</h3>
              <p className="mt-3 leading-7 text-[#506070]">{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="care" className="bg-[#f7f3ea] px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="mb-3 font-semibold uppercase tracking-[0.25em] text-[#4f8f3a]">Plant Care</p>
            <h2 className="text-3xl font-extrabold md:text-5xl">පැළ සිටුවීමෙන් පසු මූලික රැකවරණය</h2>
            <p className="mt-5 leading-8 text-[#506070]">
              කෝපි පැළ හොඳින් වර්ධනය වීමට ආලෝකය, ජලය, පස සහ සෙවණ නිසි ලෙස තිබිය යුතුය. පැළ මිලදී ගැනීමෙන් පසු සිටුවන ආකාරය සහ මූලික රැකවරණය පිළිබඳව අපෙන් උපදෙස් ලබාගත හැක.
            </p>
          </div>

          <div className="grid gap-5">
            {careTips.map((tip) => (
              <article key={tip.title} className="flex gap-5 rounded-3xl border border-[#d8c7aa] bg-white p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#e7f2df] text-[#4f8f3a]">
                  <Icon type={tip.icon} className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold">{tip.title}</h3>
                  <p className="mt-2 leading-7 text-[#506070]">{tip.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20">
        <div className="rounded-[2rem] bg-[#102033] p-8 text-white md:p-12">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <p className="mb-3 font-semibold uppercase tracking-[0.25em] text-[#96c267]">Order Now</p>
              <h2 className="text-3xl font-extrabold md:text-5xl">ඔබේ වගාවට කෝපි පැළ අවශ්‍යද?</h2>
              <p className="mt-5 max-w-2xl leading-8 text-white/85">
                අවශ්‍ය පැළ වර්ගය, ප්‍රමාණය සහ ඔබේ ප්‍රදේශය අපට දන්වන්න. ඔබට ගැළපෙන කෝපි පැළ තෝරාගැනීමට අපි උපදෙස් දෙන්නෙමු.
              </p>
            </div>

            <div className="flex flex-col gap-3 md:items-end">
              <Button href="#contact" className="w-full bg-[#96c267] px-7 py-4 text-base text-[#102033] hover:bg-[#86b75a] focus:ring-[#96c267] md:w-auto">
                WhatsApp කරන්න
              </Button>
              <Button href="#contact" variant="outline" className="w-full px-7 py-4 text-base md:w-auto">
                අපව අමතන්න
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t border-[#d8c7aa] bg-[#102033] text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Logo />
              <div>
                <p className="text-xl font-extrabold">{businessName}</p>
                <p className="text-xs font-bold tracking-[0.35em] text-[#96c267]">SPICY</p>
              </div>
            </div>
            <p className="leading-7 text-white/70">ගෙවතු, කුඩා වගා සහ කෘෂිකාර්මික ව්‍යාපෘති සඳහා නිරෝගී කෝපි පැළ සැපයීම.</p>
          </div>

          <div>
            <h4 className="mb-4 font-bold">සම්බන්ධ වන්න</h4>
            <div className="space-y-3 text-white/70">
              <p className="flex items-center gap-2"><Icon type="phone" className="h-4 w-4" /> {phone}</p>
              <p className="flex items-center gap-2"><Icon type="mapPin" className="h-4 w-4" /> {location}</p>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-bold">විවෘත වේලාවන්</h4>
            <p className="text-white/70">සඳුදා - සෙනසුරාදා</p>
            <p className="text-white/70">උදේ 8:00 - සවස 5:00</p>
          </div>
        </div>

        <div className="border-t border-white/10 py-5 text-center text-sm text-white/50">
          © 2026 {businessName}. සියලු හිමිකම් ඇවිරිණි.
        </div>
      </footer>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </main>
  );
}
