export function fetchCompensations() {
  const {
    getCompensations,
  } = require("../../model/compensation/compensations");
  return getCompensations();
}
