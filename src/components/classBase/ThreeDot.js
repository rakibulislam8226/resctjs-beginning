const ThreeDot = () => {
  const fullname = {
    fname: "Rakib",
    lname: "islam",
  };

  const biodata = {
    id: 1,
    ...fullname,
    age: 26,
    gender: "male",
  };
  console.log(biodata);
};
export default ThreeDot;
