import React from "react";

const Experience = () => (
  <section className="p-10 bg-gray-100" id="experience">
    <h2 className="text-3xl font-bold mb-4">Work & Internship Experience</h2>

    <div className="mb-6">
      <h3 className="font-bold">Fareintelligence IT Services & Consulting, Pune</h3>
      <p className="italic">Java Developer | Oct 2024 – Present</p>
      <ul className="list-disc ml-6">
        <li>Developed RESTful APIs using Spring Boot for airline operations, improving system performance by 25%.</li>
        <li>Optimized complex database queries (MySQL, PostgreSQL, MongoDB), reducing average execution time by 40%.</li>
        <li>Developed secure Admin Module with multi-tier access (Admin, Agency, Subagency, User).</li>
        <li>Built automated Report Generation System (CSV & dynamic tables).</li>
        <li>Integrated Microsoft Azure API Gateway for load balancing & security.</li>
      </ul>
      <p><strong>Technologies:</strong> Java, Spring Boot, PostgreSQL, MongoDB</p>
    </div>

    <div>
      <h3 className="font-bold">Full Stack Guru Pvt. Ltd., Pune</h3>
      <p className="italic">Full Stack Developer - Intern | Dec 2023 – Sep 2024</p>
      <ul className="list-disc ml-6">
        <li>Developed frontend using HTML, CSS, JavaScript, React.</li>
        <li>Integrated RESTful APIs with Spring Boot & Hibernate.</li>
        <li>Implemented MySQL CRUD operations and database management.</li>
        <li>Participated in code reviews and debugging for performance optimization.</li>
      </ul>
    </div>
  </section>
);

export default Experience;
