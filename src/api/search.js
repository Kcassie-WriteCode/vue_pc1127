import request from "@utils/request";
export const reqProductList = (data) => {
  return request({
    method: "POST",
    url: "/list",
    data,
  });
};
