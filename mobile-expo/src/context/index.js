import React from 'react';

import { AppProvider } from './app';

const ApplicationProvider = ({ children }) => (
  <AppProvider>{children}</AppProvider>
);

export default ApplicationProvider;
