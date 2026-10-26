// Simplified Chinese copy for the platform preset pages.

import type { PlatformPageCopy } from "./platform-pages-en";

export const platformPagesZhCn: Record<string, PlatformPageCopy> = {
  "instagram-fonts": {
    navName: "Instagram",
    h1: "Instagram 字体生成器",
    title: "Instagram 字体生成器 – 简介与昵称的花体字",
    description:
      "给 Instagram 简介和昵称用的 Unicode 花体字——预览每种样式的效果，一键复制。",
    intro:
      "Instagram 没有字体选择器——但 Unicode 文字可以用在昵称和简介里。在下方挑一个样式，复制后直接粘贴进你的资料。",
    defaultText: "Instagram",
    presets: [
      { label: "柔和名字框", left: "✦ ", right: " ✦", transform: "script" },
      { label: "Aesthetic 间距", left: "", right: "", transform: "fullwidth" },
      { label: "可爱蝴蝶结", left: "୨୧ ", right: " ୨୧", transform: "smallCaps" },
      { label: "粗体开场", left: "「 ", right: " 」", transform: "sansBold" },
    ],
    guidance: [
      {
        label: "昵称（显示名）",
        body: "约 30 个字符。带样式的文字在这里可用，也是字体最出效果的位置——它会出现在评论区和你粉丝的信息流里。",
      },
      {
        label: "简介",
        body: "约 150 个字符。字体、符号和装饰组合都能用，换行也会保留——放花体名字或点缀行的最佳位置。",
      },
      {
        label: "用户名",
        body: "只允许英文字母、数字、点和下划线。这里不能用任何 Unicode 字体——用户名保持朴素，把样式放在昵称里。",
      },
    ],
    compatNote:
      "这些是 Unicode 字符，不是 Instagram 的功能——Instagram 随时可能改变它们的显示方式。目前样式在简介和昵称里表现稳定，但请先粘贴到自己的账号里确认。",
    faq: [
      {
        q: "怎么把这些字体放进 Instagram 简介？",
        a: "在上方转换文字并复制。打开 Instagram → 编辑资料，粘贴到简介或姓名字段，保存。建议在 App 和网页版各确认一次效果。",
      },
      {
        q: "在简介里用字体会被封号吗？",
        a: "在名字或简介里使用带样式的文字属于正常资料内容，并不是已知的违规行为。别用在用户名上，遵守 Instagram 的规则即可——无数用户都是这么用的。",
      },
      {
        q: "为什么有些粉丝看到的是方块？",
        a: "对方的设备或 Instagram 版本缺少对应字形。坚持使用花体、小型大写、粗体这类流行样式可以把风险降到最低。",
      },
    ],
  },
  "tiktok-fonts": {
    navName: "TikTok",
    h1: "TikTok 字体生成器",
    title: "TikTok 字体生成器 – 昵称与简介的花体字",
    description:
      "给 TikTok 昵称和简介用的 Unicode 花体字——预览、复制，几秒粘贴进你的资料。",
    intro:
      "TikTok 自带的文字选项只到视频编辑器为止。你的昵称和简介接受 Unicode——在下方挑一个样式，粘贴进你的资料。",
    defaultText: "TikTok",
    presets: [
      { label: "Clan 框架", left: "꧁༒ ", right: " ༒꧂", transform: "boldScript" },
      { label: "星光点缀", left: "⋆｡˚ ", right: " ˚｡⋆", transform: "smallCaps" },
      { label: "全角 vibe", left: "", right: "", transform: "fullwidth" },
      { label: "爱心框", left: "♡ ", right: " ♡", transform: "script" },
    ],
    guidance: [
      {
        label: "昵称",
        body: "约 24 个字符，是资料里最显眼的带样式文字——每个视频都会显示。带样式的字符在这里可用。",
      },
      {
        label: "简介",
        body: "约 80 个字符——很短。一行花体名字加一个紧凑的点缀组合通常刚好；全角文字很吃字符额度。",
      },
      {
        label: "用户名",
        body: "只允许英文字母、数字、点和下划线。用户名永远不接受花体字——把样式用在昵称上。",
      },
    ],
    compatNote:
      "这些是 Unicode 字符，不是 TikTok 的功能，显示方式由 TikTok 控制。目前昵称和简介都支持带样式的文字——请先在自己的账号上测试，平台规则也可能变化。",
    faq: [
      {
        q: "怎么把 TikTok 昵称换成花体字？",
        a: "复制上方转换好的名字，打开 TikTok → 个人主页 → 编辑资料 → 名字，粘贴并保存。你的昵称会在所有视频展示的地方同步更新。",
      },
      {
        q: "字体在 TikTok 评论区和大字 Buzz 文案里能用吗？",
        a: "可以——评论和文案接受 Unicode 字符。带样式的文字在昵称里效果最好，因为每个视频都会展示。",
      },
      {
        q: "为什么我的花体简介少了一部分？",
        a: "简介的字符上限很短，部分平台还会裁剪不常见的字符。换一个更简单的样式，或缩短周围的文字。",
      },
    ],
  },
  "discord-fonts": {
    navName: "Discord",
    h1: "Discord 字体生成器",
    title: "Discord 字体生成器 – 昵称与状态的花体字",
    description:
      "给 Discord 昵称和状态用的 Unicode 花体字——并如实说明 Discord 真正的 markdown 格式适用于哪里。",
    intro:
      "Discord 的昵称和自定义状态没有格式按钮——Unicode 正好补上这个空缺。挑一个样式，复制，粘贴进你的资料。",
    defaultText: "Discord",
    presets: [
      { label: "服务器标签", left: "『", right: "』", transform: "monospace" },
      { label: "管理模式", left: "† ", right: " †", transform: "fraktur" },
      { label: "低调炫耀", left: "", right: "", transform: "smallCaps" },
      { label: "状态点缀", left: "✦ ", right: "", transform: "bold" },
    ],
    guidance: [
      {
        label: "昵称 / 显示名",
        body: "约 32 个字符，按服务器单独计算。带样式的 Unicode 在这里可用——正是字体最出彩的地方，配合『标签』这类服务器前缀尤其好看。",
      },
      {
        label: "自定义状态",
        body: "约 128 个字符。带样式的文字和符号都能用；保持简短，方便在成员列表里阅读。",
      },
      {
        label: "用户名",
        body: "英文字母、数字、点和下划线，全小写。不接受任何花体字——Discord 在这里很严格。",
      },
      {
        label: "消息",
        body: "Discord 消息支持真正的 markdown：**粗体**、*斜体*、__下划线__ 和 ~~删除线~~。聊天里优先用 markdown——Unicode 样式留给 markdown 够不着的资料位置。",
      },
    ],
    compatNote:
      "这些是 Unicode 字符，不是 Discord 的功能。服务器管理员也可能随时修改昵称权限。目前样式在昵称和状态里可用——请先粘贴到你的服务器里确认。",
    faq: [
      {
        q: "怎么把 Discord 昵称换成花体字？",
        a: "复制上方带样式的文字，右键服务器图标 → 编辑服务器资料（或你的用户资料），粘贴到昵称字段并保存。修改全服务器昵称需要相应权限。",
      },
      {
        q: "Discord 有 markdown，为什么还要用 Unicode 字体？",
        a: "markdown 只能格式化消息。你的昵称、自定义状态和“关于我”没有任何格式选项——Unicode 样式是这些字段唯一能拥有的粗体或花体。",
      },
      {
        q: "为什么我的花体昵称在某些服务器被改回去了？",
        a: "服务器管理员和机器人可以重置或管理昵称。如果只在某一个服务器被改回去，原因是那个服务器的规则——不是字符本身。",
      },
    ],
  },
  "roblox-name-generator": {
    navName: "Roblox",
    h1: "Roblox 名字生成器",
    title: "Roblox 名字生成器 – 显示名创意与真实规则",
    description:
      "用符号和样式生成带装饰的 Roblox 显示名创意——并讲清楚用户名与显示名的规则区别。",
    intro:
      "用符号和样式装饰你的 Roblox 名字——同时弄清楚每种名字各用在哪里，因为 Roblox 对用户名和显示名的界线划得很死。",
    defaultText: "ShadowHero",
    presets: [
      { label: "竞技框", left: "꧁ ", right: " ꧂", transform: "bold" },
      { label: "Pro 标签", left: "✪ ", right: "", transform: "smallCaps" },
      { label: "星星环绕", left: "★ ", right: " ★", transform: "identity" },
      { label: "括号款", left: "『", right: "』", transform: "bold" },
    ],
    guidance: [
      {
        label: "用户名",
        body: "你的登录标识：3–20 个字符，英文字母、数字和一个下划线。执行非常严格——永远不允许符号、空格或带样式的字符。",
      },
      {
        label: "显示名",
        body: "其他玩家看到的名字，可在设置中修改。比用户名灵活，但同样经过过滤——带装饰的样式可能被拒绝或被更改。花一次改名机会之前先测试。",
      },
      {
        label: "样式适合哪里",
        body: "保持基础名字朴素，添加可以随时去掉的装饰：如果某游戏或更新拒绝符号，你仍然有一个干净的名字打底。",
      },
    ],
    compatNote:
      "Roblox 对名字执行自己的字符过滤，并会随时间更新。这里没有任何内容保证装饰名会被接受——先生成、复制，再在 Roblox 自己的改名界面里试，之后再决定。",
    faq: [
      {
        q: "Roblox 用户名可以带符号或花体字吗？",
        a: "不可以。用户名被限制为英文字母、数字和一个下划线。装饰样式只可能用在显示名上——即便如此，也要过 Roblox 的过滤系统。",
      },
      {
        q: "为什么我的显示名被改了？",
        a: "Roblox 会对显示名跑自动过滤，符号多的装饰名是被拦截的常客。更朴素的组合，或基础名只加一个符号，存活率高得多。",
      },
      {
        q: "这个生成器和 Roblox 有关系吗？",
        a: "没有——FancyFont 是独立工具。Roblox 及相关商标归 Roblox Corporation 所有；本页面只是在他们的规则内帮你挑名字。",
      },
    ],
  },
};
