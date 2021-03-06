import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './containers/App'
import DashboardContainer from './containers/DashboardContainer'
import DestinationsContainer from './containers/DestinationsContainer'
import BooksContainer from './containers/BooksContainer'
import NotesContainer from './containers/NotesContainer'
import EditProfile from './containers/EditProfile'
import SignOut from './containers/SignOut'

$(document).ready(function() {
  if ($('#div').selector.length > 0) {
    $(function() {
      ReactDOM.render(
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={DashboardContainer}/>
            <Route path="/destinations(/:destination)" component={DestinationsContainer} />
            <Route path="/books(/:book)" component={BooksContainer} />
            <Route path="/notes(/:note)" component={NotesContainer} />
            <Route path="/editprofile" component={EditProfile} />
            <Route path="/signout" component={SignOut} />
          </Route>
        </Router>,
        document.getElementById('app')
      );
    });
  }
})

$(document).ready(function() {
  $('.erb-display').hide();
})

$('document').ready(function() {
  setTimeout(function() {
    $('#flash').slideUp();
  }, 3000);
});
