const num = [...Array(101).keys()];

const even_num = num.filter((value) => {
  return value % 2 === 0;
});
console.log(even_num);

const output_num = num.map((value) => {
  return value;
});
console.log(output_num);
