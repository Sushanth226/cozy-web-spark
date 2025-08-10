import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cafe.jpg";
import { Helmet } from "react-helmet-async";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mx", `${x}%`);
    el.style.setProperty("--my", `${y}%`);
  };

  return (
    <section aria-label="Welcome" className="relative overflow-hidden">
      <Helmet>
        <title>Cozy Cup Cafe | Handcrafted Coffee & Pastries</title>
        <meta name="description" content="A warm, cozy coffeehouse offering specialty coffee, pastries, and community vibes in a modern, welcoming space." />
      </Helmet>
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        className="container mx-auto grid gap-8 py-12 md:grid-cols-2 md:py-20"
      >
        <div className="relative order-2 md:order-1 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Cozy Cup Cafe
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Small-batch roasts, artisan pastries, and a space that feels like home.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#menu">
              <Button variant="hero" size="lg">View Menu</Button>
            </a>
            <Link to="/feedback">
              <Button variant="gold" size="lg">Leave Feedback</Button>
            </Link>
          </div>
        </div>

        <div className="order-1 md:order-2 relative">
          <div className="relative rounded-xl border bg-card shadow-[var(--shadow-elegant)] overflow-hidden">
            <img
              src={heroImage}
              alt="Warm, cozy cafe interior with latte art and golden light"
              loading="eager"
              className="w-full h-[260px] md:h-[420px] object-cover"
            />
            {/* Signature ambient glow following the pointer */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(400px circle at var(--mx,50%) var(--my,50%), hsl(var(--accent) / 0.25), transparent 55%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
