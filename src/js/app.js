/* eslint-disable */

import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); //print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  let background_display;
  let background_image;

  if (variables.includeCover === false) {
    background_display = "none";
  } else {
    background_display = "";
  }

  background_image = document.querySelector("#background-image");

  background_image.style.display = background_display;
  document.querySelector("#profile-image").src = variables.avatarURL;
  background_image.src = variables.background;

  document.querySelector(
    "#full-name"
  ).textContent = `${variables.name} ${variables.lastname}`;

  document.querySelector("#sm-bar").classList = variables.socialMediaPosition;

  document.querySelector("#role").textContent = variables.role;

  document.querySelector(
    "#address"
  ).textContent = `${variables.city}, ${variables.country}`;

  document.querySelector(
    "#link-twitter"
  ).href = `https://twitter.com/${variables.twitter}`;
  document.querySelector(
    "#link-github"
  ).href = `https://github.com/${variables.github}`;
  document.querySelector(
    "#link-instagram"
  ).href = `https://instagram.com/${variables.instagram}`;
  document.querySelector(
    "#link-linkedin"
  ).href = `https://linkedin.com/${variables.linkedin}`;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: "alesanchezr",
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); //render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new valus
    });
  });
};
