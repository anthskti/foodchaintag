const questions = [
  {
    value: 1,
    q: "Of the identities you had during the game, which did you prefer? Why? Which was most frustrating? Why?",
  },
  {
    value: 2,
    q: "What strategies did you use to survive longer? Did a particular strategy work better for all identities or just one? Does this strategy occur in nature?",
  },
  {
    value: 3,
    q: "What would happen if the parasite became very “greedy”? What about the human?",
  },
  {
    value: 4,
    q: "What would happen if one of the species went extinct? What kind of impact would that cause? Can ecosystems withstand a loss in their food chains?",
  },
  {
    value: 5,
    q: "What will eventually happen to a system which becomes less and less complex? Why?",
  },
  {
    value: 6,
    q: "Is a complex ecosystem more or less stable than a simple ecosystem?",
  },
  {
    value: 7,
    q: "Can you think of any systems which people have created which might be considered ecologically unstable because of their lack of diversity? What might be done to reduce the hazards of such systems?",
  },
  {
    value: 8,
    q: "What other webs of life might there be? Where one action can have multiple reactions. What about webs of life within your school? Within your community? What about economic webs of life? Cultural webs of life? World-wide webs of life?",
  },
] as const;

export const Discussion = () => {
  return (
    <section className="border-t border-zinc-200 bg-zinc-50 py-14 px-6 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Reflection & Discussions
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
            Questions
          </h2>
        </div>

        <div className="mt-8 overflow-hidden rounded-xl border border-zinc-200 bg-white ring-1 ring-zinc-200/60">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-zinc-200 bg-zinc-50">
                <th
                  scope="col"
                  className="w-12 px-4 py-3 text-sm font-bold uppercase tracking-wider text-zinc-900"
                >
                  #
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-sm font-bold uppercase tracking-wider text-zinc-900"
                >
                  Question
                </th>
              </tr>
            </thead>
            <tbody>
              {questions.map(({ value, q }) => (
                <tr
                  key={value}
                  className="border-b border-zinc-100 last:border-b-0"
                >
                  <td className="px-4 py-3 align-top font-bold tabular-nums text-zinc-800">
                    {value}
                  </td>
                  <td className="px-4 py-3 align-top leading-relaxed text-zinc-800">
                    {q}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
