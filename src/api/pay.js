import request from "@utils/request";
// 获取订单信息列表
export const reqTrade = () => {
  return request({
    method: "GET",
    url: "/order/auth/trade",
  });
};
//获取提交订单信息
export const reqSubmitOrder = ({
  tradeNo,
  consignee,
  consigneeTel,
  deliveryAddress,
  paymentWay,
  orderComment,
  orderDetailList,
}) => {
  return request({
    method: "POST",
    url: "/order/auth/submitOrder",
    params: {
      tradeNo,
    },
    data: {
      consignee,
      consigneeTel,
      deliveryAddress,
      paymentWay,
      orderComment,
      orderDetailList,
    },
  });
};
//获取验证码
export const reqQRCode = (orderId) => {
  return request({
    method: "GET",
    url: `/payment/weixin/createNative/${orderId}`,
  });
};
//获取我的订单列表
export const reqOrderList = (page, limit) => {
  return request({
    method: "GET",
    url: `/order/auth/${page}/${limit}`,
  });
};
//获取支付状态
export const reqPayment = (orderId) => {
  return request({
    method: "GET",
    url: `/payment/weixin/queryPayStatus/${orderId}`,
  });
};
