import Section from "./Section";

type EducationItem = {
  school: string;
  location: string;
  degree: string;
  gpa?: string;
  period: string;
  details: string[];
};

export default function Education({ education }: { education: EducationItem[] }) {
  return (
    <Section title="Education" className="section-wrapper">
      <div className="max-w-4xl mx-auto space-y-8">
        {education.map((item, idx) => (
          <div key={idx} className="item-border">
            <div className="flex justify-between items-center">
              <h3 className="item-heading">{item.school}</h3>
              <span className="item-period">{item.period}</span>
            </div>
            <p className="item-location">{item.location}</p>
            <p className="item-degree">
              {item.degree} {item.gpa && `| GPA: ${item.gpa}`}
            </p>
            <ul className="list-text">
              {item.details.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
