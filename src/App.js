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
    buttonDisabled: true,
  };

  handleButtonDisabled = () => {
    const { inputCard, descriptionInput, selectRarityInput,
      attr1Input, attr2Input, attr3Input, imageSrc } = this.state;
    const attr1Value = parseInt(attr1Input, 10);
    const attr2Value = parseInt(attr2Input, 10);
    const attr3Value = parseInt(attr3Input, 10);
    const attrTotal = attr1Value + attr2Value + attr3Value;
    const maxNumber = 210;
    const maxAttrNumber = 90;

    if (inputCard.length > 0
       && descriptionInput.length > 0
       && imageSrc.length > 0
       && selectRarityInput.length > 0
       && attrTotal <= maxNumber
       && attr1Value <= maxAttrNumber
       && attr1Value >= 0
       && attr2Value <= maxAttrNumber
       && attr2Value >= 0
       && attr3Value <= maxAttrNumber
       && attr3Value >= 0) {
      this.setState({
        buttonDisabled: false,
      });
    } else {
      this.setState({
        buttonDisabled: true,
      });
    }
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.handleButtonDisabled());
  };

  // handleButtonDisabled = () => {
  //   const { buttonDisabled, inputCard, descriptionInput,
  //     checkBoxInput, attr1Input, attr2Input, attr3Input } = this.state;
  //   if ( inputCard.length > 0) {
  //     this.setState({
  //       buttonDisabled: false,
  //     });
  //   }
  // };

  render() {
    const { inputCard, descriptionInput, imageSrc, attr1Input, attr2Input,
      attr3Input, selectRarityInput, checkBoxInput, buttonDisabled } = this.state;
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
          isSaveButtonDisabled={ buttonDisabled }
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
