import React from 'react';
import '../styles/courseCard.css';
import Image from 'next/image';
import Img from '../../public/course.jpg';

function CourseCard({ course }) {
  const rating = course.rating ? parseFloat(course.rating).toFixed(1) : '0.0';

  return (
    <div className="card bg-dark mt-0">
      <div className="card-img ">
        <Image src={Img} alt={`${course.course_name} image`} />
      </div>
      <div className="cardDetails ">
        <div className="Heading ">
          <h2 className="text-white">{course.course_name}</h2>
        </div>
        <div className="author">
          <p className="text-white">{course.trainer}</p>
        </div>
        <div className="rating">
          <span className="text-white">{rating}</span>
          <span>⭐</span>
          <span className="text-white">({course.rating_count || 0})</span>
        </div>
        <div className="price">
          <span className="current-price">₹{course.price}</span>
          {course.oldprice && <span className="original-price">₹{course.oldprice}</span>}
        </div>
      </div>
    </div>
  );
}

export default CourseCard;