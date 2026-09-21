const menuItems = [
  {
    category: "Espresso Classics",
    items: [
      { name: "Espresso", price: "$3.50", desc: "Rich, concentrated shot of pure coffee" },
      { name: "Americano", price: "$4.00", desc: "Espresso diluted with hot water" },
      { name: "Cappuccino", price: "$4.75", desc: "Espresso with steamed milk and thick foam" },
      { name: "Latte", price: "$5.00", desc: "Smooth espresso with silky steamed milk" },
      { name: "Flat White", price: "$5.25", desc: "Velvety microfoam over double espresso" },
    ],
  },
  {
    category: "Specialty Drinks",
    items: [
      { name: "Caramel Macchiato", price: "$5.75", desc: "Vanilla, espresso, steamed milk & caramel" },
      { name: "Mocha", price: "$5.50", desc: "Espresso, chocolate, steamed milk" },
      { name: "Honey Lavender Latte", price: "$6.00", desc: "Floral notes with local honey" },
      { name: "Cold Brew", price: "$4.75", desc: "Steeped 18 hours for smooth richness" },
      { name: "Nitro Cold Brew", price: "$5.50", desc: "Infused with nitrogen for creamy texture" },
    ],
  },
  {
    category: "Pastries & Bites",
    items: [
      { name: "Croissant", price: "$3.50", desc: "Buttery, flaky French classic" },
      { name: "Banana Bread", price: "$4.00", desc: "Homemade with walnuts" },
      { name: "Avocado Toast", price: "$8.50", desc: "Sourdough, smashed avocado, chili flakes" },
      { name: "Chocolate Chip Cookie", price: "$3.00", desc: "Warm, gooey, and irresistible" },
    ],
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-20 sm:py-28 bg-coffee-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-coffee-600 font-medium tracking-widest uppercase text-sm mb-3">
            What We Serve
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-coffee-900">
            Our Menu
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {menuItems.map((cat) => (
            <div key={cat.category} className="bg-white rounded-2xl shadow-md p-6 sm:p-8 border border-coffee-100">
              <h3 className="font-serif text-xl font-bold text-coffee-800 mb-6 pb-3 border-b border-coffee-200">
                {cat.category}
              </h3>
              <ul className="space-y-5">
                {cat.items.map((item) => (
                  <li key={item.name} className="flex justify-between gap-4">
                    <div>
                      <p className={"font-semibold text-coffee-900"}>{item.name}</p>
                      <p className={"text-sm text-coffee-600 mt-0.5"}>{item.desc}</p>
                    </div>
                    <span className="font-semibold text-coffee-700 whitespace-nowrap">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
