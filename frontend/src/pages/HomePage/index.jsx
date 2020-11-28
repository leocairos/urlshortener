/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  Alert,
  Button,
  Container,
  FormControl,
  InputGroup,
  Spinner,
} from 'react-bootstrap';
import Header from '../../components/Header';
import Adsense from '../../components/Adsense';
import { ContentContainer, Form } from './styles';
import ShortenerService from '../../services/shortenerService';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      url: '',
      code: '',
      errorMessage: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { url } = this.state;

    this.setState({ isLoading: true, errorMessage: '' });

    if (!url) {
      this.setState({
        isLoading: false,
        errorMessage: 'Informe uma URL para encurtar.',
      });
    } else {
      try {
        const service = new ShortenerService();
        const result = await service.generate({ url });

        this.setState({ isLoading: false, code: result.code });
      } catch (error) {
        this.setState({
          isLoading: false,
          errorMessage: 'Ops, ocorreu um erro',
        });
      }
    }
  }

  copyToClipboard() {
    const element = this.inputURL;
    element.select();
    document.execCommand('copy');
  }

  render() {
    const { isLoading, errorMessage, code } = this.state;
    return (
      <Container>
        <Header>Seu encurtador de URL preferido. ;)</Header>
        <ContentContainer>
          <Form onSubmit={this.handleSubmit}>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Digite a url que deseja encurtar"
                defaultValue=""
                onChange={(e) => this.setState({ url: e.target.value })}
              />
              <InputGroup.Append>
                <Button variant="primary" type="submit">
                  {' '}
                  Encurtar
                </Button>
              </InputGroup.Append>
            </InputGroup>
            {isLoading ? (
              <Spinner animation="border" />
            ) : (
                code && (
                  <>
                    <InputGroup className="mb-3">
                      <FormControl
                        autoFocus
                        defaultValue={`https://rdlsc.com/${code}`}
                        // eslint-disable-next-line no-return-assign
                        ref={(input) => this.inputURL = input}
                      />
                      <InputGroup.Append>
                        <Button
                          variant="outline-secondary"
                          onClick={() => this.copyToClipboard()}
                        >
                          Copiar
                        </Button>
                      </InputGroup.Append>
                    </InputGroup>
                    <p>
                      Para acompanhar as estatística, acesse https://rdlsc.com/
                      {code}
                      /stats
                    </p>
                  </>
                )
              )}
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
          </Form>
        </ContentContainer>
        <Adsense />
      </Container>
    );
  }
}

export default HomePage;
