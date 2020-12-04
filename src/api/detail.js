import request from "@utils/request";
export const reqProductDetail = (id) => {
  return request({
    method: "GET",
    url: `/item/${id}`,
  });
};
