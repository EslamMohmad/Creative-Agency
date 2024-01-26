import {
  faBolt,
  faMobileScreen,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import img1 from "../componets/home/assets/Home/1.jpg";
import img2 from "../componets/home/assets/Home/2.jpg";
import img3 from "../componets/home/assets/Home/3.jpg";
import img4 from "../componets/home/assets/Home/4.jpg";

import client1 from "../componets/about/assets/client1.jpg";
import client2 from "../componets/about/assets/client2.jpg";
import client3 from "../componets/about/assets/client3.jpg";

import team1 from "../componets/about/assets/team1.jpg";
import team2 from "../componets/about/assets/team2.jpg";
import team3 from "../componets/about/assets/team3.jpg";
import team4 from "../componets/about/assets/team4.jpg";
import team5 from "../componets/about/assets/team5.jpg";
import team6 from "../componets/about/assets/team6.jpg";
import {
  faBehance,
  faLinkedinIn,
  faFacebookF,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export const imgsArr = [
  { img: img1, text: ["hoodie", "jacket"] },
  { img: img2, text: ["eminem", "style"] },
  { img: img3, text: ["black", "panther"] },
  { img: img4, text: ["modren", "couch"] },
];

export const menuItems = {
  main: [
    { txt: "home", route: " " },
    { txt: "about us", route: "/about" },
    { txt: "portfolio", route: "/portfolio" },
    { txt: "showcasses", route: "/showcasses" },
    { txt: "contact", route: "/contact" },
  ],
  aside: {
    phone: "01002623871",
    address: "elhegaz-st cairo egypt",
    email: "eslammohmad998@gmail.com",
  },
};

export const servicesArr = [
  {
    icon: faBolt,
    heading: "Digital Marketing",
    text: "Tempore corrupti temporibus fuga earum asperiores fugit laudantium.",
  },
  {
    icon: faMobileScreen,
    heading: "Web & App Development",
    text: "Tempore corrupti temporibus fuga earum asperiores fugit laudantium.",
  },
  {
    icon: faWandMagicSparkles,
    heading: "Graphic Design",
    text: "Tempore corrupti temporibus fuga earum asperiores fugit laudantium.",
  },
];

export const clients = {
  slider: [
    { name: "alex regelman", img: client1, jop: "co-founder, colabrio" },
    { name: "alex regelman", img: client2, jop: "co-founder, colabrio" },
    { name: "alex regelman", img: client3, jop: "co-founder, colabrio" },
  ],
  circleProgress: [
    { value: "90", heading: "project", text: "consulting" },
    { value: "75", heading: "add", text: "development" },
  ],
};

export const teams = {
  slider: [
    { img: team1, name: "Jonson Leo", jop: "Founder" },
    { img: team2, name: "Hasib sharif", jop: "General Manager" },
    { img: team3, name: "Legender Mao", jop: "3D Visualization" },
    { img: team4, name: "Leio Man", jop: "Founder" },
    { img: team5, name: "Robert Front", jop: "CEO Founder" },
    { img: team6, name: "Matt Huk", jop: "3D Visualization" },
  ],
  icons: [faFacebookF, faXTwitter, faBehance, faLinkedinIn],
};
