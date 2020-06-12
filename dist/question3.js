"use strict";

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GetApi = async () => {
  try {
    const url = 'http://dummy.restapiexample.com/api/v1/employees';
    const response = await _axios.default.get(url);
    const data = response.data.data;
    const result = data.filter(value => {
      return value.employee_salary >= 300000;
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

GetApi();