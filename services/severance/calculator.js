export function calculate(store) {
  if (
    store.q04A01 ||
    store.q04A02 ||
    store.q05A01 ||
    store.q06A01 ||
    store.q07A01 ||
    store.q08A01 ||
    store.q09A01
  ) {
    return "n";
  }
  if (store.q07A02 || store.q08A02 || store.q09A02) {
    return "n1";
  }
  if (
    store.q01A01 ||
    store.q01A02 ||
    store.q01A03 ||
    store.q02A01 ||
    store.q02A02 ||
    store.q03A01 ||
    store.q10A01 ||
    store.q11A01
  ) {
    return "n2";
  }
  return "";
}
