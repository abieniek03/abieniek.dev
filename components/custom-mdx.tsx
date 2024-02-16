/* eslint-disable jsx-a11y/alt-text */

import Image, { ImageProps } from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import PostSectionTitle from "./blog/PostSectionTitle";

const components = {
  h2: (props: any) => (
    <PostSectionTitle {...props} className="large-text text-primary">
      {props.children}
    </PostSectionTitle>
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
    <div className="my-4 lg:my-8">
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
