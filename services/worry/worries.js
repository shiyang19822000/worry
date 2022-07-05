import { getWorry, getWorryList } from "../../model/worry/worries";

/** 获取列表 */
export async function fetchWorryList(pageIndex = 1, pageSize = 20) {
  const { getWorryList } = require("../../model/worry/worries");
  return getWorryList(pageIndex, pageSize);
}

/** 获取文章 */
export function fetchWorry(worryId) {
  const { getWorry } = require("../../model/worry/worries");
  return getWorry(worryId);
}
