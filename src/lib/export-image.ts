// Renders styled text to a PNG via canvas and triggers a download.
// Glyphs are drawn with the system font stack, so the export shows the
// same look the user sees in the preview. Fully client-side.

export async function downloadTextPng(
  text: string,
  filename: string,
  options?: { transparent?: boolean },
): Promise<boolean> {
  if (typeof document === "undefined" || !text.trim()) return false;

  try {
    const scale = 2;
    const fontSize = 48;
    const padding = 48;
    const fontFamily =
      'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (!context) return false;

    context.font = `600 ${fontSize}px ${fontFamily}`;
    const metrics = context.measureText(text);
    const textWidth = Math.ceil(metrics.width);
    const textHeight = Math.ceil(fontSize * 1.4);

    canvas.width = (textWidth + padding * 2) * scale;
    canvas.height = (textHeight + padding * 2) * scale;
    context.scale(scale, scale);

    if (!options?.transparent) {
      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, canvas.width / scale, canvas.height / scale);
    }
    context.font = `600 ${fontSize}px ${fontFamily}`;
    context.fillStyle = "#181526";
    context.textBaseline = "middle";
    context.fillText(text, padding, canvas.height / scale / 2);

    const blob = await new Promise<Blob | null>((resolve) =>
      canvas.toBlob(resolve, "image/png"),
    );
    if (!blob) return false;

    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    return true;
  } catch {
    return false;
  }
}
