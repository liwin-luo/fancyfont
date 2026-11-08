// 从引擎生成示例字符串,保证文案中的花体字符与真实输出逐字一致。
// 运行:npx -y tsx scripts/dump-examples.ts

import { convertText, type TextStyleId } from "../src/lib/text-styles";
import { applyCjkStyle } from "../src/lib/cjk-styles";

const cases: [string, TextStyleId][] = [
  ["hello", "script"],
  ["hello", "boldScript"],
  ["Sunset", "script"],
  ["sunset", "script"],
  ["Coffee Lover", "script"],
  ["Vision", "bold"],
  ["Reading", "bold"],
  ["Bold2026", "bold"],
  ["SNIPER", "sansBold"],
  ["Sunday", "sansBold"],
  ["Monster", "fraktur"],
  ["hello", "fullwidth"],
  ["vaporwave", "fullwidth"],
  ["MILK TEA", "smallCaps"],
  ["ONGOING PROJECT", "smallCaps"],
  ["flip", "upsideDown"],
  ["flip text", "upsideDown"],
];

const cjkCases: [string, string][] = [
  ["清风", "gamer"],
  ["星辰", "gamerStack"],
  ["月色不平", "wing"],
  ["小奶油", "bow"],
  ["甜度超标", "heart"],
  ["山茶花开", "flower"],
  ["研究对象", "twinkle"],
  ["追风的人", "line"],
  ["月亮邮递员", "moon"],
  ["浪人", "meteor"],
  ["二次元观察员", "sparkle"],
  ["干饭人", "meteor"],
  ["独立思考", "diamond"],
  ["一人之下", "book"],
  ["日常收集", "twinkle"],
  ["晨读笔记", "diamond"],
  ["狂战士", "gamerStack"],
  ["夜刃", "sikh"],
  ["孤傲", "crown"],
  ["速通之王", "bolt"],
  ["第一深情", "fiveStack"],
  ["上分型选手", "fiveStack"],
  ["随风", "gamer"],
  ["天下第一", "crown"],
  ["风暴召集者", "bolt"],
  ["北辰", "wing"],
  ["旅行日记", "twinkle"],
  ["melody", "bow"],
  ["等风来", "book"],
  ["落日收藏家", "book"],
  ["潜水艇长", "twinkle"],
  ["一键三连", "book"],
  ["黑马", "gamerStack"],
];

console.log("--- latin ---");
for (const [text, id] of cases) {
  console.log(`${id} | ${text} | ${convertText(text, id)}`);
}
console.log("--- cjk ---");
for (const [text, id] of cjkCases) {
  console.log(`${id} | ${text} | ${applyCjkStyle(text, id)}`);
}
