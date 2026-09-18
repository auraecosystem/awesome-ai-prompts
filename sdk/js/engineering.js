import { PromptEngine } from "@aura/prompts";

const engine = new PromptEngine();

const prompt = await engine.load("ui.watch.hero");

const result = await prompt.execute({
  provider:"lmlm",
  variables:{
    brand:"Aura"
  }
});

console.log(result);
