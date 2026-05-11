import * as v from 'valibot';
function main(): void {
  console.log('Hello from Perry!');
  // success
  console.log('123');
  // success
  console.log('123' === '123');
  // failed 123 on js / [object Object] on perry
  console.log(v.parse(v.string(), '123'));
  // failed true on js /false on perry
  console.log(v.parse(v.string(), '123') === '123');
  // failed "123" on js / "" on  perry
  console.log(JSON.stringify(v.parse(v.string(), '123')));
  console.log('end');
}

main();
