const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
      .then(response => response.json())
      .then(data => data.orders)
}

const postOrder = (order) => {
  return fetch("http://localhost:3001/api/v1/orders", {
    method: "POST",
    body: JSON.stringify(order),
    headers: {
      "Content-Type": "application/json"
    },
  })
    .then((response) => response.json())
    .then((data) => data);
}

export {
  getOrders,
  postOrder
}