"use client";

import { QueryClient, QueryClientProvider } from "react-query";

import QueryProvider from "../QueryProvider";
import { useMemo } from "react";
import QueryConsumer from "../QueryConsumer";

function MainContent({ children }: { children: React.ReactNode }) {
  const queryClient = useMemo(() => new QueryClient(), []);

  return (
    <QueryClientProvider client={queryClient}>
      <QueryProvider>
        <QueryConsumer>{children}</QueryConsumer>
      </QueryProvider>
    </QueryClientProvider>
  );
}

export default MainContent;
