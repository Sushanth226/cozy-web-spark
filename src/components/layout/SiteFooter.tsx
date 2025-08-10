import { Link } from "react-router-dom";

const SiteFooter = () => {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto py-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Cozy Cup Cafe. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#contact" className="text-sm hover:underline">Contact</a>
          <Link to="/feedback" className="text-sm hover:underline">Feedback</Link>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
