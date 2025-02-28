import { useState } from "react";
import { CopyIcon } from "@/assets/icons/CopyIcon";
import { CheckIcon } from "@/assets/icons/CheckIcon";
import styles from "./CopyButton.module.css";

interface CopyButtonProps {
  textToCopy: string;
}

export function CopyButton({ textToCopy }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={styles.copyButton}
      aria-label="Copy to clipboard">
      {copied ? (
        <span className={styles.copiedContainer}>
          <CheckIcon /> <span className={styles.copiedText}>Copied!</span>
        </span>
      ) : (
        <CopyIcon />
      )}
    </button>
  );
}
