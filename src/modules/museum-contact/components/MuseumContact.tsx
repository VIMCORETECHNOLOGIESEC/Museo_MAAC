'use client';

import { contactData } from '../types';
import { useContactForm } from '../hooks/useContactForm';
import { ContactForm } from './ContactForm';
import { ContactHeader } from './ContactHeader';
import { ContactInfo } from './ContactInfo';

export function MuseumContact() {
  const { form, update, onSubmit } = useContactForm();

  return (
    <section
      id="contact"
      className="relative z-40 w-full bg-white text-black"
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 mx-auto h-px max-w-[1800px] bg-black/15" />

      <div className="mx-auto w-full max-w-[1800px] px-6 py-24 sm:px-12 md:py-32 lg:px-[clamp(3rem,6.2vw,7rem)]">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-12 lg:gap-16">
          <div className="flex flex-col gap-14 md:col-span-5">
            <ContactHeader
              eyebrow={contactData.eyebrow}
              title={contactData.title}
              lead={contactData.lead}
            />
            <ContactInfo info={contactData.info} />
          </div>

          <div className="md:sticky md:top-24 md:self-start md:col-span-7 md:border-l md:border-black/15 md:pl-12">
            <ContactForm form={form} onChange={update} onSubmit={onSubmit} />
          </div>
        </div>
      </div>
    </section>
  );
}
