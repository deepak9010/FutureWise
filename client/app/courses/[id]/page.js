'use client'
import React, { useEffect, useState } from 'react';
import "./detailsCoures.css";
import Image from 'next/image';
import Img from '../../../../public/p.jpg';
import Link from 'next/link';

function DetailsCoures({ params }) {
    const [course, setCourse] = useState(null);
    const id = params.Course;
    console.log("paramssssssssssss idd   ", id);

    const fetchCourseById = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/courses/${id}`);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setCourse(data);
        } catch (error) {
            console.error("Error fetching course details:", error);
        }
    };
    
    useEffect(() => {
        fetchCourseById();
    }, [id]);
    
    if (!course) {
        return <div className='Loading'>Loading...</div>;
    }
    const rating = course.rating ? parseFloat(course.rating).toFixed(1) : '0.0';
    


    return (
        <div>
            <div className='upper'>
                <div className='container'>
                    <div className="">
                        <div className='details-main'>
                            <h2 className='course-name'>{course.course_name}</h2>
                            <p className='course-description'>{course.description}</p>

                            <div className='course-meta'>
                                <p className='bestseller'>Bestseller</p>
                                <p className='rating2'>
                                    <span>{rating}</span>
                                    /5
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star-half" aria-hidden="true"></i>
                                </p>
                                <p className='rating-count2'>({course.rating_count} ratings)</p>
                                <p className='enroll-info'>1,324,178 students</p>
                            </div>
                            <p className='creator-name'>Created by <a href="#" target='_blank'>{course.trainer}</a></p>
                        </div>

                        <div className='details_card'>
                            <div className='card-content'>
                                <Image src={Img} alt="Course preview" className="preview-image" />
                                <div className='card-body2'>
                                    <div className='price-info'>
                                        <span className='current-price2'>₹{course.price}</span>
                                        <span className='original-price'>₹{course.oldprice}</span>
                                        <span className='discount'>87% off</span>
                                    </div>
                                    <p className='time-left'> <span className="fw-bold">3 days left</span> at this price!</p>
                                    <Link href = {`/courses/checkout/${course.uniqueId}`} ><button className='btn btn-primary btn-block'>Add to cart</button></Link>
                                    
                                    <p className='money-back'>30-Day Money-Back Guarantee</p>
                                    <p className='lifetime-access'>Full Lifetime Access.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='What-learn-box'>
                    <h2 className='what-learn-title'>What you'll learn</h2>
                    <ul className='what-learn-list'>
                        <li>Build 16 web development projects for your</li>
                        <li>Work as a freelance web developer</li>
                        <li>Master backend development with Node.</li>
                        <li>Build fully-fledged websites and web apps for your startup or business.</li>
                        <li>Master frontend development with React</li>
                        <li>Learn professional developer best practices.</li>

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default DetailsCoures;