export  async function trycatch(promise: any) {
  try {
    return [await promise, null];
  } catch (e: any) {
    return [null, e];
  }
}
