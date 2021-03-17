const p1 = new Promise((resolve, reject) => {
  console.log("A");
  resolve(["B", "C"]);
});
const p2 = new Promise((resolve, reject) => {
  resolve(["D"]);
});
const test = async () => {
  try {
    const d = await p1;
    const d2 = await p2;
    console.log(d.join(" "), d2.join(" "));
  } catch (err) {
    console.log(err);
  }
};

test();
