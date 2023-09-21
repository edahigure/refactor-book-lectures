import React from 'react';
import PropTypes from 'prop-types';


function Greeting(props) {
  const {
    id,
    text,
  } = props;
  return (<div>Hello Greeting id: {id}  text: {text} </div>);
}



Greeting.propTypes = {
  id: PropTypes.string,
};

Greeting.defaultProps = {
  id: 'none',
};

Greeting.propTypes = {
  text: PropTypes.string,
};

Greeting.defaultProps = {
  text: 'none',
};

export { Greeting };