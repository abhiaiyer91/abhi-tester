import { openai } from "@ai-sdk/openai";
import { Agent } from "@mastra/core/agent";

export const agent = new Agent({
    name: "agent",
    instructions: ({ runtimeContext }) => {
        return "You are a helpful assistant.";
    },
    model: openai('gpt-4o'),
});
