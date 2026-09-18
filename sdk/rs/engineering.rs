use aura_prompts::PromptEngine;

let engine = PromptEngine::new();

let prompt = engine.load("ui.watch.hero");

let result = prompt.execute("lmlm");
