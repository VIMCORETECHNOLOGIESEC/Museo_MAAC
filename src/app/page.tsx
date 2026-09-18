import { MuseumHistory } from '@/modules/museum-history';
import {
  ContactReveal,
  MuseumContact,
  MuseumFooter,
} from '@/modules/museum-contact';
import { InformationMuseum } from '@/modules/museum-history/components/InformationMuseum';
import { MuseumHeader } from '@/modules/museum-header';
import { IntroGate } from './IntroGate';

export default function Page() {
  return (
    <>
      <IntroGate>
        <MuseumHeader />
        {/* <MuseumHero /> */}
        <MuseumHistory />
        <InformationMuseum />
        <ContactReveal>
          <MuseumContact />
        </ContactReveal>
        <MuseumFooter />
      </IntroGate>
    </>
  );
}
