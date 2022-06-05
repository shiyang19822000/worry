export async function getCompensation(compensationId) {
  const { fetchCompensation } = require("./compensation");
  const request = await fetchCompensation(compensationId);
  return request.data;
}
