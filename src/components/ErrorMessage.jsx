/* eslint-disable react/prop-types */
import React from 'react';
import Alert from 'react-bootstrap/Alert';

const ErrorMessage = ({ message }) => (<Alert variant="danger">{String(message)}</Alert>);

export default ErrorMessage;
