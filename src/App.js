import React, { Component } from 'react';
import './App.css';
import Formula from './Formula';
import formula_rho from './img/rho.png';

import formula_4_5 from './img/4-5.png';
import formula_4_6 from './img/4-6.png';
import formula_4_7 from './img/4-7.png';
import formula_4_8 from './img/4-8.png';
import formula_4_9 from './img/4-9.png';
import formula_4_10 from './img/4-10.png';

import formula_5_1 from './img/5-1.png';
import formula_5_2 from './img/5-2.png';

import formula_6_1 from './img/6-1.png';
import formula_6_2 from './img/6-2.png';
import formula_6_3 from './img/6-3.png';
import formula_6_4 from './img/6-4.png';
import formula_6_5 from './img/6-5.png';
import formula_6_6 from './img/6-6.png';
import formula_6_7 from './img/6-7.png';

import formula_7_1 from './img/7-1.png';
import formula_7_2 from './img/7-2.png';
import formula_7_3 from './img/7-3.png';
import formula_7_4 from './img/7-4.png';
import formula_7_5 from './img/7-5.png';
import formula_7_6 from './img/7-6.png';
import formula_7_7 from './img/7-7.png';
import formula_7_8 from './img/7-8.png';
import formula_7_9 from './img/7-9.png';
import formula_7_10 from './img/7-10.png';
import formula_7_11 from './img/7-11.png';

import formula_8_1 from './img/8-1.png';
import formula_8_2 from './img/8-2.png';
import formula_8_3 from './img/8-3.png';
import formula_8_4 from './img/8-4.png';
import formula_8_5 from './img/8-5.png';
import formula_8_6 from './img/8-6.png';
import formula_8_7 from './img/8-7.png';

import formula_9_1 from './img/9-1.png';
import formula_9_2 from './img/9-2.png';
import formula_9_3 from './img/9-3.png';
import formula_9_4 from './img/9-4.png';
import formula_9_5 from './img/9-5.png';
import formula_9_6 from './img/9-6.png';
import formula_9_7 from './img/9-7.png';
import formula_9_8 from './img/9-8.png';
import formula_9_9 from './img/9-9.png';
import formula_9_10 from './img/9-10.png';
import formula_9_11 from './img/9-11.png';
import formula_9_12 from './img/9-12.png';
import formula_9_13 from './img/9-13.png';
import formula_9_14 from './img/9-14.png';
import formula_9_15 from './img/9-15.png';

import formula_10_1 from './img/10-1.png';
import formula_10_2 from './img/10-2.png';
import formula_10_3 from './img/10-3.png';
import formula_10_4 from './img/10-4.png';
import formula_10_5 from './img/10-5.png';
import formula_10_6 from './img/10-6.png';
import formula_10_7 from './img/10-7.png';
import formula_10_8 from './img/10-8.png';

import formula_11_1 from './img/11-1.png';
import formula_11_2 from './img/11-2.png';
import formula_11_3 from './img/11-3.png';
import formula_11_4 from './img/11-4.png';
import formula_11_5 from './img/11-5.png';
import formula_11_6 from './img/11-6.png';
import formula_11_7 from './img/11-7.png';
import formula_11_8 from './img/11-8.png';
import formula_11_9 from './img/11-9.png';
import formula_11_10 from './img/11-10.png';
import formula_11_11 from './img/11-11.png';

import formula_12_1 from './img/12-1.png';
import formula_12_2 from './img/12-2.png';
import formula_12_3 from './img/12-3.png';
import formula_12_4 from './img/12-4.png';
import formula_12_5 from './img/12-5.png';
import formula_12_6 from './img/12-6.png';
import formula_12_7 from './img/12-7.png';
import formula_12_8 from './img/12-8.png';
import formula_12_9 from './img/12-9.png';
import formula_12_10 from './img/12-10.png';
import formula_12_11 from './img/12-11.png';
import formula_12_12 from './img/12-12.png';
import formula_12_13 from './img/12-13.png';
import formula_12_14 from './img/12-14.png';
import formula_12_15 from './img/12-15.png';
import formula_12_16 from './img/12-16.png';
import formula_12_17 from './img/12-17.png';

class App extends Component {
  constructor(props) {
      super(props);

      this.smo_kinds = {
          '0sr': {
              title: 'Одноканальная СМО с отказами',
              t_input_visible: false,
              formulas: [
                  '5.1', '5.2',
              ]
          },
          '0mr': {
              title: 'Многоканальная СМО с отказами',
              t_input_visible: false,
              formulas: [
                  '6.2', '6.3', '6.4', '6.5', '6.6', '6.7',
              ]
          },
          '0sl': {
              title: 'Одноканальная СМО с ограниченной длиной очереди',
              t_input_visible: false,
              formulas: [
                  '7.2', '7.3', '7.5', '7.6', '7.7'
              ]
          },
          '0si': {
              title: 'Одноканальная СМО с неограниченной очередью',
              t_input_visible: false,
              formulas: [
                  '8.1', '8.2', '8.3', '8.4', '8.5', '8.6', '8.7',
              ]
          },
          '0ml': {
              title: 'Многоканальная СМО с ограниченной очередью',
              t_input_visible: true,
              formulas: [
                  '9.2', '9.3', '9.4', '9.5', '9.6', '9.7', '9.8', '9.9', '9.10',
              ]
          },
          '0mi': {
              title: 'Многоканальная СМО с неограниченной очередью',
              t_input_visible: false,
              formulas: [
                  '10.1', '10.2', '10.3', '10.4', '10.5', '10.6', '10.7', '10.8',
              ]
          },
          '0mll': {
              title: 'Многоканальная СМО с ограниченной длиной очереди и ограниченным временем ожидания в очереди',
              t_input_visible: true,
              formulas: [
                  '11.2', '11.3', '11.4', '11.5', '11.6', '11.7', '11.8', '11.9', '11.10', '11.11',
              ]
          },
          '1': {
              title: 'n-канальная СМО замкнутого типа с m источниками заявок',
              t_input_visible: false,
              formulas: [
                  '12.2', '12.3', '12.4', '12.5', '12.6', '12.7', '12.8', '12.9', '12.10', '12.11',
              ]
          }
      };

      this.state = {
          lambda_value: '',
          mu_value: '',
          n_value: '',
          m_value: '',
          t_value: '',
          m_radio: 'queue length limit',
          smo: this.smo_kinds['0si'], // 0si
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

    const listFormulas = formulas.map((number) =>
        <Formula number={number.toString()} />
    );

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
                  {listFormulas}
              </div>
          </div>
        </div>
    );
  }
}

export default App;
