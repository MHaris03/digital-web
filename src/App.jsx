import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import AboutUs from "./pages/Aboutus";
import Seo from "./pages/Seo";
import Localmap from "./pages/LocalMaps";
import SocialMediaMarketing from "./pages/SocialMedia";
import PPCManagement from "./pages/Ppc";
import ContentWritingServices from "./pages/Writing";
import Designweb from "./pages/Designdevelopment";
// import NotFound from "./pages/NotFound";
// import { Toaster } from "./components/ui/toaster";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* <Toaster /> */}
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services/web-design" element={<Designweb />} />
            <Route path="/services/seo" element={<Seo />} />
            <Route path="/services/local-maps" element={<Localmap />} />
            <Route path="/services/social-media" element={<SocialMediaMarketing />} />
            <Route path="/services/ppc" element={<PPCManagement />} />
            <Route path="/services/content-writing" element={<ContentWritingServices />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  // <div class="bg-red-500 text-white p-4">Hello Tailwind</div>

);

export default App;