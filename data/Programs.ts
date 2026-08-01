export interface Program {
  id: string;
  title: string;
  price: number | null;
  duration?: string | null;
  trainingType?: string | null;
  cta: string;
  bestFor?: string | null;
  overview?: string;
  courseIncludes: string[] | null;
  learningOutcomes?: string[] | null;
  prerequisites?: string[] | null;
  disclaimer?: string | null;
  thirdPartyFees?: string | null;
  shortCode: string;
  headLine: string | null;
}

// export const courses: Course[] = [
//   {
//     id: 'zero-to-commercial',
//     title: 'From Zero Experience to Commercial Pilot (SEL)',
//     price: 52999,
//     trainingType: 'Accelerated Training',
//     duration: '7–11 Months',
//     shortCode: 'SEL',
//     shortDescription:
//       'Go from zero flight experience to a Commercial Pilot Certificate through personalized FAA Part 61 training.',
//     cta: 'Start Training',
//     bestFor: 'Career-focused students',
//     overview:
//       'Go from no flight experience to a <b>Commercial Pilot Certificate</b> through a structured, one-on-one <b>FAA Part 61</b> training program designed for consistent progress, real-world skill development, and personalized instruction.',
//     learningOutcomes: [
//       '<b>Private Pilot, Instrument Rating & Commercial Pilot training</b> through a structured FAA Part 61 pathway.',
//       '<b>Personalized one-on-one instruction</b> tailored to your pace, proficiency, and goals.',
//       '<b>Real-world flight operations</b> including cross-country flying, navigation, instrument procedures, and commercial maneuvers.',
//       '<b>FAA knowledge test and checkride preparation</b> with mock oral exams and practical training.',
//       '<b>Professional aeronautical decision-making, safety, and confidence</b> for an aviation career.',
//     ],
//     courseIncludes: [],
//     disclaimer:
//       'Timeline varies based on student proficiency, training frequency, weather, aircraft availability, and FAA practical test scheduling.',
//     thirdPartyFees:
//       'FAA testing fees, medical examination fees, DPE checkride fees, checkride aircraft rental, training materials, and any additional flight time required beyond FAA course minimums are paid separately by the student.',
//   },
//   {
//     id: 'private-pilot',
//     title: 'Private Pilot Training',
//     price: 7649,
//     trainingType: 'Accelerated Training',
//     duration: '4–8 Weeks',
//     shortCode: 'PPL',
//     shortDescription: 'Your first step toward becoming a safe and confident pilot.',
//     cta: 'Start PPL Training →',
//     bestFor: 'Aspiring pilots starting their aviation journey',
//     overview:
//       'Kickstart your aviation career with our <b>Private Pilot Training</b>. This structured FAA Part 61 program provides the foundational skills and knowledge required to earn your Private Pilot Certificate and fly with confidence.',
//     learningOutcomes: [
//       '<b>Master fundamental flight maneuvers</b> including takeoffs, landings, and emergency procedures.',
//       '<b>Develop cross-country navigation skills</b> using visual flight rules (VFR) and pilotage.',
//       '<b>Build strong aeronautical decision-making</b> and situational awareness.',
//       '<b>Prepare for the FAA Private Pilot knowledge test</b> and checkride with mock exams.',
//       '<b>Gain the confidence</b> to operate an aircraft safely and efficiently.',
//     ],
//     courseIncludes: [
//       '40 Hours Total Flight Time (Single Engine)',
//       '20 Hours Dual Instruction',
//       '10 Hours Ground Instruction',
//     ],
//     disclaimer:
//       'Timeline varies based on student proficiency, training frequency, weather, aircraft availability, and FAA practical test scheduling.',
//     thirdPartyFees:
//       'FAA testing fees, medical examination fees, DPE checkride fees, checkride aircraft rental, training materials, and any additional flight time required beyond FAA course minimums are paid separately by the student.',
//   },
//   {
//     id: 'instrument-rating',
//     title: 'Instrument Rating (IR)',
//     price: 8449,
//     trainingType: 'Accelerated Training',
//     duration: '2–4 Weeks',
//     shortCode: 'IR',
//     shortDescription:
//       'Train to operate safely in IFR conditions using instruments, procedures, and controlled airspace navigation.',
//     cta: 'Start Instrument Training →',
//     bestFor: 'Pilots seeking to fly in all weather conditions',
//     overview:
//       'Earn your <b>Instrument Rating</b> and learn to fly solely by reference to instruments. This course prepares you to operate in <b>Instrument Flight Rules (IFR)</b> conditions, navigate controlled airspace, and handle complex procedures with precision.',
//     learningOutcomes: [
//       '<b>Master IFR operations</b> including departures, en-route navigation, and approaches.',
//       '<b>Develop proficiency in instrument scanning</b> and attitude instrument flying.',
//       '<b>Learn to interpret and file IFR flight plans</b> and understand air traffic control clearances.',
//       '<b>Practice holding patterns, DME arcs, and precision/non-precision approaches</b>.',
//       '<b>Prepare for the FAA Instrument knowledge test</b> and checkride with practical scenarios.',
//     ],
//     courseIncludes: [
//       '45 Hours Total Flight Time (Single Engine)',
//       '30 Hours Flight Instruction',
//       '10 Hours Ground Instruction',
//     ],
//     disclaimer:
//       'Timeline varies based on student proficiency, training frequency, weather, aircraft availability, and FAA practical test scheduling.',
//     thirdPartyFees:
//       'FAA testing fees, medical examination fees, DPE checkride fees, checkride aircraft rental, training materials, and any additional flight time required beyond FAA course minimums are paid separately by the student.',
//   },
//   {
//     id: 'commercial-pilot',
//     title: 'Commercial Pilot License',
//     price: 5249,
//     trainingType: 'Accelerated Training',
//     duration: '2–4 Weeks',
//     shortCode: 'CPL',
//     shortDescription:
//       'Advanced flight training focused on professional standards required for FAA Commercial Pilot certification.',
//     cta: 'Start CPL Single Engine Training →',
//     bestFor: 'Pilots ready to turn flying into a profession',
//     overview:
//       'Turn your passion into a profession with our <b>Commercial Pilot License</b> training. This course hones your precision and decision-making to meet the <b>FAA Commercial Pilot</b> standards, allowing you to fly for compensation or hire.',
//     learningOutcomes: [
//       '<b>Master complex commercial maneuvers</b> including chandelles, lazy eights, and steep turns.',
//       '<b>Develop advanced aeronautical decision-making</b> and risk management skills.',
//       '<b>Understand FAA regulations</b> governing commercial operations and pilot privileges.',
//       '<b>Refine cross-country planning and execution</b> to commercial standards.',
//       '<b>Prepare for the FAA Commercial knowledge test</b> and checkride with confidence.',
//     ],
//     courseIncludes: [
//       '20 Hours Total Flight Time (Single Engine)',
//       '20 Hours Dual Instruction',
//       '10 Hours Ground Instruction',
//     ],
//     prerequisites: [
//       'Private Pilot Certificate',
//       'Meet FAA Commercial Pilot aeronautical experience requirements',
//       'Current FAA Medical Certificate',
//       'Instrument Rating (Airplane)',
//     ],
//     disclaimer:
//       'Timeline varies based on student proficiency, training frequency, weather, aircraft availability, and FAA practical test scheduling.',
//     thirdPartyFees:
//       'FAA testing fees, medical examination fees, DPE checkride fees, checkride aircraft rental, training materials, and any additional flight time required beyond FAA course minimums are paid separately by the student.',
//   },
//   {
//     id: 'cfi-cfii',
//     title: 'FAA Flight Instructor Training (CFI & CFII)',
//     price: 3999,
//     trainingType: 'Accelerated Training',
//     duration: '2–4 Weeks',
//     shortCode: 'CFI & CFII',
//     shortDescription:
//       'Personalized training to help you earn your instructor certificates and begin building flight experience.',
//     cta: 'Start Training →',
//     bestFor: 'Pilots looking to build hours and share their knowledge',
//     overview:
//       'Become an <b>FAA Certified Flight Instructor (CFI)</b> and <b>Instrument Instructor (CFII)</b>. This program provides the skills and techniques needed to teach the next generation of pilots while building valuable flight experience for your aviation career.',
//     learningOutcomes: [
//       '<b>Learn effective teaching methodologies</b> and how to explain complex concepts clearly.',
//       '<b>Develop instructional skills</b> in both VFR and IFR environments.',
//       '<b>Master the Fundamentals of Instructing (FOI)</b> and FAA instructor responsibilities.',
//       '<b>Practice teaching maneuvers from the right seat</b> with real student scenarios.',
//       '<b>Prepare for the FAA CFI and CFII knowledge tests</b> and checkrides.',
//     ],
//     courseIncludes: [
//       '18 Hours Total Flight Time (Single Engine)',
//       '18 Hours Dual Instruction',
//       '10 Hours Ground Instruction',
//     ],
//     prerequisites: [
//       'Commercial Pilot Certificate',
//       'Instrument Rating',
//       'Current FAA Medical Certificate',
//     ],
//     disclaimer:
//       'Timeline varies based on student proficiency, training frequency, weather, aircraft availability, and FAA practical test scheduling.',
//     thirdPartyFees:
//       'FAA testing fees, medical examination fees, DPE checkride fees, checkride aircraft rental, training materials, and any additional flight time required beyond FAA course minimums are paid separately by the student.',
//   },
// ];

