import Image from "next/image";
import { Lusitana } from "next/font/google";
import ContactForm from "./components/ContactForm";

const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

type Cheese = {
  id: number;
  name: string;
  image: string;
  price: string; // prototype price (display-only)
};

type ContactInfoItem = {
  label: string;
  content: React.ReactNode;
};

const cheeses: Cheese[] = [
  { id: 1, name: "Gomolya", image: "/pictures/cheese/cheese-image-01.jpg", price: "1 490 Ft/kg" },
  { id: 2, name: "Casciotta", image: "/pictures/cheese/cheese-image-02.jpg", price: "2 190 Ft/kg" },
  { id: 3, name: "Trappista", image: "/pictures/cheese/cheese-image-03.jpg", price: "1 090 Ft/kg" },
  { id: 4, name: "Parenica", image: "/pictures/cheese/cheese-image-04.jpg", price: "2 490 Ft/kg" },
  { id: 5, name: "Túró", image: "/pictures/cheese/cheese-image-05.jpg", price: "890 Ft/kg" },
  { id: 6, name: "Körözött", image: "/pictures/cheese/cheese-image-06.jpg", price: "990 Ft/kg" },
];

const heroImages = [
  "/pictures/cheese/cheese-image-07.jpg",
  "/pictures/cheese/cheese-image-01.jpg",
  "/pictures/cheese/cheese-image-02.jpg",
  "/pictures/cheese/cheese-image-03.jpg",
  "/pictures/cheese/cheese-image-04.jpg",
  "/pictures/cheese/cheese-image-05.jpg",
  "/pictures/cheese/cheese-image-06.jpg",
];

const galleryImages = [
  { src: "/pictures/farm/farm-image-01.jpg", alt: "Farm 1" },
  { src: "/pictures/farm/farm-image-04.jpg", alt: "Farm 4" },
  { src: "/pictures/cheese/cheese-image-01.jpg", alt: "Cheese 1" },
  { src: "/pictures/cheese/cheese-image-02.jpg", alt: "Cheese 2" },
  { src: "/pictures/cheese/cheese-image-04.jpg", alt: "Cheese 4" },
  { src: "/pictures/cheese/cheese-image-05.jpg", alt: "Cheese 5" },
  { src: "/pictures/cheese/cheese-image-06.jpg", alt: "Cheese 6" },
  { src: "/pictures/cheese/cheese-image-07.jpg", alt: "Cheese 7" },
];

const aboutSections = [
  {
    title: "Lorem Ipsum Dolor",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Consectetur Adipiscing",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "Sed Do Eiusmod",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
];

const contactInfo: ContactInfoItem[] = [
  {
    label: "Cím",
    content: (
      <>
        123 Lorem Ipsum Street
        <br />
        Dolor City, ST 12345
        <br />
        Country
      </>
    ),
  },
  {
    label: "Telefon",
    content: "+1 234 567 8900",
  },
  {
    label: "Email",
    content: "info@loremipsum.com",
  },
  {
    label: "Nyitvatartás",
    content: (
      <>
        Hétfő - Péntek: 9:00 - 17:00
        <br />
        Szombat: 10:00 - 14:00
        <br />
        Vasárnap: Zárva
      </>
    ),
  },
];

export default function Home() {
  return (
    <div className="bg-zinc-900 text-zinc-100">
      {/* Hero section */}
      <section id="home" className="hero">
        <div className="hero-slides" aria-hidden="true">
          {heroImages.map((src) => (
            <div
              key={src}
              className="hero-slide"
              style={{ backgroundImage: `url('${src}')` }}
            />
          ))}
        </div>

        <div className="hero-content max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <h1 className={`${lusitana.className} text-5xl md:text-6xl font-bold text-zinc-100 mb-4 animate-fade-up`}>
            Üdvözöljük a Köhler Tejben
          </h1>
          <p className={`${lusitana.className} text-xl font-normal text-zinc-200 max-w-2xl mx-auto animate-fade-up-delay`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-12 bg-zinc-800/40 border-y border-zinc-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-zinc-100 mb-12 text-center">Termékek</h1>
          
          {/* Featured Product - Tej */}
          <div className="mb-16 max-w-4xl mx-auto">
            <div className="bg-zinc-800 border border-zinc-700 rounded-lg shadow-lg overflow-hidden hover:border-zinc-600 transition-colors">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="relative h-96 w-full">
                  <Image
                    src="/pictures/farm/farm-image-01.jpg"
                    alt="Tej"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-baseline justify-between mb-4">
                    <h2 className="text-4xl font-bold text-zinc-100">Tej</h2>
                    <div className="text-amber-400 font-semibold text-3xl">350 Ft/l</div>
                  </div>
                  <p className="text-zinc-300 text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cheeses.map((cheese) => (
              <div key={cheese.id} className="bg-zinc-800 border border-zinc-700 rounded-lg shadow-md overflow-hidden hover:border-zinc-600 transition-colors">
                <div className="relative h-64 w-full">
                  <Image
                    src={cheese.image}
                    alt={cheese.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="text-2xl font-bold text-zinc-100">{cheese.name}</h3>
                    <div className="text-amber-400 font-semibold text-xl ml-4">{cheese.price}</div>
                  </div>
                  <p className="text-zinc-300 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-zinc-100 mb-12 text-center">Rólunk</h1>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            {aboutSections.map((section) => (
              <div
                key={section.title}
                className="bg-zinc-800 border border-zinc-700 p-8 rounded-lg shadow-md"
              >
                <h2 className="text-2xl font-bold text-zinc-100 mb-4">{section.title}</h2>
                <p className="text-zinc-300 leading-relaxed">{section.text}</p>
              </div>
            ))}
          </div>

          <div aria-label="gallery" className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image) => (
              <div
                key={image.src}
                className="relative h-64 rounded-lg overflow-hidden border border-zinc-800 shadow-md"
              >
                <Image src={image.src} alt={image.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 bg-zinc-800/40 border-t border-zinc-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-zinc-100 mb-12 text-center">Kapcsolat</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <ContactForm />

            <div className="bg-zinc-800 border border-zinc-700 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-zinc-100 mb-6">Kapcsolati Információk</h2>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label}>
                    <h3 className="font-semibold text-zinc-200 mb-2">{item.label}</h3>
                    <p className="text-zinc-300">{item.content}</p>
                  </div>
                ))}
                <div>
                  <h3 className="font-semibold text-zinc-200 mb-2">Közösségi Média</h3>
                  <a 
                    href="https://www.facebook.com/profile.php?id=100089972439638" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:text-amber-300 font-medium inline-flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Kövessen minket Facebookon
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
