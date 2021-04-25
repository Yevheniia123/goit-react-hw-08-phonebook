import { connect } from 'react-redux';
import contactOperation from '../redux/phonebook/phonebook-operation';
import React, { Component } from 'react';
import phonebookSelectors from '../redux/phonebook/phonebook-selectors';
import { Switch, Route } from 'react-router-dom';
import routes from './views/routes';
// import ContactView from './views/ContactsView';
// import RegisterView from './views/RegisterView';
// import HomeView from './views/HomeView';
// import LoginView from './views/LoginView';
import AppBar from '../components/AppBar/AppBar';
import { lazy, Suspense } from 'react';
import authOperation from '../redux/auth/auth-operations';
import PrivateRoute from '../components/UserMenu/PrivateRoute';
import PublicRoute from '../components/UserMenu/PublicRoute';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactView = lazy(() => import('./views/ContactsView'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <AppBar />
        <Suspense fallback={<h2>Load...</h2>}>
          <Switch>
            <Route exact path={routes.home} component={HomeView} />
            <PublicRoute
              path="/register"
              restricted
              redirectTo="/"
              component={RegisterView}
            />
            <PublicRoute
              path="/login"
              restricted
              redirectTo="/contacts"
              component={LoginView}
            />
            <PrivateRoute
              path="/contacts"
              component={ContactView}
              redirectTo="/login"
            />
            {/* <Route component={NotFoundView} /> */}
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContact: phonebookSelectors.getLoading(state),
});

const mapDispatchToProps = {
  onGetCurrentUser: authOperation.getCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
