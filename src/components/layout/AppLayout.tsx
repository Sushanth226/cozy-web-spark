import { Outlet } from "react-router-dom";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import { Helmet } from "react-helmet-async";

const AppLayout = () => {
  const canonical = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Cozy Cup Cafe</title>
        <meta name="description" content="Warm, cozy coffeehouse with handcrafted drinks, pastries, and great vibes." />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
};

export default AppLayout;
