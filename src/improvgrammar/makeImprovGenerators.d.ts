declare module "makeImprovGenerators" {
  interface Improv {
    gen: (name: string, model: unknown) => string;
  }

  export const descGen: Improv;
  export const subGen: Improv;
  export const pedalWordsGen: Improv;
  export const ampGen: Improv;
}
