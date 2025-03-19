function pizzaOrder() {
  return new Promise((resolve, reject) => {
    resolve(() => {
      console.log('피자를 주문했습니다.');
    });

    reject(() => {
      console.log('피자를 주문하지 않았습니다.');
    });
  });
}

pizzaOrder()
  .then((fn) => {
    fn();
  })
  .catch((err) => {
    console.log(err);
  });
