import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const sections = [
  {
    title: "Coffee",
    items: [
      { name: "Espresso", desc: "Rich & bold", price: "$3.50" },
      { name: "Latte", desc: "Silky micro-foam", price: "$4.50" },
      { name: "Cappuccino", desc: "Perfect balance", price: "$4.25" },
      { name: "Pour Over", desc: "Single-origin", price: "$5.00" },
    ],
  },
  {
    title: "Snacks",
    items: [
      { name: "Butter Croissant", desc: "Freshly baked", price: "$3.25" },
      { name: "Banana Bread", desc: "Walnut crumble", price: "$3.75" },
      { name: "Granola Yogurt", desc: "Honey & berries", price: "$5.25" },
      { name: "Avocado Toast", desc: "Sourdough slice", price: "$6.50" },
    ],
  },
  {
    title: "Specials",
    items: [
      { name: "Honey Almond Latte", desc: "Soft gold sweetness", price: "$5.50" },
      { name: "Cardamom Cappuccino", desc: "Warm spice notes", price: "$5.25" },
      { name: "Iced Orange Cold Brew", desc: "Citrus twist", price: "$5.75" },
    ],
  },
];

const MenuGrid = () => {
  return (
    <section id="menu" aria-label="Menu" className="py-12 md:py-20 bg-[var(--gradient-subtle)]">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Our Menu</h2>
          <p className="text-muted-foreground">
            Handcrafted classics and seasonal specials made with care.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {sections.map((sec) => (
            <Card key={sec.title} className="bg-card/90">
              <CardHeader>
                <CardTitle className="text-xl">{sec.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {sec.items.map((item) => (
                  <div key={item.name} className="flex items-start justify-between">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                    <span className="text-sm font-semibold text-foreground/80">{item.price}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuGrid;
