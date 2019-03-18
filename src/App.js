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

      this.formulas = {
          '4.5': {
              'number': 4.5,
              'title': '',
              'img': formula_4_5,
              'height': 30,
              'valueOffset': 0,
          },
          '4.6': {
              'number': 4.6,
              'title': '',
              'img': formula_4_6,
              'height': 30,
              'valueOffset': 0,
          },
          '4.7': {
              'number': 4.7,
              'title': '',
              'img': formula_4_7,
              'height': 30,
              'valueOffset': 0,
          },
          '4.8': {
              'number': 4.8,
              'title': '',
              'img': formula_4_8,
              'height': 30,
              'valueOffset': 0,
          },
          '4.9': {
              'number': 4.9,
              'title': '',
              'img': formula_4_9,
              'height': 30,
              'valueOffset': 0,
          },
          '4.10': {
              'number': 4.10,
              'title': '',
              'img': formula_4_10,
              'height': 30,
              'valueOffset': 0,
          },
          '5.1': {
              'number': 5.1,
              'title': '',
              'img': formula_5_1,
              'height': 30,
              'valueOffset': 0,
          },
          '5.2': {
              'number': 5.2,
              'title': '',
              'img': formula_5_2,
              'height': 30,
              'valueOffset': 0,
          },
          '6.1': {
              'number': 6.1,
              'title': '',
              'img': formula_6_1,
              'height': 30,
              'valueOffset': 0,
          },
          '6.2': {
              'number': 6.2,
              'title': '',
              'img': formula_6_2,
              'height': 30,
              'valueOffset': 0,
          },
          '6.3': {
              'number': 6.3,
              'title': '',
              'img': formula_6_3,
              'height': 30,
              'valueOffset': 0,
          },
          '6.4': {
              'number': 6.4,
              'title': '',
              'img': formula_6_4,
              'height': 30,
              'valueOffset': 0,
          },
          '6.5': {
              'number': 6.5,
              'title': '',
              'img': formula_6_5,
              'height': 30,
              'valueOffset': 0,
          },
          '6.6': {
              'number': 6.6,
              'title': '',
              'img': formula_6_6,
              'height': 30,
              'valueOffset': 0,
          },
          '6.7': {
              'number': 6.7,
              'title': '',
              'img': formula_6_7,
              'height': 30,
              'valueOffset': 0,
          },
          '7.1': {
              'number': 7.1,
              'title': '',
              'img': formula_7_1,
              'height': 30,
              'valueOffset': 0,
          },
          '7.2': {
              'number': 7.2,
              'title': '',
              'img': formula_7_2,
              'height': 30,
              'valueOffset': 0,
          },
          '7.3': {
              'number': 7.3,
              'title': '',
              'img': formula_7_3,
              'height': 30,
              'valueOffset': 0,
          },
          '7.4': {
              'number': 7.4,
              'title': '',
              'img': formula_7_4,
              'height': 30,
              'valueOffset': 0,
          },
          '7.5': {
              'number': 7.5,
              'title': '',
              'img': formula_7_5,
              'height': 30,
              'valueOffset': 0,
          },
          '7.6': {
              'number': 7.6,
              'title': '',
              'img': formula_7_6,
              'height': 30,
              'valueOffset': 0,
          },
          '7.7': {
              'number': 7.7,
              'title': '',
              'img': formula_7_7,
              'height': 30,
              'valueOffset': 0,
          },
          '7.8': {
              'number': 7.8,
              'title': '',
              'img': formula_7_8,
              'height': 30,
              'valueOffset': 0,
          },
          '7.9': {
              'number': 7.9,
              'title': '',
              'img': formula_7_9,
              'height': 30,
              'valueOffset': 0,
          },
          '7.10': {
              'number': 7.10,
              'title': '',
              'img': formula_7_10,
              'height': 30,
              'valueOffset': 0,
          },
          '7.11': {
              'number': 7.11,
              'title': '',
              'img': formula_7_11,
              'height': 30,
              'valueOffset': 0,
          },
          '8.1': {
              'number': 8.1,
              'title': '',
              'img': formula_8_1,
              'height': 30,
              'valueOffset': 0,
          },
          '8.2': {
              'number': 8.2,
              'title': '',
              'img': formula_8_2,
              'height': 30,
              'valueOffset': 0,
          },
          '8.3': {
              'number': 8.3,
              'title': '',
              'img': formula_8_3,
              'height': 30,
              'valueOffset': 0,
          },
          '8.4': {
              'number': 8.4,
              'title': '',
              'img': formula_8_4,
              'height': 30,
              'valueOffset': 0,
          },
          '8.5': {
              'number': 8.5,
              'title': '',
              'img': formula_8_5,
              'height': 30,
              'valueOffset': 0,
          },
          '8.6': {
              'number': 8.6,
              'title': '',
              'img': formula_8_6,
              'height': 30,
              'valueOffset': 0,
          },
          '8.7': {
              'number': 8.7,
              'title': '',
              'img': formula_8_7,
              'height': 30,
              'valueOffset': 0,
          },
          '9.1': {
              'number': 9.1,
              'title': '',
              'img': formula_9_1,
              'height': 30,
              'valueOffset': 0,
          },
          '9.2': {
              'number': 9.2,
              'title': '',
              'img': formula_9_2,
              'height': 30,
              'valueOffset': 0,
          },
          '9.3': {
              'number': 9.3,
              'title': '',
              'img': formula_9_3,
              'height': 30,
              'valueOffset': 0,
          },
          '9.4': {
              'number': 9.4,
              'title': '',
              'img': formula_9_4,
              'height': 30,
              'valueOffset': 0,
          },
          '9.5': {
              'number': 9.5,
              'title': '',
              'img': formula_9_5,
              'height': 30,
              'valueOffset': 0,
          },
          '9.6': {
              'number': 9.6,
              'title': '',
              'img': formula_9_6,
              'height': 30,
              'valueOffset': 0,
          },
          '9.7': {
              'number': 9.7,
              'title': '',
              'img': formula_9_7,
              'height': 30,
              'valueOffset': 0,
          },
          '9.8': {
              'number': 9.8,
              'title': '',
              'img': formula_9_8,
              'height': 30,
              'valueOffset': 0,
          },
          '9.9': {
              'number': 9.9,
              'title': '',
              'img': formula_9_9,
              'height': 30,
              'valueOffset': 0,
          },
          '9.10': {
              'number': 9.10,
              'title': '',
              'img': formula_9_10,
              'height': 30,
              'valueOffset': 0,
          },
          '9.11': {
              'number': 9.11,
              'title': '',
              'img': formula_9_11,
              'height': 30,
              'valueOffset': 0,
          },
          '9.12': {
              'number': 9.12,
              'title': '',
              'img': formula_9_12,
              'height': 30,
              'valueOffset': 0,
          },
          '9.13': {
              'number': 9.13,
              'title': '',
              'img': formula_9_13,
              'height': 30,
              'valueOffset': 0,
          },
          '9.14': {
              'number': 9.14,
              'title': '',
              'img': formula_9_14,
              'height': 30,
              'valueOffset': 0,
          },
          '9.15': {
              'number': 9.15,
              'title': '',
              'img': formula_9_15,
              'height': 30,
              'valueOffset': 0,
          },
          '10.1': {
              'number': 10.1,
              'title': '',
              'img': formula_10_1,
              'height': 30,
              'valueOffset': 0,
          },
          '10.2': {
              'number': 10.2,
              'title': '',
              'img': formula_10_2,
              'height': 30,
              'valueOffset': 0,
          },
          '10.3': {
              'number': 10.3,
              'title': '',
              'img': formula_10_3,
              'height': 30,
              'valueOffset': 0,
          },
          '10.4': {
              'number': 10.4,
              'title': '',
              'img': formula_10_4,
              'height': 30,
              'valueOffset': 0,
          },
          '10.5': {
              'number': 10.5,
              'title': '',
              'img': formula_10_5,
              'height': 30,
              'valueOffset': 0,
          },
          '10.6': {
              'number': 10.6,
              'title': '',
              'img': formula_10_6,
              'height': 30,
              'valueOffset': 0,
          },
          '10.7': {
              'number': 10.7,
              'title': '',
              'img': formula_10_7,
              'height': 30,
              'valueOffset': 0,
          },
          '10.8': {
              'number': 10.8,
              'title': '',
              'img': formula_10_8,
              'height': 30,
              'valueOffset': 0,
          },
          '11.1': {
              'number': 11.1,
              'title': '',
              'img': formula_11_1,
              'height': 30,
              'valueOffset': 0,
          },
          '11.2': {
              'number': 11.2,
              'title': '',
              'img': formula_11_2,
              'height': 30,
              'valueOffset': 0,
          },
          '11.3': {
              'number': 11.3,
              'title': '',
              'img': formula_11_3,
              'height': 30,
              'valueOffset': 0,
          },
          '11.4': {
              'number': 11.4,
              'title': '',
              'img': formula_11_4,
              'height': 30,
              'valueOffset': 0,
          },
          '11.5': {
              'number': 11.5,
              'title': '',
              'img': formula_11_5,
              'height': 30,
              'valueOffset': 0,
          },
          '11.6': {
              'number': 11.6,
              'title': '',
              'img': formula_11_6,
              'height': 30,
              'valueOffset': 0,
          },
          '11.7': {
              'number': 11.7,
              'title': '',
              'img': formula_11_7,
              'height': 30,
              'valueOffset': 0,
          },
          '11.8': {
              'number': 11.8,
              'title': '',
              'img': formula_11_8,
              'height': 30,
              'valueOffset': 0,
          },
          '11.9': {
              'number': 11.9,
              'title': '',
              'img': formula_11_9,
              'height': 30,
              'valueOffset': 0,
          },
          '11.10': {
              'number': 11.10,
              'title': '',
              'img': formula_11_10,
              'height': 30,
              'valueOffset': 0,
          },
          '11.11': {
              'number': 11.11,
              'title': '',
              'img': formula_11_11,
              'height': 30,
              'valueOffset': 0,
          },
          '12.1': {
              'number': 12.1,
              'title': '',
              'img': formula_12_1,
              'height': 30,
              'valueOffset': 0,
          },
          '12.2': {
              'number': 12.2,
              'title': '',
              'img': formula_12_2,
              'height': 30,
              'valueOffset': 0,
          },
          '12.3': {
              'number': 12.3,
              'title': '',
              'img': formula_12_3,
              'height': 30,
              'valueOffset': 0,
          },
          '12.4': {
              'number': 12.4,
              'title': '',
              'img': formula_12_4,
              'height': 30,
              'valueOffset': 0,
          },
          '12.5': {
              'number': 12.5,
              'title': '',
              'img': formula_12_5,
              'height': 30,
              'valueOffset': 0,
          },
         '12.6': {
              'number': 12.6,
              'title': '',
              'img': formula_12_6,
             'height': 30,
             'valueOffset': 0,
          },
          '12.7': {
              'number': 12.7,
              'title': '',
              'img': formula_12_7,
              'height': 30,
              'valueOffset': 0,
          },
          '12.8': {
              'number': 12.8,
              'title': '',
              'img': formula_12_8,
              'height': 30,
              'valueOffset': 0,
          },
          '12.9': {
              'number': 12.9,
              'title': '',
              'img': formula_12_9,
              'height': 30,
              'valueOffset': 0,
          },
          '12.10': {
              'number': 12.10,
              'title': '',
              'img': formula_12_10,
              'height': 30,
              'valueOffset': 0,
          },
          '12.11': {
              'number': 12.11,
              'title': '',
              'img': formula_12_11,
              'height': 30,
              'valueOffset': 0,
          },
          '12.12': {
              'number': 12.12,
              'title': '',
              'img': formula_12_12,
              'height': 30,
              'valueOffset': 0,
          },
          '12.13': {
              'number': 12.13,
              'title': '',
              'img': formula_12_13,
              'height': 30,
              'valueOffset': 0,
          },
          '12.14': {
              'number': 12.14,
              'title': '',
              'img': formula_12_14,
              'height': 30,
              'valueOffset': 0,
          },
          '12.15': {
              'number': 12.15,
              'title': '',
              'img': formula_12_15,
              'height': 30,
              'valueOffset': 0,
          },
          '12.16': {
              'number': 12.16,
              'title': '',
              'img': formula_12_16,
              'height': 30,
              'valueOffset': 0,
          },
          '12.17': {
              'number': 12.17,
              'title': '',
              'img': formula_12_17,
              'height': 30,
              'valueOffset': 0,
          },
      };

      this.smo_kinds = {
          '0sr': {
              title: 'Одноканальная СМО с отказами',
              t_input_visible: false,
              formulas: [
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
                      'title': 'Занятость канала',
                      'img': formula_rho,
                      'height': 33,
                      'value': '= 10',
                      'valueOffset': -4
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
                  <Formula img={formulas[0].img}
                           title={formulas[0].title}
                           height={formulas[0].height}
                           value={formulas[0].value}
                           valueOffset={formulas[0].valueOffset}
                  />
              </div>
          </div>
        </div>
    );
  }
}

export default App;
