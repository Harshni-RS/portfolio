interface TimelineItem {
  year: string;
  title: string;
  institution: string;
  description: string;
}

const education: TimelineItem[] = [
  {
    year: '2020-2024',
    title: 'BE in Electrical and Electronics Engineering',
    institution: 'Easwari Engineering College',
    description: 'CGPA: 9.13',
  },
  {
    year: '2019-2020',
    title: 'HSC',
    institution: 'Velammal Matriculation Higher Secondary School',
    description: 'Percentage: 79%',
  },
  {
    year: '2017-2018',
    title: 'SSLC',
    institution: 'Velammal Matriculation Higher Secondary School',
    description: 'Percentage: 96.4%',
  },
];

const certifications: TimelineItem[] = [
  {
    year: 'Aug 2024 - Feb 2025',
    title: 'Full Stack Development Course',
    institution: 'Besant Technologies, Anna Nagar, Chennai',
    description: 'Comprehensive training in modern web development technologies',
  },
  {
    year: 'Sep 2022 - Nov 2022',
    title: 'Python Programming Course',
    institution: 'CSC, Perambur, Chennai',
    description: 'Comprehensive training in Python programming and fundamental concepts.',
  },
];

function TimelineSection({ items, title }: { items: TimelineItem[]; title: string }) {
  return (
    <div className="mb-20">
      <h3 className="text-3xl font-bold mb-12 text-center text-gray-800">{title}</h3>
      <div className="grid md:grid-cols-2 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg transition-transform duration-300 hover:-translate-y-2"
          >
            <div className="text-sm font-semibold text-blue-600 mb-2">{item.year}</div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h4>
            <p className="text-gray-600 font-medium mb-2">{item.institution}</p>
            <p className="text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 bg-gray-50">
      <div id="education" className="container mx-auto px-4">
        <TimelineSection items={education} title="Education" />
      </div>
      <div id="certifications" className="container mx-auto px-4">
        <TimelineSection items={certifications} title="Certifications & Training" />
      </div>
      
    </section>
  );
}