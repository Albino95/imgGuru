"use client"

import { SessionProvider } from 'next-auth/react'
import { Provider } from 'react-redux'
import store from '../app/store'

const CustomProvider = ({ children, session }) => {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        {children}
      </SessionProvider>
    </Provider>
  );
};

export default CustomProvider;