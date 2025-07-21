import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
import "./Card.css";
const Card = ({ course, likedCourse, setLikedCourse }) => {
  function clickhandler() {
    if (likedCourse.includes(course.id)) {
      setLikedCourse((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Like Remove");
    } else {
      if (likedCourse.length === 0) {
        setLikedCourse([course.id]);
      } else {
        setLikedCourse((prev) => [...prev, course.id]);
      }
      toast.success("Liked Successfully");
    }
  }
  return (
    <div className="card">
      <div>
        <img
          src={course.image.url}
          alt={course.title}
          className="card-image"
        ></img>
        <div className="card-content">
          <h2>{course.title}</h2>

          <p>{course.description}</p>
        </div>
        <div className="like-button">
          <div>
            <button onClick={clickhandler}>
              {likedCourse.includes(course.id) ? (
                <FcLikePlaceholder fontSize="1.75rem" />
              ) : (
                <FcLike fontSize="1.75rem" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
