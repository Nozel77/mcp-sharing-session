export function SectionTitle({
  gradient,
  plain,
  subtitle,
}: {
  gradient: string;
  plain: string;
  subtitle?: string;
}) {
  return (
    <header className="mb-7 text-center md:mb-10 lg:mb-12">
      <h1 className="text-3xl font-bold tracking-normal text-white sm:text-4xl md:text-5xl">
        <span>{gradient}</span> <span>{plain}</span>
      </h1>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#4BB8FA]" />
      {subtitle ? <p className="mx-auto mt-2 max-w-3xl text-center text-sm leading-6 text-[#8fb9d8] sm:text-base">{subtitle}</p> : null}
    </header>
  );
}
