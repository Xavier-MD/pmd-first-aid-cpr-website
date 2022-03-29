import CourseView from './CourseView';
import Error from '../../pages/Error';

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
      'Wound care',
      'Includes any other content required by specific legislation'
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
      'Courses on cardiopulmonary resuscitation (CPR) provide the skills needed to recognize and respond to cardiovascular emergencies and choking for adults, children, and babies depending on the level of CPR chosen. Courses meet legislation requirements for provincial/territorial worker safety and insurance boards, and include the latest CPR guidelines and training in the use of an automated external defibrillator (AED).',
    image: '/images/cpr-aed-picture.jpg',
    content: [
      'Level A',
      'The Red Cross',
      'Responding to Emergencies',
      'Check, Call, Care',
      'Recovery position',
      'Choking – adult',
      'Assisting with medications',
      'Angina and heart attack',
      'Stroke',
      'CPR and AED– adult',
      'Deadly bleeding',
      'Level C',
      'Level A content',
      'Choking – child and baby',
      'CPR and AED – child and baby',
      'Includes any other content required by specific legislation'
    ],
    materials: [
      'CPR (print and/or eBook)',
      'Comprehensive Guide to First Aid & CPR (eBook)',
      'CPR – Online access (Blended only)',
      'CPR certificate (digital certificate issued upon successful completion)'
    ],
    duration: [
      'CPR A: 4 hours in-class OR 2 hours in-class + 3 hours online learning*',
      'CPR C: 5 hours in-class OR 3 hours in-class + 3 hours online learning*'
    ],
    instructor: ['CPR Instructor or First Aid Instructor'],
    prerequisite: ['None'],
    completion: [
      'Successfully demonstrate skills and critical steps',
      'Min. 75% mark for written knowledge evaluation',
      'Attend and participate in 100% of the course'
    ],
    certification: ['3-year certification in CPR Level A or C'],
    recertification: [
      'Recertification of CPR A is not available. Recertification for CPR C is 3.5 hours teaching time in-class OR 2 hours online learning + 2.5 hours in-class for Blended CPR.'
    ]
  },
  basicLifeSupport: {
    title: 'Basic Life Support',
    summary:
      'Designed to build participant confidence in performing cardiopulmonary resuscitation (CPR) skills in a team environment for professionals with a duty to respond. Teaches the important steps to perform a rapid assessment, perform Basic Life Support (BLS) skills, and perform rapid defibrillation including use of an Automated External Defibrillator (AED). Airway Management and Oxygen Therapy can also be added as additional certifications to this course.',
    image: '/images/bls-picture.jpg',
    content: [
      'Glove removal',
      'Primary Assessment',
      'Cardiopulmonary Resuscitation (CPR) and Automated External Defibrillator (AED)',
      'Airway Obstruction',
      'Assisted Ventilation',
      'Basic Life Support special considerations'
    ],
    materials: ['Canadian Red Cross Basic Life Support Field Guide'],
    duration: [
      'Stand-alone course – 4 hours',
      'With Airway Management – 5 hours',
      'With Oxygen Therapy – 5 hours',
      'With Airway Management and Oxygen Therapy – 6 hours'
    ],
    instructor: ['CPR Instructor or First Aid Instructor'],
    prerequisite: ['None'],
    completion: [
      'Successfully demonstrate all course skill competencies',
      'Minimum 75% mark for written, closed book, knowledge evaluation',
      'Attend and participate in 100% of the course'
    ],
    certification: [
      '1-year certification in Basic Life Support (digital certificate issued upon successful completion)'
    ],
    recertification: ['2 hours']
  },
  marineBasicFirstAid: {
    title: 'Marine Basic First Aid',
    summary:
      'Comprehensive two-day course designed to meet the needs of those expected to provide first aid in a marine environment. Course uses a combination of lecture, discussion, and scenarios taken from the marine/fishing industry to teach the required knowledge and skills. Course meets the requirements of Transport Canada outlined in Transport Publication (TP) 13008 E.',
    image: '/images/marine-sfa-picture.jpg',
    content: [
      'The Red Cross',
      'Responding to Emergencies',
      'The EMS system',
      'Check, Call, Care',
      'Airway emergencies',
      'Breathing and Circulation emergencies',
      'First aid for respiratory and cardiac arrest - adult',
      'Wound care',
      'Head and spine injuries',
      'Bone, muscle and joint injuries',
      'Sudden Medical Emergencies',
      'Environmental Emergencies',
      'Poisons'
    ],
    materials: [
      'First Aid & CPR (print and/or eBook)',
      'Comprehensive Guide to First Aid & CPR (eBook)',
      'Marine Basic First Aid certificate (digital certificate issued upon successful completion)',
      'Transport Canada certification issued directly by CRC'
    ],
    duration: ['16 hours in-class'],
    instructor: ['First Aid Instructor'],
    prerequisite: [
      'None',
      'A student does not require a CDN in order to participate in a MBFA course'
    ],
    completion: [
      'Successfully demonstrate skills and critical steps',
      'Min. 75% mark for written knowledge evaluation',
      'Attend and participate in 100% of the course'
    ],
    certification: [
      '3-year certification in Marine Basic First Aid and CPR/ AED Level A'
    ],
    recertification: [
      'Recertification of Marine First Aid is not permitted under federal regulations'
    ]
  },
  standardFirstAidChild: {
    title: 'Standard First Aid (Child Care)',
    summary:
      'Comprehensive two-day course offering lifesaving first aid skills, cardiopulmonary resuscitation (CPR) skills, and injury prevention skills and knowledge, with a focus on childhood injuries and illnesses. Includes the latest first aid and CPR guidelines and meets legislation requirements for provincial/ territorial early childhood education and day care worker safety requirements. Check local legislation to determine certification level, maintenance, and recertification requirements.',
    image: '/images/sfa-child-picture.jpg',
    content: [
      'The Red Cross',
      'Responding to Emergencies',
      'The EMS system',
      'Check, Call, Care',
      'Airway emergencies',
      'Breathing and Circulation emergencies - child and baby',
      'First aid for respiratory and cardiac arrest – child and baby',
      'Wound care',
      'Head, Neck and spinal injuries',
      'Bone, Muscle and Joint injuries',
      'Sudden Medical Emergencies',
      'Environmental Illnesses',
      'Poisons',
      'Childhood Illnesses',
      'Caring for Children',
      'Includes any other content required by specific legislation'
    ],
    materials: [
      'Child Care First Aid (print and/or eBook)',
      'Comprehensive Guide to First Aid & CPR (eBook)',
      'Standard Child Care',
      'First Aid certificate (digital certificate issued upon successful completion)'
    ],
    duration: ['Minimum 16 hours in-class'],
    instructor: ['First Aid Instructor'],
    prerequisite: ['None'],
    completion: [
      'Successfully demonstrate skills and critical steps',
      'Min. 75% mark for written knowledge evaluation',
      'Attend and participate in 100% of the course'
    ],
    certification: ['3-year certification in Standard Child Care First Aid'],
    recertification: ['8 hours in-class']
  },
  emergencyFirstAidChild: {
    title: 'Emergency First Aid (Child Care)',
    summary:
      'Basic one-day course designed to introduce caregivers to injury prevention skills and knowledge. Course covers lifesaving first aid skills and cardiopulmonary resuscitation (CPR and AED) for children, and babies. Course meets legislation requirements for provincial/territorial early childhood education and day care worker safety requirements. Check local legislation to determine certification level, maintenance, and recertification requirements.',
    image: '/images/efa-child-picture.jpg',
    content: [
      'The Red Cross',
      'Responding to Emergencies',
      'The EMS system',
      'Check, Call, Care',
      'Airway emergencies',
      'Breathing and Circulation emergencies – Child and baby',
      'First aid for respiratory and cardiac arrest – Child and baby',
      'Wound care',
      'Head, Neck and Spinal Injuries',
      'Bone, Muscle, and Joint Injuries',
      'Sudden Medical Emergencies',
      'Environmental Illness',
      'Poisons',
      'Caring for Children',
      'Includes any other content required by specific legislation'
    ],
    materials: [
      'Child Care First Aid (print and/or eBook)',
      'Comprehensive Guide to First Aid & CPR (eBook)',
      'Emergency Child Care',
      'First Aid certificate (digital certificate issued upon successful completion)'
    ],
    duration: ['Minimum 8 hours in-class'],
    instructor: ['First Aid Instructor'],
    prerequisite: ['None'],
    completion: [
      'Successfully demonstrate skills and critical steps',
      'Min. 75% mark for written knowledge evaluation',
      'Attend and participate in 100% of the course'
    ],
    certification: ['3-year certification in Emergency Child Care First Aid'],
    recertification: ['6 hours in-class']
  },
  oxygenTherapy: {
    title: 'Oxygen Therapy',
    summary:
      'Designed to provide participants with the knowledge and skills to correctly identify when it is necessary to administer supplemental oxygen. Participants will learn how to properly and safely handle and assemble the equipment and how to correctly deliver supplemental oxygen through the appropriate delivery device. Course can also be combined with Basic Life Support.',
    image: '/images/oxygen-therapy-picture.jpg',
    content: [
      'Pulse oximetry',
      'Supplemental oxygen',
      'Oxygen cylinders',
      'Oxygen regulators',
      'Oxygen delivery devices',
      'Administering oxygen'
    ],
    materials: ['Canadian Red Cross Basic Life Support Field Guide'],
    duration: [
      'Stand - alone course – 1 - 2 hours',
      'Combined with BLS – 1 hour'
    ],
    instructor: ['CPR Instructor or First Aid Instructor'],
    prerequisite: ['None'],
    completion: [
      'Successfully demonstrate all course skill competencies',
      'Minimum 75% mark for written, closed book, knowledge evaluation',
      'Attend and participate in 100% of the course'
    ],
    certification: [
      '3-year certification in Oxygen Therapy (digital certificate issued upon successful completion)'
    ],
    recertification: ['No recertification available for this course.']
  },
  airwayManagement: {
    title: 'Airway Management',
    summary:
      'Designed to provide participants with the knowledge and skills to create a patent airway, the interventions to maintain it, and the equipment available to carry out these skills. Participants will gain the knowledge and skills required to provide the appropriate interventions, including measuring and inserting the applicable airway adjunct based on the patient’s condition. Course can also be combined with Basic Life Support training for additional certification.',
    image: '/images/airway-management-picture.jpg',
    content: [
      'Opening the mouth',
      'Cross finger technique',
      'Tongue-jaw lift',
      'Airway adjuncts – insertion and removal',
      'Oropharyngeal (OPA) airways',
      'Nasopharyngeal (NPA) airways',
      'Supraglottic airways (Awareness only)',
      'Suction'
    ],
    materials: ['Canadian Red Cross Basic Life Support Field Guide'],
    duration: [
      '1-2 hours stand-alone course',
      '1 hour when combined with Basic Life Support'
    ],
    instructor: ['CPR Instructor or First Aid Instructor'],
    prerequisite: ['None'],
    completion: [
      'Successfully demonstrate all course skill competencies',
      'Minimum 75% mark for written, closed book, knowledge evaluation',
      'Attend and participate in 100% of the course'
    ],
    certification: [
      '3-year certification in Standard First Aid and CPR 3-year certification in Airway Management (digital certificate issued upon successful completion) Level A or C'
    ],
    recertification: ['No recertification available for this course.']
  },
  workshops: {
    title: 'Workshops',
    summary:
      'A comprehensive two-day course offering first aid and cardiopulmonary resuscitation (CPR) skills for those who need training due to work requirements or who want more knowledge to respond to emergencies at home. Course meets legislation requirements for provincial/territorial worker safety and insurance boards and includes the latest first aid and CPR guidelines.',
    image: '/images/workshops-picture.jpg',
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
    if (window.location.pathname === '/courses/standard-first-aid') {
      return <CourseView courseDetails={courseDetails.standardFirstAid} />;
    } else if (window.location.pathname === '/courses/emergency-first-aid') {
      return <CourseView courseDetails={courseDetails.emergencyFirstAid} />;
    } else if (window.location.pathname === '/courses/cpr-aed') {
      return <CourseView courseDetails={courseDetails.cprAed} />;
    } else if (window.location.pathname === '/courses/basic-life-support') {
      return <CourseView courseDetails={courseDetails.basicLifeSupport} />;
    } else if (
      window.location.pathname === '/courses/marine-basic-first-aid'
    ) {
      return <CourseView courseDetails={courseDetails.marineBasicFirstAid} />;
    } else if (
      window.location.pathname === '/courses/standard-first-aid-child-care'
    ) {
      return <CourseView courseDetails={courseDetails.standardFirstAidChild} />;
    } else if (
      window.location.pathname === '/courses/emergency-first-aid-child-care'
    ) {
      return (
        <CourseView courseDetails={courseDetails.emergencyFirstAidChild} />
      );
    } else if (window.location.pathname === '/courses/oxygen-therapy') {
      return <CourseView courseDetails={courseDetails.oxygenTherapy} />;
    } else if (window.location.pathname === '/courses/airway-management') {
      return <CourseView courseDetails={courseDetails.airwayManagement} />;
    } else if (window.location.pathname === '/courses/workshops') {
      return <CourseView courseDetails={courseDetails.workshops} />;
    } else {
      return <Error />;
    }
  };
  return courseSelector();
};

export default CourseInfo;
