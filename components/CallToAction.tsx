import React from 'react';

interface CallToActionProps {
  title: string;
  description: React.ReactNode;
  buttonText: string;
  buttonStyle: 'primary' | 'secondary';
  link: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ title, description, buttonText, buttonStyle, link }) => {
  const primaryClasses = "bg-purple-700 text-white hover:bg-purple-800";
  const secondaryClasses = "bg-transparent text-purple-800 border-2 border-purple-700 hover:bg-purple-100";

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-purple-900">{title}</h2>
        <div className="mt-4 text-lg text-gray-600 max-w-4xl mx-auto">
          {description}
        </div>
        <div className="mt-8">
          <a
            href={link}
            className={`inline-block px-10 py-4 font-bold rounded-full transition duration-300 text-lg ${
              buttonStyle === 'primary' ? primaryClasses : secondaryClasses
            }`}
          >
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;