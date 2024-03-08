/* eslint-disable jsx-a11y/alt-text */

import Image, { ImageProps } from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import PostSectionTitle from "./blog/PostSectionTitle";

const components = {
  h2: (props: any) => (
    <PostSectionTitle {...props}>{props.children}</PostSectionTitle>
  ),
  h3: (props: any) => (
    <h3 {...props} className="mb-2 mt-8 text-2xl font-semibold first:mt-0">
      {props.children}
    </h3>
  ),
  img: (props: any) => (
    <Image
      width={500}
      height={500}
      {...(props as ImageProps)}
      className="mx-auto my-8 w-full max-w-3xl rounded-md"
    />
  ),
  p: (props: any) => <p className="mb-2">{props.children}</p>,
  code: (props: any) => (
    <div className="my-4 text-xs md:text-sm lg:my-8">
      <SyntaxHighlighter
        language="tsx"
        style={materialDark}
        customStyle={{
          borderRadius: 5,
        }}
      >
        {props.children}
      </SyntaxHighlighter>
    </div>
  ),
};

export default function CustomMDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
