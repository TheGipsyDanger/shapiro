import * as React from 'react';
import { ThemeProvider } from '~/hooks/Theme';
import { EventProvider, DateProvider, AlertProvider } from '~/hooks';

export const GlobalProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider>
      <AlertProvider>
        <DateProvider>
          <EventProvider>{children}</EventProvider>
        </DateProvider>
      </AlertProvider>
    </ThemeProvider>
  );
};
