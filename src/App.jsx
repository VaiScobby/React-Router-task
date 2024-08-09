
import React, { useEffect, useState } from "react";
import "./App.css";

import TopNav from "./TopNav";
import Nav from "./Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CardMap from "./CardMap";
import Card from "./Card";
import Footer from "./Footer";

function App() {
  const data = [
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/03/java.jpeg",
      title: "40 Java Interview Questions for Freshers with Clear & Concise Answers",
      description:
        "When you’re hiring a full-stack developer, what are the most important things you look for?",
      date: "29 June 2024",
      content: "Full Stack Development",
    },
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/06/Feature-Image-Mastering-Shadow-DOM-Events.webp",
      title: "Mastering Shadow DOM Events: A Comprehensive Guide [2024]",
      description:
        "A Full Stack Developer is a tech all-rounder. They work on both the front and",
      date: "29 June 2024",
      content: "Full Stack Development",
    },
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2022/12/Render-array-of-objects-in-ReactJs-1536x864.png",
      title: "How to Render an Array of Objects in React? [in 3 easy steps]",
      description:
        "In the world of system design, envision a digital skyscraper – a multifaceted structure built",
      date: "29 June 2024",
      content: "Full Stack Development",
    },
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2022/12/Fetch-Data-using-API-in-React.Js-1536x864.png",
      title: "Use ReactJS to Fetch and Display Data from API – 5 Simple Steps",
      description:
        "Are you interested in becoming a full-stack developer but not sure where to start? In",
      date: "29 June 2024",
      content: "Full Stack Development",
    },
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2015/02/blog-2-e1626109662385.png",
      title: "Top 30 Mini Project Ideas For College Students [UPDATED]",
      description:
        "In the dynamic landscape of technology, full-stack developers are the architects of the digital world,",
      date: "29 June 2024",
      content: "Full Stack Development",
    },
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/03/10_hardest_and_easiest_programming_languages_in_2024-1536x596.webp",
      title: "10 Hardest and Easiest Programming Languages in 2024",
      description:
        "Are you someone who’s not interested in coding, but wants to get placed in tech",
      date: "29 June 2024",
      content: "Java script",
    },
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/02/animated-javascript-project-image-1200x675.jpg",
      title: "30 Best JavaScript Project Ideas For You [3 Bonus Portfolio Projects]",
      description:
        "Data scientists are the creators behind transforming the raw data into edible data insights. These",
      date: "29 June 2024",
      content: "Java script",
    },
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/04/image-18.png",
      title: "Crack the TCS IPA Exam: Top Questions and Exclusive Tips for Success!",
      description:
        "In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing",
      date: "29 June 2024",
      content: "Data Science",
    },
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/06/Feature-Image-Understanding-Programmatic-Advertising.webp",
      title:
        "Understanding Programmatic Advertising: A Comprehensive Guide",
      description:
        "India has been making some serious waves in the world of data. Just like the",
      date: "29 June 2024",
      content: "Data Science",
    },
   
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/01/feature_image-7.webp",
      title: "Top 10 Cloud Computing Project Ideas [2024]",
      description:
        "Today’s world is rapidly evolving into a technological landscape. Owing to these dynamics, the demand",
      date: "29 June 2024",
      content: "Full Stack Development",
    },
    
  
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Top-10-Cloud-Computing-Jobs-without-Coding-1.png",
      title: "Top 10 High Paying Cloud-Computing Jobs without Coding in 2024",
      description:
        "Full stack development is and will be a promising and in-demand career in the upcoming",
      date: "29 June 2024",
      content: "Full Stack Development",
    },
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-2048x1072.webp",
      title: "How Long Would It Take to Be a Full Stack Developer?",
      description:
        "Have you ever wondered how much time it would take to become a skilled Full",
      date: "29 June 2024 ",
      content: "Full Stack Development",
    },
    

    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp",
      title: "Best Data Science Books to Learn in 2024",
      description:
        "Today, we’re going to talk about something really cool: data science. It’s all about using",
      date: "29 June 2024",
      content: "Data Science",
    },
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp",
      title: "Top Product-Based Companies for Data Scientists in 2024",
      description:
        "We all know about the kind of buzz surrounding data science right now, it is",
      date: "29 June 2024",
      content: "Data Science",
    },
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Useful-Python-Libraries-and-Tools-For-Data-Science-Beginners.webp",
      title: "Useful Python Libraries & Tools for Data Science Beginners",
      description:
        "In a world filled with information, knowing how to understand and use data is super",
      date: "29 June 2024 ",
      content: "Data Science",
    },
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/08/Data-Science-project-showcase.webp",
      title:
        "Extraordinary Data Science Projects for Beginners As Well as Veterans",
      description:
        "As the demand for data and the people that can conquer it, i.e. Data Scientists",
      date: "29 June 2024",
      content: "Data Science",
    },
    {//
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/06/Feature-Image-Database-Design-Principles-and-Best-Practices.webp",
      title: "Database Design: Principles and Best Practices",
      description:
        "In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills",
      date: "29 June 2024",
      content: "Cyber Security",
    },
    
    {//
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
      title: "What Is Hacking? Types of Hacking & More",
      description:
        "Have you ever wondered what hacking is all about? It’s a big deal in today’s",
      date: "25 September 2023",
      content: "Cyber Security",
    },
  
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
      title: "The Ultimate Cybersecurity Roadmap for Beginners",
      description:
        "Cybersecurity jobs are also one of the most handsomely paying jobs in recent times. Furthermore,",
      date: "1 March 2021",
      content: "Cyber Security",
    },

    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Machine-Learning-Engineer-Resume-Guide.webp",
      title: "Machine Learning Engineer Resume Guide: 11 Important Things To Include!",
      description:
        "The current technological era is full of competition and those who have profound skillset are",
      date: "23 November 2023",
      content: "Career",
    },
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/top-product-based-companies-for-ai-freshers.webp",
      title: "Top 13 Product Based Companies for AI Freshers",
      description:
        "Artificial intelligence (AI) has revolutionized various industries, and the demand for AI professionals is at",
      date: "10 November 2023",
      content: "Career",
    },
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Top-Product-based-Companies-for-UIUX-Designers.webp",
      title: "Top 8 Product-based Companies for UI/UX Designers [Freshers]",
      description:
        "As product-based companies continually innovate and strive to stay ahead of the competition, they seek",
      date: "10 November 2023 ",
      content: "Career",
    },
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/06/Feature-Image-The-Role-of-Database-Administrators-Important-Skills-and-Responsibilities.webp",
      title:
        "The Role of Database Administrators: Important Skills and Responsibilities [2024]",
      description:
        "If your New Year resolution consists of building a successful tech career in 2024, then",
      date: "19 January 2024",
      content: "Career",
    },
    
   
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp",
      title: "Top IT Jobs for Commerce Students: A Lucrative Career Path",
      description:
        "With the rapid advancement of technology, the demand for IT professionals has soared in recent",
      date: "2 December 2023",
      content: "Career",
    },
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Automation-Test-Engineer-Resume-Important-Things-To-Consider.webp",
      title: "Automation Test Engineer Resume: 10 Important Things To Consider",
      description:
        "The world is moving towards automating the testing of products in order to increase work",
      date: "1 December 2023",
      content: "Career",
    },
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/FEATURE-IMAGE-1-3-2048x1072.webp",
      title:
        "Professional Civil Engineer Resume: A Guide To Attract Employers in 2024",
      description:
        "The world is moving towards modernization leading to an increase in the popularity of civil",
      date: "1 December 2023",
      content: "Career",
    },
  ];

  const [sortedData, setSortedData] = useState([]);
  useEffect(() => {
    const sortedData = [...data].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    ); // to sort Data by Date
    setSortedData(sortedData);
  }, []);

  return (
    <>
      <TopNav />
      <Nav />
      <div className="card-container main-card mt-3 pt-3 d-flex justify-content-center">
        <div className="row row-cols-1 row-cols-md-3 g-3">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {sortedData.map((ele) => (
                    <Card key={ele.id} data={ele} />
                  ))}
                </>
              }
            ></Route>
            <Route
              path="/FullStackDevelopment"
              element={
                <CardMap data={sortedData} val={"Full Stack Development"} />
              }
            ></Route>
            <Route
              path="/DataScience"
              element={<CardMap data={sortedData} val={"Data Science"} />}
            ></Route>
            <Route
              path="/CyberSecurity"
              element={<CardMap data={sortedData} val={"Cyber Security"} />}
            ></Route>
            <Route
              path="/Career"
              element={<CardMap data={sortedData} val={"Career"} />}
            ></Route>
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;