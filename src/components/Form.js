import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, onInputChange, cardDescription,
      cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, isSaveButtonDisabled, onSaveButtonClick,
      hasTrunfo } = this.props;

    return (
      <div>
        <label htmlFor="card-name">
          Name
          <input
            name="inputCard"
            type="text"
            value={ cardName }
            onChange={ onInputChange }
            data-testid="name-input"
          />
        </label>

        <label htmlFor="card-description">
          Description
          <input
            name="descriptionInput"
            type="textarea"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="card-attribute1">
          Attr1
          <input
            name="attr1Input"
            type="number"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="card-attribute2">
          Attr2
          <input
            name="attr2Input"
            type="number"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="card-attribute3">
          Attr3
          <input
            name="attr3Input"
            type="number"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="card-image">
          Image
          <input
            type="text"
            name="imageSrc"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="card-rarity">
          <select
            name="selectRarityInput"
            type="select"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option> normal</option>
            <option> raro</option>
            <option> muito raro</option>
          </select>
        </label>

        {hasTrunfo ? (
          <p>Você já tem um super Trunfo em seu baralho</p>
        ) : (

          <label htmlFor="check">
            Super Trybe Trunfo:
            <input
              name="checkBoxInput"
              type="checkbox"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>)}

        <label htmlFor="tousebutton">
          <input
            type="button"
            value="Salvar"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          />
        </label>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
