/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-indent */
/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { parseISO, formatRelative } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import Header from '../../components/Header';
import Adsense from '../../components/Adsense';
import { StatsBox, StatsBoxTitle, StatsContainer, StatsRow } from './styles';
import ShortenerService from '../../services/shortenerService';
import vars from '../../configs/vars'

class StatsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // isLoading: false,
      shortenerURL: {},
      errorMessage: '',
    };
  }

  async componentDidMount() {
    // eslint-disable-next-line react/prop-types
    const { code } = this.props.match.params;

    try {
      const service = new ShortenerService();
      const shortenerURL = await service.getStats(code);

      const parsedDate = parseISO(shortenerURL.updatedAt);
      const relativeDate = formatRelative(parsedDate, new Date(), { locale: ptBR })

      shortenerURL.relativeDate = relativeDate;

      this.setState({
        // isLoading: false,
        shortenerURL
      })

    } catch (error) {
      this.setState({
        // isLoading: false,
        errorMessage: 'Ops, URL não encontrada.'
      })
    }
  }

  render() {
    const { errorMessage, shortenerURL } = this.state;
    return (
      <Container>
        <Header>Estatísticas</Header>
        {errorMessage ? (
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
        ) : (
            <StatsContainer className="text-center">
              <p>
                <strong>
                  {vars.HOST_APP + shortenerURL.code}
                </strong>
              </p>
              <p>
                Redireciona para:
                <br />
                {shortenerURL.url}
              </p>
              <StatsRow>
                <StatsBox>
                  <strong>{shortenerURL.hits}</strong>
                  <StatsBoxTitle>Visitas</StatsBoxTitle>
                </StatsBox>
                <StatsBox>
                  <strong>{shortenerURL.relativeDate}</strong>
                  <StatsBoxTitle>Última visita</StatsBoxTitle>
                </StatsBox>
              </StatsRow>
              <a className="btn btn-primary" href="/">
                Encurtar nova URL
              </a>
            </StatsContainer>

          )}
        <Adsense />
      </Container>
    );
  }
}

export default StatsPage;
