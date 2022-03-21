import { Html, Head, Main, NextScript } from "next/document";

const themeScript = `
  if (localStorage.theme === '"dark"' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
`;

export default function Document() {
  return (
    <Html>
      <Head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </Head>
      <body className="bg-tertiary dark:bg-primary dark:text-tertiary text-primary text-base">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
