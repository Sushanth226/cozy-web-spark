const ContactSection = () => {
  return (
    <section id="contact" aria-label="Contact & Location" className="py-12 md:py-20">
      <div className="container mx-auto grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-2">Visit Us</h2>
          <p className="text-muted-foreground mb-4">
            123 Brew St, Coffeeville, CA 90000
          </p>
          <ul className="space-y-2 text-sm">
            <li><span className="font-semibold">Hours:</span> Mon–Fri 7am–6pm, Sat–Sun 8am–6pm</li>
            <li><span className="font-semibold">Phone:</span> (555) 123-4567</li>
            <li><span className="font-semibold">Email:</span> hello@cozycup.cafe</li>
          </ul>
        </div>
        <div className="rounded-xl overflow-hidden border bg-card shadow-[var(--shadow-elegant)]">
          <iframe
            title="Google Map location of Cozy Cup Cafe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019360205799!2d-122.41941568468197!3d37.7749292797594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085815471f6e0f5%3A0xe4c6a1be4c0c0e4!2sCoffee%20Shop!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus"
            width="100%"
            height="350"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
