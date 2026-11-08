import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

// 显式允许主流 AI 爬虫(它们会继承 *,但写明白更稳),
// 搜索引擎走默认规则,全站允许抓取。
const aiAgents = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-SearchBot",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
  "Amazonbot",
  "Bytespider",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: aiAgents, allow: "/" },
    ],
    sitemap: `${getSiteUrl()}/sitemap.xml`,
  };
}
