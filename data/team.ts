// data/team.ts
export interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: 'instructors' | 'staff';
  bio: string;
  image: string;
  specialties?: string[];
  experience?: string;
  email?: string;
  linkedin?: string;
  twitter?: string;
  order?: number;
}

export const teamMembers: TeamMember[] = [
  // Instructors
  {
    id: 1,
    name: 'Captain John Smith',
    role: 'Chief Flight Instructor',
    department: 'instructors',
    bio: 'With over 15,000 flight hours and 20 years of experience, Captain Smith leads our instructor team with passion and precision.',
    specialties: ['Instrument Rating', 'Multi-Engine', 'Commercial Pilot'],
    experience: '15,000+ hours',
    email: 'john.smith@goflyacademy.com',
    linkedin: '#',
    twitter: '#',
    image: '/placeholder.jpg',
    order: 1,
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Senior Flight Instructor',
    department: 'instructors',
    bio: 'Former airline pilot with extensive experience in both domestic and international routes. Specializes in advanced maneuvering and emergency procedures.',
    specialties: ['Private Pilot', 'Commercial Pilot', 'Type Rating'],
    experience: '8,500+ hours',
    email: 'sarah.johnson@goflyacademy.com',
    linkedin: '#',
    twitter: '#',
    image: '/placeholder.jpg',
    order: 2,
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Flight Instructor',
    department: 'instructors',
    bio: 'Passionate aviator with a background in aerospace engineering. Brings technical expertise to every lesson, making complex concepts easy to understand.',
    specialties: ['Recreational Pilot', 'Sport Pilot', 'Aerodynamics'],
    experience: '3,200+ hours',
    email: 'michael.chen@goflyacademy.com',
    image: '/placeholder.jpg',
    order: 3,
  },
  {
    id: 4,
    name: 'Emily Rodriguez',
    role: 'Instrument Rating Specialist',
    department: 'instructors',
    bio: 'Dedicated to helping pilots master instrument flying. Known for patient instruction and innovative teaching methods.',
    specialties: ['Instrument Rating', 'IFR Operations', 'Navigation'],
    experience: '5,000+ hours',
    email: 'emily.rodriguez@goflyacademy.com',
    linkedin: '#',
    image: '/placeholder.jpg',
    order: 4,
  },
  // Staff Members
  {
    id: 5,
    name: 'David Thompson',
    role: 'Operations Manager',
    department: 'staff',
    bio: 'Ensures smooth daily operations at Ibras Aviation. With a background in aviation management, David keeps our schedule running efficiently.',
    email: 'david.thompson@goflyacademy.com',
    linkedin: '#',
    twitter: '#',
    image: '/placeholder.jpg',
    order: 1,
  },
  {
    id: 6,
    name: 'Lisa Park',
    role: 'Student Services Coordinator',
    department: 'staff',
    bio: 'The first point of contact for our students. Lisa handles enrollment, scheduling, and makes sure every student feels welcome.',
    email: 'lisa.park@goflyacademy.com',
    linkedin: '#',
    image: '/placeholder.jpg',
    order: 2,
  },
  {
    id: 7,
    name: 'James Wilson',
    role: 'Aircraft Maintenance Manager',
    department: 'staff',
    bio: 'Certified A&P mechanic with 15 years of experience. James ensures our fleet is always in top condition for safe training.',
    specialties: ['A&P Certification', 'Fleet Management'],
    email: 'james.wilson@goflyacademy.com',
    linkedin: '#',
    image: '/placeholder.jpg',
    order: 3,
  },
  {
    id: 8,
    name: 'Maria Garcia',
    role: 'Administrative Assistant',
    department: 'staff',
    bio: 'Keeps everything organized behind the scenes. Maria manages documentation, scheduling, and student records with meticulous attention to detail.',
    email: 'maria.garcia@goflyacademy.com',
    image: '/placeholder.jpg',
    order: 4,
  },
];

// Helper functions
export const getInstructors = () =>
  teamMembers
    .filter((member) => member.department === 'instructors')
    .sort((a, b) => (a.order || 0) - (b.order || 0));

export const getStaff = () =>
  teamMembers
    .filter((member) => member.department === 'staff')
    .sort((a, b) => (a.order || 0) - (b.order || 0));

export const getTeamMember = (id: number) => teamMembers.find((member) => member.id === id);
