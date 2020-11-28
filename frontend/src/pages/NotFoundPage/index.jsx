/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Adsense from '../../components/Adsense';

class NotFoundPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <p>Not Found Page</p>
        <Adsense />
      </>
    );
  }
}

export default NotFoundPage;
