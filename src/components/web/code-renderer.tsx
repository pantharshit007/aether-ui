import { highlight } from "sugar-high";

type CodeRenderer = {
  code: string;
  lang: string;
};

export default async function CodeRenderer({ code, lang }: CodeRenderer) {
  const normalizedCode = code.replace(/\r\n/g, "\n").trim();
  const html = highlight(normalizedCode);

  return (
    <pre className="text-zinc-100">
      <code dangerouslySetInnerHTML={{ __html: html }} lang={lang} />
    </pre>
  );
}
