const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const mobile = document.getElementById('mobile')
const email = document.getElementById('email')
//load the data
let savedData;
document.addEventListener('DOMContentLoaded', async () => {
  savedData = await chrome.storage.local.get([
    'firstName',
    'lastName',
    'mobile',
    'email',
  ])

  if (savedData) {
    firstName.value = savedData.firstName
    lastName.value = savedData.lastName
    mobile.value = savedData.mobile
    email.value = savedData.email
  } else {
    console.log('there is no saved data')
  }
})
//save the data
document.getElementById('formSubmit').addEventListener('click', () => {
  console.log(firstName.value)

  const data = {
    firstName: firstName.value,
    lastName: lastName.value,
    mobile: mobile.value,
    email: email.value,
  }

  chrome.storage.local.set(data).then(() => {
    console.log('data saved successfully')
  })
})

document.getElementById("autoFill").addEventListener("click",async()=>{
const [tab]=await chrome.tabs.query({active:true,currentWindow:true})
console.log(tab);

if(tab&& tab.id){
chrome.scripting.executeScript({
  target:{tabId:tab.id},
  func:()=>{
    const fillFilled=(selector,value)=>{
      const input =document.querySelector(selector);
      if(input) input.value=value
    }
    fillFilled("input[id='name']","helloworld")
    
  },
  args:[saveData]
})

}
})
// use the save data to fill the form in any active tab

//styling

//
