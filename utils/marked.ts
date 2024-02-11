import { marked } from "marked";

const renderer = new marked.Renderer();
renderer.strong = (text) => {
  return `<strong style="font-weight: 600;">${text}</strong>`;
};

export const convertToHTML = (text: string) => {
  return { __html: marked(text, { renderer }) };
};
