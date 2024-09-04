
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { HiDesktopComputer } from "react-icons/hi";
import { PiSuitcaseSimpleFill, PiCertificateBold } from "react-icons/pi";
import Image from 'next/image';
import Link from 'next/link';
import Img from '../../public/cover.jpg'
import '../styles/homePage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




export default function HomePage() {
  const router = useRouter();



  return (
    <>

      <section className="py-4 bg-light position-relative section-gradient">
        <div
          className="bg-dark rounded-circle position-absolute"
          style={{ height: "16rem", width: "16rem", left: "-11rem", top: "0", zIndex: "10" }}
        ></div>
        <article className="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-center h-auto px-4 py-md-5 position-relative">
          <div className="text-center text-md-left text-white">
            <h1 className="display-4 font-weight-bold text-success text-white">
              Grow Your Skills, <br />
              Define Your Future
            </h1>
            <p className="lead text-success mt-4 text-white">
              Explore a world of opportunities and discover how continuous personal and professional development can pave the way for a successful and fulfilling journey ahead.
            </p>
            <Link href="/courses" className="btn bg-dark btn-lg mt-4 text-white">
              Explore Courses
            </Link>
            <footer className="mt-5 d-flex justify-content-around w-100">
              <div className="text-center ">
                <h2 className="display-4 font-weight-semibold text-success text-white">40k+</h2>
                <p className="lead text-success mt-2 text-white">Happy students</p>
              </div>
              <div className="text-center">
                <h2 className="display-4 font-weight-semibold text-success text-white">12k+</h2>
                <p className="lead text-success mt-2 text-white">Active Users</p>
              </div>
              <div className="text-center">
                <h2 className="display-4 font-weight-semibold text-success text-white">2k+</h2>
                <p className="lead text-success mt-2 text-white">Online Classes</p>
              </div>
            </footer>
          </div>
          <div className="d-none d-md-block bg-success h-100 rounded-top-left position-relative overflow-hidden">
            {/* <img
              src="/cover.jpg"
              className="position-absolute"
              style={{ top: "4rem", left: "-4rem", zIndex: "10", borderTopLeftRadius: "1.5rem" }}
              alt="Cover"
            /> */}
              {/* <Image
                            src={Img}
                            alt="Profile Image"
                            className="imgg"
                            width={80}
                            height={180}
                        /> */}
            {/* <div
              className="bg-warning rounded-circle position-absolute"
              style={{ height: "16rem", width: "16rem", right: "-2rem", bottom: "-7rem" }}
            ></div> */}
          </div>
        </article>
      </section>


      <section className="py-5 section-gradient">
        <div className="container py-5 px-4">
          <header className="text-center">
            <h2 className="display-4 font-weight-bold text-success text-white">
              Achieve Your Goals With Shiksha Mitra
            </h2>
            <p className="lead text-success mt-4 mx-auto text-white" style={{ maxWidth: "36rem" }}>
              Unlock your full potential through CourseX's diverse courses and expert guidance. Success awaits you!
            </p>
          </header>
          <div className="row row-cols-1 row-cols-md-3 g-4 mt-4 mx-auto" style={{ maxWidth: "72rem" }}>
            <div className="col">
              <div className="card border-success h-100 bg-dark">
                <div className="card-body ">
                  <div className="bg-success p-3 rounded-circle d-inline-block">
                    <HiDesktopComputer className="text-white" style={{ fontSize: "1.5rem" }} />
                  </div>
                  <h3 className="card-title mt-4 text-success font-weight-bold text-white">
                    Learn the latest skills
                  </h3>
                  <p className="card-text mt-3 text-success text-white">
                    Stay ahead with CourseX: Learn and master the latest in-demand skills for a successful future.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card bg-light shadow h-100">
                <div className="card-body">
                  <div className="bg-warning p-3 rounded-circle d-inline-block">
                    <PiSuitcaseSimpleFill className="text-dark" style={{ fontSize: "1.5rem" }} />
                  </div>
                  <h3 className="card-title mt-4 text-success font-weight-bold">
                    Get ready for a career
                  </h3>
                  <p className="card-text mt-3 text-success">
                    CourseX: Empowering your path to a rewarding career through expert guidance and courses.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-success h-100 bg-dark">
                <div className="card-body">
                  <div className="bg-success p-3 rounded-circle d-inline-block">
                    <PiCertificateBold className="text-white" style={{ fontSize: "1.5rem" }} />
                  </div>
                  <h3 className="card-title mt-4 text-success font-weight-bold text-white">
                    Earn a certificate
                  </h3>
                  <p className="card-text mt-3 text-success text-white">
                    CourseX: Gain recognition with certified courses for better career opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
