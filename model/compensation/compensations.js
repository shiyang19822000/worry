export async function getCompensations() {
  const { fetchCompensations } = require("./compensation");
  const request = await fetchCompensations();
  return request.data;
}
