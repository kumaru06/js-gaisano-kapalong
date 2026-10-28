const reasons = [
  {
    title: "In Kapalong",
    text: "The branch address supplied for this project is Barangay Maniki, Kapalong, Davao del Norte.",
  },
  {
    title: "Everyday retail",
    text: "JS Gaisano is a wholesale and retail business. The catalog on this site highlights snacks, sports equipment, and apparel from supplied photos.",
  },
  {
    title: "Open daily",
    text: "The hours supplied for this branch are 8:00 AM to 6:00 PM, Monday through Sunday.",
  },
];

export function Reasons() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6" aria-labelledby="reasons-heading">
      <h2 id="reasons-heading" className="font-serif text-3xl">
        At this branch
      </h2>
      <div className="mt-3 h-0.5 w-12 bg-gold" />
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {reasons.map((reason) => (
          <article key={reason.title} className="rounded-2xl border border-line bg-card p-5">
            <h3 className="font-serif text-2xl">{reason.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted">{reason.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
