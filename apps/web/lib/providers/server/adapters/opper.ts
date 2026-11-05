import "server-only";
import { createOpenAICompatibleAdapter } from "@/lib/providers/server/adapters/openai-compatible";
import { applyLocalReasoningLevel } from "@/lib/providers/server/adapters/local-reasoning";

// Discovery does not read Opper's per-model effort levels, so thinking levels
// come from an administrator's override, as with other chat endpoints.
export const opperAdapter = createOpenAICompatibleAdapter("opper", {
  acceptsReasoningLevel: true,
  transformRequestBody: (body, config) =>
    applyLocalReasoningLevel(
      body,
      config.reasoningLevel,
      config.reasoningRequest,
    ),
});
