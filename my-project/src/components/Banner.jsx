import { useState } from "react"

 export const cardData = [
  {
    id: 1,
    iconSrc: 'https://helper4u.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcustomer-review_8522191.f150ef4d.png&w=96&q=75',
    altText: 'Satisfied Employers',
    title: '15000+ Satisfied Employers',
    description:
      'Get Multiple Helper options for Part Time or Live-in, Female or Male requirements',
  },
  {
    id: 2,
    iconSrc: 'https://helper4u.in/_next/image?url=%2FverifiedHelpers.jpeg&w=48&q=75',
    altText: 'Verified and Trained Helpers',
    title: 'Verified and Trained Helpers',
    description:
      'Aadhar Verified, Criminal Background Checked, Soft Skills Trained',
  },
  {
    id: 3,
    iconSrc: 'https://helper4u.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmanagement.6270420a.png&w=96&q=75',
    altText: 'Replacement',
    title: 'Replacement',
    description: 'Get 6-month replacement when you hire from us',
  },
  {
    id: 4,
    iconSrc: 'https://helper4u.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpayment-method.02686eb5.png&w=96&q=75',
    altText: 'Refund',
    title: 'Refund',
    description: 'Claim a refund if you decide not to hire from us',
  },
];

export const Banner = () => {
  return (
    <section className="why-choose-us">
      <h2>Why Choose Us</h2>
      <div className="card-container">
        {cardData.map((card) => (
          <div className="card" key={card.id}>
            <div className="icon">
              <img src={card.iconSrc} alt={card.altText} />
            </div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
