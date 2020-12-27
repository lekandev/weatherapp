 const api = {
     key: "",
     baseUrl: "http://"
 }

 const searchbox = document.querySelector(".search-box");
 searchbox.addEventListener("keypress", setQuery);

 function setQuery(evt) {
     getResults(searchbox.value);
     console.log("searchbox.value");
 }