'use client';

import React, { useEffect, useState } from "react";
import CourseCard from "../component/CourseCard";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Header from '../component/Navbar';
import './course.css';

export default function Courses() {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/showAllCourse`);
      const result = await response.json();


      setDetails(result.data);


    } catch (error) {
      console.error("Error fetching course data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(details);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
    

      <div className="allCourses container-fluid justify-content-center p-4">
        <h1 className="text-center mb-4">Available Courses</h1>
        <div className="d-flex justify-content-center mt-4 mb-4">
          <Link href="/courses/addCourse" passHref legacyBehavior>
            <a className="btn btn-dark text-white border border-white">
              Add New Course
            </a>
          </Link>
        </div>
        <div className="row justify-content-center g-3" >
          {details.map((course) => (
            <div key={course.id} className="col-lg-3 col-md-4 col-sm-6 col-xs-12 d-flex justify-content-center align-items-center card-container">
              <Link href={`/courses/${course.id}`} passHref legacyBehavior>
                <a className="text-decoration-none">
                  <CourseCard course={course} />
              </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
