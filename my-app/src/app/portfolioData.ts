export interface Portfolio {
    name: string; 
    description: string; 
    image: string; 
    image_alt: string; 
    link: string; 
  }
  
  export const portfolio: Portfolio[] = [
    {
      name: "Amogh's Great Website",
      description:
        "This is my first website and I hope you enjoy it. I made it through HTML and the help of the Hack4Impact Starter Pack!",
      image: "wwy.jpg",
      image_alt: "Amogh's Great Website",
      link: "/", 
    },
    {
      name: "Olympic Rings Project",
      description:
        "The goal of this project was to draw the American flag and the Olympic rings using Python. My code used the built-in turtle function to draw the flag.",
      image: "Olympicrings.png",
      image_alt: "Olympic Rings Project",
      link: "https://github.com/Amogh76/Olympic_Rings", 
    },
    {
      name: "Mortgage GUI Project",
      description:
        "For this project, I created a basic UI within the IDLE Shell that could calculate mortgage and compound interest using Python functions/libraries.",
      image: "MortgageGUI.png",
      image_alt: "Mortgage GUI Project",
      link: "https://github.com/Amogh76/Mortgage-GUI", 
    },
    {
      name: "Study Buddy App",
      description:
        "For this project, I made an app that functions as a study buddy finder for introverted students who need help with their studies.",
      image: "Figma.png",
      image_alt: "Study Buddy App",
      link: "https://www.figma.com/proto/oxWwOXFNJELDARRafo1iHj/studybuddy", 
    },
  ];
  