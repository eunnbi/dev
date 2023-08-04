import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useTheme } from "@/hooks/useTheme";

const Markdown = ({ post }: { post: PostGetResponse["current"] }) => {
  const { isLightTheme } = useTheme();
  return (
    <ReactMarkdown
      className={isLightTheme ? "markdown-body light" : "markdown-body dark"}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw, rehypeSlug]}
      linkTarget={"_blank"}
      transformImageUri={src => `/images/posts/${post.id}/${src}`}
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
          return (
            <h1 id={id}>
              <a href={`#${id}`}>
                {children} <span className="octicon-link" />
              </a>
            </h1>
          );
        },
        h2({ children }) {
          const id = String(children[0]).replaceAll(" ", "-").toLowerCase();
          return (
            <h2 id={id}>
              <a href={`#${id}`}>
                {children} <span className="octicon-link" />
              </a>
            </h2>
          );
        },
        h3({ children }) {
          const id = String(children[0]).replaceAll(" ", "-").toLowerCase();
          return (
            <h3 id={id}>
              <a href={`#${id}`}>
                {children} <span className="octicon-link" />
              </a>
            </h3>
          );
        }
      }}
    >
      {post.content}
    </ReactMarkdown>
  );
};

export default Markdown;
