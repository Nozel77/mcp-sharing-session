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
    <header className="mb-10 text-center md:mb-14">
      <h1 className="text-4xl font-bold tracking-normal text-white md:text-5xl">
        <span>{gradient}</span> <span>{plain}</span>
      </h1>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#4BB8FA]" />
      {subtitle ? <p className="mt-2 text-center text-base text-[#8fb9d8]">{subtitle}</p> : null}
    </header>
  );
}
