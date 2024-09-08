import React, { useState, useEffect } from "react";
import image1 from "../assets/story/story1.jpg";
import image2 from "../assets/story/story2.jpg";
import image3 from "../assets/story/story3.jpg";
import image4 from "../assets/story/story4.jpg";
import image5 from "../assets/story/story5.jpg";
import image6 from "../assets/story/story6.jpg";
import image7 from "../assets/story/story7.jpg";
import image8 from "../assets/story/story8.jpg";
import image9 from "../assets/story/story9.jpg";
import image10 from "../assets/story/story10.jpg";
import image11 from "../assets/story/story11.jpg";
import image12 from "../assets/story/story12.jpg";
import image13 from "../assets/story/story13.jpg";
import Modal from "./Modal"; // Import the Modal component
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

// Story texts for each image
const storyTexts = {
  "Ancient Village Ruins": "Once upon a time, in a hidden corner of the ancient forest, there lay a forgotten village where magic was once a daily reality. This was a place where mystical beings roamed, and enchantments whispered through the trees. Centuries ago, the village had been renowned for its wise witch, Elara, whose spells could bend the very fabric of reality.",
  "Wise Witch Elara": "Elara was known for her unparalleled skill in weaving illusions that danced between the realms of the seen and the unseen. Her favorite pastime was crafting enchanting scenes for the villagers, bringing their wildest dreams and deepest fears to life. She would summon magnificent dragons to soar across the skies and gentle faeries to flit among the flowers, all through her powerful magic.",
  "Elara’s Magic": "Her magic was a spectacle of wonder, where dragons soared through the sky and faeries fluttered among the blooming flowers. These enchanting scenes captivated the village, blurring the line between fantasy and reality",
  "The Crystal Artifact": "As time passed, Elara’s magic slowly faded into legend, and the village fell into obscurity. The once vibrant place became a silent relic, with only whispers of her enchantments lingering in the air. Hidden deep within the village ruins lay an ancient crystal artifact, imbued with Elara’s lost magic.",
  "Modern Explorer Lila": "Centuries later, in the present day, a young explorer named Lila stumbled upon the ruins of this forgotten village. Armed with curiosity and determination, she began to uncover the remnants of the past—old scrolls, forgotten artifacts, and the peculiar crystal that held Elara’s lost magic.",
  "Activating the Device": "Using modern technology, Lila created a device that could revive the ancient magic through augmented reality. As she activated the device, the crystal’s power surged, and the once-ruined village began to transform before her eyes.",
  "Transformation of the Village": "The ancient village, once in ruins, was brought back to life. The crumbling walls and overgrown vines gave way to a vibrant, magical world, where dragons soared in the sky and faeries danced through the air.",
  "Enchanted Forest": "Lila ventured further into the enchanted forest, where trees glowed with an otherworldly light, and magical creatures roamed freely. The blend of Elara’s ancient enchantments and modern technology created a world of surreal beauty.",
  "Magical Creatures": "Dragons, faeries, and other mythical creatures moved harmoniously in this revived world. Each creature added a unique charm, and the village bustled with life again, just as it had in Elara’s time.",
  "Enchanted Lake": "Lila found herself standing by a tranquil, sparkling lake, where starlight reflected off the water’s surface. Mystical creatures emerged from the depths, their presence a testament to the magic that had once filled this land.",
  "Lila’s Journey": "As she wandered through the transformed village, Lila’s heart filled with wonder. She walked paths that once echoed with the footsteps of ancient villagers, now brought to life by the magic she had rediscovered.",
  "Legacy of Magic": "The revived village became a celebration of Elara’s legacy. Ancient wonders and modern technology blended seamlessly, creating a place where magic once again thrived, enchanting new generations.",
  "Bridging Time": "Through Lila’s journey, the village stood as a testament to the enduring power of magic. The augmented reality she had crafted bridged the gap between the ancient past and the modern present, reminding all who saw it that magic, in one form or another, always finds its way back into our world."
};

const images = [
  { src: image1, text: "Ancient Village Ruins" },
  { src: image2, text: "Wise Witch Elara" },
  { src: image3, text: "Elara’s Magic" },
  { src: image4, text: "The Crystal Artifact" },
  { src: image5, text: "Modern Explorer Lila" },
  { src: image6, text: "Activating the Device" },
  { src: image7, text: "Transformation of the Village" },
  { src: image8, text: "Enchanted Forest" },
  { src: image9, text: "Magical Creatures" },
  { src: image10, text: "Enchanted Lake" },
  { src: image11, text: "Lila’s Journey" },
  { src: image12, text: "Legacy of Magic" },
  { src: image13, text: "Bridging Time" }
];

const HeroSection = () => {
  const [modalImage, setModalImage] = useState(null);
  const [modalText, setModalText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState(""); // To show typing effect
  const [fullText, setFullText] = useState(""); // Full text for the story
  const [typingIndex, setTypingIndex] = useState(0);

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  // Function to trigger typing effect
  useEffect(() => {
    if (typingIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[typingIndex]);
        setTypingIndex(prev => prev + 1);
      }, 50); // Adjust typing speed here (50ms per character)
      return () => clearTimeout(timeout); // Clean up timeout to avoid memory leaks
    }
  }, [typingIndex, fullText]);

  // Function to open modal and start typing effect
  const openModal = (image, textKey) => {
    setModalImage(image);
    setModalText(textKey);
    setIsModalOpen(true);
    // Set full story text for the modal based on the image clicked
    const storyText = storyTexts[textKey];
    setFullText(storyText);
    setDisplayedText(""); // Clear previously displayed text
    setTypingIndex(0); // Reset typing index to start fresh
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
    setModalText("");
    setDisplayedText("");
  };

  return (
    <div id="story" className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Experience the 
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}magic of augmented reality
        </span> 
      </h1>
      <p data-aos="fade-up" ata-aos-easing="ease-out-cubic" data-aos-duration="2000" className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Immerse yourself in a realm where your surroundings come alive with wonder, 
        as augmented reality transforms your world into a canvas of captivating experiences. 
        Witness the fusion of digital artistry and real-life interactions, 
        creating a mesmerizing tapestry that enchants, engages, and redefines the way you perceive reality.
      </p>

      <h2 className="mt-10 text-lg text-center text-orange-500 max-w-3xl font-mono">Click Image and Read Story!</h2>

      <div  className="flex flex-wrap justify-center mt-12">
        {images.map((image, index) => (
          <div 
            key={index}
            className="relative m-4 cursor-pointer"
            style={{
              transform: `rotate(${index % 2 === 0 ? 5 : -5}deg)`,
              transition: "transform 0.3s"
            }}
            onClick={() => openModal(image.src, image.text)}
          >
            <img 
              src={image.src} 
              alt={image.text} 
              className="w-80 h-60 object-cover border border-gray-300 shadow-lg"
            />
            <p className="absolute bottom-0 left-0 bg-black text-white text-xs p-2 w-full text-center">
              {image.text}
            </p>
          </div>
        ))}
      </div>

      {/* Modal component with typing effect text */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        image={modalImage}
        displayedText={displayedText} // Passing the typing effect text here
      />
    </div>
  );
};

export default HeroSection;
