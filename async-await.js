// Here is an example with Promises where we need to wait for both responses before performing an action

const promise1 = () =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 19);
  });

const promise2 = () =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 23);
  });

// Challenge 1

// Try using JUST Promise syntax to sum the results of both Promises and console log the message below
// "The answer to life, the universe, and everything is: 42"

// REMINDER: If you want to use Promise.allSettled in your answer, you will need to run the following command in your terminal window first:
// source  update_node.sh

// your code here
promise1()
  .then((data1) => {
    promise2().then((data2) =>
      console.log(
        `The answer to life, the universe, and everything is: ${data1 + data2}`
      )
    );
  })
  .catch((err) => console.log(err));

// ---------------------------------------------------------------------------

// Challenge 2
// Now try the same example, but instead of implementing it with Promises, use Async/await
// Console log: "The answer to life, the universe, and everything is: 42"

// your async/await code here
const combinePromise = async () => {
  const newPromise1 = await promise1();
  const newPromise2 = await promise2();
  console.log(
    `The answer to life, the universe, and everything is: ${
      newPromise1 + newPromise2
    }`
  );
};

combinePromise();
