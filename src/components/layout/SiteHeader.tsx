import { Link, NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
    isActive ? "bg-secondary text-secondary-foreground" : "hover:bg-secondary hover:text-secondary-foreground"
  }`;

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link to="/" className="text-lg font-semibold tracking-tight">
          Cozy Cup Cafe
        </Link>
        <nav className="flex items-center gap-1">
          <NavLink to="/" className={navLinkClass} end>
            Home
          </NavLink>
          <a href="#menu" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-secondary hover:text-secondary-foreground">
            Menu
          </a>
          <a href="#contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-secondary hover:text-secondary-foreground">
            Contact
          </a>
          <NavLink to="/feedback" className={navLinkClass}>
            Feedback
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
