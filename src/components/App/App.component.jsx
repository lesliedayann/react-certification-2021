import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import Video from '../../pages/VideoTemplate/Video.page';
import Navbar from '../Navabar';
import Layout from '../Layout';
import { AppContext, useAppContextValue } from '../../utils/AppContext';

function App() {
  const appContextValue = useAppContextValue();

  return (
    <AppContext.Provider value={appContextValue}>
      <BrowserRouter>
        <AuthProvider>
          <Layout>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/video/:id" component={Video} />
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Layout>
        </AuthProvider>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
