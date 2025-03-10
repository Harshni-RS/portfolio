import { Github } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: 'Customizable Messaging Platform UI',
    description: 'Innovated a WhatsApp-inspired interface for 150+ users, integrating video call functionality and leveraging front-end development skills to deliver a seamless experience with robust responsive web design. Enhanced real-time chat display, emoji selection, and message previews, boosting usability by 25%. Introduced video call functionality, enabling users to initiate camera calls directly from the interface.',
    technologies: ['HTML5', 'CSS3', 'Bootstrap', 'Javascript'],
    github: 'https://github.com/Harshni-RS/Customizable-messaging-platform-ui-whatsapp',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80'
  },
  {
    title: 'Loan Management System',
    description: 'Designed a robust relational database schema with over 10 tables and 7+ foreign keys, and integrated datasets to manage customer, loan, and regional data for smooth operations. Automated loan updates, credit score validation, and customer classification using triggers and stored procedures, increasing operational efficiency by 40% and reducing manual workload by 50%.',
    technologies: ['SQL', 'MySQL', 'Database Design'],
    github: 'https://github.com/Harshni-RS/Real-Time-Loan-Management-System-',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80'
  },
  {
    title: 'E-commerce Website - 3D Creation Hub',
    description: 'Executed the implementation of social login functionality via Google accounts with Auth0 technology; achieved a significant increase of 40% in user registration rates alongside strengthened security protocols. Developed a smooth shopping experience with features like product categorization, cart functionality, and real-time total cost calculations.',
    technologies: ['React.js', 'Firebase'],
    github: 'https://github.com/Harshni-RS/E-commerce-website',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80'
  },
  {
    title: 'Voice Recognition Text Conversion System',
    description: 'Built a voice-to-text tool using Python and Tkinter, allowing users to convert speech into text for up to 15 minutes per session. Developed a visually appealing and efficient interface that incorporated start and stop controls, leading to a notable increase in user engagement metrics, with 90% of users reporting improved ease of access.',
    technologies: ['Python', 'Tkinter'],
    github: 'https://github.com/Harshni-RS/Voice-Recognition-Text-Conversion-System',
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80'
  }
];

interface ProjectModalProps {
  project: typeof projects[0];
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <p className="text-gray-600 mb-6">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            <Github className="w-5 h-5 mr-2" />
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}