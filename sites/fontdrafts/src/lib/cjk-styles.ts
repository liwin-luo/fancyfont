// CJK 装饰引擎:围绕任意文本(含纯中文)贴装饰边框。
//
// Latin 变换引擎(text-styles.ts)对汉字没有对应字形——Unicode 里根本
// 不存在花体的"文"字。所以中文昵称的个性表达靠"环绕装饰":左右
// 装饰串 + 少数对任意字符生效的变换(间隔、数字美化)。
//
// 每个样式都是纯函数、确定性输出;装饰符号来自各种文字系统,老设备
// 可能缺字形,所以带显示风险的样式都标注 risk,UI 如实展示。

export interface CjkStyle {
  id: string;
  name: string;
  note: string;
  /** 场景标签,用于 UI 过滤:可爱 / 酷 / 电竞 / 古风 / 简约。 */
  tags: string[];
  risk?: string;
  transform: (text: string) => string;
}

export interface ConvertedCjkText {
  id: string;
  name: string;
  note: string;
  tags: string[];
  risk?: string;
  text: string;
}

function wrap(left: string, right: string) {
  return (text: string) => `${left}${text}${right}`;
}

/** 汉字/日文/韩文/全角形态检测——工具据此提示切到中文装饰样式。 */
export function hasCjk(text: string): boolean {
  return /[\u1100-\u11FF\u2E80-\u9FFF\u3040-\u30FF\uAC00-\uD7AF\uF900-\uFAFF\uFF00-\uFFEF]/.test(
    text,
  );
}

