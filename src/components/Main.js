/* eslint-disable class-methods-use-this */
/* eslint-disable no-alert */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import './Main.css';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import Form from './Form';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      novaTarefa: ' ',
      tarefas: [],
      index: -1,
    };
  }

  componentDidMount() {
    const List = JSON.parse(localStorage.getItem('Tarefas'));
    if (!List) return;
    this.setState({
      tarefas: List,
    });
  }

  componentDidUpdate(prevprops, prevState) {
    const { tarefas } = this.state;
    if (tarefas === prevState) return;

    localStorage.setItem('Tarefas', JSON.stringify(tarefas));
  }

  // eslint-disable-next-line class-methods-use-this
  handleSubmit = (evt) => {
    evt.preventDefault();
    let { novaTarefa } = this.state;
    const { index } = this.state;

    const { tarefas } = this.state;
    novaTarefa = novaTarefa.trim();

    if (index === -1) {
      if (tarefas.indexOf(novaTarefa) !== -1) return;

      tarefas.push(novaTarefa);
      this.setState({
        novaTarefa: '',
        tarefas,
      });
    } else {
      tarefas[index] = novaTarefa;
      this.setState({
        novaTarefa: '',
        tarefas,
        index: -1,
      });
    }
  };

  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const confirm = window.confirm(`Deseja realmente apagar a tarefa ${tarefas[index]}`);

    if (!confirm) return;

    tarefas.splice(index, 1);
    this.setState({
      tarefas,
    });
  };

  handleEdite = (e, index) => {
    const { tarefas } = this.state;
    this.setState({
      novaTarefa: tarefas[index],
      index,
    });
  };

  handlechaneswords = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  render() {
    return (
      <div className="main">
        <h1>Lista de Tarefa</h1>
        <Form
          handleSubmit={this.handleSubmit}
          handlechaneswords={this.handlechaneswords}
          state={this.state.novaTarefa}
        />

        <div className="tarefas">
          <ul>
            {this.state.tarefas.map((tarefa, index) => (
              <li key={tarefa}>
                {tarefa}
                <div className="controller">
                  <FaEdit onClick={(e) => this.handleEdite(e, index)} className="btnEdit" />

                  <FaWindowClose onClick={(e) => this.handleDelete(e, index)} className="btnClose" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
