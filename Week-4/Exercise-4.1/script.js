const resolutionTime = 1000;

const getNumber = (callback) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 1000);
      const result = randomNumber % 5 === 0;
      if (result) {
        reject(randomNumber);
        callback();
      } else {
        resolve(randomNumber);
        callback();
      }
    }, resolutionTime);
  });

const callback = () => {
  console.log("Callback trigged");
};

getNumber(callback)
  .then((randomNumber) => console.log(`${randomNumber} is not divisible by 5`))
  .catch((randomNumber) => console.log(`${randomNumber} is divisible by 5`))
  .finally(() => console.log("Result finally printed!"));
