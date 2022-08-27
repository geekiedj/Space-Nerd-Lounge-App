//grabbing the button tag from html when it listens for a click, run the getfetch function
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
    //when a value is inputed, get data by plugging in the url and make a fetch action
    const searchValue = document.querySelector('input').value
    if(!searchValue){
        alert("Bruuuhhhhhh how do i search empty???!")
    }

    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=LHwJMNblsVWAhk3m9WPRGuCaAN8tGFFOe9K3AEAW&date=${searchValue}`
    
    fetch(apiUrl)
       .then(res => res.json()) //response would be conveyed through json
       .then (data =>{
         console.log (data)
         //if (data.media_type === 'image'){
            document.querySelector('img').src = data.hdurl
        //To be used when i want to work on video features }else if (data.media_type === 'video'){ 
           // document.querySelector('iframe').src = data.url
        // }
        //come back to this and try to hide iframe.
         
         document.querySelector('h3').innerText = data.explanation
       })
       .catch(err => {
          console.log(`error $(err)`)
       });

}