"use client";

// 导航下拉:<details> 语义 + 三种关闭路径(点外部、Esc、点面板内链接——
// SPA 路由不刷新,open 状态会残留到新页面)。点另一个下拉的 summary
// 属于「点外部」,天然互斥;name 属性再兜底一层。
// hover:桌面端(可悬停指针设备)改为移入展开、移出收起,点击/键盘行为不变;
// 移动端汉堡、语言切换器保持纯点击。

import { useEffect, useRef, type ReactNode } from "react";

const HOVER_OPEN_DELAY_MS = 100;
const HOVER_CLOSE_DELAY_MS = 150;

export function NavDropdown({
  name,
  summaryClassName,
  summary,
  summaryAriaLabel,
  panelClassName,
  hover = false,
  children,
}: {
  name: string;
  summaryClassName: string;
  summary: ReactNode;
  summaryAriaLabel?: string;
  panelClassName: string;
  /** 桌面端悬停展开(仅限支持 hover 的指针设备)。 */
  hover?: boolean;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDetailsElement>(null);
  const openedByHover = useRef(false);
  const openTimer = useRef<number | undefined>(undefined);
  const closeTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onPointerDown = (e: Event) => {
      if (!el.contains(e.target as Node)) {
        el.open = false;
        openedByHover.current = false;
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        el.open = false;
        openedByHover.current = false;
      }
    };
    document.addEventListener("pointerdown", onPointerDown, true);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown, true);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!hover) return;
    const el = ref.current;
    // 只在真正支持悬停的设备启用;触屏的合成 mouseenter 会导致点按开合错乱。
    if (!el || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const openNow = () => {
      if (!el.open) {
        // 悬停互斥:收起其他同组下拉(name 原生互斥不覆盖 JS 打开的所有浏览器)。
        document
          .querySelectorAll<HTMLDetailsElement>("details[name='site-nav'][open]")
          .forEach((d) => {
            if (d !== el) d.open = false;
          });
        el.open = true;
        openedByHover.current = true;
      }
    };
    const onEnter = () => {
      window.clearTimeout(closeTimer.current);
      window.clearTimeout(openTimer.current);
      openTimer.current = window.setTimeout(openNow, HOVER_OPEN_DELAY_MS);
    };
    const onLeave = () => {
      window.clearTimeout(openTimer.current);
      window.clearTimeout(closeTimer.current);
      closeTimer.current = window.setTimeout(() => {
        el.open = false;
        openedByHover.current = false;
      }, HOVER_CLOSE_DELAY_MS);
    };
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      window.clearTimeout(openTimer.current);
      window.clearTimeout(closeTimer.current);
    };
  }, [hover]);

  // 悬停已展开时,鼠标点击 summary 不再收起(键盘 Enter 的 detail 为 0,不受影响)。
  const onSummaryClick = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    if (!el.open) openedByHover.current = false;
    else if (openedByHover.current && e.detail > 0) e.preventDefault();
  };

  return (
    <details ref={ref} name={name} className="group relative">
      <summary className={summaryClassName} aria-label={summaryAriaLabel} onClick={onSummaryClick}>
        {summary}
      </summary>
      <div className={panelClassName} onClick={() => { if (ref.current) ref.current.open = false; }}>
        {children}
      </div>
    </details>
  );
}
