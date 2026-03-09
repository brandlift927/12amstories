import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
] as const;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Passive scroll listener – does not block rendering
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Stable reference – won't cause unnecessary child re-renders
  const handleClick = useCallback((href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
        }`}
    >
      <div className="container flex items-center justify-between">
        <button
          onClick={() => handleClick("#hero")}
          className="font-heading text-2xl font-bold text-primary-foreground tracking-wide"
        >
          12AM Stories
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleClick(l.href)}
                className="text-primary-foreground/80 hover:text-accent text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-primary/95 backdrop-blur-md px-6 pb-6 pt-2">
          <ul className="flex flex-col gap-4">
            {navLinks.map((l) => (
              <li key={l.href}>
                <button
                  onClick={() => handleClick(l.href)}
                  className="text-primary-foreground/80 hover:text-accent text-base font-medium transition-colors w-full text-left"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
