Project Title: Space Nerd Lounge
Purpose of Project: The purpose of this web app is to play around with the Nasa Api which we did in class(100devs)
and also serve asa a safe space for nerds to geek out on pictures from space.
Introduction: This project is pretty simple and straightforward I had plans of adding a text-speech for the alert option but I guess I'd just build a web app with text to sppeech instead.
Psuedo-coding / Thought-process:
~I grabbed the button tag and save in a variable
~ Use the event listener to make it listen for a click and run a function-the getFetch function
~The getFetch function holds a variable that accepts value that is being inputed in the input tag in our html file
~ Next up, it checks if there's a value inputed if not,an alert pops if yes, it runs the url(api url) using the fetch method
~Thereafter, a response is conveyed through json and then 
~We plug or append that data in our html using the document.query selector.
~Something to note, because I wanted the input in date format, I used the & in order for me to add the date key from nasa Api. thereafter, added the searchValue using the bling $
~ The hd url is what was used to save images on the nasa api

~Pretty straightforward right?!