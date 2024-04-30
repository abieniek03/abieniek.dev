/* eslint-disable jsx-a11y/alt-text */

import Image, { ImageProps } from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const components = {
  h2: (props: any) => (
    <h2 className="mb-2 mt-8 text-lg font-bold lg:text-xl" {...props}>
      {props.children}
    </h2>
  ),
  h3: (props: any) => (
    <h3 className="mb-1 mt-4 font-bold" {...props}>
      {props.children}
    </h3>
  ),
  h4: (props: any) => (
    <h3 className="mb-1 font-bold" {...props}>
      {props.children}
    </h3>
  ),
  img: (props: any) => (
    <Image
      width={750}
      height={750}
      {...(props as ImageProps)}
      className="mx-auto my-8 w-full max-w-3xl rounded-md"
    />
  ),
  p: (props: any) => <p className="mb-4">{props.children}</p>,
  code: (props: any) => (
    <div className="mb-4 mt-2 text-xs">
      <SyntaxHighlighter
        language="tsx"
        style={materialDark}
        customStyle={{
          borderRadius: 5,
          paddingLeft: 0,
        }}
      >
        {props.children}
      </SyntaxHighlighter>
    </div>
  ),
};

export function CustomMDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
