export function Wave({ d }: { d: string }) {
  return (
    <svg className="wave" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
      <path fill="currentColor" d={d} />
    </svg>
  );
}
