import { Coffee, Leaf, Heart, Award } from "lucide-react";

const features = [
  {
    icon: Coffee,
    title: "Small-Batch Roasting",
    desc: "We roast in small batches every week to guarantee peak freshness and flavor.",
  },
  {
    icon: Leaf,
    title: "Ethically Sourced",
    desc: "Direct trade relationships with farmers who care about quality and sustainability.",
  },
  {
    icon: Heart,
    title: "Crafted with Care",
    desc: "Every drink is made by trained baristas who treat coffee as an art form.",
  },
  {
    icon: Award,
    title: "Award-Winning",
    desc: "Recognized locally for excellence in quality and customer experience.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-coffee-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-coffee-600 font-medium tracking-widest uppercase text-sm mb-3">
              Our Story
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-coffee-900 mb-6">
              Passion in Every Bean
            </h2>
            <p className="text-coffee-700 leading-relaxed mb-4">
              Brew Haven started as a tiny cart in a local farmers market. What began with a
              single espresso machine and a love for great coffee has grown into a neighborhood
              destination where people gather, create, and connect.
            </p>
            <p className="text-coffee-700 leading-relaxed">
              We believe great coffee is about more than caffeine — it&apos;s about the people who
              grow it, the hands that craft it, and the moments it creates. Come sit with us.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-coffee-200"
              >
                <f.icon className="w-8 h-8 text-coffee-600 mb-3" />
                <h3 className={"font-semibold text-coffee-900 mb-1"}>{f.title}</h3>
                <p className={"text-sm text-coffee-600 leading-relaxed"}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
