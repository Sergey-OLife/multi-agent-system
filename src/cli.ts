#!/usr/bin/env node
import { routeRequest } from "./router.js";

function parseArgs(argv: string[]): { json: boolean; input: string } {
  const json = argv.includes("--json");
  const input = argv.filter((arg) => arg !== "--json").join(" ").trim();
  return { json, input };
}

const { json, input } = parseArgs(process.argv.slice(2));

if (!input) {
  console.error("Usage: npm run dev -- [--json] <request>");
  process.exitCode = 1;
} else {
  const result = routeRequest(input);
  if (json) {
    console.log(JSON.stringify(result, null, 2));
  } else {
    console.log(result.finalText || result.diagnostics.blockedReason || "No output.");
  }
}
