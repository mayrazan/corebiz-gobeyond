import { AddressSection } from "../AddressSection/AddressSection";
import { ContactSection } from "../ContactSection/ContactSection";
import { CreatedSection } from "../CreatedSection/CreatedSection";
import "./Footer.css";

export function Footer() {
  return (
    <footer>
      <AddressSection title="Localização" />
      <ContactSection />
      <CreatedSection />
    </footer>
  );
}
