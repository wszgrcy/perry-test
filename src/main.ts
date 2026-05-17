// failed
const __defProp = Object.defineProperty;
const __export = (target: Record<string, any>, all: Record<string, any>) => {
  for (let name in all) __defProp(target, name, { get: all[name], enumerable: true });
};
__export(
  {},
  {
    a: () => 1,
  },
);
// success
// const __export = (target: Record<string, any>, all: Record<string, any>) => {
//   for (let name in all) Object.defineProperty(target, name, { get: all[name], enumerable: true });
// };
// __export(
//   {},
//   {
//     a: () => 1,
//   },
// );
