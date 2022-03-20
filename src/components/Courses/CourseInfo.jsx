import CourseView from './CourseView';

const courseDetails = {
  standardFirstAid: {
    title: 'Standard First Aid',
    summary:
      'A comprehensive two-day course offering first aid and cardiopulmonary resuscitation (CPR) skills for those who need training due to work requirements or who want more knowledge to respond to emergencies at home. Course meets legislation requirements for provincial/territorial worker safety and insurance boards and includes the latest first aid and CPR guidelines.',
    image: '/images/standard-first-aid-picture.jpg',
    content: [
      'The Red Cross',
      'Preparing to respond',
      'The EMS system',
      'Check, Call, Care',
      'Airway emergencies',
      'Breathing and Circulation emergencies',
      'First aid for respiratory and cardiac arrest',
      'Wound care',
      'Head, neck and spinal injuries',
      'Bone, muscle and joint injuries',
      'Sudden Medical Emergencies',
      'Environmental Illnesses',
      'Poisons',
      'Includes any other content required by specific legislation'
    ],
    materials: [
      'First Aid & CPR (print and/or eBook)',
      'Comprehensive Guide to First Aid & CPR (eBook)',
      'Standard First Aid CPR A/C – Online access',
      'Standard First Aid certificate (digital certificate issued upon successful completion)'
    ],
    duration: [
      'CPR A: 13 hours in-class OR 5.5 hours in-class + 8 hours online learning',
      'CPR C: 14 hours in-class OR 7.5 hours in-class + 8 hours online learning'
    ],
    instructor: ['First Aid Instructor'],
    prerequisite: ['None'],
    completion: [
      'Successfully demonstrate skills and critical steps',
      'Min. 75% mark for written knowledge evaluation',
      'Attend and participate in 100% of the course'
    ],
    certification: [
      '3-year certification in Standard First Aid and CPR Level A or C'
    ],
    recertification: [
      'CPR A: 6.5 hours in-class OR 3 hours in-class + 4 hours online learning',
      'CPR C: 7.5 hours in-class OR 4 hours in-class + 4 hours online learning'
    ]
  },
  emergencyFirstAid: {
    title: 'Emergency First Aid',
    summary:
      'A basic one-day course offering lifesaving first aid and cardiopulmonary resuscitation (CPR) skills for the workplace or home. Course meets legislation requirements for provincial/territorial worker safety and insurance boards and includes the latest first aid and CPR guidelines.',
    image: '/images/emergency-first-aid-picture.jpg',
    content: [
      'The Red Cross',
      'Preparing to respond',
      'The EMS system',
      'Check, Call, Care',
      'Airway emergencies',
      'Breathing and Circulation emergencies',
      'First aid for respiratory and cardiac arrest',
      'Wound care'
    ],
    materials: [
      'First Aid & CPR (print and/or eBook)',
      'Comprehensive Guide to First Aid & CPR (eBook)',
      'Emergency First Aid – Online (Blended only)',
      'Emergency First Aid certificate (digital certificate issued upon successful completion)'
    ],
    duration: [
      'CPR A: 6.5 hours in-class OR 3.5 hours in-class + 4 hours online learning',
      'CPR C: 7.5 hours in-class OR 4.5 hours in-class + 4 hours online learning'
    ],
    instructor: ['First Aid Instructor'],
    prerequisite: ['None'],
    completion: [
      'Successfully demonstrate skills and critical steps',
      'Min. 75% mark for written knowledge evaluation',
      'Attend and participate in 100% of the course'
    ],
    certification: [
      '3-year certification in Emergency First Aid and CPR Level A or C'
    ],
    recertification: [
      'CPR A: 4 hours in-class OR 3 hours in-class + 4 hours online learning',
      'CPR C: 5 hours in-class OR 4 hours in-class + 4 hours online learning'
    ]
  },
  cprAed: {
    title: 'CPR & AED',
    summary:
      'A comprehensive two-day course offering first aid and cardiopulmonary resuscitation (CPR) skills for those who need training due to work requirements or who want more knowledge to respond to emergencies at home. Course meets legislation requirements for provincial/territorial worker safety and insurance boards and includes the latest first aid and CPR guidelines.',
    image: '/images/cpr-aed-picture.jpg',
    content: [
      'The Red Cross',
      'Preparing to respond',
      'The EMS system',
      'Check, Call, Care',
      'Airway emergencies',
      'Breathing and Circulation emergencies',
      'First aid for respiratory and cardiac arrest',
      'Wound care',
      'Head, neck and spinal injuries',
      'Bone, muscle and joint injuries',
      'Sudden Medical Emergencies',
      'Environmental Illnesses',
      'Poisons',
      'Includes any other content required by specific legislation'
    ],
    materials: [
      'First Aid & CPR (print and/or eBook)',
      'Comprehensive Guide to First Aid & CPR (eBook)',
      'Standard First Aid CPR A/C – Online access',
      'Standard First Aid certificate (digital certificate issued upon successful completion)'
    ],
    duration: [
      'CPR A: 13 hours in-class OR 5.5 hours in-class + 8 hours online learning',
      'CPR C: 14 hours in-class OR 7.5 hours in-class + 8 hours online learning'
    ],
    instructor: ['First Aid Instructor'],
    prerequisite: ['None'],
    completion: [
      'Successfully demonstrate skills and critical steps',
      'Min. 75% mark for written knowledge evaluation',
      'Attend and participate in 100% of the course'
    ],
    certification: [
      '3-year certification in Standard First Aid and CPR Level A or C'
    ],
    recertification: [
      'CPR A: 6.5 hours in-class OR 3 hours in-class + 4 hours online learning',
      'CPR C: 7.5 hours in-class OR 4 hours in-class + 4 hours online learning'
    ]
  },
  basicLifeSupport: {
    title: 'Basic Life Support',
    summary:
      'A comprehensive two-day course offering first aid and cardiopulmonary resuscitation (CPR) skills for those who need training due to work requirements or who want more knowledge to respond to emergencies at home. Course meets legislation requirements for provincial/territorial worker safety and insurance boards and includes the latest first aid and CPR guidelines.',
    image: '/images/cpr-aed-picture.jpg',
    content: [
      'The Red Cross',
      'Preparing to respond',
      'The EMS system',
      'Check, Call, Care',
      'Airway emergencies',
      'Breathing and Circulation emergencies',
      'First aid for respiratory and cardiac arrest',
      'Wound care',
      'Head, neck and spinal injuries',
      'Bone, muscle and joint injuries',
      'Sudden Medical Emergencies',
      'Environmental Illnesses',
      'Poisons',
      'Includes any other content required by specific legislation'
    ],
    materials: [
      'First Aid & CPR (print and/or eBook)',
      'Comprehensive Guide to First Aid & CPR (eBook)',
      'Standard First Aid CPR A/C – Online access',
      'Standard First Aid certificate (digital certificate issued upon successful completion)'
    ],
    duration: [
      'CPR A: 13 hours in-class OR 5.5 hours in-class + 8 hours online learning',
      'CPR C: 14 hours in-class OR 7.5 hours in-class + 8 hours online learning'
    ],
    instructor: ['First Aid Instructor'],
    prerequisite: ['None'],
    completion: [
      'Successfully demonstrate skills and critical steps',
      'Min. 75% mark for written knowledge evaluation',
      'Attend and participate in 100% of the course'
    ],
    certification: [
      '3-year certification in Standard First Aid and CPR Level A or C'
    ],
    recertification: [
      'CPR A: 6.5 hours in-class OR 3 hours in-class + 4 hours online learning',
      'CPR C: 7.5 hours in-class OR 4 hours in-class + 4 hours online learning'
    ]
  },
  marineBasicFirstAid: {
    title: 'Marine Basic First Aid',
    summary:
      'A comprehensive two-day course offering first aid and cardiopulmonary resuscitation (CPR) skills for those who need training due to work requirements or who want more knowledge to respond to emergencies at home. Course meets legislation requirements for provincial/territorial worker safety and insurance boards and includes the latest first aid and CPR guidelines.',
    image: '/images/cpr-aed-picture.jpg',
    content: [
      'The Red Cross',
      'Preparing to respond',
      'The EMS system',
      'Check, Call, Care',
      'Airway emergencies',
      'Breathing and Circulation emergencies',
      'First aid for respiratory and cardiac arrest',
      'Wound care',
      'Head, neck and spinal injuries',
      'Bone, muscle and joint injuries',
      'Sudden Medical Emergencies',
      'Environmental Illnesses',
      'Poisons',
      'Includes any other content required by specific legislation'
    ],
    materials: [
      'First Aid & CPR (print and/or eBook)',
      'Comprehensive Guide to First Aid & CPR (eBook)',
      'Standard First Aid CPR A/C – Online access',
      'Standard First Aid certificate (digital certificate issued upon successful completion)'
    ],
    duration: [
      'CPR A: 13 hours in-class OR 5.5 hours in-class + 8 hours online learning',
      'CPR C: 14 hours in-class OR 7.5 hours in-class + 8 hours online learning'
    ],
    instructor: ['First Aid Instructor'],
    prerequisite: ['None'],
    completion: [
      'Successfully demonstrate skills and critical steps',
      'Min. 75% mark for written knowledge evaluation',
      'Attend and participate in 100% of the course'
    ],
    certification: [
      '3-year certification in Standard First Aid and CPR Level A or C'
    ],
    recertification: [
      'CPR A: 6.5 hours in-class OR 3 hours in-class + 4 hours online learning',
      'CPR C: 7.5 hours in-class OR 4 hours in-class + 4 hours online learning'
    ]
  },
  standardFirstAidChild: {
    title: 'Standard First Aid (Child Care)',
    summary:
      'A comprehensive two-day course offering first aid and cardiopulmonary resuscitation (CPR) skills for those who need training due to work requirements or who want more knowledge to respond to emergencies at home. Course meets legislation requirements for provincial/territorial worker safety and insurance boards and includes the latest first aid and CPR guidelines.',
    image: '/images/cpr-aed-picture.jpg',
    content: [
      'The Red Cross',
      'Preparing to respond',
      'The EMS system',
      'Check, Call, Care',
      'Airway emergencies',
      'Breathing and Circulation emergencies',
      'First aid for respiratory and cardiac arrest',
      'Wound care',
      'Head, neck and spinal injuries',
      'Bone, muscle and joint injuries',
      'Sudden Medical Emergencies',
      'Environmental Illnesses',
      'Poisons',
      'Includes any other content required by specific legislation'
    ],
    materials: [
      'First Aid & CPR (print and/or eBook)',
      'Comprehensive Guide to First Aid & CPR (eBook)',
      'Standard First Aid CPR A/C – Online access',
      'Standard First Aid certificate (digital certificate issued upon successful completion)'
    ],
    duration: [
      'CPR A: 13 hours in-class OR 5.5 hours in-class + 8 hours online learning',
      'CPR C: 14 hours in-class OR 7.5 hours in-class + 8 hours online learning'
    ],
    instructor: ['First Aid Instructor'],
    prerequisite: ['None'],
    completion: [
      'Successfully demonstrate skills and critical steps',
      'Min. 75% mark for written knowledge evaluation',
      'Attend and participate in 100% of the course'
    ],
    certification: [
      '3-year certification in Standard First Aid and CPR Level A or C'
    ],
    recertification: [
      'CPR A: 6.5 hours in-class OR 3 hours in-class + 4 hours online learning',
      'CPR C: 7.5 hours in-class OR 4 hours in-class + 4 hours online learning'
    ]
  },
  emergencyFirstAidChild: {
    title: 'Emergency First Aid (Child Care)',
    summary:
      'A comprehensive two-day course offering first aid and cardiopulmonary resuscitation (CPR) skills for those who need training due to work requirements or who want more knowledge to respond to emergencies at home. Course meets legislation requirements for provincial/territorial worker safety and insurance boards and includes the latest first aid and CPR guidelines.',
    image: '/images/cpr-aed-picture.jpg',
    content: [
      'The Red Cross',
      'Preparing to respond',
      'The EMS system',
      'Check, Call, Care',
      'Airway emergencies',
      'Breathing and Circulation emergencies',
      'First aid for respiratory and cardiac arrest',
      'Wound care',
      'Head, neck and spinal injuries',
      'Bone, muscle and joint injuries',
      'Sudden Medical Emergencies',
      'Environmental Illnesses',
      'Poisons',
      'Includes any other content required by specific legislation'
    ],
    materials: [
      'First Aid & CPR (print and/or eBook)',
      'Comprehensive Guide to First Aid & CPR (eBook)',
      'Standard First Aid CPR A/C – Online access',
      'Standard First Aid certificate (digital certificate issued upon successful completion)'
    ],
    duration: [
      'CPR A: 13 hours in-class OR 5.5 hours in-class + 8 hours online learning',
      'CPR C: 14 hours in-class OR 7.5 hours in-class + 8 hours online learning'
    ],
    instructor: ['First Aid Instructor'],
    prerequisite: ['None'],
    completion: [
      'Successfully demonstrate skills and critical steps',
      'Min. 75% mark for written knowledge evaluation',
      'Attend and participate in 100% of the course'
    ],
    certification: [
      '3-year certification in Standard First Aid and CPR Level A or C'
    ],
    recertification: [
      'CPR A: 6.5 hours in-class OR 3 hours in-class + 4 hours online learning',
      'CPR C: 7.5 hours in-class OR 4 hours in-class + 4 hours online learning'
    ]
  },
  oxygenTherapy: {
    title: 'Oxygen Therapy',
    summary:
      'A comprehensive two-day course offering first aid and cardiopulmonary resuscitation (CPR) skills for those who need training due to work requirements or who want more knowledge to respond to emergencies at home. Course meets legislation requirements for provincial/territorial worker safety and insurance boards and includes the latest first aid and CPR guidelines.',
    image: '/images/cpr-aed-picture.jpg',
    content: [
      'The Red Cross',
      'Preparing to respond',
      'The EMS system',
      'Check, Call, Care',
      'Airway emergencies',
      'Breathing and Circulation emergencies',
      'First aid for respiratory and cardiac arrest',
      'Wound care',
      'Head, neck and spinal injuries',
      'Bone, muscle and joint injuries',
      'Sudden Medical Emergencies',
      'Environmental Illnesses',
      'Poisons',
      'Includes any other content required by specific legislation'
    ],
    materials: [
      'First Aid & CPR (print and/or eBook)',
      'Comprehensive Guide to First Aid & CPR (eBook)',
      'Standard First Aid CPR A/C – Online access',
      'Standard First Aid certificate (digital certificate issued upon successful completion)'
    ],
    duration: [
      'CPR A: 13 hours in-class OR 5.5 hours in-class + 8 hours online learning',
      'CPR C: 14 hours in-class OR 7.5 hours in-class + 8 hours online learning'
    ],
    instructor: ['First Aid Instructor'],
    prerequisite: ['None'],
    completion: [
      'Successfully demonstrate skills and critical steps',
      'Min. 75% mark for written knowledge evaluation',
      'Attend and participate in 100% of the course'
    ],
    certification: [
      '3-year certification in Standard First Aid and CPR Level A or C'
    ],
    recertification: [
      'CPR A: 6.5 hours in-class OR 3 hours in-class + 4 hours online learning',
      'CPR C: 7.5 hours in-class OR 4 hours in-class + 4 hours online learning'
    ]
  },
  airwayManagement: {
    title: 'Airway Management',
    summary:
      'A comprehensive two-day course offering first aid and cardiopulmonary resuscitation (CPR) skills for those who need training due to work requirements or who want more knowledge to respond to emergencies at home. Course meets legislation requirements for provincial/territorial worker safety and insurance boards and includes the latest first aid and CPR guidelines.',
    image: '/images/cpr-aed-picture.jpg',
    content: [
      'The Red Cross',
      'Preparing to respond',
      'The EMS system',
      'Check, Call, Care',
      'Airway emergencies',
      'Breathing and Circulation emergencies',
      'First aid for respiratory and cardiac arrest',
      'Wound care',
      'Head, neck and spinal injuries',
      'Bone, muscle and joint injuries',
      'Sudden Medical Emergencies',
      'Environmental Illnesses',
      'Poisons',
      'Includes any other content required by specific legislation'
    ],
    materials: [
      'First Aid & CPR (print and/or eBook)',
      'Comprehensive Guide to First Aid & CPR (eBook)',
      'Standard First Aid CPR A/C – Online access',
      'Standard First Aid certificate (digital certificate issued upon successful completion)'
    ],
    duration: [
      'CPR A: 13 hours in-class OR 5.5 hours in-class + 8 hours online learning',
      'CPR C: 14 hours in-class OR 7.5 hours in-class + 8 hours online learning'
    ],
    instructor: ['First Aid Instructor'],
    prerequisite: ['None'],
    completion: [
      'Successfully demonstrate skills and critical steps',
      'Min. 75% mark for written knowledge evaluation',
      'Attend and participate in 100% of the course'
    ],
    certification: [
      '3-year certification in Standard First Aid and CPR Level A or C'
    ],
    recertification: [
      'CPR A: 6.5 hours in-class OR 3 hours in-class + 4 hours online learning',
      'CPR C: 7.5 hours in-class OR 4 hours in-class + 4 hours online learning'
    ]
  },
  workshops: {
    title: 'Workshops',
    summary:
      'A comprehensive two-day course offering first aid and cardiopulmonary resuscitation (CPR) skills for those who need training due to work requirements or who want more knowledge to respond to emergencies at home. Course meets legislation requirements for provincial/territorial worker safety and insurance boards and includes the latest first aid and CPR guidelines.',
    image: '/images/cpr-aed-picture.jpg',
    content: [
      'The Red Cross',
      'Preparing to respond',
      'The EMS system',
      'Check, Call, Care',
      'Airway emergencies',
      'Breathing and Circulation emergencies',
      'First aid for respiratory and cardiac arrest',
      'Wound care',
      'Head, neck and spinal injuries',
      'Bone, muscle and joint injuries',
      'Sudden Medical Emergencies',
      'Environmental Illnesses',
      'Poisons',
      'Includes any other content required by specific legislation'
    ],
    materials: [
      'First Aid & CPR (print and/or eBook)',
      'Comprehensive Guide to First Aid & CPR (eBook)',
      'Standard First Aid CPR A/C – Online access',
      'Standard First Aid certificate (digital certificate issued upon successful completion)'
    ],
    duration: [
      'CPR A: 13 hours in-class OR 5.5 hours in-class + 8 hours online learning',
      'CPR C: 14 hours in-class OR 7.5 hours in-class + 8 hours online learning'
    ],
    instructor: ['First Aid Instructor'],
    prerequisite: ['None'],
    completion: [
      'Successfully demonstrate skills and critical steps',
      'Min. 75% mark for written knowledge evaluation',
      'Attend and participate in 100% of the course'
    ],
    certification: [
      '3-year certification in Standard First Aid and CPR Level A or C'
    ],
    recertification: [
      'CPR A: 6.5 hours in-class OR 3 hours in-class + 4 hours online learning',
      'CPR C: 7.5 hours in-class OR 4 hours in-class + 4 hours online learning'
    ]
  }
};

