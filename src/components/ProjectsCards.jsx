// Projects.jsx
import React from 'react';
import Card from './Cards';
import ecomImage from '../assets/Ecom.jpg';
import cartImage from '../assets/cart.jpg';
import JobImage from '../assets/Job.jpg';

const Projects = () => {
  // Array of project details
  const projectDetails = [
    {
      image: ecomImage,
      title: 'E-commerce App - ( GenZ-Store )',
      description:
        'Developed a full-featured e-commerce app using the MERN stack with features like authentication, product management, and a shopping cart.',
      demoLink: 'https://genzstore-ciyq.onrender.com',
      githubLink: 'https://github.com/adityasabat34/ProjectRepo',
    },
    {
      image: JobImage,
      title: 'Job Portal with CRUD',
      description:
        'Built a responsive personal portfolio using React and Tailwind CSS, showcasing my projects and skills.',

      githubLink: 'https://github.com/adityasabat34/reactProjectJs',
    },
    {
      image: cartImage,
      title: 'Cart Functionality',
      description:
        'Built a responsive personal portfolio using React and Tailwind CSS, showcasing my projects and skills.',

      githubLink: 'https://github.com/adityasabat34/AssignmentRepo',
    },
    {
      image:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Personal Portfolio',
      description:
        'Built a responsive personal portfolio using React and Tailwind CSS, showcasing my projects and skills.',

      githubLink: 'hhttps://github.com/adityasabat34/adityaPortfolio',
    },
  ];

  return (
    <div className="bg-darkClay2 pt-16">
      {/* Centered Heading */}
      <h1 className="text-center text-3xl font-extrabold mb-12 text-gray-900">
        Projects
      </h1>

      {/* Projects Cards */}
      <div className="flex flex-wrap justify-evenly">
        {projectDetails.map((project, index) => (
          <Card
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            demoLink={project.demoLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
