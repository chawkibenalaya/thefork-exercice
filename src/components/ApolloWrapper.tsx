// components/ApolloWrapper.tsx
'use client';

import { ReactNode } from 'react';
import { ApolloProvider } from '@apollo/client';
import { createApolloClient } from '@/lib/apolloClient';

const client = createApolloClient();

export function ApolloWrapper({ children }: { children: ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
