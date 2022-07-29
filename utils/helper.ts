export const callAll =
  (...fns) =>
  (...args) =>
    fns.forEach((fn) => fn?.(...args));

export function combineLayouts(...layouts) {
  return layouts.reduce((a, b) => {
    return (...args) => a(b(...args));
  });
}
