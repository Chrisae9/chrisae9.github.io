import React from "react";
import ReactMarkdown from "react-markdown";
import Markdown from "./chisbot.md";

export default function Chisbot() {
  async function getMarkdown() {
    await fetch(Markdown)
      .then((response) => response.text())
      .then((text) => text);
  }
  const markdown = `test`;

  console.log(markdown);
  return (
    <div>
      <ReactMarkdown source={markdown} />
    </div>
  );
}
