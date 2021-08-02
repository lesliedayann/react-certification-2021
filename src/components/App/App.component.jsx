import React, { useLayoutEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import Video from '../../pages/VideoTemplate/Video.page';
import Navbar from '../Navabar';
import Layout from '../Layout';
import { random } from '../../utils/fns';
import { AppContext, useAppContextValue } from '../../utils/AppContext';

function App() {
  const appContextValue = useAppContextValue();

  useLayoutEffect(() => {
    const { body } = document;

    function rotateBackground() {
      const xPercent = random(100);
      const yPercent = random(100);
      body.style.setProperty('--bg-position', `${xPercent}% ${yPercent}%`);
    }

    const intervalId = setInterval(rotateBackground, 3000);
    body.addEventListener('click', rotateBackground);

    return () => {
      clearInterval(intervalId);
      body.removeEventListener('click', rotateBackground);
    };
  }, []);

  return (
    <AppContext.Provider value={appContextValue}>
      <BrowserRouter>
        <AuthProvider>
          <Layout>
            <div style={{ height: '100%', width: '100%' }}>
              <Navbar />
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route exact path="/login">
                  <LoginPage />
                </Route>
                <Route path="/:id" component={Video} />
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </div>
          </Layout>
        </AuthProvider>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
