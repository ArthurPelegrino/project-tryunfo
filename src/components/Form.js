import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="card-name">
          Card Name
          <input type="text" data-testid="name-input" />
        </label>

        <label htmlFor="card-description">
          Description
          <input type="textarea" data-testid="description-input" />
        </label>

        <label htmlFor="card-attribute">
          Attr1
          <input type="number" data-testid="attr1-input" />
        </label>

        <label htmlFor="card-attribute2">
          Attr2
          <input type="number" data-testid="attr2-input" />
        </label>

        <label htmlFor="card-attribute3">
          Attr3
          <input type="number" data-testid="attr3-input" />
        </label>

        <label htmlFor="card-attribute3">
          Image
          <input type="text" data-testid="image-input" />
        </label>

        <label htmlFor="card-rarity">
          <select type="select" data-testid="rare-input">
            <option> normal</option>
            <option> raro</option>
            <option> muito raro</option>
          </select>
        </label>

        <label htmlFor="check">
          Super Trybe Trunfo
          <input type="checkbox" data-testid="trunfo-input" />
        </label>

        <label htmlFor="tousebutton">
          <input type="button" value="Salvar" data-testid="save-button" />
        </label>
      </div>
    );
  }
}

export default Form;
