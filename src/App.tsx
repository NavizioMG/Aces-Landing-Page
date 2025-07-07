import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ThankYou from "./pages/ThankYou";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/thank-you" element={<ThankYou />} />
          
          {/* City-specific landing pages */}
          <Route path="/dallas" element={<LandingPage city="Dallas" phone="(214) 451-3185" />} />
          <Route path="/houston" element={<LandingPage city="Houston" phone="(713) 555-0123" />} />
          <Route path="/austin" element={<LandingPage city="Austin" phone="(512) 555-0123" />} />
          <Route path="/san-antonio" element={<LandingPage city="San Antonio" phone="(210) 555-0123" />} />
          <Route path="/fort-worth" element={<LandingPage city="Fort Worth" phone="(817) 555-0123" />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
