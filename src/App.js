import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from './redux/reduxStore.js';
import {withRouter, Route, BrowserRouter} from 'react-router-dom';
import {Provider, connect} from 'react-redux';
import {compose} from 'redux';
import {initializationThunk} from './redux/appReducer.js';
import Loading from './tools/loading.jsx';
import SidebarContainer from './content/sidebar/sidebarContainer.jsx';
import AuthContainer from './header/authContainer.jsx';
const ProfileContainer = React.lazy(() => import('./content/profile/profileContainer.jsx'));
const DialogsContainer = React.lazy(() => import('./content/dialogs/dialogsContainer.jsx'));
const UsersContainer = React.lazy(() => import('./content/users/usersContainer.js'));
const NewsContainer = React.lazy(() => import('./content/news/newsContainer.js'));
const LoginContainer = React.lazy(() => import('./content/login/loginContainer.jsx'));
const SettingsContainer = React.lazy(() => import('./content/setting/settingsContainer.jsx'));

class App extends React.Component{
  componentDidMount(){
    this.props.initializationThunk();
  }
  renderSuspense = (Сomponent) => {
    return <React.Suspense fallback={<Loading />}>
      <Сomponent />
    </React.Suspense>
  }
  render(){
    if(!this.props.app.initialized){ 
      return <Loading />
    }else{ 
     return (
      <div className="wrapper">
        <AuthContainer />
        <div className="flex">
          <SidebarContainer />
          <Route render={() => this.renderSuspense(DialogsContainer)} path="/dialogs" />
          <Route render={() => this.renderSuspense(ProfileContainer)} path="/profile/:id" />
          <Route render={() => this.renderSuspense(UsersContainer)} path="/users" />
          <Route render={() => this.renderSuspense(NewsContainer)} path="/news" />
          <Route render={() => this.renderSuspense(LoginContainer)} path="/login" />
          <Route render={() => this.renderSuspense(SettingsContainer)} path="/settings" />
        </div>
      </div>
    )}
  }
}

const mapStateToProps = (state) => {
  return {
    app: state.app,
  }
}
const mapDispatchToProps = {initializationThunk};

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(App);

const MainApp = (props) => {
  return (
  <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
)}

export default MainApp;
