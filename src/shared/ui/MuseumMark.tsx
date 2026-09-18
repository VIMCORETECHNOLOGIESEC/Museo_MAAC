type MuseumMarkProps = {
  variant: number;
};

export function MuseumMark({ variant }: MuseumMarkProps) {
  if (variant === 1) {
    return (
      <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="5" aria-hidden="true">
        <path d="M18 102h84M28 102V42h64v60M18 42 60 18l42 24M42 58v44M60 58v44M78 58v44" />
      </svg>
    );
  }

  if (variant === 2) {
    return (
      <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="5" aria-hidden="true">
        <path d="M18 102h84M29 102V48h62v54M22 48 60 20l38 28M43 102V64h34v38" />
        <path d="M50 80h20" />
      </svg>
    );
  }

  if (variant === 3) {
    return (
      <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="5" aria-hidden="true">
        <path d="M16 102h88M29 102V37h62v65M20 37h80L60 16 20 37Z" />
        <path d="M42 50v52M60 50v52M78 50v52" />
      </svg>
    );
  }

  if (variant === 4) {
    return (
      <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="5" aria-hidden="true">
        <path d="M16 102h88M26 102V52l34-32 34 32v50M41 52h38M47 102V68h26v34" />
        <circle cx="60" cy="43" r="6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="5" aria-hidden="true">
      <path pathLength="1" d="M16 102h88M22 45h76M60 18l38 27H22l38-27ZM31 45v57M47 45v57M73 45v57M89 45v57" />
    </svg>
  );
}
