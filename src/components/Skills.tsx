const skills = {
  'Programming Languages': ['JavaScript', 'Python'],
  'Web Development': ['HTML', 'CSS', 'Bootstrap', 'React.js'],
  'Software Development Tools': ['Visual Studio Code', 'Python IDLE'],
  'Frameworks & Libraries': ['Bootstrap', 'React.js', 'Django (Basic)'],
  'Database Management': ['MySQL']
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-white rounded-xl p-6 shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{category}</h3>
              <ul className="space-y-2">
                {items.map((skill, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}