export const program1: Program[] = [
  {
    id: 'zero-to-commercial',
    title: 'From Zero Experience to Commercial Pilot',
    price: 52999,
    trainingType: 'Accelerated Training',
    duration: '7–11 Months',
    shortCode: 'SEL',
    cta: 'Start Training',
    bestFor: 'Career-focused students',
    overview:
      'Go from no flight experience to a <b>Commercial Pilot Certificate</b> through a structured, one-on-one <b>FAA Part 61</b> training program designed for consistent progress, real-world skill development, and personalized instruction.',
    learningOutcomes: [
      '<b>Private Pilot, Instrument Rating & Commercial Pilot training</b> through a structured FAA Part 61 pathway.',
      '<b>Personalized one-on-one instruction</b> tailored to your pace, proficiency, and goals.',
      '<b>Real-world flight operations</b> including cross-country flying, navigation, instrument procedures, and commercial maneuvers.',
      '<b>FAA knowledge test and checkride preparation</b> with mock oral exams and practical training.',
      '<b>Professional aeronautical decision-making, safety, and confidence</b> for an aviation career.',
    ],
    headLine: null,
    courseIncludes: null,
    prerequisites: null,
    disclaimer:
      'Timeline varies based on student proficiency, training frequency, weather, aircraft availability, and FAA practical test scheduling.',
    thirdPartyFees: null,
  },
  {
    id: 'private-pilot',
    title: 'Private Pilot Training',
    price: 7649,
    trainingType: 'Accelerated Training',
    duration: '4–8 Weeks',
    shortCode: 'PPL',
    cta: 'Start PPL Training',
    bestFor: null,
    overview: 'Your first step toward becoming a safe and confident pilot.',
    learningOutcomes: null,
    courseIncludes: [
      '<b>40 Hours</b> Total Flight Time (Single Engine)',
      '<b>20 Hours</b> Dual Instruction',
      '<b>10 Hours</b> Ground Instruction',
    ],
    headLine: null,
    prerequisites: null,
    disclaimer: null,
    thirdPartyFees:
      'FAA testing fees, medical examination fees, DPE checkride fees, checkride aircraft rental, training materials, and any additional flight time required beyond FAA course minimums are not included and are paid separately by the student.',
  },

  {
    id: 'instrument-rating',
    title: 'Instrument Rating (IR)',
    price: 8449,
    trainingType: 'Accelerated Training',
    duration: '2–4 Weeks',
    shortCode: 'IR',
    headLine: null,
    cta: 'Start Instrument Training',
    bestFor: null,
    overview:
      'Train to operate safely in IFR conditions using instruments, procedures, and controlled airspace navigation.',
    learningOutcomes: null,
    courseIncludes: [
      '<b>45 Hours</b> Total Flight Time (Single Engine)',
      '<b>30 Hours</b> Dual Instruction',
      '<b>10 Hours</b> Ground Instruction',
    ],
    prerequisites: null,
    disclaimer: null,
    thirdPartyFees:
      'FAA testing fees, medical examination fees, DPE checkride fees, checkride aircraft rental, training materials, and any additional flight time required beyond FAA course minimums are paid separately by the student.',
  },

  {
    id: 'commercial-pilot',
    title: 'Commercial Pilot License',
    price: 5249,
    trainingType: 'Accelerated Training',
    duration: '2–4 Weeks',
    shortCode: 'CPL',
    cta: 'Start CPL Single Engine Training',
    bestFor: null,
    headLine: 'Turn Your Passion Into a Profession',
    overview:
      'Advanced flight training focused on precision, professional standards, and the skills required to earn your FAA Commercial Pilot Certificate and fly for compensation.',
    learningOutcomes: null,
    courseIncludes: [
      '20 Hours Total Flight Time (Single Engine)',
      '20 Hours Dual Instruction',
      '10 Hours Ground Instruction',
    ],

    prerequisites: [
      'Private Pilot Certificate',
      'Meet FAA Commercial Pilot aeronautical experience requirements',
      'Current FAA Medical Certificate',
      'Instrument Rating (Airplane)',
    ],
    disclaimer: null,
    thirdPartyFees:
      'FAA testing fees, medical examination fees, DPE checkride fees, checkride aircraft rental, training materials, and any additional flight time required beyond FAA course minimums are paid separately by the student.',
  },
  {
    id: 'cfi-cfii',
    title: 'FAA Flight Instructor Training (CFI & CFII)',
    price: 3999,
    trainingType: 'Accelerated Training',
    duration: '2–4 Weeks',
    shortCode: 'CFI & CFII',
    headLine: null,
    cta: 'Start Training ',
    bestFor: null,
    overview:
      'Personalized training to help you earn your instructor certificates and begin building flight experience.',
    learningOutcomes: null,
    courseIncludes: [
      '18 Hours Total Flight Time (Single Engine)',
      '18 Hours Dual Instruction',
      '10 Hours Ground Instruction',
    ],
    prerequisites: null,
    disclaimer: null,
    thirdPartyFees:
      'FAA testing fees, medical examination fees, DPE checkride fees, checkride aircraft rental, training materials, and any additional flight time required beyond FAA course minimums are paid separately by the student.',
  },
];

