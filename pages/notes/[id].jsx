import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Layout } from "../../components/layout";
import remarkMath from "remark-math";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import "katex/dist/katex.min.css";
import { qtcreatorDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default () => {
  const router = useRouter();
  const { id } = router.query;
  const allNotes = useSelector((state) => state.notes.notes);
  const [note, _setNote] = useState(allNotes.find((n) => n.id == id));
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    (async () => {
      const content = await window.electronAPI.getContent(note.path);
      setMarkdown(content);
    })();
  }, []);

  return (
    <Layout>
      {note ? (
        <>
          <div className="text-center font-bold text-2xl capitalize">
            {note.name}
          </div>
          <div className="text-sm text-center border-b border-gray-500 mb-2 pb-2">
            <p>{note.description}</p>
            <p>
              {note.date} by {note.user}
            </p>
          </div>
          <div className="container mx-auto markdown-body">
            <ReactMarkdown
              children={markdown}
              remarkPlugins={[
                remarkMath,
                remarkGfm,
                [remarkFrontmatter, ["yaml", "toml"]],
              ]}
              rehypePlugins={[rehypeKatex]}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <SyntaxHighlighter
                      children={String(children).replace(/\n$/, "")}
                      style={qtcreatorDark}
                      language={match[1]}
                      PreTag="div"
                      showLineNumbers={true}
                      {...props}
                    />
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            />
          </div>
        </>
      ) : (
        <div className="text-white">Loading...</div>
      )}
    </Layout>
  );
};
