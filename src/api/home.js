import request from "@utils/request";
export const getBaseCategoryList = () => {
  return request({
    method: "GET",
    url: "/product/getBaseCategoryList",
  });
};
