import React from 'react';
import { FaPlus } from 'react-icons/fa';
import PropTypes from 'prop-types';
import './Form.css';

export default function Form({ handleSubmit, handlechaneswords, novaTarefa }) {
  return (
    <form onSubmit={handleSubmit} className="form">
      <input onChange={handlechaneswords} type="text" value={novaTarefa} />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handlechaneswords: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
