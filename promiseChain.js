const genericAPIReq = () =>
  new Promise((resolve, rejecct) => {
    resolve({ body: "My test" });
  });

genericAPIReq()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console(err));
