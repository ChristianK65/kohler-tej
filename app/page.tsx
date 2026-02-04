import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero section */}
      <section className="bg-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Welcome to Köhler Tej
            </h1>
            <p className="text-xl text-gray-600">
              {/* Hero description will go here */}
            </p>
          </div>
        </div>
      </section>

      {/* Featured sections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature cards will go here */}
          </div>
        </div>
      </section>
    </div>
  );
}
