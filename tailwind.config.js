module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/Components/**/*.{js,ts,jsx,tsx}",
    "./src/util.js",
  ],
  theme: {
    extend: {
      colors:{
        "custom-blue" : "#4A90E2",
        "for-label" :"#1F4B99",
        "white" : "#FFFFFF",
        "lightGray" : "#F5F5F5",
        "hoverColor" :"#357ABD",
        "mainTextColor" :"#333333 "
      },
      borderRadius :{
        "customRadius" : "5px",
        "formRadius" :"10px",
      },
      fontSize :{
        "custom" :"16px",
        "textLabel":"18px",
      },
      screens:{
        'smaller' : {'max':'1095px'},
        'moreSmaller':{'max':'856px'},
        'lessthan464':{'max':'464px'},
      },
    },
  },
  plugins: [],
};
