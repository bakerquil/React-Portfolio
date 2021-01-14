import React from "react";
import Thumbnail from "../Thumbnail/Thumbnail";
import "./style.css"

const Project = () => {
    return(
       <div>
           <h1 className="center">Projects</h1>
        <Thumbnail
        image="https://raw.githubusercontent.com/v-lax/movie_trailer_web_app/main/assets/deployed.png"
        title="Movie Trailer Web App"
        description="We felt that we could improve on the user's experience by not just providing the official trailer but the Honest Trailer from the YouTube API. 
        As an added bonus for the user we thought we would share with the user some available photos of the Actors/Actresses from the Google Image API."
        github="https://github.com/v-lax/movie_trailer_web_app"
        />
         <Thumbnail
        link="https://github.com/bakerquil/Budget_Tracker"
        image="https://user-images.githubusercontent.com/63992745/103844317-a11fc700-5067-11eb-96a6-e36e91f8fd34.png"
        title="Budget Tracker"
        description="The budget tracker has had a service worker and a web manifest added so that the the application can not only have offline functionality to update when the user connects back to the web but also save the users data using mongodb."
        />
         <Thumbnail
        link=""
        image=""
        title=""
        description=""
        />
        
       </div>
    )
}

export default Project