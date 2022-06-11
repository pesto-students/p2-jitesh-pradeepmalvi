const doTheTask = (taskNumber) => {
  return `Task ${taskNumber} completed`;
};

// Async and await function
const doTask1 = async (fn) => {
  try {
    const response = await fn("one");
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

// Generator function
function* doTask2(fn) {
  const response = fn("two");
  yield console.log(response);
}

// Async and await
doTask1(doTheTask);

// Generator
doTask2(doTheTask).next();

// doTask3();
