import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import HomePage from "@/pages/HomePage";
import CompanyPage from "@/pages/CompanyPage";
import ServicesPage from "@/pages/ServicesPage";
import TalendyHubPage from "@/pages/TalendyHubPage";
import TalendyEORPage from "@/pages/TalendyEORPage";
import AboutPage from "@/pages/AboutPage";
import NewsPage from "@/pages/NewsPage";
import DownloadPage from "@/pages/DownloadPage";
import ContactPage from "@/pages/ContactPage";
import FAQPage from "@/pages/FAQPage";
import CandidatesPage from "@/pages/CandidatesPage";
import CompaniesPage from "@/pages/CompaniesPage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/company" component={CompanyPage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/talendy-hub" component={TalendyHubPage} />
        <Route path="/talendy-eor" component={TalendyEORPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/news" component={NewsPage} />
        <Route path="/download" component={DownloadPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/faq" component={FAQPage} />
        <Route path="/candidates" component={CandidatesPage} />
        <Route path="/companies" component={CompaniesPage} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
