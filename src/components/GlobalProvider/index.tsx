import * as React from 'react';
import { ThemeProvider } from '~/hooks/Theme';
import {
  EventProvider,
  DateProvider,
  AlertProvider,
  ModalProvider,
} from '~/hooks';

export const GlobalProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider>
      <ModalProvider>
        <AlertProvider>
          <DateProvider>
            <EventProvider>{children}</EventProvider>
          </DateProvider>
        </AlertProvider>
      </ModalProvider>
    </ThemeProvider>
  );
};
