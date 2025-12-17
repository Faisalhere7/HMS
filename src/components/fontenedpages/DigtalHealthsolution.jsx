import { CalendarHeart, Contact, HospitalIcon, LocationEditIcon, PersonStanding, PersonStandingIcon, Phone, VideoIcon } from 'lucide-react';
import { Clock, FileText, Video, BarChart3, Bell, Users } from 'lucide-react';
import { PiArticleNyTimes } from 'react-icons/pi';

export default function DigitalHealthSolutions() {
  const solutions = [
    {
      icon: PersonStanding,
      title: "Role-Based Access",
      description: "Secure login/signup system using JWT authentication Role-based access for Admin Panel and User Panel."
    },
    {
      icon: VideoIcon,
      title: "Patient Management",
      description: "Register/Admit Patient with details: Name, Email, Age, Disease, etc.Store patient info in database using Mongoose Admin can accept/reject patients, and approved ones are shown in the system."
    },
    {
      icon: Clock,
      title: "Appointments & Scheduling",
      description: "Users can book appointments with registered doctors Appointment form captures: Patient Name, Doctor, Age, Gender, Date Admin can review and manage appointment requests."
    },
    {
      icon: HospitalIcon,
      title: "Doctor Management",
      description: "Public form to register as a doctor with specialization and consultation fee Admin receives requests and can approve or reject doctors Approved doctors are displayed on Our Team page with full profile cards."
    },
    {
      icon: Contact,
      title: "Contact & Support",
      description: "Contact form and Support section let users send messages or queries to admin Admin can view and respond to all messages in the backend Talk With Us + Schedule a Demo for customer engagemen."
    },
    {
      icon: LocationEditIcon,
      title: "Hospital Location",
      description: "Integrated Map component using React Visit Our Location section with address, working hours, and contact info Displayed in Contact Us page and Footer"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Digital <span className="text-cyan-500">Health</span> Solutions
          </h1>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-blue-600" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-blue-600 mb-4 leading-tight">
                  {solution.title}
                </h3>

                {/* Divider */}
                <div className="w-12 h-0.5 bg-gray-300 mb-4"></div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>





   

    </div>
  );
}