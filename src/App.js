import React, { Component } from 'react';
import './App.css';
import Formula from './Formula';
import formula_rho from './img/rho.png';
import formula_5_1 from './img/5-1.png';
import formula_5_2 from './img/5-2.png';

class App extends Component {
  constructor(props) {
      super(props);

      this.smo_kinds = {
          '0sr': {
              title: 'Одноканальная СМО с отказами',
              t_input_visible: false,
              formulas: [
                  {
                      title: 'Вероятность нахождения СМО в S<sub>0</sub> (канал свободен)',
                      src: formula_5_1,
                  },
                  {
                      title: 'Вероятность нахождения СМО в S<sub>1</sub> (канал занят)',
                      src: formula_5_2,
                  },
              ]
          },
          '0mr': {
              title: 'Многоканальная СМО с отказами',
              t_input_visible: false,
          },
          '0sl': {
              title: 'Одноканальная СМО с ограниченной длиной очереди',
              t_input_visible: false,
          },
          '0si': {
              title: 'Одноканальная СМО с неограниченной очередью',
              t_input_visible: false,
              formulas: [
                  {
                      'title': 'Rho',
                      'img': formula_rho,
                  }
              ],
          },
          '0ml': {
              title: 'Многоканальная СМО с ограниченной очередью',
              t_input_visible: true,
          },
          '0mi': {
              title: 'Многоканальная СМО с неограниченной очередью',
              t_input_visible: false,
          },
          '0mll': {
              title: 'Многоканальная СМО с ограниченной длиной очереди и ограниченным временем ожидания в очереди',
              t_input_visible: true,
          },
          '1': {
              title: 'n-канальная СМО замкнутого типа с m источниками заявок',
              t_input_visible: false,
          }
      };

      this.state = {
          lambda_value: '',
          mu_value: '',
          n_value: '',
          m_value: '',
          t_value: '',
          m_radio: 'queue length limit',
          smo: this.smo_kinds['0si'],
      };
  }
  getCurrentSMOKind = () => {
      const m_radio = this.state.m_radio;
      const n = this.state.n_value;
      const m = this.state.m_value;
      const t = this.state.t_value;

      let code = 1 - (m_radio.toString() === 'queue length limit');
      if (code === 0) {
          if (n === '1' || n === '') {
              code += 's'
          } else {
              code += 'm'
          }

          if (m === '0') {
              code += 'r'
          } else if (m === '∞' || m === '') {
              code += 'i'
          } else {
              code += 'l'
          }

          if (code === '0ml' && t !== '∞' && t !== '') {
              code += 'l'
          }
      }

      const smo = this.smo_kinds[code];
      this.setState({smo: smo}, () => {
          // console.log(this.state.smo);
      });
  };

  n_handler = event => {
    this.setState({n_value: event.target.value}, () => {
        this.getCurrentSMOKind();
    });
  };
  m_handler = event => {
    this.setState({m_value: event.target.value}, () => {
        this.getCurrentSMOKind();
    });
  };
  t_handler = event => {
    this.setState({t_value: event.target.value}, () => {
        this.getCurrentSMOKind();
    });
  };
    queueLengthLimitOn = () => {
    this.setState({m_radio: 'queue length limit'}, () => {
        this.getCurrentSMOKind();
    });
  };
    numberOfResponseSources = () => {
    this.setState({m_radio: 'number of response sources'}, () => {
        this.getCurrentSMOKind();
    });
  };

  render() {
    const t_visible_className = this.state.smo.t_input_visible === true ? 'option-item' : 'option-item hide';

    const formulas = this.state.smo.formulas;
    console.log(formulas);

    return (
        <div className="grid-container">
          <div className="apps-title">Queueing Theory Solver</div>
          <div className="tasks-kinds-wrapper">
            <div>Уравнения Колмогорова</div>
            <div>СМО</div>
          </div>
          <div className="options-container">
              <div className="option-item">
                  <div className="option-name">λ</div>
                  <div className="equal-symbol">=</div>
                  <input type="text"
                        placeholder="lambda"
                        value="0"
                        onChange={this.n_handler}
                  />
              </div>
              <div className="option-item">
                  <div className="option-name">μ</div>
                  <div className="equal-symbol">=</div>
                  <input type="text"
                         placeholder="mu"
                         value="0"
                         onChange={this.n_handler}
                  />
              </div>
              <div className="flex-br"/>
              <div className="option-item">
                  <div className="option-name">n</div>
                  <div className="equal-symbol">=</div>
                  <input type="text"
                         placeholder="1"
                         value={this.state.n_value}
                         onChange={this.n_handler}
                  />
              </div>
              <div className="option-item">
                  <div className="option-name">m</div>
                  <div className="equal-symbol">=</div>
                  <input type="text"
                         placeholder="∞"
                         value={this.state.m_value}
                         onChange={this.m_handler}
                  />
              </div>
              <div className="m-radio">
                  <div className="radio-title">m это:</div>
                  <div>
                      <input type="radio"
                             id="constraint-for-queue-length-radio"
                             name="m-definition"
                             onChange={this.queueLengthLimitOn}
                             checked={this.state.m_radio === 'queue length limit'}
                      />
                      <label htmlFor="constraint-for-queue-length-radio">число мест в очереди</label>
                  </div>
                  <div>
                      <input type="radio"
                             id="count-of-responses-radio"
                             name="m-definition"
                             onChange={this.numberOfResponseSources}
                             checked={this.state.m_radio === 'number of response sources'}
                      />
                      <label htmlFor="count-of-responses-radio">число источников заявок</label>
                  </div>
              </div>
              <div className={t_visible_className}>
                  <div className="option-name">
                      t<sub>ож</sub>
                  </div>
                  <div className="equal-symbol">=</div>
                  <input type="text"
                         placeholder="∞"
                         value={this.state.t_value}
                         onChange={this.t_handler}
                  />
              </div>
          </div>
          <div className="results-container">
              <h1>{this.state.smo.title}</h1>
              <div className="formulas">
                  <Formula img={formulas[0].img} title={formulas[0].title} />
              </div>
          </div>
        </div>
    );
  }
}

export default App;
