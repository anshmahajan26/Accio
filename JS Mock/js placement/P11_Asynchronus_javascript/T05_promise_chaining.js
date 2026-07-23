//Promise chaining means connecting multiple asynchronous tasks one after another.
function getUser() {
  return Promise.resolve({ id: 1, name: "Om" });
}

function getOrders(userId) {
  return Promise.resolve(["Laptop", "Phone"]);
}

getUser()
  .then((user) => {
    console.log(user.name);
    return getOrders(user.id);
  })
  .then((orders) => {
    console.log(orders);
  })
  .catch((error) => {
    console.log(error);
  });