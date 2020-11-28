/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-indent */
/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from '../../components/Header';
import ShortenerService from '../../services/shortenerService';
import validURL from '../../services/util';

import { StatsContainer } from './styles';
import Adsense from '../../components/Adsense';

class RedirectPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      url: '',
      errorMessage: '',
    };
  }

  async componentDidMount() {
    // eslint-disable-next-line react/prop-types
    const { code } = this.props.match.params;

    try {
      const service = new ShortenerService();
      const { url } = await service.getLink(code);

      if (validURL(`http://${url}`)) {
        (window.location = `http://${url}`)
      } else {
        (window.location = url)
      }
      this.setState({ isLoading: false });
    } catch (error) {
      this.setState({
        isLoading: false,
        errorMessage: 'Ops, URL não encontrada.',
      });
    }
  }

  render() {
    const { errorMessage } = this.state;
    return (
      <Container>
        {errorMessage ? (
          <>
            <Header>Seu encurtador de URL preferido. ;)</Header>
            <StatsContainer className="text-center">
              <FontAwesomeIcon
                size="3x"
                color="#f8d7da"
                icon="exclamation-triangle"
              />
              <p className="m-3">{errorMessage}</p>
              <a className="btn btn-primary" href="/">
                Encurtar nova URL
              </a>
            </StatsContainer>
          </>
        ) : (
            <p className="text-center">Redirecionando...</p>
          )}
        <Adsense />
      </Container>
    );
  }
}

export default RedirectPage;
