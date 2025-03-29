import { highlight } from "sugar-high";

type CodeRenderer = {
  code: string;
  lang: string;
};

export default async function CodeRenderer({ code, lang }: CodeRenderer) {
  const html = highlight(code);

  return (
    <pre className="text-zinc-100">
      <code dangerouslySetInnerHTML={{ __html: html }} lang={lang} />
    </pre>
  );
}
