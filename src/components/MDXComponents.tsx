import {
  Alert,
  Box,
  chakra,
  Link,
  HTMLChakraProps,
  Kbd,
  useColorModeValue,
  useColorMode,
  Heading,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import NextImage from "next/image";
import slugify from "slugify";
import Highlight, { defaultProps } from "prism-react-renderer";
import darkTheme from "prism-react-renderer/themes/nightOwl";
import lightTheme from "prism-react-renderer/themes/nightOwlLight";

const ChakraHighlight = chakra(Highlight, {
  shouldForwardProp: (prop) =>
    ["Prism", "theme", "code", "language", "children"].includes(prop),
});

const Pre = (props: any) => (
  <chakra.div my="2em" borderRadius="sm" {...props} />
);

const CodeHighlight = (props: any) => {
  const { children: codeString, className: language } = props;
  console.log(props);

  const planguage = language?.replace("language-", "") ?? "";
  const theme = useColorModeValue(lightTheme, darkTheme);
  const lineNumberColor = useColorModeValue("blackAlpha.500", "whiteAlpha.500");
  const preBackground = useColorModeValue("gray.50", "gray.900");
  const showLineNumbers = !["shell", "text"].includes(planguage);

  // inline code
  if (!planguage) return <chakra.span {...props} />;

  return (
    <ChakraHighlight
      {...defaultProps}
      code={codeString}
      language={planguage}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        tokens.pop();
        return (
          <div data-language={className}>
            <chakra.pre
              className={className}
              sx={{ ...style, backgroundColor: preBackground }}
              overflowX="auto"
              rounded="md"
              p={4}
              mx={-4}
              _before={{
                content: `"${planguage}"`,
                display: "inline-block",
                mr: "5px",
                fontSize: 12,
              }}
            >
              {tokens.map((line, i) => {
                const lineProps = getLineProps({ line, key: i });

                return (
                  // eslint-disable-next-line react/jsx-key
                  <chakra.div {...lineProps} display="table-row">
                    {showLineNumbers && (
                      <chakra.span
                        w={8}
                        textAlign="right"
                        userSelect="none"
                        color={lineNumberColor}
                        pr={3}
                      >
                        {i + 1}
                      </chakra.span>
                    )}
                    {line.map((token, key) => {
                      // eslint-disable-next-line react/jsx-key
                      return <chakra.span {...getTokenProps({ token, key })} />;
                    })}
                  </chakra.div>
                );
              })}
            </chakra.pre>
          </div>
        );
      }}
    </ChakraHighlight>
  );
};

// const LinkedHeading = (props: HTMLChakraProps<"h2">) => {
//   const slug = slugify(props.children as string, { lower: true });
//   return (
//     <Link href={`#${slug}`} role="group">
//       <Box
//         {...props}
//         d="inline"
//         color={useColorModeValue("gray.700", "white")}
//         fontFamily="heading"
//       >
//         {props.children}
//       </Box>
//       <chakra.span
//         aria-label="anchor"
//         color="purple.500"
//         userSelect="none"
//         fontWeight="normal"
//         outline="none"
//         _focus={{ opacity: 1, boxShadow: "outline" }}
//         opacity={0}
//         _groupHover={{ opacity: 1 }}
//         ml="0.375rem"
//       >
//         #
//       </chakra.span>
//     </Link>
//   );
// };

// const Image = (props: any) => {
//   return (
//     <NextImage {...props} layout="responsive" loading="lazy" quality={100} />
//   );
// };

// const Anchor = (props: any) => {
//   const { colorMode } = useColorMode();
//   return (
//     <chakra.a
//       color={mode("purple.500", "purple.300")({ colorMode })}
//       {...props}
//     />
//   );
// };

const MDXComponents = {
  h1: (props: any) => <Heading as="h1" size="3xl" my={4} {...props} />,
  h2: (props: any) => <Heading as="h2" size="2xl" my={2} {...props} />,
  h3: (props: any) => <Heading as="h3" size="xl" my={2} {...props} />,
  h4: (props: any) => <Heading as="h4" size="lg" my={2} {...props} />,
  code: CodeHighlight,
  pre: Pre,

  //   inlineCode: InlineCode,
  // hr: (props: any) => <chakra.hr apply="mdx.hr" {...props} />,
  //   inlineCode: InlineCode,
  //   code: CodeHighlight,
  //   strong: (props: any) => <Box as="strong" fontWeight="semibold" {...props} />,
  //   pre: Pre,
  //   kbd: Kbd,
  //   img: Image,
  //   br: ({ reset, ...props }: any) => (
  //     <Box
  //       as={reset ? "br" : undefined}
  //       h={reset ? undefined : "24px"}
  //       {...props}
  //     />
  //   ),
  //   table: Table,
  //   th: THead,
  //   td: TData,
  //   a: Anchor,
  //   p: (props: any) => <chakra.p apply="mdx.p" {...props} />,
  //   ul: (props: any) => (
  //     <chakra.ul px={{ base: 4, md: 0 }} apply="mdx.ul" {...props} />
  //   ),
  //   ol: (props: any) => <chakra.ol apply="mdx.ul" {...props} />,
  //   li: (props: any) => <chakra.li pb="4px" {...props} />,
  //   blockquote: (props: any) => (
  //     <Box>
  //       <Alert
  //         as="blockquote"
  //         role="none"
  //         rounded="4px"
  //         status="warning"
  //         variant="left-accent"
  //         {...props}
  //         w="unset"
  //         mx={-4}
  //       />
  //     </Box>
  //   ),
};

export default MDXComponents;
