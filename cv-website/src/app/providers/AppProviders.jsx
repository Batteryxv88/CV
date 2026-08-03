import { StoreProvider } from './store-provider/StoreProvider';
import { ThemeProvider } from './theme-provider/ThemeProvider';
import { LanguageProvider } from './language-provider/LanguageProvider';

export const AppProviders = ({ children }) => {
  return (
    <StoreProvider>
      <ThemeProvider>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </ThemeProvider>
    </StoreProvider>
  );
};
