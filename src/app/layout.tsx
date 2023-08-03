"use client";
import {
  createDOMRenderer,
  renderToStyleElements,
} from "@fluentui/react-components";
import React from "react";
import dynamic from "next/dynamic";
const AppProvider = dynamic(
  () => import("./AppProvider").then((mod) => mod.AppProvider),
  { ssr: false }
);
export default function Root({ children }: React.PropsWithChildren) {
  const renderer = React.useMemo(() => createDOMRenderer(), []);
  const styles = React.useMemo(
    () => renderToStyleElements(renderer),
    [renderer]
  );

  return (
    <html>
      <head>{styles}</head>
      <body>
        <AppProvider renderer={renderer}>{children}</AppProvider>
      </body>
    </html>
  );
}
