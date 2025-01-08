import React from "react";

/**
 * 주문 데이터를 받아서 렌더링을 하는 컴포넌트
 */
const OrderHistory = ({ orders }) => {
  console.log("orders : ", orders);

  return (
    <div>
      <h1>주문 내역 리스트</h1>
      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>주문 id</th>
            <th>상품명</th>
            <th>가격</th>
            <th>색깔</th>
            <th>주문수량</th>
            <th>주문일자</th>
            <th>배송위치</th>
            <th>배송일자</th>
            <th>배송완료처리</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order) => (
            // 주문id를 key값으로 사용
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.products.name}</td>
              <td>{order.products.price}</td>
              <td>{order.products.color}</td>
              <td>{order.quantity}</td>
              <td>2024.12.30</td>
              <td>{order.address}</td>
              <td>2024.12.30</td>
              {/* 조건부 렌더링 */}
              <td>{order.shippingType === 0 ? "배송대기" : "배송완료"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderHistory;