const CourseInfo = function ({ course }) {
  const courseSelector = function () {
    if (course === 'Standard First Aid') {
      return <CourseView courseDetails={courseDetails.standardFirstAid} />;
    } else if (course === 'Emergency First Aid') {
      return <CourseView courseDetails={courseDetails.emergencyFirstAid} />;
    } else if (course === 'CPR & AED') {
      return <CourseView courseDetails={courseDetails.cprAed} />;
    } else if (course === 'Basic Life Support') {
      return <CourseView courseDetails={courseDetails.basicLifeSupport} />;
    } else if (course === 'Marine Basic First Aid') {
      return <CourseView courseDetails={courseDetails.marineBasicFirstAid} />;
    } else if (course === 'Standard First Aid (Child Care)') {
      return <CourseView courseDetails={courseDetails.standardFirstAidChild} />;
    } else if (course === 'Emergency First Aid (Child Care)') {
      return (
        <CourseView courseDetails={courseDetails.emergencyFirstAidChild} />
      );
    } else if (course === 'Oxygen Therapy') {
      return <CourseView courseDetails={courseDetails.oxygenTherapy} />;
    } else if (course === 'Airway Management') {
      return <CourseView courseDetails={courseDetails.airwayManagement} />;
    } else if (course === 'Workshops') {
      return <CourseView courseDetails={courseDetails.workshops} />;
    }
  };

  return courseSelector();
};

export default CourseInfo;
