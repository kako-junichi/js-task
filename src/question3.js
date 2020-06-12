import axios from 'axios';

const GetApi = async () => {
  try {
    const url = 'http://dummy.restapiexample.com/api/v1/employees';
    const response = await axios.get(url);
    const data = response.data.data;
    const result = data.filter((value) => {
      return value.employee_salary >= 300000;
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
GetApi();
