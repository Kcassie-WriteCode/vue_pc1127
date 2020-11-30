import request from "@utils/request";
import mockRequest from "@utils/mockRequest";
export const reqCategoryList = () => {
  return request({
    method: "GET",
    url: "/product/getBaseCategoryList",
  });
};
export const reqBanners = () => {
  return mockRequest({
    method: "GET",
    url: "/banners",
  });
};
export const reqFloors = () => {
  return mockRequest({
    method: "GET",
    url: "/floors",
  });
};
