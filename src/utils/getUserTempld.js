import { v4 as uuidv4 } from "uuid";
function getUserTempId() {
  //先获取，看有没有
  let userTempId = localStorage.getItem("userTempId");
  if (userTempId) {
    return userTempId;
  }
  //设置userTempId
  userTempId = uuidv4();
  localStorage.setItem("userTempId", userTempId);
  return userTempId;
}
export default getUserTempId;