export const program2: Program[] = [
  {
    id: 'instrument-proficiency-check',
    title: 'Instrument Proficiency Check (IPC)',
    price: null,
    trainingType: null,
    duration: null,
    shortCode: 'IPC',
    headLine: 'Regain Instrument Currency & Confidence',
    cta: 'Schedule IPC Training',
    bestFor: null,
    overview:
      'Refresher training for instrument-rated pilots to restore proficiency and meet FAA instrument currency requirements.',
    learningOutcomes: [
      'Instrument skills refresher',
      'IFR procedures review',
      'Scenario-based training',
      'FAA currency requirements',
      'Confidence restoration',
    ],
    courseIncludes: null,
    prerequisites: null,
    disclaimer: null,
    thirdPartyFees: null,
  },
  {
    id: 'flight-review',
    title: 'Flight Review (BFR)',
    price: null,
    trainingType: null,
    duration: null,
    shortCode: 'BFR',
    headLine: 'Stay Current. Stay Safe.',
    cta: 'Schedule Flight Review',
    bestFor: null,
    overview:
      'FAA-required flight review training under Part 61 to ensure you remain safe, current, and confident as a pilot.',
    learningOutcomes: [
      'Airspace and regulations review',
      'Flight maneuvers evaluation',
      'Safety and decision-making review',
      'Personalized one-on-one assessment',
    ],
    courseIncludes: null,
    prerequisites: null,
    disclaimer: null,
    thirdPartyFees:
      'FAA testing fees, medical examination fees, DPE checkride fees, checkride aircraft rental, training materials, and any additional flight time required beyond FAA course minimums are paid separately by the student.',
  },
];

