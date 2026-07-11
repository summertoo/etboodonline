(function () {
  "use strict";

  var script = document.currentScript;
  var projectId = script && script.getAttribute("data-project-id");
  if (!projectId || window.parent === window) return;

  var startedAt = Date.now();
  var engaged = false;
  var completed = false;

  function send(eventName, extra) {
    window.parent.postMessage(
      Object.assign(
        {
          source: "zdtech-game",
          event: eventName,
          projectId: projectId,
        },
        extra || {},
      ),
      window.location.origin,
    );
  }

  function markEngaged() {
    if (engaged) return;
    engaged = true;
    send("game_engaged");
  }

  function isVisible(element) {
    if (!element) return false;
    var style = window.getComputedStyle(element);
    var rect = element.getBoundingClientRect();
    return (
      style.display !== "none" &&
      style.visibility !== "hidden" &&
      Number(style.opacity || "1") > 0 &&
      rect.width > 0 &&
      rect.height > 0
    );
  }

  function detectCompletion() {
    if (completed) return;
    var candidates = document.querySelectorAll(
      '[id*="game-over" i], [id*="gameover" i], [id*="victory" i], [id*="end-screen" i], [class*="game-over" i], [class*="victory" i], [class*="end-screen" i]',
    );
    for (var i = 0; i < candidates.length; i += 1) {
      var candidate = candidates[i];
      var text = (candidate.textContent || "").replace(/\s+/g, " ").trim();
      if (
        isVisible(candidate) &&
        /game over|victory|you win|final score|游戏结束|胜利|通关|最终得分/i.test(
          text,
        )
      ) {
        completed = true;
        send("game_complete", {
          outcome: /victory|you win|胜利|通关/i.test(text)
            ? "completed"
            : "ended",
        });
        break;
      }
    }
  }

  window.addEventListener("pointerdown", markEngaged, { once: true });
  window.addEventListener("keydown", markEngaged, { once: true });
  window.addEventListener("pagehide", function () {
    send("game_session_end", {
      engagement_time_msec: Math.max(0, Date.now() - startedAt),
    });
  });

  window.addEventListener("DOMContentLoaded", function () {
    send("game_loaded");
    detectCompletion();
    new MutationObserver(detectCompletion).observe(document.body, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ["class", "style", "hidden"],
    });
  });
})();
