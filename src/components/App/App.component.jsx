import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from '../Routes/Private/PrivateRoute.component';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import VideoDetails from '../../pages/VideoDetails';
import FavoriteVideos from '../../pages/VideoTemplate/Favorite';
import FavoriteVideoDetails from '../../pages/VideoDetails/Favorite/FavoriteVideoDetails.page';
import Navbar from '../Navabar';
import Layout from '../Layout';
import { AppProvider } from '../../utils/AppContext.provider';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <AuthProvider>
          <Layout>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/video/:id" component={VideoDetails} />
              <PrivateRoute path="/favorites" component={FavoriteVideos} exact />
              <PrivateRoute path="/favorite/:id" component={FavoriteVideoDetails} />
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Layout>
        </AuthProvider>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
