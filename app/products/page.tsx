import Image from "next/image";

export default function Products() {
  const cheeses = [
    { id: 1, name: "Alpine Reserve", image: "/pictures/cheese/cheese-image-01.jpg" },
    { id: 2, name: "Meadow Gold", image: "/pictures/cheese/cheese-image-02.jpg" },
    { id: 3, name: "Artisan Classic", image: "/pictures/cheese/cheese-image-03.jpg" },
    { id: 4, name: "Heritage Blend", image: "/pictures/cheese/cheese-image-04.jpg" },
    { id: 5, name: "Premium Aged", image: "/pictures/cheese/cheese-image-05.jpg" },
    { id: 6, name: "Rustic Farmhouse", image: "/pictures/cheese/cheese-image-06.jpg" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Termékeink</h1>
      
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
              <p className="text-gray-600 mb-4">
                Prémium minőségű sajt, amely gondosan készül legjobb tejtermékeinből.
              </p>
              <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition-colors">
                Bővebben
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
