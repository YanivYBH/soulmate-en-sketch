import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
            rel="stylesheet" 
          />
      <script
            src="https://api.ybhltd.com/tiktok.js"
            rel="script"
            async
          />
          <script
            src="https://api.ybhltd.com/facebook.js"
            rel="script"
            async
          />
          <script
            src="https://api.ybhltd.com/hotjar.js"
            rel="script"
            async
          />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
