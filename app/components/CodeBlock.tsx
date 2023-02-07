import styles from "node_modules/react-syntax-highlighter/dist/cjs/styles/hljs/stackoverflow-dark.js";
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { FaCopy } from "react-icons/fa";
import SyntaxHighlighter from "react-syntax-highlighter";

interface CodeBlockProps {
  filePath?: string;
  language?: string;
  showLineNumbers?: boolean;
  snippet: string;
}

const CodeBlock = ({
  filePath,
  language = "javascript",
  showLineNumbers,
  snippet,
}: CodeBlockProps) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  }, [isCopied]);

  const handleCopy = () => {
    setIsCopied(true);
  };

  return (
    <div className="relative">
      {filePath ? (
        <div className="mb-2 text-right font-mono text-xs text-neutral-400">
          {filePath}
        </div>
      ) : null}
      {isCopied ? (
        <span
          className={`absolute right-1 px-2 py-1 text-xs uppercase text-neutral-400 ${
            filePath ? "top-7" : "top-2"
          }`}
        >
          Copied!
        </span>
      ) : (
        <CopyToClipboard text={snippet} onCopy={handleCopy}>
          <span
            className={`group absolute right-1 cursor-pointer rounded p-2 hover:bg-neutral-500 ${
              filePath ? "top-7" : "top-1"
            }`}
          >
            <FaCopy
              type="button"
              className={`fill-neutral-400 group-hover:fill-neutral-800`}
              onClick={handleCopy}
            />
          </span>
        </CopyToClipboard>
      )}
      <SyntaxHighlighter
        language={language}
        showLineNumbers={showLineNumbers}
        style={styles}
      >
        {snippet}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
