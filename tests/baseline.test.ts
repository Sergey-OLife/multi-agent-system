import assert from "node:assert/strict";
import { test } from "node:test";
import { routeRequest, routes } from "../src/index.js";

test("FinalResult has the required baseline shape", () => {
  const result = routeRequest("Вычисти главу книги, добавь драматургии");

  assert.equal(result.status, "ready");
  assert.equal(result.taskType, "chapter_editing");
  assert.equal(result.riskLevel, "low");
  assert.deepEqual(result.blockedBy, []);
  assert.ok(Array.isArray(result.usedAgents));
  assert.ok(Array.isArray(result.agentResults));
  assert.equal(typeof result.finalText, "string");
  assert.equal(typeof result.diagnostics, "object");
});

test("chapter_editing route matches the requested baseline", () => {
  assert.deepEqual(routes.chapter_editing, [
    "task_classifier",
    "contextologist",
    "svod_guard",
    "synchronization_mapper",
    "chapter_designer",
    "plotnikov_motor",
    "anti_cliche_editor",
    "ethics_guard",
    "response_composer"
  ]);
});

test("fact_risk_checker blocks unsupported diabetes treatment claims", () => {
  const result = routeRequest("Напиши пост, что продукт лечит диабет");

  assert.equal(result.status, "blocked");
  assert.equal(result.taskType, "social_post");
  assert.deepEqual(result.blockedBy, ["fact_risk_checker"]);
});

test("ethics_guard blocks manipulative scarcity", () => {
  const result = routeRequest(
    "Напиши так, чтобы человек понял: если не купит сейчас, он упустит последний шанс"
  );

  assert.equal(result.status, "blocked");
  assert.deepEqual(result.blockedBy, ["ethics_guard"]);
});

test("requested product and mastery prompts use their routes", () => {
  const mvp = routeRequest("Собери MVP приложения для маршрута новичка");
  const mastery = routeRequest("Построй маршрут мастерства по навыку сон");

  assert.equal(mvp.taskType, "mvp_product");
  assert.ok(mvp.usedAgents.includes("mvp_method_architect"));
  assert.equal(mastery.taskType, "skill_development");
  assert.ok(mastery.usedAgents.includes("mastery_tracker_agent"));
});
