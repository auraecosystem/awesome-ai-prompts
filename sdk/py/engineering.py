from aura_prompts import PromptEngine

engine = PromptEngine()

prompt = engine.load("ui.watch.hero")

result = prompt.execute(
    provider="gpt5-mini",
    variables={
        "brand":"Aura"
    }
)

print(result.text)
