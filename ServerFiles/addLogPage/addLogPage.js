// const { FILEPASSCODE } = require(`./code.js`);
const BASE_URL = 'http://localhost:8080';
function inputBoxSmall(width,name){
    return `<input type="text" id="${name}" style="width: ${width}px;"></input>`
}
function addSmallBox(howMany,size, name){
    finalString = ""
    for(let i = 0; i < howMany;i++){
        finalString += inputBoxSmall(size,name)
    }
    return finalString; 
}
var dataList = document.getElementById(`DataTableInc`)
function createScript(name,ID) {
    // hey this is pretty ugly and hard to work with change it to like 3 differnt inputs and do collection for all of them by giving them the same class 
    // name so like document.getElementsByClassName("nameId") 
    // and use whatever that returns. 
    currentString = dataList.innerHTML
    return currentString + `<tr id = "Data:${name}+${ID}">
    <th>${name}</th>
        <td><input type="time" placeholder="0011"></td>
        <td><input type="time"></td>
        <td><input type="time"></td>
        <td><input type="time"></td>
        <td><button id="Clear${ID}"> X </button></td>
</tr>`
} 
document.getElementsByClassName
const grabAllUsers = async (string) => {
    try {
      // in practice you should get ALL Consumers WHERE Consumers-Location = 25-Beachwood 
      const response = await axios.get(`${BASE_URL}/consumerData`);
      emptyList = [] 
      const data = response.data;
      data.forEach((ele,ind)=>{
        fullName = ele.fullName.toUpperCase()
        if(fullName.includes(string.toUpperCase())){
             emptyList.push(ele.fullName)}
        })
      return emptyList;
    } catch (errors) {
      console.error(errors);
    }
  };
  const grabThisUser = async (string) => {
      try {
      const response = await axios.get(`${BASE_URL}/consumerDataName` , { params:{body:string}});
      const data = response.data;
        return data;
    } catch (errors) {
      console.error(errors);
    }
  };
var searchBar = document.getElementById('searchBar')
var listContain = document.getElementById(`ListContainer`)
var cosumerList = document.getElementById(`ConsumerTable`)
var MapOFConsumers = {}
// MapOFConsumers["Full Name"] = { 
//     PickUpTime:930,
//     ArrivalTime:1100,
//     DepartTime:1400,
//     DropOffTime:1400
// }


async function clearSearch() {
    listContain.innerHTML = ``
}
async function updateSearchListBasedOnInputFromSearchBar(params) {
    var usersSearch = document.getElementById('searchBar').value
    list = await grabAllUsers(usersSearch)
    htmlString = ""
    htmlList = []
    if(list.length == 0){
        listContain.innerHTML = `<li>No consumers found</li>`
    }
    else {
    list.forEach((ele,ind)=>{
        htmlline = `<li>${ele}<button type = "button" id="Consumer ${ind}" >add Consumer</button></li>`
        if(ind<12){
            htmlList.push(ele)
            htmlString += htmlline
            listContain.innerHTML = htmlString
        }
    })
    htmlList.forEach((ele,ind)=>{
        let addConsumerButton = document.getElementById(`Consumer ${ind}`)
        addConsumerButton.addEventListener("click",async ()=>{
            // this gets a litle complicated so im gonna explain 
            if(ele in MapOFConsumers){
                // checks if we already have any keys with that name. 
                // if there is it wont add it to the map , 
                console.log(`Consumer ${ele} was already added to the list `)
            }
            else
            {
            lengthOfMap = Object.keys(MapOFConsumers).length
            dataList.innerHTML = createScript(ele,lengthOfMap+1)
            // first it creates a script that just gets the username, and gives that script the ID of how many 
            // keys they are in our consumer Map + 1 ,.     
            MapOFConsumers[ele] = {}
            listContain.innerHTML = ""
            // After doing that it puts that key inside the map with no values, later that object will go into the map 
            deleteButton = document.getElementById(`Clear${lengthOfMap+1}`)
            // then we get the delete button and start adding the code for this to work properly
            deleteButton.addEventListener('click',()=>{
            deleteButton.parentElement.parentElement.remove()
            delete MapOFConsumers[ele]
        })
                
        }
        })
    })
    }
    
}

searchBar.addEventListener("keyup", async () => {
    updateSearchListBasedOnInputFromSearchBar()
})
searchBar.addEventListener('focusout',()=>{
    // we need to set a small delay so that 
    setTimeout(()=>{ listContain.innerHTML = ""},150)
})
searchBar.addEventListener('focusin',updateSearchListBasedOnInputFromSearchBar)


