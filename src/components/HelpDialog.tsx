"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useLang } from "./LangProvider";

const helpContent: Record<
  string,
  {
    en: { title: string; steps: string[] };
    zh: { title: string; steps: string[] };
  }
> = {
  "dapp-charactertool": {
    en: {
      title: "Character Builder - Quick Guide",
      steps: [
        'Click "Start" on the cover page to enter the editor',
        "Use the left panel to create, rename, or delete characters",
        "Fill in character details across section cards: basic info, zodiac, appearance, personality, background story, and relationships",
        "Use AI tools in the toolbar: random name generation, AI character creation, text polishing, and portrait prompt generation",
        "Configure your API key and model in Settings (⚙) to enable AI features",
        "Export/Import character data as JSON files for backup or transfer",
        "Characters auto-save — undo history is preserved during editing",
      ],
    },
    zh: {
      title: "角色设定工具 - 使用说明",
      steps: [
        "点击封面「开始使用」按钮进入编辑器",
        "使用左侧面板创建、重命名或删除角色",
        "在分节卡片中填写角色资料：基本信息、星座、外貌、性格、背景故事、人际关系",
        "使用工具栏的 AI 功能：随机取名、智能生成、文本润色、生成立绘提示词",
        "在设置（⚙）中配置 API Key 和模型以启用 AI 能力",
        "支持导出/导入 JSON 格式的角色数据，方便备份和迁移",
        "自动保存编辑内容，支持撤销历史",
      ],
    },
  },
};

export function HelpDialog({ projectId }: { projectId: string }) {
  const [open, setOpen] = useState(false);
  const { t, lang } = useLang();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const content = helpContent[projectId];
  if (!content) return null;

  const { title, steps } = lang === "zh" ? content.zh : content.en;

  return (
    <>
      <button onClick={() => setOpen(true)} className="cyber-button-small">
        {t("dapps.help")}
      </button>
      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-4"
            onClick={() => setOpen(false)}
          >
            <div
              className="bg-white rounded-xl p-6 w-full max-w-lg mx-4 shadow-2xl max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-lg font-bold mb-4">{title}</h3>
              <ol className="space-y-2 mb-6">
                {steps.map((step, i) => (
                  <li
                    key={i}
                    className="text-sm text-gray-700 leading-relaxed flex gap-2"
                  >
                    <span className="text-[var(--cyber-primary)] font-bold flex-shrink-0">
                      {i + 1}.
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <button
                onClick={() => setOpen(false)}
                className="w-full py-2.5 rounded-lg text-sm font-medium text-white bg-[var(--cyber-primary)] hover:opacity-90 transition-all"
              >
                {lang === "zh" ? "知道了" : "Got it"}
              </button>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
