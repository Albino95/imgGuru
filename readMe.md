Hello and warmest regards,

In this project I have implemented Unsplash API to browse through different Images. (I would like to apologize for not being correct but imgur API was not responding due to high demand. I tried to bypass by VPN and by deleting all Cookies but still I had no results. As such I found Unspash API to do the same job and thought to give it a go. Apologies)

The technology used is NEXT.JS, Redux, TailwindCSS, Material UI, Google Auth, FramerMotion, MongoDB (For User Auth part), axios etc

For the API call I have used axios to make a request to Unsplash Api (after creating an account) to retrive the data (app/api/data). The data is stored in the store.js via redux, and requested in Feed.jsx where the imageGallery is shown. A mapping of the images and formatting is done in ImageCardList && ImageCard.

For the Single Image Preview the NextJs Routing is used by creating image/[id]a folder in the app directory corresponding directly with the URL. That allows us to call the the url directly in the page Component as params, making it possible to make a dedicated call to the ID URL, formatting the component afterwards.

Also I have Integrated Google Auth where combining it with NextAuth (app/api/[...nextauth]) you can use you Google Account to log in. While if the user already exists you can login or else you can register. For this also a model of User is created in (app/models/Users) and all the data is stored in Mongo DB.

For anything else fell free to contact me

Best of Wishes


Albino Ndreu