export const cjkStyles: CjkStyle[] = [
  {
    id: "book",
    name: "书名括号",
    note: "『文案』——所有设备都稳定显示的经典款。",
    tags: ["简约"],
    transform: wrap("『", "』"),
  },
  {
    id: "corner",
    name: "直角括号",
    note: "「文案」——干净克制,商务场合也适用。",
    tags: ["简约"],
    transform: wrap("「", "」"),
  },
  {
    id: "whiteBracket",
    name: "白括号",
    note: "〖文案〗——带底色的方括号,视觉更重。",
    tags: ["简约"],
    transform: wrap("〖", "〗"),
  },
  {
    id: "gamer",
    name: "电竞王座",
    note: "꧁文案꧂——游戏昵称的经典框。",
    tags: ["电竞", "酷"],
    risk: "爪哇文符号在老旧安卓机型上可能显示为方框。",
    transform: wrap("꧁", "꧂"),
  },
  {
    id: "gamerStack",
    name: "电竞双排",
    note: "꧁༺文案༻꧂——双层装饰,气场拉满。",
    tags: ["电竞", "酷"],
    risk: "爪哇文与藏文符号在老旧机型上可能显示为方框。",
    transform: wrap("꧁༺", "༻꧂"),
  },
  {
    id: "wing",
    name: "圣翼",
    note: "༺文案༻——单层翼形框,比双排低调。",
    tags: ["酷"],
    risk: "藏文符号在部分设备上显示为方框。",
    transform: wrap("༺", "༻"),
  },
  {
    id: "crown",
    name: "皇冠",
    note: "♛文案♚——棋子王冠,含蓄的王者感。",
    tags: ["电竞"],
    transform: wrap("♛", "♚"),
  },
  {
    id: "meteor",
    name: "流星",
    note: "★彡文案彡★——流星尾迹,动感十足。",
    tags: ["酷"],
    transform: wrap("★彡", "彡★"),
  },
  {
    id: "heart",
    name: "心心",
    note: "♡文案♡——细线爱心,甜而不腻。",
    tags: ["可爱"],
    transform: wrap("♡", "♡"),
  },
  {
    id: "loveHeart",
    name: "实心爱心",
    note: "ღ文案ღ——圆润的实心爱心。",
    tags: ["可爱"],
    transform: wrap("ღ", "ღ"),
  },
  {
    id: "flower",
    name: "小花",
    note: "✿文案✿——手绘小花,春日感。",
    tags: ["可爱"],
    transform: wrap("✿", "✿"),
  },
  {
    id: "sparkle",
    name: "星光",
    note: "✧文案✧——四角星光,闪但不吵。",
    tags: ["可爱"],
    transform: wrap("✧", "✧"),
  },
  {
    id: "twinkle",
    name: "微星",
    note: "⋆文案⋆——极简小星,若隐若现。",
    tags: ["简约"],
    transform: wrap("⋆", "⋆"),
  },
  {
    id: "bow",
    name: "蝴蝶结",
    note: "୨୧文案୨୧——缎带蝴蝶结,全网爆火的甜系款。",
    tags: ["可爱"],
    risk: "部分老设备上蝴蝶结符号显示为方框。",
    transform: wrap("୨୧", "୨୧"),
  },
  {
    id: "music",
    name: "音符",
    note: "♪文案♪——音乐爱好者专属。",
    tags: ["可爱"],
    transform: wrap("♪", "♪"),
  },
  {
    id: "bolt",
    name: "闪电",
    note: "⚡文案⚡——速度与力量感。",
    tags: ["电竞", "酷"],
    risk: "emoji 在部分平台昵称栏不允许使用。",
    transform: wrap("⚡", "⚡"),
  },
  {
    id: "sikh",
    name: "双刃",
    note: "☬文案☬——锋利的双刃标志。",
    tags: ["酷"],
    risk: "部分设备显示为方框。",
    transform: wrap("☬", "☬"),
  },
  {
    id: "fleur",
    name: "鸢尾",
    note: "⚜文案⚜——复古纹章感。",
    tags: ["古风"],
    risk: "在部分设备上会渲染成彩色 emoji。",
    transform: wrap("⚜", "⚜"),
  },
  {
    id: "wave",
    name: "波浪",
    note: "﹏文案﹏——QQ 时代的经典波浪线。",
    tags: ["古风"],
    transform: wrap("﹏", "﹏"),
  },
  {
    id: "line",
    name: "直线",
    note: "━文案━——粗直线,稳重大气。",
    tags: ["简约"],
    transform: wrap("━", "━"),
  },
  {
    id: "stardust",
    name: "星尘",
    note: "⊹文案⊹——细小的十字星尘。",
    tags: ["简约"],
    transform: wrap("⊹", "⊹"),
  },
  {
    id: "five",
    name: "五数框",
    note: "꧔文案꧕——爪哇文数字 5 做框,冷门但好看。",
    tags: ["电竞"],
    risk: "老旧机型可能显示为方框。",
    transform: wrap("꧔", "꧕"),
  },
  {
    id: "fiveStack",
    name: "五数双框",
    note: "꧔꧇文案꧇꧕——双层数字框。",
    tags: ["电竞"],
    risk: "老旧机型可能显示为方框。",
    transform: wrap("꧔꧇", "꧇꧕"),
  },
  {
    id: "moon",
    name: "月亮",
    note: "☽文案☾——一弯新月和它的倒影。",
    tags: ["古风"],
    transform: wrap("☽", "☾"),
  },
  {
    id: "diamond",
    name: "菱形",
    note: "❖文案❖——对称菱形,利落。",
    tags: ["简约"],
    transform: wrap("❖", "❖"),
  },
  {
    id: "spaced",
    name: "空格间隔",
    note: "文 案——每个字之间加全角空格,直角括号内尤其好看。",
    tags: ["简约"],
    transform: (text) => Array.from(text).join("\u3000"),
  },
  {
    id: "boldDigits",
    name: "数字美化",
    note: "只把 0–9 换成粗体数字字形,汉字原样保留。",
    tags: ["简约"],
    transform: (text) => {
      let out = "";
      for (const ch of text) {
        const cp = ch.codePointAt(0)!;
        out += cp >= 48 && cp <= 57 ? String.fromCodePoint(0x1d7ce + cp - 48) : ch;
      }
      return out;
    },
  },
];

export function getCjkStyle(id: string): CjkStyle {
  const style = cjkStyles.find((s) => s.id === id);
  if (!style) throw new Error(`Unknown CJK style: ${id}`);
  return style;
}

export function applyCjkStyle(text: string, id: string): string {
  return getCjkStyle(id).transform(text);
}

export function convertCjkAll(text: string): ConvertedCjkText[] {
  return cjkStyles.map((style) => ({
    id: style.id,
    name: style.name,
    note: style.note,
    tags: style.tags,
    risk: style.risk,
    text: style.transform(text),
  }));
}
