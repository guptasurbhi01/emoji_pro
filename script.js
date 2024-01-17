function searchemoji(){
    let inputValue = document.getElementById("search_field").value;
    displayResults(inputValue);
    // return false;
}
function displayResults(searchQuery =""){
    let filteredData = emojiList.filter((e) => {
        if(e.description.indexOf(searchQuery)!= -1){
            return true;
        }
        if (e.tags.some(elem => elem.startsWith(searchQuery))) {
          return true;
        }
        if (e.aliases.some((elem) => elem.startsWith(searchQuery))) {
          return true;
        }
    })
    let parent = document.getElementById("search_result_container");
    parent.innerHTML = ""
    filteredData.forEach((e) => {
        let new_row = document.createElement("tr");
        new_row.classList.add("result");
        let new_emoji = document.createElement("td");
        let new_aliases= document.createElement("td");
        let new_desc = document.createElement("td");
        new_emoji.innerText = e.emoji;
        new_aliases.innerText = e.aliases;
        new_desc.innerText = e.description;
        // console.log(new_aliases);
        new_row.appendChild(new_emoji);
        new_row.appendChild(new_aliases);
        new_row.appendChild(new_desc);
        parent.appendChild(new_row);
    })
}
function displayResult(){
    // let upper = document.getElementById("table");
    let parent = document.getElementById("search_result_container");
    emojiList.forEach((e) => {
        let new_row = document.createElement("tr");
        new_row.classList.add("result");
        let new_emoji = document.createElement("td");
        let new_aliases= document.createElement("td");
        let new_desc = document.createElement("td");
        new_emoji.innerText = e.emoji;
        new_aliases.innerText = e.aliases;
        new_desc.innerText = e.description;
        // let hr = document.createElement("hr");
        // console.log(new_aliases);
        new_row.appendChild(new_emoji);
        new_row.appendChild(new_aliases);
        new_row.appendChild(new_desc);
        parent.appendChild(new_row);
    })
}
document.getElementById("search_field").addEventListener("keyup",searchemoji);
window.onload =()=> displayResult();
