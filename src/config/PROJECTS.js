import Default from "../static/img/w-logo.png"; //SpongeDerp.jpg";
import ChannelOrange from "../static/img/ChannelOrange.png";
import AlgoGif from "../static/img/BubbleSortGif.gif";
import Kombucha from "../static/img/Kombucha.png";
import RaspPi from "../static/img/RaspPi.png";
import PowerSupply from "../static/img/PowerSupply.png";
import Printer from "../static/img/3DPrinter.gif";

/* 
  //Projects Template
    [
      { title: "", img: "", link: "", description: ["",""]},
      { title: "", img: "", link: "", description: ["",""]}
    ] 
*/

export const MAIN_PROJECTS = [
  {
    title: "Channel Orange IO",
    img: ChannelOrange,
    link: "https://channel-orange-dev.firebaseapp.com/",
    description: [
      "Built homemade cryptocurrency ATMs for sale online",
      "Created webstore with React and Shopify API as a sales channel",
      "Integrated camera module and QR Code reading for scanning wallets",
      "Site no longer active, link is for development site"
    ]
  },
  {
    title: "Algorithms Visualizer",
    img: AlgoGif,
    link: "https://visualapp.netlify.com/",
    description: [
      "Used HTML, CSS, and JavaScript to create an interactive website to visualize algorithms",
      "Algorithms implemented: Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort, Djikstra's Algorithm, A* Search"
    ]
  },
  {
    title: "Optimization of HSpice Inverter Chain Schematic with Python",
    img: Default,
    description: [
      "Used python3 to edit an HSpice schematic file with python library functions to optimize the schmematic for the lowest delay between a transient source and capacitor"
    ]
  }
];

export const SIDE_PROJECTS = [
  {
    title: "Wi-Fi Arduino Kombucha Temperature Controller",
    img: Kombucha,
    description: [
      "Wrote C code to create a temperature controller for optimal kombucha brewing",
      "Created temperature probe with a 100k thermistor and voltage divider circuit",
      "Attached a relay shield to the arduino to act as a switch for a heating pad wrapped around a 1 gallon jar"
    ]
  },
  {
    title: "Raspberry Pi Personal VPN",
    img: RaspPi,
    description: [
      "Utilized PiVPN to open a port on Pi and run a personal VPN server",
      "Configured router settings to give Pi a static IP and port forward connections"
    ]
  },
  {
    title: "Raspberry Pi DHCP Server For AdBlocking",
    img: RaspPi,
    description: [
      "Installed PiHole to create a DHCP server to block content delivered from advertiser URLs",
      "Set Pi as DHCP server instead of the router to block content for all devices"
    ]
  },
  {
    title: "Lab Bench Power Supply",
    img: PowerSupply,
    description: [
      "Converted a PC power supply unit to a voltage supply that can deliver 3V, 5V, and 12V",
      "Saved 40$ building my own supply"
    ]
  },
  {
    title: "3D Printing",
    img: Printer,
    description: [
      "Built 3D printer from kit, Anet A8",
      "Printed various upgrades for the printer and various items"
    ]
  }
];
