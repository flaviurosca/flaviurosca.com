declare module "baffle" {
  export type Baffle = {
    set(options: { characters: string; speed: number }): Baffle;
    start(): Baffle;
    reveal(duration: number, delay: number): Baffle;
  }

  export default function baffle(selector: string | Element): Baffle;
}
