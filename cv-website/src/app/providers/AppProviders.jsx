import { StoreProvider } from './store-provider';
import { ThemeProvider } from './theme-provider';

export const AppProviders = ({ children }) => {
  return (
    <StoreProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </StoreProvider>
  );
};
