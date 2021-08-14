import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthCtxProvider from './store';

ReactDOM.render(
	<AuthCtxProvider>
		<Router>
			<App />
		</Router>
	</AuthCtxProvider>,
	document.getElementById('root'),
);
