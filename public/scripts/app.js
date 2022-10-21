'use strict';

console.log('App.js is running !');

//JSX - Javascript XML

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indecision app'
  ),
  React.createElement(
    'p',
    null,
    ' This is JSX from app.js in src'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      ' First'
    ),
    React.createElement(
      'li',
      null,
      ' Second'
    )
  )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
