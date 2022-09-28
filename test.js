//  Writen for sequelize posgtres cuz
const data = await model.owner.findAll({
  where: { province: "punjab" }, // its comes from user input i test it hardcoded
  attributes: [
    [Sequelize.fn("COUNT", Sequelize.col("province")), "punjab"], //same
    // [Sequelize.fn("COUNT", Sequelize.col("province")), "bl"],
  ],
  include: [
    {
      model: model.house,
      attributes: [[Sequelize.fn("COUNT", Sequelize.col("rating")), "rating"]],

      where: {
        rating: { [Op.between]: ["4", "5"] }, // values as well
      },
      group: ["house"],
    },
  ],
  group: ["owner"],
  raw: true,
});

//
// _____________________ question 1 _________________
// it can also be done with for loop as well
function hourGlass(arr) {
  // return arr;
  let i = 0,
    middleIndex = 1,
    j = 2,
    hourGlassCheck = 0,
    index_raise = 1,
    arr_limit = 2,
    moving_index = 0,
    hourGlass_flag = 0,
    movingIndex_flag = 0;
  let temp_arr = [],
    sum = 0;
  while (1) {
    // console.log("first: ", arr[i][moving_index]);
    // console.log("second:", arr[j][moving_index]);
    sum += arr[i][moving_index];
    sum += arr[j][moving_index];
    if (hourGlassCheck == 1) {
      hourGlassCheck = 0;
      hourGlass_flag = 1;
      // console.log("third : ", arr[middleIndex][moving_index]);
      sum += arr[middleIndex][moving_index];
      // break;
    }
    if (moving_index === arr_limit) {
      moving_index = index_raise;
      index_raise = index_raise + 1;
      hourGlassCheck = 0;
      hourGlass_flag = 1;
      movingIndex_flag = 1;
      arr_limit = arr_limit + 1;
      temp_arr.push(sum);
      sum = 0;
    }
    if (arr_limit === arr.length - 1) {
      middleIndex = middleIndex + 1;
      moving_index = 0;
      index_raise = 1;
      arr_limit = 2;
      hourGlass_flag = 1;
      movingIndex_flag = 1;
      sum = 0;
      j = j + 1;
      i = i + 1;
    }
    if (j === arr.length) {
      break;
    }
    if (movingIndex_flag === 0) {
      moving_index = moving_index + 1;
    } else if (movingIndex_flag !== 0) {
      movingIndex_flag = 0;
    }
    if (hourGlass_flag === 1) {
      hourGlass_flag = 0;
    } else if (hourGlass_flag === 0) {
      hourGlassCheck = hourGlassCheck + 1;
    }
  }
  let max = 0;
  for (let i = 0; i < temp_arr.length; i++) {
    if (max < temp_arr[i]) {
      max = temp_arr[i];
    }
  }
  return max;
}
console.log(
  hourGlass([
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ])
);

console.log(
  hourGlass([
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0],
  ])
);
// just let me know if you found any error cuz its important to me
