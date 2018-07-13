const weight = input => removeFirstLines(input, 4).map(e => mapWeight(e));

const removeFirstLines = (input, N) =>
  input
    .split("\n")
    .slice(N)
    .filter(e => e != "");

const mapWeight = element => {
  const matcher = element.match(/^(\S+) (\S+ [AP]M)\t(\d+\.\d+)/);
  return {
    date: matcher[1],
    time: matcher[2],
    weight: parseFloat(matcher[3])
  };
};

const fat = input => removeFirstLines(input, 5).map(e => mapFat(e));

const mapFat = element => {
  const matcher = element.match(
    /^(\S+) (\S+ [AP]M)\t(\d+\.\d)\t(\d+\.\d)\t(\d+\.\d)\t(\d+\.\d)/
  );
  return {
    date: matcher[1],
    time: matcher[2],
    bone: parseFloat(matcher[3]),
    muscle: parseFloat(matcher[4]),
    fat: parseFloat(matcher[5]),
    water: parseFloat(matcher[6])
  };
};

module.exports = {
  weight,
  fat
};
