import { cn } from '@/lib/utils';
import type { ContactFormFields } from '../hooks/useContactForm';

type ContactFormProps = {
  form: ContactFormFields;
  onChange: (field: keyof ContactFormFields, value: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  className?: string;
};

const fieldClass =
  'block w-full border border-black bg-white px-4 py-3 font-sans text-body text-black placeholder:text-black/35 focus:border-black focus:bg-black/[0.02] focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-0';

export function ContactForm({
  form,
  onChange,
  onSubmit,
  className,
}: ContactFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className={cn('flex flex-col gap-8', className)}
      noValidate={false}
    >
      <div className="flex flex-col gap-3">
        <label
          htmlFor="contact-name"
          className="flex items-baseline gap-3 font-mono text-[1.4rem] font-semibold uppercase tracking-[0.34em] text-black"
        >
          <span className="text-black/45">01</span>
          <span>Nombre</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={(e) => onChange('name', e.target.value)}
          className={fieldClass}
          autoComplete="name"
          placeholder="Tu nombre completo"
        />
      </div>

      <div className="flex flex-col gap-3">
        <label
          htmlFor="contact-email"
          className="flex items-baseline gap-3 font-mono text-[1.4rem] font-semibold uppercase tracking-[0.34em] text-black"
        >
          <span className="text-black/45">02</span>
          <span>Correo electrónico</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => onChange('email', e.target.value)}
          className={fieldClass}
          autoComplete="email"
          placeholder="tu@correo.com"
        />
      </div>

      <div className="flex flex-col gap-3">
        <label
          htmlFor="contact-message"
          className="flex items-baseline gap-3 font-mono text-[1.4rem] font-semibold uppercase tracking-[0.34em] text-black"
        >
          <span className="text-black/45">03</span>
          <span>Mensaje</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={6}
          value={form.message}
          onChange={(e) => onChange('message', e.target.value)}
          className={cn(fieldClass, 'h-auto resize-none leading-relaxed')}
          placeholder="Escribe tu mensaje…"
        />
      </div>

      <div className="flex items-center justify-between border-t border-black pt-5">
        <span className="font-mono text-[1.2rem] uppercase tracking-[0.34em] text-black/55"></span>
        <button
          type="submit"
          className="group inline-flex items-center gap-3 bg-black px-7 py-4 font-mono text-[1.5rem] font-semibold tracking-[0.22em] text-white transition-colors hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
        >
          <span className="block h-2 w-2 bg-white transition-colors group-hover:bg-black" />
          ENVIAR MENSAJE
        </button>
      </div>
    </form>
  );
}
