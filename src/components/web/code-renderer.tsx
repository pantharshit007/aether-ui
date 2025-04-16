import { codeToHtml } from "@/lib/shiki";
import type { BundledLanguage } from "shiki/bundle/web";
// import { highlight } from "sugar-high";

type CodeRenderer = {
  code: string;
  lang: BundledLanguage;
};

export default async function CodeRenderer({ code, lang }: CodeRenderer) {
  const normalizedCode = code.replace(/\r\n/g, "\n").trim();
  // const html1 = highlight(normalizedCode);
  const { html, dispose } = await codeToHtml({
    code: normalizedCode.trim(),
    lang: lang,
    theme: "tokyo-night",
  });

  const env = process.env.NODE_ENV;
  if (env === "development") {
    setTimeout(() => {
      dispose();
    }, 1000 * 10);
  }

  return (
    <pre className="text-zinc-100">
      <code dangerouslySetInnerHTML={{ __html: html }} lang={lang} />
    </pre>
  );
}
