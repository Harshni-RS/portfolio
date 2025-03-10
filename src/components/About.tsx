export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-20 transform -rotate-6"></div>
              <img
                src="/Harshni.jpg"
                alt="Profile"
                className="relative rounded-2xl shadow-xl w-full max-w-md mx-auto transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <p className="text-xl text-gray-700 leading-relaxed">
              I am a passionate Front-End Developer with a strong foundation in modern web technologies. I have completed my B.E. in Electrical and Electronics Engineering with a CGPA of 9.13 and have developed a keen interest in crafting interactive and responsive web applications.

With expertise in HTML, CSS, JavaScript, Bootstrap, and React.js, I focus on building intuitive and user-friendly interfaces that enhance user experience. Additionally, I have hands-on experience with MySQL and Python, allowing me to work efficiently with databases and backend integration when needed.

I am highly motivated to grow as a Front-End Developer and continuously explore new trends and technologies in web development. My goal is to create elegant, scalable, and accessible solutions that make a difference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}