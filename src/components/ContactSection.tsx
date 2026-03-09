import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-20 md:py-28 bg-secondary">
    <div className="container">
      <div className="text-center mb-14">
        <p className="text-accent font-body text-xs tracking-[0.25em] uppercase mb-3">Find Us</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          Location &amp; Contact
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <MapPin className="text-accent mt-1 shrink-0" size={20} aria-hidden="true" />
            <div>
              <h4 className="font-heading font-semibold text-foreground mb-1">Address</h4>
              <p className="text-muted-foreground text-sm">
                Choudhary Heights, I 20, Warje Malwadi Rd, Giridhar Nagar, Warje, Pune, Maharashtra 411058
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="text-accent mt-1 shrink-0" size={20} aria-hidden="true" />
            <div>
              <h4 className="font-heading font-semibold text-foreground mb-1">Phone</h4>
              <a
                href="tel:+919082672306"
                className="text-muted-foreground text-sm hover:text-accent transition-colors"
              >
                090826 72306
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Mail className="text-accent mt-1 shrink-0" size={20} aria-hidden="true" />
            <div>
              <h4 className="font-heading font-semibold text-foreground mb-1">Email</h4>
              <a
                href="mailto:hello@12amstories.com"
                className="text-muted-foreground text-sm hover:text-accent transition-colors"
              >
                hello@12amstories.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Clock className="text-accent mt-1 shrink-0" size={20} aria-hidden="true" />
            <div>
              <h4 className="font-heading font-semibold text-foreground mb-1">Hours</h4>
              <p className="text-muted-foreground text-sm">Mon – Sun: Open till 12:00 AM</p>
            </div>
          </div>
        </div>

        {/* Map – lazy loaded so it doesn't block page render */}
        <div className="rounded-lg overflow-hidden shadow-lg h-[350px]">
          <iframe
            title="12AM Stories Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5!2d73.8073!3d18.4785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2956fc667cd55%3A0x5b8db6e0e0f2a0a0!2sSwarnaa%20Vegetarian!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
