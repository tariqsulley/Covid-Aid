# Covid-Aid

The main idea behind the app is Global Positioning System(GPS) tracing where a user's location is anonymously tracked via GPS in the form of latitude, longitude, and the date and time in which it was taken. So in an unfortunate event where a user tests positive for covid-19, the user would have to share his/her GPS coordinates to a server that is connected to a database. In order for the data to persist even when the server is not running, we built the server with a RESTful application programming interface (API) in node.js and stored the data on MongoDB. One important formula we learned in the classroom under coordinate geometry is the formula for finding the distance between two points in space which is √(x2 - x1)^2 + (y2 - y1)^2 where (x1,y1) and (x2,y2) are two points in space. Long have we used that formula in theory but our app's algorithm utilizes this formula from our math textbooks into real-world use and thanks to this formula we can calculate the distance between a user who has tested positive for covid-19 and a user who has not tested for his/her covid status and if the calculated distance is less than a threshold value, it means the two people have possibly been in contact for a period of time and so the other user who has an unknown covid status would be informed that he/she might have possibly come into contact with a covid-19 infected person and this will help promote early testing and possibly early self-isolation if the need be and this is going to tremendously ameliorate Ghana's plight against covid-19.
Even apart from the main feature of the app, it has other features such as display of general statistics of Ghana's covid-19 information such as our cumulative cases, the total number of recovered people, active cases, and deaths, and this data is being scraped from worldometers.com which in turn scrapes its data from the Ghana Health Sevices's website. The reason why we didn't directly scrape data from the Ghana Health Service's website is that the hypertext markup language on worldometers is easier to read and find where the required data to scrape is. The app also displays general information about covid-19 to help educate the general populace about covid-19 and what they should and should not do to protect themselves against this dreaded virus. The tools we used for this project include react native, node js for the server, and  MongoDB for the database

![Home Page](https://i.imgur.com/AIjbXgm.png)

![Trails Screen](https://i.imgur.com/WHM1M0n.png)

![Covid_Info1](https://i.imgur.com/FKsHWvw.png)

![Covid Info2](https://i.imgur.com/9cWoSbH.png)

![Covid Info3](https://i.imgur.com/oWWowEx.png)

![Covid Info4](https://i.imgur.com/VJXNC8z.png)

![Covid Info5](https://i.imgur.com/XYWYClT.png)

![Side Bar](https://i.imgur.com/OYd63Yd.png)

![Help View](https://i.imgur.com/hCxMpcY.png)



