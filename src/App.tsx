import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '@/i18n';
import LanguageProvider from '@/i18n/LanguageProvider';
import ScrollToTop from '@/components/ScrollToTop';
import Layout from '@/layout/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import CostCalculator from '@/pages/CostCalculator';
import BusinessSetup from '@/pages/BusinessSetup';
import Services from '@/pages/Services';
import Mainland from '@/pages/Mainland';
import FinancialCentre from '@/pages/FinancialCentre';
import FreeZone from '@/pages/FreeZone';
import Offshore from '@/pages/Offshore';
import Liquidation from '@/pages/Liquidation';
import BankAccount from '@/pages/BankAccount';
import Immigration from '@/pages/Immigration';
import TradeLicense from '@/pages/TradeLicense';
import GoldenVisa from '@/pages/GoldenVisa';
import FreelanceLicenseAbuDhabi from '@/pages/FreelanceLicenseAbuDhabi';
import ETraderLicense from '@/pages/ETraderLicense';
import ProServices from '@/pages/ProServices';
import MonthlyContract from '@/pages/MonthlyContract';
import EmiratesId from '@/pages/EmiratesId';
import MohreServices from '@/pages/MohreServices';
import GdrfaServices from '@/pages/GdrfaServices';
import RtaServices from '@/pages/RtaServices';
import SiraServices from '@/pages/SiraServices';
import NotaryServices from '@/pages/NotaryServices';
import NotFound from '@/pages/NotFound';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cost-calculator" element={<CostCalculator />} />
          <Route path="/business-setup" element={<BusinessSetup />} />
          <Route path="/services" element={<Services />} />
          <Route path="/mainland" element={<Mainland />} />
          <Route path="/financial-centre" element={<FinancialCentre />} />
          <Route path="/free-zone" element={<FreeZone />} />
          <Route path="/offshore" element={<Offshore />} />
          <Route path="/freelance-license-abu-dhabi" element={<FreelanceLicenseAbuDhabi />} />
          <Route path="/e-trader-license" element={<ETraderLicense />} />
          <Route path="/services/liquidation" element={<Liquidation />} />
          <Route path="/services/bank-account" element={<BankAccount />} />
          <Route path="/services/immigration" element={<Immigration />} />
          <Route path="/services/trade-license" element={<TradeLicense />} />
          <Route path="/services/golden-visa" element={<GoldenVisa />} />
          <Route path="/pro-services" element={<ProServices />} />
          <Route path="/monthly-contract" element={<MonthlyContract />} />
          <Route path="/emirates-id" element={<EmiratesId />} />
          <Route path="/mohre-services" element={<MohreServices />} />
          <Route path="/gdrfa-services" element={<GdrfaServices />} />
          <Route path="/rta-services" element={<RtaServices />} />
          <Route path="/sira-services" element={<SiraServices />} />
          <Route path="/notary-services" element={<NotaryServices />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </LanguageProvider>
  );
}
