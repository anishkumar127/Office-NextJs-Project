import {
  FluentProvider,
  GriffelRenderer,
  RendererProvider,
  SSRProvider,
  createDOMRenderer,
  renderToStyleElements,
  webLightTheme,
} from "@fluentui/react-components";
import React from "react";
import { useServerInsertedHTML } from "next/navigation";

type AppProviderProps = React.PropsWithChildren<{
  renderer?: GriffelRenderer;
}>;
export function AppProvider({ children }: AppProviderProps) {
  const [renderer] = React.useState(() => createDOMRenderer());

  useServerInsertedHTML(() => {
    return <>{renderToStyleElements(renderer)}</>;
  });

  return (
    <RendererProvider renderer={renderer}>
      <SSRProvider>
        <FluentProvider theme={webLightTheme}>{children}</FluentProvider>
      </SSRProvider>
    </RendererProvider>
  );
}
