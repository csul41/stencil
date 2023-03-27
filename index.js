//rob kwasowski helped me with this code

// redo the html page and CSS to make it look better
// add better images
// rework the array and objects
let laugh = [
  {
    cueStart: 2.0,
    cueEnd: 3.5,
    Image: "media/hbird1.png",
  },
  {
    cueStart: 5.0,
    cueEnd: 6.5,
    Image: "media/hbird2.png",
  },

  {
    cueStart: 8.0,
    cueEnd: 9.5,
    Image: "media/hbird3.png",
  },

  {
    cueStart: 11.0,
    cueEnd: 25.0,
    Image: "media/hbird_motion.gif",
  },
];
// grab the video element and store the current time
let video = document.querySelector(".video-container > video");
let currentTime = video.currentTime;

// add an event listener to the video element
video.addEventListener(
  "timeupdate",
  function () {
    let currentTime = this.currentTime;
    console.log(currentTime);
    // loop through the array and check if the current time is between the cueStart and cueEnd
    for (let i = 0; i < laugh.length; i++) {
      if (
        currentTime >= laugh[i].cueStart &&
        currentTime <= laugh[i].cueEnd &&
        laugh[i].Image
        //add in the && laugh[i].Style here and add in the querySelector for the style above the console.log
      ) {
        document.querySelector(".video-box > img").src = laugh[i].Image;
        console.log(currentTime);
        break;
      } else {
        // if the current time is not between the cueStart and cueEnd, set the image source to a transparent pixel
        document.querySelector(".video-box > img").src = "media/pixel.gif";
      }
    }
  },
  false
);
