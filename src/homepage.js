import FrontImage from './assets/edo-plats.jpg'

const loadHomePage = () => {
  const contentDiv = document.getElementById("content");

  const header = document.createElement("header");
  const title = document.createElement("h1");
  title.textContent = "Welcome to THIS restaurant!";

  const frontImage = new Image();
  frontImage.src = FrontImage;

  const blurb = document.createElement("article");
  blurb.textContent =
    "Potato ipsum, dolor sit amet consectetur adipisicing elit. Recusandae molestias ab molestiae quis totam, ipsum quidem. Beatae pariatur voluptates dolores eveniet quos et, dolorem sint minima ad asperiores. Quis, quod!"
        .repeat(5);

  contentDiv.appendChild(title);
  contentDiv.appendChild(frontImage);
  contentDiv.appendChild(blurb);
};

export default loadHomePage;
