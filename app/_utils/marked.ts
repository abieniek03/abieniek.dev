import { marked } from "marked";

const renderer = new marked.Renderer();
renderer.strong = (text: string) => {
  return `<strong style="font-weight: 600;">${text}</strong>`;
};

renderer.paragraph = (text: string) => {
  return `<p style="margin-bottom: 1rem;">${text}</p>`;
};

export const convertToHTML = (text: string) => {
  return { __html: marked(text, { renderer }) };
};