export const program3: Program[] = [
  {
    id: 'checkride-preparation',
    title: 'Checkride Preparation',
    price: null,
    trainingType: null,
    duration: null,
    shortCode: 'CP',
    headLine: 'Pass Your FAA Checkride with Confidence',
    cta: 'Get Checkride Ready',
    bestFor: null,
    overview:
      'Mock checkrides, oral exam preparation, and structured ACS-based training designed to ensure you are fully ready for your FAA practical test.',
    learningOutcomes: [
      'Mock practical tests',
      'Oral examination preparation',
      'ACS-based evaluation',
      'Personalized instructor feedback',
      'Confidence-building practice sessions',
    ],
    courseIncludes: null,
    prerequisites: [
      'Private Pilot Certificate',
      'Meet FAA Commercial Pilot aeronautical experience requirements',
      'Current FAA Medical Certificate',
      'Instrument Rating (Airplane)',
    ],
    disclaimer: null,
    thirdPartyFees:
      'FAA testing fees, medical examination fees, DPE checkride fees, checkride aircraft rental, training materials, and any additional flight time required beyond FAA course minimums are paid separately by the student.',
  },
  {
    id: 'foreign-license-conversion',
    title: 'Foreign License Conversion',
    price: null,
    trainingType: null,
    duration: null,
    shortCode: 'FAA Conversion',
    headLine: 'FAA Certification Support',
    cta: 'Start Conversion',
    bestFor: null,
    overview:
      'Guidance and training support for pilots transitioning from international licenses to FAA certification.',
    learningOutcomes: [
      'FAA certification guidance',
      'Required flight training',
      'Regulatory assistance',
      'Knowledge test preparation',
      'Transition support',
    ],
    courseIncludes: null,
    prerequisites: null,
    disclaimer: null,
    thirdPartyFees: null,
  },
  {
    id: 'aircraft-ferry-services',
    title: 'Aircraft Ferry Services',
    price: null,
    trainingType: null,
    duration: null,
    shortCode: 'Ferry',
    headLine: 'Professional Ferry & Delivery Flights',
    cta: 'Request Ferry Service',
    bestFor: null,
    overview:
      'Safe and professional ferry flight services for aircraft relocation and delivery support, conducted by a qualified and current flight instructor.',
    learningOutcomes: [
      'Aircraft repositioning flights',
      'Aircraft delivery support',
      'Pre-flight planning',
      'Safety-focused execution',
      'Professional coordination',
    ],
    courseIncludes: null,
    prerequisites: null,
    disclaimer: null,
    thirdPartyFees: null,
  },
];
