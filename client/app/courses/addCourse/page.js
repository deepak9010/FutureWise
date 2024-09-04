'use client';
require('dotenv').config();
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import './addCourseForm.css';
import Header from '@/app/component/Navbar';

const AddCourseForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    course_name: '',
    description: '',
    duration: '',
    start_date: '',
    end_date: '',
    category: '',
    price: '',
    rating: '',
    trainer: '',
    oldprice: '',
    rating_count: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/addCourse`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message);
        setFormData({
          course_name: '',
          description: '',
          duration: '',
          start_date: '',
          end_date: '',
          category: '',
          price: '',
          rating: '',
          trainer: '',
          oldprice: '',
          rating_count: ''
        });
        router.push('/courses');
      } else {
        toast.error('Error creating course: ' + result.message);
      }
    } catch (error) {
      toast.error('Error creating course: ' + error.message);
    }
  };

  return (

    <>
      <Header />
       <div className='addCourseContainer'>
       <div className="form-container-add bg-dark">
        <h2 className='courseheading'>Add a new course</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Course Name</label>
            <input
              type="text"
              name="course_name"
              value={formData.course_name}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="form-group">
            <label>Duration</label>
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="two-column">
            <div className="form-group">
              <label>Start Date</label>
              <input
                type="date"
                name="start_date"
                value={formData.start_date}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="form-group">
              <label>End Date</label>
              <input
                type="date"
                name="end_date"
                value={formData.end_date}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
          </div>

          <div className="two-column">
            <div className="form-group">
              <label>Old Price</label>
              <input
                type="number"
                name="oldprice"
                value={formData.oldprice}
                onChange={handleChange}
                className="form-control"
              />
            </div>




            <div className="form-group">
              <label>Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
          </div>

          <div className="two-column">
            <div className="form-group">
              <label>Rating</label>
              <input
                type="number"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label>Rating Count</label>
              <input
                type="number"
                name="rating_count"
                value={formData.rating_count}
                onChange={handleChange}
                className="form-control"
              />
            </div>
          </div>


          <div className="form-group">
            <label>Trainer</label>
            <input
              type="text"
              name="trainer"
              value={formData.trainer}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <div className="form-group">
              <label>Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

          </div>

          <button type="submit" className="btn btn-primary mt-3 button1">
            Add Course
          </button>
        </form>
      </div>
       </div>
    </>
  );
};

export default AddCourseForm;