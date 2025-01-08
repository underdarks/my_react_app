import React, { useState } from "react";
import OrderHistory from "./OrderHistory";

/**
 * 해당 컴포넌트는 상품을 관리하고, 주문을 할수 있는 기능을 제공합니다.
 */
const Order = () => {
  //상품 관리(상품 아이디, 이름, 수량, 가격)
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "발난로",
      price: 10_000,
      quantity: 3,
      color: "red",
    },
    {
      id: 2,
      name: "손난로",
      price: 5_000,
      quantity: 10,
      color: "blue",
    },
    {
      id: 3,
      name: "옜날식 석유 난로",
      price: 300_000,
      quantity: 2,
      color: "red",
    },
    {
      id: 4,
      name: "전기 난로",
      price: 1_000_000,
      quantity: 5,
      color: "red",
    },
  ]);

  //주문 내역 관리
  const [orders, setOrders] = useState([]);

  //주문하기 버튼 클릭 이벤트 핸들러
  const handleOrder = (product) => {
    console.log("product : ", product);
    //재고가 0이면 주문을 못하게 막겟습니다.
    //검증(=validation)
    if (product.quantity < 1) {
      alert("재고가 부족합니다.");
      return;
    }

    //재고감소
    setProducts(
      products.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p
      )
    );

    //주문 내역 추가
    setOrders([
      ...orders, //기존에있는 주문내역데이터를 복사
      //새로운 데이터를 하나 추가해주는거에요
      {
        id: Math.random(), //주문 id
        products: product, //상품 데이터
        quantity: 1, //주문수량
        address: "서울", //주소
        shippingType: 0, //배송완료처리
      },
    ]);
  };

  return (
    <div>
      <h1>상품 리스트</h1>
      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>상품명</th>
            <th>가격</th>
            <th>재고량</th>
            <th>색깔</th>
            <th>주문</th>
            <th>기능</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}원</td>
              <td>{product.quantity}</td>
              <td>{product.color}</td>
              <td>
                <button onClick={() => handleOrder(product)}>주문하기</button>
              </td>
              <td>
                <button>장바구니담기</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <br />
      <br />
      <OrderHistory orders={orders} />
    </div>
  );
};

export default Order;
