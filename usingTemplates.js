
//Render Nav Links
let renderNav = (href, title) => {
  return `<a href=${href}><p>${title}</p></a>`
}


//use this as a reference when you're using loops in 
// tempates: https://gist.github.com/wiledal/3c5b63887cc8a010a330b89aacff2f2e
let renderMain = (data) => {
  return `<p>${data.heading}</p>  
    ${data.options.map( (item, i) => `
      <p> ${item} </p>
    `).join("")}
  `
}

//#################################################
//BEGIN TEMP DATA SOURCE
//Built in data
let linkNames = [
  {linkTitle: "Open", linkLink: "#"},
  {linkTitle: "Close", linkLink: "#"},
  {linkTitle: "Settings", linkLink: "#"}
]

//Built in data
let mainData = [
  {
    heading: "Day",
    options: ["Monday, Tuesday, Wednesday, Thursday, Friday, Sunday"]
  },
  {
    heading: "Week",
    options: [40, 41, 42, 43, 44, 45, 46]
  },
  {
    heading: "Time",
    options: ["11:00", "12:00", "1:00", "2:00", "3:00", "4:00"]
  }
];
//END TEMP DATA SOURCE
//#################################################

//Capture the main element and build articles
let main = document.querySelector(".main").querySelector('section');
let nav = document.querySelector(".nav").querySelector('section');

//capture each object in the array
//since data is an array objects we will map over each element in the array.
main.innerHTML = mainData.map( i => {
  return renderMain(i);
})

//render the nav bar based on the temporary data we have stored above. 
linkNames.map( (item) => {
  console.log("item ", item)
  nav.innerHTML += renderNav(item.linkLink, item.linkTitle)
})

