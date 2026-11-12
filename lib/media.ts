import fs from "fs";
import path from "path";

const extensions = new Set([".png", ".jpg", ".jpeg", ".webp", ".svg"]);

export function publicImages(folder: string) {
  const dir = path.join(process.cwd(), "public", folder);
  return fs
    .readdirSync(dir)
    .filter((name) => extensions.has(path.extname(name).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, "pt", { numeric: true }))
    .map((name) => ({
      name,
      src: `/${folder}/${encodeURIComponent(name)}`
    }));
}

export function logoAlt(name: string) {
  const base = name.replace(/\.[^.]+$/, "");
  const cleaned = base
    .replace(/logo/gi, " ")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return cleaned || "Cliente";
}
