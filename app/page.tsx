import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Üdvözöljük a Köhler Tejben
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Élvezze a legfinomabb friss tejtermékeket családi farmunkról. Elkötelezettünk a minőség, a fenntarthatóság iránt, és a lehető legfrissebb termékeket szállítjuk közvetlenül a legelőinkről az asztalodra.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                src="/pictures/farm/farm-image-02.jpg"
                alt="Farm 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/pictures/farm/farm-image-03.png"
                alt="Farm 3"
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
                src="/pictures/cheese/cheese-image-03.jpg"
                alt="Cheese 3"
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
    </div>
  );
}
