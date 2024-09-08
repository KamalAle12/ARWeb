
import { University } from "lucide-react";
import { Hospital } from "lucide-react";
import { Building2, Plane, Gamepad2, TimerReset} from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";
import ProgressCircle from "../components/ProgressCircle";

export const navItems = [
  { label: "Story", href: "#story" },
  { label: "Features", href: "#features" },
  { label: "Journey", href: "#journey" },
  { label: "Engagement", href: "#progress"},
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <University/>,
    text: "Education and Training",
    description:
      "AR enhances the learning process by allowing students to interact with 3D models, making it easier to visualize complex subjects like anatomy, physics, and history.",
  },
  {
    icon: <Hospital/>,
    text: "Surgical Assistance and Medical Training",
    description:
      "AR provides surgeons with real-time data overlays during operations and allows medical trainees to practice complex procedures in virtual environments, improving accuracy and training outcomes.",
  },
  {
    icon: <Building2 />,
    text: "3D Building Visualization",
    description:
      "With AR, architects and real estate developers can showcase 3D models of buildings, helping clients explore spaces before they are built or designed.",
  },
  {
    icon: <Plane/>,
    text: "Augmented Tourist Experiences",
    description:
      "Travelers can use AR to receive real-time information about landmarks and destinations, enhancing the exploration of new places with historical and cultural insights.",
  },
  {
    icon: <Gamepad2 />,
    text: "Immersive Gameplay",
    description:
      "AR merges the virtual world with the physical one, transforming gaming experiences and creating immersive, real-world interactions, such as those seen in AR-based games like Pokémon Go..",
  },
  {
    icon: <TimerReset />,
    text: "Tactical Training and Simulations",
    description:
      "AR helps soldiers train in simulated environments and provides real-time tactical data on the battlefield, improving preparedness and decision-making in critical situations.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "https://www.linkedin.com/in/kamal-ale-magar-615b2622a/", text: "Linkedin" },
  { href: "https://github.com/KamalAle12", text: "Github" },
];


