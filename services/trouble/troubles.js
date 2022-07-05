import { getTroubleList } from "../../model/trouble/troubles";

/** 获取列表 */
export async function fetchTroubleList(pageIndex = 1, pageSize = 20) {
  const { getTroubleList } = require("../../model/trouble/troubles");
  return getTroubleList(pageIndex, pageSize);
}
