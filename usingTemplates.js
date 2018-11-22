//Render Article Titles and Headings
let renderMain = (heading, week, options, pay) => {
  return `<form>
  <h4>${heading}</h4>
  <div>
  <form id="schedule">
    <select>
      <option>Monday</option>
      <option>Tuesday</option>
      <option>Wednesday</option>
      <option>Thursday</option>
      <option>Friday</option>
      <option>Sunday</option>
    </select>
  </form>
  </div>
  <h4>${week}</h4>
  ${Array(5).fill().map( (item, i) => ` 
    <p>I am item ${item} index number ${i}</p>
  `)}
  `
}

//Render Nav Links
let renderNav = (href, title) => {
  return `<a href=${href}><p>${title}</p></a>`
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
  
mainData.map( (item) => {
  main.innerHTML += renderMain(item.heading, item.articleInfo, item.videoLink)
})

linkNames.map( (item) => {
  console.log("item ", item)
  nav.innerHTML += renderNav(item.linkLink, item.linkTitle)
})

