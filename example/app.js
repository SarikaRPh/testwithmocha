const displayHeader = () => {
  return "Basic Arithmetic";
};


const addnumbers = (a, b) => {
    return a + b;
};

const multiplynumbers = (a, b) => {
  return a * b;
};

const dividenumbers = (a, b) => {
  return a / b;
};


const firstarray = (arr)=>{
  //let arr = [8, 4, 9 , 0];
  return arr[0];
};

module.exports = { displayHeader, addnumbers, multiplynumbers, dividenumbers, firstarray};
