import React from 'react';
import './Tarefa.css';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import PropTypes from 'prop-types';

export default function Tarefa({ tarefas, handleEdite, handleDelete }) {
  return (
    <div className="tarefas">
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={tarefa}>
            {tarefa}
            <div className="controller">
              <FaEdit onClick={(e) => handleEdite(e, index)} className="btnEdit" />

              <FaWindowClose onClick={(e) => handleDelete(e, index)} className="btnClose" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

Tarefa.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  tarefas: PropTypes.array.isRequired,
  handleEdite: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
