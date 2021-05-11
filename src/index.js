import React from 'react';
import ReactDOM from 'react-dom';
import UserGithub from './github_user'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <UserGithub source="https://api.github.com/users/Pason-0511" />,
  document.getElementById('root')
);
reportWebVitals();
