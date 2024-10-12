import React, { useState } from 'react';

const ResumeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    rollNumber: '',
    courseBranch: '',
    phone: '',
    email: '',
    github: '',
    linkedin: '',
    education: [
      { degree: '', institute: '', cgpa: '', year: '' },
    ],
    experience: [
      { title: '', designation: '', timeline: '', description: '' },
    ],
    projects: [
      { name: '', type: '', timeline: '', githubLink: '', description: '' },
    ],
    technicalSkills: [
      { category: '', skills: '' },
    ],
    keyCourses: [
      { category: '', courseName: '' },
    ],
    positions: [
      { title: '', club: '', timeline: '', description: '' },
    ],
    achievements: [
      { title: '', description: '', year: '' },
    ],
  });

  const handleChange = (e, index, section, field) => {
    const updatedSection = [...formData[section]];
    updatedSection[index][field] = e.target.value;
    setFormData({ ...formData, [section]: updatedSection });
  };

  const handleAddField = (section) => {
    const newField = section === 'education' || section === 'keyCourses' || section === 'technicalSkills' 
      ? { degree: '', institute: '', cgpa: '', year: '' } 
      : { title: '', designation: '', timeline: '', description: '' };

    setFormData({ ...formData, [section]: [...formData[section], newField] });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl mb-6">Resume Builder</h1>
      
      <section>
        <h2 className="text-xl">Personal Information</h2>
        <input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        <input type="text" placeholder="Roll Number" value={formData.rollNumber} onChange={(e) => setFormData({ ...formData, rollNumber: e.target.value })} />
        <input type="text" placeholder="Course - Branch" value={formData.courseBranch} onChange={(e) => setFormData({ ...formData, courseBranch: e.target.value })} />
        <input type="tel" placeholder="Contact Number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
        <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        <input type="url" placeholder="GitHub Profile" value={formData.github} onChange={(e) => setFormData({ ...formData, github: e.target.value })} />
        <input type="url" placeholder="LinkedIn Profile" value={formData.linkedin} onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })} />
      </section>

      <section>
        <h2 className="text-xl">Education</h2>
        {formData.education.map((edu, index) => (
          <div key={index}>
            <input type="text" placeholder="Degree/Certificate" value={edu.degree} onChange={(e) => handleChange(e, index, 'education', 'degree')} />
            <input type="text" placeholder="Institute/Board" value={edu.institute} onChange={(e) => handleChange(e, index, 'education', 'institute')} />
            <input type="text" placeholder="CGPA/Percentage" value={edu.cgpa} onChange={(e) => handleChange(e, index, 'education', 'cgpa')} />
            <input type="number" placeholder="Year" value={edu.year} onChange={(e) => handleChange(e, index, 'education', 'year')} />
          </div>
        ))}
        <button type="button" onClick={() => handleAddField('education')}>Add Education</button>
      </section>

      <section>
        <h2 className="text-xl">Experience</h2>
        {formData.experience.map((exp, index) => (
          <div key={index}>
            <input type="text" placeholder="Experience Title" value={exp.title} onChange={(e) => handleChange(e, index, 'experience', 'title')} />
            <input type="text" placeholder="Designation" value={exp.designation} onChange={(e) => handleChange(e, index, 'experience', 'designation')} />
            <input type="text" placeholder="Timeline" value={exp.timeline} onChange={(e) => handleChange(e, index, 'experience', 'timeline')} />
            <textarea placeholder="Description" value={exp.description} onChange={(e) => handleChange(e, index, 'experience', 'description')} />
          </div>
        ))}
        <button type="button" onClick={() => handleAddField('experience')}>Add Experience</button>
      </section>
    </div>
  );
};

export default ResumeForm;
