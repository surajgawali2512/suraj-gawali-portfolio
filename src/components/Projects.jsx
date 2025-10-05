import React from "react";

const Projects = () => (
  <section className="p-10" id="projects">
    <h2 className="text-3xl font-bold mb-4">Projects</h2>
    
    <div>
      <h3 className="font-bold">Institute Management System — Service-Oriented SaaS Application</h3>
      <p><strong>Technologies:</strong> Spring Boot, JPA, Hibernate, Multi-Tenant MySQL, React, HTML, CSS</p>
      <ul className="list-disc ml-6">
        <li>Built a SaaS-based platform enabling multiple institutes to operate independently on a shared infrastructure.</li>
        <li>Implemented multi-tenancy with separate databases per client for scalability.</li>
        <li>Integrated Spring Security for authentication and role-based access control.</li>
        <li>Developed REST APIs for managing institutes, students, faculty, courses, and fees.</li>
        <li>Version control using GitHub and tested endpoints with Postman.</li>
      </ul>
    </div>
  </section>
);

export default Projects;
