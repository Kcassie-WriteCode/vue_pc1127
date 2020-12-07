import request from "@utils/request";
export const reqCartList = () => {
  return request({
    method: "GET",
    url: "/cart/cartList",
  });
};
export const reqAddToCart = (skuId, skuNum) => {
  return request({
    method: "POST",
    url: `/cart/addToCart/${skuId}/${skuNum}`,
  });
};
export const reqCheckCart = (skuId, isChecked) => {
  return request({
    method: "GET",
    url: `/cart/checkCart/${skuId}/${isChecked}`,
  });
};
export const reqDeleteCart = (skuId) => {
  return request({
    method: "DELETE",
    url: `/cart/deleteCart/${skuId}`,
  });
};
