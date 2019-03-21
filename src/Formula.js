import React, { Component } from 'react';
import rho from './img/rho.png';
import formula_4_5 from "./img/4-5.png";
import formula_4_6 from "./img/4-6.png";
import formula_4_7 from "./img/4-7.png";
import formula_4_8 from "./img/4-8.png";
import formula_4_9 from "./img/4-9.png";
import formula_4_10 from "./img/4-10.png";
import formula_5_1 from "./img/5-1.png";
import formula_5_2 from "./img/5-2.png";
import formula_6_1 from "./img/6-1.png";
import formula_6_2 from "./img/6-2.png";
import formula_6_3 from "./img/6-3.png";
import formula_6_4 from "./img/6-4.png";
import formula_6_5 from "./img/6-5.png";
import formula_6_6 from "./img/6-6.png";
import formula_6_7 from "./img/6-7.png";
import formula_7_1 from "./img/7-1.png";
import formula_7_2 from "./img/7-2.png";
import formula_7_3 from "./img/7-3.png";
import formula_7_4 from "./img/7-4.png";
import formula_7_5 from "./img/7-5.png";
import formula_7_6 from "./img/7-6.png";
import formula_7_7 from "./img/7-7.png";
import formula_7_8 from "./img/7-8.png";
import formula_7_9 from "./img/7-9.png";
import formula_7_10 from "./img/7-10.png";
import formula_7_11 from "./img/7-11.png";
import formula_8_1 from "./img/8-1.png";
import formula_8_2 from "./img/8-2.png";
import formula_8_3 from "./img/8-3.png";
import formula_8_4 from "./img/8-4.png";
import formula_8_5 from "./img/8-5.png";
import formula_8_6 from "./img/8-6.png";
import formula_8_7 from "./img/8-7.png";
import formula_9_1 from "./img/9-1.png";
import formula_9_2 from "./img/9-2.png";
import formula_9_3 from "./img/9-3.png";
import formula_9_4 from "./img/9-4.png";
import formula_9_5 from "./img/9-5.png";
import formula_9_6 from "./img/9-6.png";
import formula_9_7 from "./img/9-7.png";
import formula_9_8 from "./img/9-8.png";
import formula_9_9 from "./img/9-9.png";
import formula_9_10 from "./img/9-10.png";
import formula_9_11 from "./img/9-11.png";
import formula_9_12 from "./img/9-12.png";
import formula_9_13 from "./img/9-13.png";
import formula_9_14 from "./img/9-14.png";
import formula_9_15 from "./img/9-15.png";
import formula_10_1 from "./img/10-1.png";
import formula_10_2 from "./img/10-2.png";
import formula_10_3 from "./img/10-3.png";
import formula_10_4 from "./img/10-4.png";
import formula_10_5 from "./img/10-5.png";
import formula_10_6 from "./img/10-6.png";
import formula_10_7 from "./img/10-7.png";
import formula_10_8 from "./img/10-8.png";
import formula_11_1 from "./img/11-1.png";
import formula_11_2 from "./img/11-2.png";
import formula_11_3 from "./img/11-3.png";
import formula_11_4 from "./img/11-4.png";
import formula_11_5 from "./img/11-5.png";
import formula_11_6 from "./img/11-6.png";
import formula_11_7 from "./img/11-7.png";
import formula_11_8 from "./img/11-8.png";
import formula_11_9 from "./img/11-9.png";
import formula_11_10 from "./img/11-10.png";
import formula_11_11 from "./img/11-11.png";
import formula_12_1 from "./img/12-1.png";
import formula_12_2 from "./img/12-2.png";
import formula_12_3 from "./img/12-3.png";
import formula_12_4 from "./img/12-4.png";
import formula_12_5 from "./img/12-5.png";
import formula_12_6 from "./img/12-6.png";
import formula_12_7 from "./img/12-7.png";
import formula_12_8 from "./img/12-8.png";
import formula_12_9 from "./img/12-9.png";
import formula_12_10 from "./img/12-10.png";
import formula_12_11 from "./img/12-11.png";
import formula_12_12 from "./img/12-12.png";
import formula_12_13 from "./img/12-13.png";
import formula_12_14 from "./img/12-14.png";
import formula_12_15 from "./img/12-15.png";
import formula_12_16 from "./img/12-16.png";
import formula_12_17 from "./img/12-17.png";

