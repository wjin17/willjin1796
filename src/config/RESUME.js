/* 
  //Resume Download
    {
      name: <Resume Name>
      filename: <Saved File Name>
      file: <Which File>
    } 
*/

import SWResume from "../static/files/Jin.Willie.Resume.Dec2019.3.pdf";
import HWResume from "../static/files/Jin.Willie.EEResume.Nov2019.pdf";

export const DOWNLOAD = [
  {
    name: "Software Resume",
    filename: "Jin.Willie.Resume.Software",
    file: SWResume
  },
  {
    name: "Hardware Resume",
    filename: "Jin.Willie.Resume.Hardware",
    file: HWResume
  }
];

/* 
  //Skills Template
    {
      name: <Skill Name>
      level: <Level Out Of 5>
    } 
*/

export const SKILLS = [
  { name: "HTML", level: 5 },
  { name: "CSS/SCSS", level: 4 },
  { name: "JavaScript", level: 5 },
  { name: "Python", level: 2 },
  { name: "Golang", level: 3 },
  { name: "React", level: 4 },
  { name: "GraphQL", level: 4 },
  { name: "MongoDB", level: 4 },
  { name: "Docker", level: 3 },
  { name: "Git", level: 3 }
];

/* 
  //Experience Template
    {
        organization: <Company Name>,
        location: <City, State Abv>,
        role: <Job Role>,
        start: <Start Month Year>
        end: <End Month Year>,
        description: [
                <Descriptions>
            ],
        url: <Url>
    } 
*/

export const EXPERIENCE = [
  {
    organization: "Yuzu Menu",
    location: "Fremont, CA",
    role: "Fullstack Developer",
    start: "May 2019",
    end: "Present",
    description: [
      "Created a web app for restaurants to digitalize their menus",
      "Used monolithic app architecture to implement GraphQL backend api to handle database actions and work with third party services such as PassportJS, Stripe, SendGrid, and AWS S3",
      "Designed frontend using React, Redux, used NGINX to serve files",
      "Wrote tests using Mocha, Chai, Jest, and Enzyme as well as containerized the application for future CICD integration"
    ]
  },
  {
    organization: "Kuka Izakaya",
    location: "Tempe, AZ",
    role: "Freelance Web Developer",
    start: "October 2018",
    end: "December 2018",
    description: [
      "Designed site for a restaurant to assist owner in online advertising",
      "Website gains +1,600 visits a month, +1,300 unique visitors"
    ],
    url: "https://www.kukaizakaya.com/"
  },
  {
    organization: "Cisco Systems",
    location: "San Jose, CA",
    role: "Hardware Engineer Intern",
    start: "May 2018",
    end: "August 2018",
    description: [
      "Validated and debugged the code for a testbench for a hardware component, BIST, onboard a data serializer/deserializer, SERDES",
      "Ran simulations on the testbench and viewed the waveforms with DVE to confirm that the testbench output was correct",
      "Wrote bash scripts to automatically generate hundreds of testcases"
    ]
  },
  {
    organization: "Super Micro Computer",
    location: "San Jose, CA",
    role: "Test Engineer Intern",
    start: "May 2017",
    end: "August 2017",
    description: [
      "Measured the bandwidth and throughput of storage devices such as HDDs, SSDs, and NVMes on server systems",
      "Found errors in the systems that prevented the NVMe drives from being detected, worked with designers to resolve the issue",
      "Created a presentation on TCP / SAP costs and benefits server benchmarking software"
    ]
  }
];
