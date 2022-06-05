export function fetchCompensation(compensationId) {
  const { getCompensation } = require("../../model/compensation/compensations");
  return getCompensation(compensationId);
}
