import order from './pizza_order.mjs';

order('페퍼로니 피자')
  .then((fn) => {
    // fn : resolve()를 통해 반환된 함수
    fn();
  })
  .catch((err) => {
    // err : reject()를 통해 반환된 값
    console.log(err);
  });
