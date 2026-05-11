import * as v from 'valibot';
function main(): void {
  console.log('Hello from Perry!');
  let ob1 = v.object({ a1: v.string() });
  // success
  console.log('123');
  // success
  console.log('123' === '123');
  // failed 123 on js
  console.log(v.parse(ob1, { a1: '123' }).a1);
  // failed true on js
  console.log(v.parse(ob1, { a1: '123' }).a1 === '123');
  // failed {"a1":"123"} on js
  console.log(JSON.stringify(v.parse(ob1, { a1: '123' })));
  console.log('end');
}

main();