class Formula extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            image: {
                src: '',
                height: 0
            },
            value: {
                fontSize: 0,
                verticalOffset: 0,
                horizontalOffset: 0,
            }
        };

        this.formulas = {
            'rho': {
                'number': '',
                'title': '',
                'img': rho,
                'height': 25,
                'value': {
                    'hidden': false,
                    'verticalOffset': -4,
                    'horizontalOffset': 0,
                    'fontSize': 18.5,
                }
            },
            '4.5': {
                'number': 4.5,
                'title': '',
                'img': formula_4_5,
                'height': 30,
                'value': {
                    'verticalOffset': -2,
                    'horizontalOffset': 0,
                    'fontSize': 18.5
                },
            },
            '4.6': {
                'number': 4.6,
                'title': '',
                'img': formula_4_6,
                'height': 30,
                'value': {
                    'verticalOffset': -2,
                    'horizontalOffset': 0,
                    'fontSize': 18.5
                },
            },
            '4.7': {
                'number': 4.7,
                'title': '',
                'img': formula_4_7,
                'height': 30,
                'value': {
                    'verticalOffset': -2,
                    'horizontalOffset': 0,
                    'fontSize': 18.5
                },
            },
            '4.8': {
                'number': 4.8,
                'title': '',
                'img': formula_4_8,
                'height': 30,
                'value': {
                    'verticalOffset': -2,
                    'horizontalOffset': 0,
                    'fontSize': 18.5
                },
            },
            '4.9': {
                'number': 4.9,
                'title': '',
                'img': formula_4_9,
                'height': 30,
                'value': {
                    'verticalOffset': -2,
                    'horizontalOffset': 0,
                    'fontSize': 18.5
                },
            },
            '4.10': {
                'number': 4.10,
                'title': '',
                'img': formula_4_10,
                'height': 30,
                'value': {
                    'verticalOffset': -2,
                    'horizontalOffset': 0,
                    'fontSize': 18.5
                },
            },
            '5.1': {
                'number': 5.1,
                'title': 'Вероятность того, что канал свободен',
                'img': formula_5_1,
                'height': 60,
                'value': {
                    'hidden': false,
                    'verticalOffset': -2,
                    'horizontalOffset': 2,
                    'fontSize': 18.5
                },
            },
            '5.2': {
                'number': 5.2,
                'title': 'Вероятность того, что канал занят',
                'img': formula_5_2,
                'height': 63,
                'value': {
                    'verticalOffset': -2,
                    'horizontalOffset': 1,
                    'fontSize': 18.5
                },
            },
            '6.1': {
                'number': 6.1,
                'title': '',
                'img': formula_6_1,
                'height': 30,
                'value': {
                    'verticalOffset': -2,
                    'horizontalOffset': 0,
                    'fontSize': 18.5
                },
            },
            '6.2': {
                'number': 6.2,
                'title': 'Финальные вероятности',
                'img': formula_6_2,
                'height': 56,
                'value': {
                    'verticalOffset': 2,
                    'horizontalOffset': 2,
                    'fontSize': 18.5
                },
            },
            '6.3': {
                'number': 6.3,
                'title': '',
                'img': formula_6_3,
                'height': 57,
                'value': {
                    'verticalOffset': -2,
                    'horizontalOffset': 0,
                    'fontSize': 18.5
                },
            },
            '6.4': {
                'number': 6.4,
                'title': 'Вероятность отказа',
                'img': formula_6_4,
                'height': 55,
                'value': {
                    'verticalOffset': 1,
                    'horizontalOffset': 1,
                    'fontSize': 18.5
                },
            },
            '6.5': {
                'number': 6.5,
                'title': 'Относительная пропускная способность',
                'img': formula_6_5,
                'height': 55,
                'value': {
                    'verticalOffset': 0,
                    'horizontalOffset': 1,
                    'fontSize': 18.5
                },
            },
            '6.6': {
                'number': 6.6,
                'title': 'Абсолютная пропускная способность',
                'img': formula_6_6,
                'height': 74,
                'value': {
                    'verticalOffset': -1,
                    'horizontalOffset': 2,
                    'fontSize': 18.5
                },
            },
            '6.7': {
                'number': 6.7,
                'title': 'Среднее число занятых обслуживанием каналов',
                'img': formula_6_7,
                'height': 74,
                'value': {
                    'verticalOffset': 0,
                    'horizontalOffset': 1,
                    'fontSize': 18.5
                },
            },
            '7.1': {
                'number': 7.1,
                'title': '',
                'img': formula_7_1,
                'height': 30,
                'value': {
                    'verticalOffset': -2,
                    'horizontalOffset': 0,
                    'fontSize': 18.5
                },
            },
            '7.2': {
                'number': 7.2,
                'title': 'Финальные вероятности',
                'img': formula_7_2,
                'height': 55,
                'value': {
                    'verticalOffset': -3,
                    'horizontalOffset': 1,
                    'fontSize': 18.5
                },
            },
            '7.3': {
                'number': 7.3,
                'title': '',
                'img': formula_7_3,
                'height': 33,
                'value': {
                    'verticalOffset': -2,
                    'horizontalOffset': 0,
                    'fontSize': 18.5
                },
            },
            '7.4': {
                'number': 7.4,
                'title': '',
                'img': formula_7_4,
                'height': 30,
                'value': {
                    'verticalOffset': -2,
                    'horizontalOffset': 0,
                    'fontSize': 18.5
                },
            },
            '7.5': {
                'number': 7.5,
                'title': 'Вероятность отказа',
                'img': formula_7_5,
                'height': 29,
                'value': {
                    'verticalOffset': 0,
                    'horizontalOffset': 1,
                    'fontSize': 18.5
                },
            },
            '7.6': {
                'number': 7.6,
                'title': 'Относительная пропускная способность',
                'img': formula_7_6,
                'height': 30,
                'value': {
                    'verticalOffset': 0,
                    'horizontalOffset': 1,
                    'fontSize': 18.5
                },
            },
            '7.7': {
                'number': 7.7,
                'title': 'Абсолютная пропускная способность',
                'img': formula_7_7,
                'height': 30,
                'value': {
                    'verticalOffset': 0,
                    'horizontalOffset': 1,
                    'fontSize': 18.5
                },
            },
            '7.8': {
                'number': 7.8,
                'title': '',
                'img': formula_7_8,
                'height': 30,
                'value': {
                    'verticalOffset': -2,
                    'horizontalOffset': 0,
                    'fontSize': 18.5
                },
            },
            '7.9': {
                'number': 7.9,
                'title': '',
                'img': formula_7_9,
                'height': 30,
                'value': {
                    'verticalOffset': -2,
                    'horizontalOffset': 0,
                    'fontSize': 18.5
                },
            },
            '7.10': {
                'number': 7.10,
                'title': '',
                'img': formula_7_10,
                'height': 30,
                'value': {
                    'verticalOffset': -2,
                    'horizontalOffset': 0,
                    'fontSize': 18.5
                },
            },
            '7.11': {
                'number': 7.11,
                'title': '',
                'img': formula_7_11,
                'height': 30,
                'value': {
                    'verticalOffset': -2,
                    'horizontalOffset': 0,
                    'fontSize': 18.5
                },
            },
            '8.1': {
                'number': 8.1,
                'title': 'Финальные вероятности',
                'img': formula_8_1,
                'height': 22,
                'value': {
                    'verticalOffset': -2,
                    'horizontalOffset': 0,
                    'fontSize': 18.5
                },
            },
            '8.2': {
                'number': 8.2,
                'title': '',
                'img': formula_8_2,
                'height': 28,
                'value': {
                    'verticalOffset': -2,
                    'horizontalOffset': 0,
                    'fontSize': 18.5
                },
            },
            '8.3': {
                'number': 8.3,
                'title': 'Относительная пропускная способность',
                'img': formula_8_3,
                'height': 22,
                'value': {
                    'verticalOffset': -2,
                    'horizontalOffset': 0,
                    'fontSize': 18.5
                },
            },
            '8.4': {
                'number': 8.4,
                'title': 'Абсолютная пропускная способность',
                'img': formula_8_4,
                'height': 23,
                'value': {
                    'verticalOffset': -2,
                    'horizontalOffset': 0,
                    'fontSize': 18.5
                },
            },
            '8.5': {
                'number': 8.5,
                'title': 'Среднее число заявок в очереди',
                'img': formula_8_5,
                'height': 62,
                'value': {
                    'verticalOffset': -1,
                    'horizontalOffset': 1,
                    'fontSize': 18.5
                },
            },
            '8.6': {
                'number': 8.6,
                'title': 'Среднее число обслуживаемых заявок',
                'img': formula_8_6,
                'height': 24,
                'value': {
                    'verticalOffset': -2,
                    'horizontalOffset': 0,
                    'fontSize': 18.5
                },
            },
            '8.7': {
                'number': 8.7,
                'title':'Среднее число заявок, находящихся в СМО',
                'img': formula_8_7,
                'height': 52,
                'value': {
                    'verticalOffset': -6,
                    'horizontalOffset': 1,
                    'fontSize': 18.5
                },
            },
            '9.1': {
                'number': 9.1,
                'title': '',
                'img': formula_9_1,
                'height': 30,
                'value': {
                    'verticalOffset': -2,
                    'horizontalOffset': 0,
                    'fontSize': 18.5
                },
            },
            '9.2': {
                'number': 9.2,
                'title': 'Финальные вероятности',
                'img': formula_9_2,
                'height': 74,
                'value': {
                    'verticalOffset': 1,
                    'horizontalOffset': 5,
                    'fontSize': 18.5
                },
            },
            '9.3': {
                'number': 9.3,
                'title': '',
                'img': formula_9_3,
                'height': 60,
                'value': {
                    'verticalOffset': -2,
                    'horizontalOffset': 0,
                    'fontSize': 18.5
                },
            },
            '9.4': {
                'number': 9.4,
                'title': 'Вероятность образования очереди',
                'img': formula_9_4,
                'height': 65,
                'value': {
                    'verticalOffset': 0,
                    'horizontalOffset': 2,
                    'fontSize': 18.5
                },
            },
            '9.5': {
                'number': 9.5,
                'title': 'Отказ в обслуживании заявки происходит, когда все m мест в очереди заняты, таким образом',
                'img': formula_9_5,
                'height': 60,
                'value': {
                    'verticalOffset': 0,
                    'horizontalOffset': 1,
                    'fontSize': 18.5
                },
            },
            '9.6': {
                'number': 9.6,
                'title': 'Относительная пропускная способность',
                'img': formula_9_6,
                'height': 58,
                'value': {
                    'verticalOffset': 0,
                    'horizontalOffset': 2,
                    'fontSize': 18.5
                },
            },
            '9.7': {
                'number': 9.7,
                'title': 'Абсолютная пропускная способность',
                'img': formula_9_7,
                'height': 54,
                'value': {
                    'verticalOffset': -1,
                    'horizontalOffset': 0,
                    'fontSize': 18.5
                },
            },
            '9.8': {
                'number': 9.8,
                'title': 'Среднее число заявок, находящихся в очереди',
                'img': formula_9_8,
                'height': 73,
                'value': {
                    'verticalOffset': -2,
                    'horizontalOffset': 2,
                    'fontSize': 18.5
                },
            },
            '9.9': {
                'number': 9.9,
                'title': 'Среднее число заявок, обслуживаемых в СМО',
                'img': formula_9_9,
                'height': 74,
                'value': {
                    'verticalOffset': 0,
                    'horizontalOffset': 1,
                    'fontSize': 18.5
                },
            },
            '9.10': {
                'number': 9.10,
                'title': 'Среднее число заявок, находящихся в СМО',
                'img': formula_9_10,
                'height': 23,
                'value': {
                    'verticalOffset': -2,
                    'horizontalOffset': 1,
                    'fontSize': 18.5
                },
            },
            '9.11': {
                'number': 9.11,
                'title': '',
                'img': formula_9_11,
                'height': 30,
                'value': {
                    'verticalOffset': -2,
                    'horizontalOffset': 0,
                    'fontSize': 18.5
                },
            },
            '9.12': {
                'number': 9.12,
                'title': '',
                'img': formula_9_12,
                'height': 30,
                'value': {
                    'verticalOffset': -2,
                    'horizontalOffset': 0,
                    'fontSize': 18.5
                },
            },
            '9.13': {
                'number': 9.13,
                'title': '',
                'img': formula_9_13,
                'height': 30,
                'value': {
                    'verticalOffset': -2,
                    'horizontalOffset': 0,
                    'fontSize': 18.5
                },
            },
            '9.14': {
                'number': 9.14,
                'title': '',
                'img': formula_9_14,
                'height': 30,
                'value': {
                    'verticalOffset': -2,
                    'horizontalOffset': 0,
                    'fontSize': 18.5
                },
            },
            '9.15': {
                'number': 9.15,
                'title': '',
                'img': formula_9_15,
                'height': 30,
                'value': {
                    'verticalOffset': -2,
                    'horizontalOffset': 0,
                    'fontSize': 18.5
                },
            },
            '10.1': {
                'number': 10.1,
                'title': 'Финальные вероятности',
                'img': formula_10_1,
                'height': 72,
                'value': {
                    'verticalOffset': 1,
                    'horizontalOffset': 3,
                    'fontSize': 18.5
                },
            },
            '10.2': {
                'number': 10.2,
                'title': '',
                'img': formula_10_2,
                'height': 59,
                'value': {
                    'verticalOffset': -2,
                    'horizontalOffset': 0,
                    'fontSize': 18.5
                },
            },
            '10.3': {
                'number': 10.3,
                'title': 'Вероятность образования очереди',
                'img': formula_10_3,
                'height': 60,
                'value': {
                    'verticalOffset': -2,
                    'horizontalOffset': -1,
                    'fontSize': 18.5
                },
            },
            '10.4': {
                'number': 10.4,
                'title': 'Поскольку очередь не ограничена, то вероятность отказа в обслуживании заявки ротк равна нулю',
                'img': formula_10_4,
                'height': 24,
                'value': {
                    'verticalOffset': -2,
                    'horizontalOffset': 0,
                    'fontSize': 18.5
                },
            },
            '10.5': {
                'number': 10.5,
                'title': 'Относительная пропускная способность Q равна единице',
                'img': formula_10_5,
                'height': 24,
                'value': {
                    'verticalOffset': -2,
                    'horizontalOffset': 0,
                    'fontSize': 18.5
                },
            },
            '10.6': {
                'number': 10.6,
                'title': 'Абсолютная пропускная способность А',
                'img': formula_10_6,
                'height': 25,
                'value': {
                    'verticalOffset': -2,
                    'horizontalOffset': -2,
                    'fontSize': 18.5
                },
            },
            '10.7': {
                'number': 10.7,
                'title': 'Среднее числа заявок в очереди',
                'img': formula_10_7,
                'height': 70,
                'value': {
                    'verticalOffset': -2,
                    'horizontalOffset': -2,
                    'fontSize': 18.5
                },
            },
            '10.8': {
                'number': 10.8,
                'title': 'Среднее число обслуживаемых заявок',
                'img': formula_10_8,
                'height': 25,
                'value': {
                    'verticalOffset': -2,
                    'horizontalOffset': -1,
                    'fontSize': 18.5
                },
            },
            '11.1': {
                'number': 11.1,
                'title': 'Финальные вероятности',
                'img': formula_11_1,
                'height': 30,
                'value': {
                    'verticalOffset': -2,
                    'horizontalOffset': 0,
                    'fontSize': 18.5
                },
            },
            '11.2': {
                'number': 11.2,
                'title': '',
                'img': formula_11_2,
                'height': 140,
                'value': {
                    'verticalOffset': 1,
                    'horizontalOffset': 3,
                    'fontSize': 18.5
                },
            },
            '11.3': {
                'number': 11.3,
                'title': '',
                'img': formula_11_3,
                'height': 61,
                'value': {
                    'verticalOffset': -2,
                    'horizontalOffset': 0,
                    'fontSize': 18.5
                },
            },
            '11.4': {
                'number': 11.4,
                'title': '',
                'img': formula_11_4,
                'height': 100,
                'value': {
                    'verticalOffset': -2,
                    'horizontalOffset': 0,
                    'fontSize': 18.5
                },
            },
            '11.5': {
                'number': 11.5,
                'title': 'Вероятность образования очереди',
                'img': formula_11_5,
                'height': 145,
                'value': {
                    'verticalOffset': -1,
                    'horizontalOffset': -2,
                    'fontSize': 18.5
                },
            },
            '11.6': {
                'number': 11.6,
                'title': 'Вероятность отказа',
                'img': formula_11_6,
                'height': 100,
                'value': {
                    'verticalOffset': -21,
                    'horizontalOffset': -1,
                    'fontSize': 18.5
                },
            },
            '11.7': {
                'number': 11.7,
                'title': 'Относительная пропускная способность',
                'img': formula_11_7,
                'height': 87,
                'value': {
                    'verticalOffset': -13,
                    'horizontalOffset': 0,
                    'fontSize': 18.5
                },
            },
            '11.8': {
                'number': 11.8,
                'title': 'Абсолютная пропускная способность',
                'img': formula_11_8,
                'height': 25,
                'value': {
                    'verticalOffset': -2,
                    'horizontalOffset': 0,
                    'fontSize': 18.5
                },
            },
            '11.9': {
                'number': 11.9,
                'title': 'Среднее число заявок, находящихся в очереди',
                'img': formula_11_9,
                'height': 105,
                'value': {
                    'verticalOffset': -18,
                    'horizontalOffset': 0,
                    'fontSize': 18.5
                },
            },
            '11.10': {
                'number': 11.10,
                'title': 'Среднее число заявок, обслуживаемых в СМО',
                'img': formula_11_10,
                'height': 60,
                'value': {
                    'verticalOffset': -2,
                    'horizontalOffset': 0,
                    'fontSize': 18.5
                },
            },
            '11.11': {
                'number': 11.11,
                'title': 'Среднее время пребывания заявки в СМО',
                'img': formula_11_11,
                'height': 68,
                'value': {
                    'verticalOffset': -2,
                    'horizontalOffset': 1,
                    'fontSize': 18.5
                },
            },
            '12.1': {
                'number': 12.1,
                'title': '',
                'img': formula_12_1,
                'height': 30,
                'value': {
                    'verticalOffset': -2,
                    'horizontalOffset': 0,
                    'fontSize': 18.5
                },
            },
            '12.2': {
                'number': 12.2,
                'title': 'Финальные вероятности',
                'img': formula_12_2,
                'height': 110,
                'value': {
                    'verticalOffset': -15,
                    'horizontalOffset': 1,
                    'fontSize': 18.5
                },
            },
            '12.3': {
                'number': 12.3,
                'title': '',
                'img': formula_12_3,
                'height': 36,
                'value': {
                    'verticalOffset': -2,
                    'horizontalOffset': 0,
                    'fontSize': 18.5
                },
            },
            '12.4': {
                'number': 12.4,
                'title': '',
                'img': formula_12_4,
                'height': 32,
                'value': {
                    'verticalOffset': -2,
                    'horizontalOffset': 0,
                    'fontSize': 18.5
                },
            },
            '12.5': {
                'number': 12.5,
                'title': 'Вероятность образования очереди',
                'img': formula_12_5,
                'height': 65,
                'value': {
                    'verticalOffset': 0,
                    'horizontalOffset': 1,
                    'fontSize': 18.5
                },
            },
            '12.6': {
                'number': 12.6,
                'title': 'Относительная пропускная способность',
                'img': formula_12_6,
                'height': 25,
                'value': {
                    'verticalOffset': -2,
                    'horizontalOffset': 0,
                    'fontSize': 18.5
                },
            },
            '12.7': {
                'number': 12.7,
                'title': 'Абсолютная пропускная способность',
                'img': formula_12_7,
                'height': 28,
                'value': {
                    'verticalOffset': -2,
                    'horizontalOffset': 0,
                    'fontSize': 18.5
                },
            },
            '12.8': {
                'number': 12.8,
                'title': 'Среднее число занятых каналов',
                'img': formula_12_8,
                'height': 55,
                'value': {
                    'verticalOffset': -2,
                    'horizontalOffset': -1,
                    'fontSize': 18.5
                },
            },
            '12.9': {
                'number': 12.9,
                'title': 'Среднее число заявок, находящихся в очереди',
                'img': formula_12_9,
                'height': 60,
                'value': {
                    'verticalOffset': -2,
                    'horizontalOffset': 0,
                    'fontSize': 18.5
                },
            },
            '12.10': {
                'number': 12.10,
                'title': 'Среднее число заявок, находящихся в СМО',
                'img': formula_12_10,
                'height': 33,
                'value': {
                    'verticalOffset': 3,
                    'horizontalOffset': 0,
                    'fontSize': 18.5
                },
            },
            '12.11': {
                'number': 12.11,
                'title': 'Среднее время, проводимое заявкой в СМО',
                'img': formula_12_11,
                'height': 65,
                'value': {
                    'verticalOffset': -2,
                    'horizontalOffset': -2,
                    'fontSize': 18.5
                },
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
    }

    render() {
        // console.log(this.props.number);
        console.log(this.formulas['5.1'].img);
        let title = this.formulas[this.props.number].title;
        if (title !== '') {
            title += ':';
        }
        return (<div className="formula-container">
            {title !== '' &&
                <div className="title">{title}</div>
            }
            <div className="formula">
                <img src={this.formulas[this.props.number].img}
                     alt={this.formulas[this.props.number].title}
                     title={this.props.number}
                     style={{height: + this.formulas[this.props.number].height + "px"}}
                />
                {this.formulas[this.props.number].value.hasOwnProperty('hidden') &&
                    <div className="value"
                         style={{
                             top: +this.formulas[this.props.number].value.verticalOffset + "px",
                             left: +this.formulas[this.props.number].value.horizontalOffset + "px",
                             fontSize: +this.formulas[this.props.number].value.fontSize + "pt",
                         }}>
                        {this.props.number}
                    </div>
                }
            </div>
        </div>);
    }
}

export default Formula;