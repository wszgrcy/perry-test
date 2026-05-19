// failed
// import { setAlias } from '@piying/view-core';
// console.log(setAlias);
import { Subject } from 'rxjs';
let a = new Subject();
a.subscribe((value) => {
  console.log(value);
});
a.next(1)
