import { describe, expect, it } from "vitest";
import { shareHref } from "@/lib/share";

describe("share links", () => {
  it("encodes spaces and symbols into each share url", () => {
    expect(shareHref("x", "hello ★")).toBe(
      "https://x.com/intent/post?text=hello%20%E2%98%85",
    );
    expect(shareHref("threads", "a&b")).toBe(
      "https://www.threads.com/intent/post?text=a%26b",
    );
    expect(shareHref("bluesky", "a&b")).toBe(
      "https://bsky.app/intent/compose?text=a%26b",
    );
    expect(shareHref("whatsapp", "a&b")).toBe("https://wa.me/?text=a%26b");
    expect(shareHref("telegram", "hello ★")).toBe(
      "https://t.me/share/url?text=hello%20%E2%98%85",
    );
  });
});
