import { render, RenderResult } from '@testing-library/react';
import { ReactElement } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

// import { defaultQueryClientOptions } from '../react-query/queryClient';

const generateQueryClient = () => {
  return new QueryClient();
};

export const renderWithQueryClient = (
  ui: ReactElement,
  client?: QueryClient,
): RenderResult => {
  const queryClient = client ?? generateQueryClient();

  return render(
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>,
  );
};

// from https://tkdodo.eu/blog/testing-react-query#for-custom-hooks
// export const createQueryClientWrapper = () => {
//   const queryClient = generateQueryClient();
//   return ({ children }) => (
//     <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
//   );
// };
