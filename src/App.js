import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    inputCard: '',
    descriptionInput: '',
    imageSrc: '',
    attr1Input: '',
    attr2Input: '',
    attr3Input: '',
    selectRarityInput: '',
    checkBoxInput: false,
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { inputCard, descriptionInput, imageSrc, attr1Input, attr2Input,
      attr3Input, selectRarityInput, checkBoxInput } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ inputCard }
          cardDescription={ descriptionInput }
          cardAttr1={ attr1Input }
          cardAttr2={ attr2Input }
          cardAttr3={ attr3Input }
          cardImage={ imageSrc }
          cardRare={ selectRarityInput }
          cardTrunfo={ checkBoxInput }
          hasTrunfo={ false }
          isSaveButtonDisabled={ false }
          onInputChange={ this.handleChange }
          onSaveButtonClick={ () => {} }

        />
        <Card
          cardName={ inputCard }
          cardDescription={ descriptionInput }
          cardAttr1={ attr1Input }
          cardAttr2={ attr2Input }
          cardAttr3={ attr3Input }
          cardImage={ imageSrc }
          cardRare={ selectRarityInput }
          cardTrunfo={ checkBoxInput }
        />
      </div>
    );
  }
}

export default App;
