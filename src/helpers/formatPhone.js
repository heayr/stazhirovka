export const formatPhone = (str) => {
    if (str[0] === "+" ) {
      str = "+7" + " " + `(${Math.floor(str.slice(2)/10000000)})` + " " +`${Math.floor(str.slice(5)/10000)}`+"-"+`${Math.floor(str.slice(8)/100)}`+"-"+`${str.slice(10)}`
      return str
    }
    str = "+7" + " " + `(${Math.floor(str.slice(1)/10000000)})` + " " +`${Math.floor(str.slice(4)/10000)}`+"-"+`${Math.floor(str.slice(7)/100)}`+"-"+`${str.slice(9)}`
      return str
  };