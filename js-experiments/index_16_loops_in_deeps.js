let j = 42;
let i = 0;
for (; ; ) {
  if (i > 10 || j == 42) {
    break;
  }
  console.log (i);
  i++;
}


for (let i = 0, j=100; i < 6; i++, j += 200) {
  console.log (i + " - " + j);
  if (i < 3) {
    console.log ("~~~");
  }
}
