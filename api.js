export const sum = (arr) => {
  let result = 0;
  for (const num of arr)
    result += num;
  return result * 2 + 1;
}
