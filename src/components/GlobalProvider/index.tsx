import * as React from 'react';
import { ThemeProvider } from '~/hooks/Theme';

import {
  EventProvider,
  DateProvider,
  AlertProvider,
  ModalProvider,
  CreateEventProvider,
} from '~/hooks';

export const GlobalProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider>
      <CreateEventProvider>
        <ModalProvider>
          <AlertProvider>
            <DateProvider>
              <EventProvider>{children}</EventProvider>
            </DateProvider>
          </AlertProvider>
        </ModalProvider>
      </CreateEventProvider>
    </ThemeProvider>
  );
};
