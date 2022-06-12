const doTheTask = (taskNumber) => {
  return `Task ${taskNumber} completed`;
};

async function* fetchUsers(fn, taskNumber) {
  const response = await fn(taskNumber);
  yield response;
}

fetchUsers(doTheTask, "one")
  .next()
  .then(({ value, done }) => {
    console.log(value);
  });

fetchUsers(doTheTask, "two")
  .next()
  .then(({ value, done }) => {
    console.log(value);
  });

fetchUsers(doTheTask, "three")
  .next()
  .then(({ value, done }) => {
    console.log(value);
  });
