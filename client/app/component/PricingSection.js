import React from 'react';
import PricingCard from '../component/PricingCard';

const PricingSection = () => (
  <div className="container">
    <div className="row justify-content-center">
{/* 
      <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
        <PricingCard
          title="Standard"
          price="500"
          features={[
            '✓ 500+ hands-on courses',
            '✓ 12 months of access',
            '✓ Completion certificates',
            '✓ Easy access to new courses',
            '✓ AI-Powered Features',
            '✕  3 Mock Interviews per month',
            '✕ Personalized Paths',
            '✕ AI Cloud Labs',
            '✕ 1-On-1 Doubt Solving',
            '✕ 1-On-1 Study Session'


          ]}
          discount={59}
        />
      </div> */}

      <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
        <PricingCard
          title="SILVER"
          price="800"
          features={[
            '✓ 700+ real-world projects',
            '✓ Personalized Paths',
            '✓ 3 Mock Interviews per month',
            '✓ 800+ hands-on courses',
            '✓ 12 months of access',
            '✓ Completion certificates',
            '✓ Easy access to new courses',
            '✓ AI-Powered Features',
            '✕ AI Cloud Labs',
            '✕ 1-On-1 Doubt Solving'

            
          ]}
          discount={58}
        />
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
        <PricingCard
          title="GOLD"
          price="1000"
          features={[
            '✓ AI Cloud Labs',
            '✓ 7 Mock Interviews per month',
            '✓ 280 real-world projects',
            '✓ Personalized Paths',
            '✓ 800+ hands-on courses',
            '✓ 12 months of access',
            '✓ Completion certificates',
            '✓ Easy access to new courses',
            '✓ AI-Powered Features',
          ]}
          isBestForLearning
          discount={58}
        />
      </div>
    </div>
  </div>
);

export default PricingSection;
