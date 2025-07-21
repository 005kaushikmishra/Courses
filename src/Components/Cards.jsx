import { useState } from "react";
import Card from "./Card";
import { filterData } from "../Data";
const Cards = ({ courses, category, filterHandler }) => {
  const [likedCourse, setLikedCourse] = useState([]);
  const getCourses = () => {
    if (!courses || Object.keys(courses).length === 0) return [];

    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((categoryCourses) => {
        allCourses.push(...categoryCourses);
      });
      return allCourses;
    } else {
      return courses[category] || [];
    }
  };
  return (
    <div className="main-container">
      <h1 className="heading">Top Courses</h1>

      <div className="filter-buttons">
        {filterData.map((btn) => (
          <button
            key={btn.id}
            className="filter-btn"
            onClick={() => filterHandler(btn.title)}
          >
            {btn.title}
          </button>
        ))}
      </div>

      <div className="cards-container">
        {getCourses().map((course, index) => (
          <Card
            key={index}
            course={course}
            likedCourse={likedCourse}
            setLikedCourse={setLikedCourse}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
