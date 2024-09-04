import React from 'react';
import Link from 'next/link';

import '../styles/footer.css'

const Footer = () => {
  return (
    <footer className=" bg-dark text-white mt-0 py-5">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-5" style={{ width: '100%' }}>
          <div className="col footer-col" >
            <h5 className="text-uppercase mb-4 footer-center" >
            Shiksha Mitra
            </h5>
            <p  className="footer-center">Learn in-demand tech skills in half the time</p>
          </div>

          <div className="col  footer-col">
            <h5 className="text-uppercase mb-4 footer-center" >Products</h5>
            <ul className="list-unstyled footer-center">
              <li className="mb-2">
                <Link href="/mock-interview" className="text-white text-decoration-none footer-link">
                  Mock Interview <span className="badge bg-primary">New</span>
                </Link>
              </li>
              <li className="mb-2"><Link href="/courses" className="text-white text-decoration-none footer-link">Courses</Link></li>
              <li className="mb-2"><Link href="/cloud-labs" className="text-white text-decoration-none footer-link">Cloud Labs</Link></li>
              <li className="mb-2"><Link href="/skill-paths" className="text-white text-decoration-none footer-link">Skill Paths</Link></li>
              <li className="mb-2"><Link href="/projects" className="text-white text-decoration-none footer-link">Projects</Link></li>
              <li className="mb-2"><Link href="/assessments" className="text-white text-decoration-none footer-link">Assessments</Link></li>
            </ul>
          </div>

          <div className="col  footer-col">
            <h5 className="text-uppercase mb-4 footer-center" >Trending Topics</h5>
            <ul className="list-unstyled footer-center">
              <li className="mb-2"><Link href="/learn-to-code" className="text-white text-decoration-none footer-link">Learn to Code</Link></li>
              <li className="mb-2"><Link href="/tech-interview-prep" className="text-white text-decoration-none footer-link">Tech Interview Prep</Link></li>
              <li className="mb-2"><Link href="/generative-ai" className="text-white text-decoration-none footer-link">Generative AI</Link></li>
              <li className="mb-2"><Link href="/data-science" className="text-white text-decoration-none footer-link">Data Science</Link></li>
              <li className="mb-2"><Link href="/machine-learning" className="text-white text-decoration-none footer-link">Machine Learning</Link></li>
              <li className="mb-2"><Link href="/github-students-scholarship" className="text-white text-decoration-none footer-link">GitHub Students Scholarship</Link></li>
              <li className="mb-2"><Link href="/early-access-courses" className="text-white text-decoration-none footer-link">Early Access Courses</Link></li>
            </ul>
          </div>

          <div className="col  footer-col" >
            <h5 className="text-uppercase mb-4 footer-center" >Pricing</h5>
            <ul className="list-unstyled footer-center" >
              <li className="mb-2"><Link href="/pricing/individuals" className="text-white text-decoration-none footer-link">For Individuals</Link></li>
              <li className="mb-2"><Link href="/try-for-free" className="text-white text-decoration-none footer-link">Try for Free</Link></li>
              <li className="mb-2"><Link href="/gift-subscription" className="text-white text-decoration-none footer-link">Gift a Subscription</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;