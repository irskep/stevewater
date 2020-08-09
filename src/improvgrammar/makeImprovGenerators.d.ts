interface Improv {
  gen: (name: string, model: unknown | undefined) => string;
}

export default function(
  rng: () => number
): {
  descGen: Improv;
  subGen: Improv;
  pedalWordsGen: Improv;
  ampGen: Improv;
};
