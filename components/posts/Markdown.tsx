import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { usePostInfo } from "./hooks/usePostInfo";
import { useTheme } from "styled-components";

const Markdown = () => {
  const { current } = usePostInfo();
  const { name } = useTheme();
  return (
    <ReactMarkdown
      className={
        name === "light" ? "markdown-body light" : "markdown-body dark"
      }
      children={current.content}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw, rehypeSlug]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, "")}
              style={vscDarkPlus}
              language={match[1]}
              PreTag="div"
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
        h1({ children }) {
          const id = String(children[0]).replaceAll(" ", "-").toLowerCase();
          return <h1 id={id}>{children}</h1>;
        },
        h2({ children }) {
          const id = String(children[0]).replaceAll(" ", "-").toLowerCase();
          return <h2 id={id}>{children}</h2>;
        },
        h3({ children }) {
          const id = String(children[0]).replaceAll(" ", "-").toLowerCase();
          return <h3 id={id}>{children}</h3>;
        },
      }}
    />
  );
};

export default Markdown;
