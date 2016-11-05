import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import Alien from './aliens';

const et = new Alien('et');
const noise = et.blarb();

const App = props => (
  <div>
    The alien says: {props.message}
  </div>
);

App.propTypes = {
  message: PropTypes.string.isRequired,
};

ReactDOM.render(<App message={noise} />, document.querySelector('.app'));
