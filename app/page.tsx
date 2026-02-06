import Image from "next/image";

export default function Home() {
  const cheeses = [
    { id: 1, name: "Trappista", image: "/pictures/cheese/cheese-image-01.jpg" },
    { id: 2, name: "Pannónia", image: "/pictures/cheese/cheese-image-02.jpg" },
    { id: 3, name: "Óvári", image: "/pictures/cheese/cheese-image-03.jpg" },
    { id: 4, name: "Pálpusztai", image: "/pictures/cheese/cheese-image-04.jpg" },
    { id: 5, name: "Balaton", image: "/pictures/cheese/cheese-image-05.jpg" },
    { id: 6, name: "Karaván", image: "/pictures/cheese/cheese-image-06.jpg" },
  ];

  return (
    <div>
      {/* Hero section */}
      <section id="home" className="pt-32 pb-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Üdvözöljük a Köhler Tejben
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/pictures/farm/farm-image-01.jpg"
                alt="Farm 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/pictures/farm/farm-image-04.jpg"
                alt="Farm 4"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/pictures/cheese/cheese-image-01.jpg"
                alt="Cheese 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/pictures/cheese/cheese-image-02.jpg"
                alt="Cheese 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/pictures/cheese/cheese-image-04.jpg"
                alt="Cheese 4"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/pictures/cheese/cheese-image-05.jpg"
                alt="Cheese 5"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/pictures/cheese/cheese-image-06.jpg"
                alt="Cheese 6"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/pictures/cheese/cheese-image-07.jpg"
                alt="Cheese 7"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/pictures/cheese/cheese-image-08.jpg"
                alt="Cheese 8"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/pictures/cheese/cheese-image-09.jpg"
                alt="Cheese 9"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/pictures/cheese/cheese-image-10.jpg"
                alt="Cheese 10"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/pictures/cheese/cheese-image-11.jpg"
                alt="Cheese 11"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/pictures/cheese/cheese-image-12.jpg"
                alt="Cheese 12"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/pictures/cheese/cheese-image-13.jpg"
                alt="Cheese 13"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/pictures/cheese/cheese-image-14.jpg"
                alt="Cheese 14"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/pictures/cheese/cheese-image-15.jpg"
                alt="Cheese 15"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Lorem Ipsum</h1>
          
          {/* Featured Product - Tej */}
          <div className="mb-16 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
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
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">Tej</h2>
                  <p className="text-gray-600 text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cheeses.map((cheese) => (
              <div key={cheese.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64 w-full">
                  <Image
                    src={cheese.image}
                    alt={cheese.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{cheese.name}</h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">About Us</h1>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Lorem Ipsum Dolor</h2>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Consectetur Adipiscing</h2>
              <p className="text-gray-600 leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Sed Do Eiusmod</h2>
              <p className="text-gray-600 leading-relaxed">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Contact Us</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-700 focus:border-green-700"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-700 focus:border-green-700"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-700 focus:border-green-700"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-800 transition-colors font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-600">
                    123 Lorem Ipsum Street<br />
                    Dolor City, ST 12345<br />
                    Country
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                  <p className="text-gray-600">+1 234 567 8900</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">info@loremipsum.com</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 - 17:00<br />
                    Saturday: 10:00 - 14:00<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
