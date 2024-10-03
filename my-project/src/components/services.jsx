// src/components/Services.jsx

import { useState } from "react";

export const Services = () => {
  return (
    <div className="services-container">
      <div className="services-inner-container">
        <div className="title-section">
          <h1 className="title">
            <p className="subtitle">Helper4U Services</p>
          </h1>
        </div>

        {/* Services Section */}
        <div className="services-section">
          {/* Service 1 */}
          <div className="service-item">
            <a href="/hiring-services/hire-for-long-term">
              <div className="service-content">
                <img
                  src="https://helper4u.in/web-img/img/how_it_works/1.jpg"
                  className="service-image"
                  alt="Hire Maid, Nanny, Cook, Caregiver, Driver with replacement, refund and verification"
                />
                <p className="service-text">
                  Premium Hiring Service
                </p>
              </div>
            </a>
          </div>

          {/* Service 2 */}
          <div className="service-item">
            <a href="/hire-for-short-term">
              <div className="service-content">
                <img
                  src="https://helper4u.in/web-img/img/how_it_works/2.jpg"
                  className="service-image"
                  alt="Hire Maid, Nanny, Cook, Caregiver, Driver near you in cost-effective way"
                />
                <p className="service-text">
                  Hire for Few Days
                </p>
              </div>
            </a>
          </div>

          {/* Service 3 */}
          <div className="service-item">
            <a href="/verify-helpers">
              <div className="service-content">
                <img
                  src="https://helper4u.in/web-img/img/how_it_works/3.jpg"
                  className="service-image"
                  alt="Verify your house help, staff, tenants in a simple manner"
                />
                <p className="service-text">
                  Verify Staff
                </p>
              </div>
            </a>
          </div>

          {/* Service 4 */}
          <div className="service-item">
            <a href="/help4parents">
              <div className="service-content">
                <img
                  src="https://helper4u.in/web-img/img/how_it_works/4.jpg"
                  className="service-image"
                  alt="Find caregiver, maid, or Cook to help your parents"
                />
                <p className="service-text">
                  Help4Parents
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};