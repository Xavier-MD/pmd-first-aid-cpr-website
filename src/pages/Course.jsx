import { useTranslation } from 'react-i18next';
import CourseView from '../components/Courses/CourseView';
import Error from './Error';

const Course = function () {
  const { t } = useTranslation();

  // SFA Text
  const course_info_sfa_title = t('course_info_sfa_title');
  const course_info_sfa_summary = t('course_info_sfa_summary');
  const course_info_sfa_content_1 = t('course_info_sfa_content_1');
  const course_info_sfa_content_2 = t('course_info_sfa_content_2');
  const course_info_sfa_content_3 = t('course_info_sfa_content_3');
  const course_info_sfa_content_4 = t('course_info_sfa_content_4');
  const course_info_sfa_content_5 = t('course_info_sfa_content_5');
  const course_info_sfa_content_6 = t('course_info_sfa_content_6');
  const course_info_sfa_content_7 = t('course_info_sfa_content_7');
  const course_info_sfa_content_8 = t('course_info_sfa_content_8');
  const course_info_sfa_content_9 = t('course_info_sfa_content_9');
  const course_info_sfa_content_10 = t('course_info_sfa_content_10');
  const course_info_sfa_content_11 = t('course_info_sfa_content_11');
  const course_info_sfa_content_12 = t('course_info_sfa_content_12');
  const course_info_sfa_content_13 = t('course_info_sfa_content_13');
  const course_info_sfa_content_14 = t('course_info_sfa_content_14');
  const course_info_sfa_materials_1 = t('course_info_sfa_materials_1');
  const course_info_sfa_materials_2 = t('course_info_sfa_materials_2');
  const course_info_sfa_materials_3 = t('course_info_sfa_materials_3');
  const course_info_sfa_materials_4 = t('course_info_sfa_materials_4');
  const course_info_sfa_duration_1 = t('course_info_sfa_duration_1');
  const course_info_sfa_duration_2 = t('course_info_sfa_duration_2');
  const course_info_sfa_instructor_1 = t('course_info_sfa_instructor_1');
  const course_info_sfa_prerequisite_1 = t('course_info_sfa_prerequisite_1');
  const course_info_sfa_completion_1 = t('course_info_sfa_completion_1');
  const course_info_sfa_completion_2 = t('course_info_sfa_completion_2');
  const course_info_sfa_completion_3 = t('course_info_sfa_completion_3');
  const course_info_sfa_certification_1 = t('course_info_sfa_certification_1');
  const course_info_sfa_recertification_1 = t(
    'course_info_sfa_recertification_1'
  );
  const course_info_sfa_recertification_2 = t(
    'course_info_sfa_recertification_2'
  );

  // EFA Text
  const course_info_efa_title = t('course_info_efa_title');
  const course_info_efa_summary = t('course_info_efa_summary');
  const course_info_efa_content_1 = t('course_info_efa_content_1');
  const course_info_efa_content_2 = t('course_info_efa_content_2');
  const course_info_efa_content_3 = t('course_info_efa_content_3');
  const course_info_efa_content_4 = t('course_info_efa_content_4');
  const course_info_efa_content_5 = t('course_info_efa_content_5');
  const course_info_efa_content_6 = t('course_info_efa_content_6');
  const course_info_efa_content_7 = t('course_info_efa_content_7');
  const course_info_efa_content_8 = t('course_info_efa_content_8');
  const course_info_efa_content_9 = t('course_info_efa_content_9');
  const course_info_efa_materials_1 = t('course_info_efa_materials_1');
  const course_info_efa_materials_2 = t('course_info_efa_materials_2');
  const course_info_efa_materials_3 = t('course_info_efa_materials_3');
  const course_info_efa_materials_4 = t('course_info_efa_materials_4');
  const course_info_efa_duration_1 = t('course_info_efa_duration_1');
  const course_info_efa_duration_2 = t('course_info_efa_duration_2');
  const course_info_efa_instructor_1 = t('course_info_efa_instructor_1');
  const course_info_efa_prerequisite_1 = t('course_info_efa_prerequisite_1');
  const course_info_efa_completion_1 = t('course_info_efa_completion_1');
  const course_info_efa_completion_2 = t('course_info_efa_completion_2');
  const course_info_efa_completion_3 = t('course_info_efa_completion_3');
  const course_info_efa_certification_1 = t('course_info_efa_certification_1');
  const course_info_efa_recertification_1 = t(
    'course_info_efa_recertification_1'
  );
  const course_info_efa_recertification_2 = t(
    'course_info_efa_recertification_2'
  );

  // CPR/AED Text
  const course_info_cpraed_title = t('course_info_cpraed_title');
  const course_info_cpraed_summary = t('course_info_cpraed_summary');
  const course_info_cpraed_content_1 = t('course_info_cpraed_content_1');
  const course_info_cpraed_content_2 = t('course_info_cpraed_content_2');
  const course_info_cpraed_content_3 = t('course_info_cpraed_content_3');
  const course_info_cpraed_content_4 = t('course_info_cpraed_content_4');
  const course_info_cpraed_content_5 = t('course_info_cpraed_content_5');
  const course_info_cpraed_content_6 = t('course_info_cpraed_content_6');
  const course_info_cpraed_content_7 = t('course_info_cpraed_content_7');
  const course_info_cpraed_content_8 = t('course_info_cpraed_content_8');
  const course_info_cpraed_content_9 = t('course_info_cpraed_content_9');
  const course_info_cpraed_content_10 = t('course_info_cpraed_content_10');
  const course_info_cpraed_content_11 = t('course_info_cpraed_content_11');
  const course_info_cpraed_content_12 = t('course_info_cpraed_content_12');
  const course_info_cpraed_content_13 = t('course_info_cpraed_content_13');
  const course_info_cpraed_content_14 = t('course_info_cpraed_content_14');
  const course_info_cpraed_content_15 = t('course_info_cpraed_content_15');
  const course_info_cpraed_content_16 = t('course_info_cpraed_content_16');
  const course_info_cpraed_materials_1 = t('course_info_cpraed_materials_1');
  const course_info_cpraed_materials_2 = t('course_info_cpraed_materials_2');
  const course_info_cpraed_materials_3 = t('course_info_cpraed_materials_3');
  const course_info_cpraed_materials_4 = t('course_info_cpraed_materials_4');
  const course_info_cpraed_duration_1 = t('course_info_cpraed_duration_1');
  const course_info_cpraed_duration_2 = t('course_info_cpraed_duration_2');
  const course_info_cpraed_instructor_1 = t('course_info_cpraed_instructor_1');
  const course_info_cpraed_prerequisite_1 = t(
    'course_info_cpraed_prerequisite_1'
  );
  const course_info_cpraed_completion_1 = t('course_info_cpraed_completion_1');
  const course_info_cpraed_completion_2 = t('course_info_cpraed_completion_2');
  const course_info_cpraed_completion_3 = t('course_info_cpraed_completion_3');
  const course_info_cpraed_certification_1 = t(
    'course_info_cpraed_certification_1'
  );
  const course_info_cpraed_recertification_1 = t(
    'course_info_cpraed_recertification_1'
  );
  const course_info_cpraed_recertification_2 = t(
    'course_info_cpraed_recertification_2'
  );

  // BLS Text
  const course_info_bls_title = t('course_info_bls_title');
  const course_info_bls_summary = t('course_info_bls_summary');
  const course_info_bls_content_1 = t('course_info_bls_content_1');
  const course_info_bls_content_2 = t('course_info_bls_content_2');
  const course_info_bls_content_3 = t('course_info_bls_content_3');
  const course_info_bls_content_4 = t('course_info_bls_content_4');
  const course_info_bls_content_5 = t('course_info_bls_content_5');
  const course_info_bls_content_6 = t('course_info_bls_content_6');
  const course_info_bls_materials_1 = t('course_info_bls_materials_1');
  const course_info_bls_duration_1 = t('course_info_bls_duration_1');
  const course_info_bls_duration_2 = t('course_info_bls_duration_2');
  const course_info_bls_duration_3 = t('course_info_bls_duration_3');
  const course_info_bls_duration_4 = t('course_info_bls_duration_4');
  const course_info_bls_instructor_1 = t('course_info_bls_instructor_1');
  const course_info_bls_prerequisite_1 = t('course_info_bls_prerequisite_1');
  const course_info_bls_completion_1 = t('course_info_bls_completion_1');
  const course_info_bls_completion_2 = t('course_info_bls_completion_2');
  const course_info_bls_completion_3 = t('course_info_bls_completion_3');
  const course_info_bls_certification_1 = t('course_info_bls_certification_1');
  const course_info_bls_recertification_1 = t(
    'course_info_bls_recertification_1'
  );

  // MBFA Text
  const course_info_mbfa_title = t('course_info_mbfa_title');
  const course_info_mbfa_summary = t('course_info_mbfa_summary');
  const course_info_mbfa_content_1 = t('course_info_mbfa_content_1');
  const course_info_mbfa_content_2 = t('course_info_mbfa_content_2');
  const course_info_mbfa_content_3 = t('course_info_mbfa_content_3');
  const course_info_mbfa_content_4 = t('course_info_mbfa_content_4');
  const course_info_mbfa_content_5 = t('course_info_mbfa_content_5');
  const course_info_mbfa_content_6 = t('course_info_mbfa_content_6');
  const course_info_mbfa_content_7 = t('course_info_mbfa_content_7');
  const course_info_mbfa_content_8 = t('course_info_mbfa_content_8');
  const course_info_mbfa_content_9 = t('course_info_mbfa_content_9');
  const course_info_mbfa_content_10 = t('course_info_mbfa_content_10');
  const course_info_mbfa_content_11 = t('course_info_mbfa_content_11');
  const course_info_mbfa_content_12 = t('course_info_mbfa_content_12');
  const course_info_mbfa_content_13 = t('course_info_mbfa_content_13');
  const course_info_mbfa_materials_1 = t('course_info_mbfa_materials_1');
  const course_info_mbfa_materials_2 = t('course_info_mbfa_materials_2');
  const course_info_mbfa_materials_3 = t('course_info_mbfa_materials_3');
  const course_info_mbfa_materials_4 = t('course_info_mbfa_materials_4');
  const course_info_mbfa_duration_1 = t('course_info_mbfa_duration_1');
  const course_info_mbfa_instructor_1 = t('course_info_mbfa_instructor_1');
  const course_info_mbfa_prerequisite_1 = t('course_info_mbfa_prerequisite_1');
  const course_info_mbfa_prerequisite_2 = t('course_info_mbfa_prerequisite_2');
  const course_info_mbfa_completion_1 = t('course_info_mbfa_completion_1');
  const course_info_mbfa_completion_2 = t('course_info_mbfa_completion_2');
  const course_info_mbfa_completion_3 = t('course_info_mbfa_completion_3');
  const course_info_mbfa_certification_1 = t(
    'course_info_mbfa_certification_1'
  );
  const course_info_mbfa_recertification_1 = t(
    'course_info_mbfa_recertification_1'
  );

  // SFACC Text
  const course_info_sfacc_title = t('course_info_sfacc_title');
  const course_info_sfacc_summary = t('course_info_sfacc_summary');
  const course_info_sfacc_content_1 = t('course_info_sfacc_content_1');
  const course_info_sfacc_content_2 = t('course_info_sfacc_content_2');
  const course_info_sfacc_content_3 = t('course_info_sfacc_content_3');
  const course_info_sfacc_content_4 = t('course_info_sfacc_content_4');
  const course_info_sfacc_content_5 = t('course_info_sfacc_content_5');
  const course_info_sfacc_content_6 = t('course_info_sfacc_content_6');
  const course_info_sfacc_content_7 = t('course_info_sfacc_content_7');
  const course_info_sfacc_content_8 = t('course_info_sfacc_content_8');
  const course_info_sfacc_content_9 = t('course_info_sfacc_content_9');
  const course_info_sfacc_content_10 = t('course_info_sfacc_content_10');
  const course_info_sfacc_content_11 = t('course_info_sfacc_content_11');
  const course_info_sfacc_content_12 = t('course_info_sfacc_content_12');
  const course_info_sfacc_content_13 = t('course_info_sfacc_content_13');
  const course_info_sfacc_content_14 = t('course_info_sfacc_content_14');
  const course_info_sfacc_content_15 = t('course_info_sfacc_content_15');
  const course_info_sfacc_content_16 = t('course_info_sfacc_content_16');
  const course_info_sfacc_materials_1 = t('course_info_sfacc_materials_1');
  const course_info_sfacc_materials_2 = t('course_info_sfacc_materials_2');
  const course_info_sfacc_materials_3 = t('course_info_sfacc_materials_3');
  const course_info_sfacc_duration_1 = t('course_info_sfacc_duration_1');
  const course_info_sfacc_instructor_1 = t('course_info_sfacc_instructor_1');
  const course_info_sfacc_prerequisite_1 = t(
    'course_info_sfacc_prerequisite_1'
  );
  const course_info_sfacc_completion_1 = t('course_info_sfacc_completion_1');
  const course_info_sfacc_completion_2 = t('course_info_sfacc_completion_2');
  const course_info_sfacc_completion_3 = t('course_info_sfacc_completion_3');
  const course_info_sfacc_certification_1 = t(
    'course_info_sfacc_certification_1'
  );
  const course_info_sfacc_recertification_1 = t(
    'course_info_sfacc_recertification_1'
  );

  // EFACC Text
  const course_info_efacc_title = t('course_info_efacc_title');
  const course_info_efacc_summary = t('course_info_efacc_summary');
  const course_info_efacc_content_1 = t('course_info_efacc_content_1');
  const course_info_efacc_content_2 = t('course_info_efacc_content_2');
  const course_info_efacc_content_3 = t('course_info_efacc_content_3');
  const course_info_efacc_content_4 = t('course_info_efacc_content_4');
  const course_info_efacc_content_5 = t('course_info_efacc_content_5');
  const course_info_efacc_content_6 = t('course_info_efacc_content_6');
  const course_info_efacc_content_7 = t('course_info_efacc_content_7');
  const course_info_efacc_content_8 = t('course_info_efacc_content_8');
  const course_info_efacc_content_9 = t('course_info_efacc_content_9');
  const course_info_efacc_content_10 = t('course_info_efacc_content_10');
  const course_info_efacc_content_11 = t('course_info_efacc_content_11');
  const course_info_efacc_content_12 = t('course_info_efacc_content_12');
  const course_info_efacc_content_13 = t('course_info_efacc_content_13');
  const course_info_efacc_content_14 = t('course_info_efacc_content_14');
  const course_info_efacc_content_15 = t('course_info_efacc_content_15');
  const course_info_efacc_materials_1 = t('course_info_efacc_materials_1');
  const course_info_efacc_materials_2 = t('course_info_efacc_materials_2');
  const course_info_efacc_materials_3 = t('course_info_efacc_materials_3');
  const course_info_efacc_duration_1 = t('course_info_efacc_duration_1');
  const course_info_efacc_instructor_1 = t('course_info_efacc_instructor_1');
  const course_info_efacc_prerequisite_1 = t(
    'course_info_efacc_prerequisite_1'
  );
  const course_info_efacc_completion_1 = t('course_info_efacc_completion_1');
  const course_info_efacc_completion_2 = t('course_info_efacc_completion_2');
  const course_info_efacc_completion_3 = t('course_info_efacc_completion_3');
  const course_info_efacc_certification_1 = t(
    'course_info_efacc_certification_1'
  );
  const course_info_efacc_recertification_1 = t(
    'course_info_efacc_recertification_1'
  );

  // OT Text
  const course_info_ot_title = t('course_info_ot_title');
  const course_info_ot_summary = t('course_info_ot_summary');
  const course_info_ot_content_1 = t('course_info_ot_content_1');
  const course_info_ot_content_2 = t('course_info_ot_content_2');
  const course_info_ot_content_3 = t('course_info_ot_content_3');
  const course_info_ot_content_4 = t('course_info_ot_content_4');
  const course_info_ot_content_5 = t('course_info_ot_content_5');
  const course_info_ot_content_6 = t('course_info_ot_content_6');
  const course_info_ot_materials_1 = t('course_info_ot_materials_1');
  const course_info_ot_duration_1 = t('course_info_ot_duration_1');
  const course_info_ot_duration_2 = t('course_info_ot_duration_2');
  const course_info_ot_instructor_1 = t('course_info_ot_instructor_1');
  const course_info_ot_prerequisite_1 = t('course_info_ot_prerequisite_1');
  const course_info_ot_completion_1 = t('course_info_ot_completion_1');
  const course_info_ot_completion_2 = t('course_info_ot_completion_2');
  const course_info_ot_completion_3 = t('course_info_ot_completion_3');
  const course_info_ot_certification_1 = t('course_info_ot_certification_1');
  const course_info_ot_recertification_1 = t(
    'course_info_ot_recertification_1'
  );

  // AM Text
  const course_info_am_title = t('course_info_am_title');
  const course_info_am_summary = t('course_info_am_summary');
  const course_info_am_content_1 = t('course_info_am_content_1');
  const course_info_am_content_2 = t('course_info_am_content_2');
  const course_info_am_content_3 = t('course_info_am_content_3');
  const course_info_am_content_4 = t('course_info_am_content_4');
  const course_info_am_content_5 = t('course_info_am_content_5');
  const course_info_am_content_6 = t('course_info_am_content_6');
  const course_info_am_content_7 = t('course_info_am_content_7');
  const course_info_am_content_8 = t('course_info_am_content_8');
  const course_info_am_materials_1 = t('course_info_am_materials_1');
  const course_info_am_duration_1 = t('course_info_am_duration_1');
  const course_info_am_duration_2 = t('course_info_am_duration_2');
  const course_info_am_instructor_1 = t('course_info_am_instructor_1');
  const course_info_am_prerequisite_1 = t('course_info_am_prerequisite_1');
  const course_info_am_completion_1 = t('course_info_am_completion_1');
  const course_info_am_completion_2 = t('course_info_am_completion_2');
  const course_info_am_completion_3 = t('course_info_am_completion_3');
  const course_info_am_certification_1 = t('course_info_am_certification_1');
  const course_info_am_recertification_1 = t(
    'course_info_am_recertification_1'
  );

  // WS Text
  const course_info_ws_title = t('course_info_ws_title');
  const course_info_ws_summary = t('course_info_ws_summary');
  const course_info_ws_content_1 = t('course_info_ws_content_1');
  const course_info_ws_content_2 = t('course_info_ws_content_2');
  const course_info_ws_content_3 = t('course_info_ws_content_3');
  const course_info_ws_content_4 = t('course_info_ws_content_4');
  const course_info_ws_content_5 = t('course_info_ws_content_5');
  const course_info_ws_content_6 = t('course_info_ws_content_6');
  const course_info_ws_content_7 = t('course_info_ws_content_7');
  const course_info_ws_content_8 = t('course_info_ws_content_8');
  const course_info_ws_content_9 = t('course_info_ws_content_9');
  const course_info_ws_content_10 = t('course_info_ws_content_10');
  const course_info_ws_content_11 = t('course_info_ws_content_11');
  const course_info_ws_content_12 = t('course_info_ws_content_12');
  const course_info_ws_content_13 = t('course_info_ws_content_13');
  const course_info_ws_content_14 = t('course_info_ws_content_14');
  const course_info_ws_materials_1 = t('course_info_ws_materials_1');
  const course_info_ws_materials_2 = t('course_info_ws_materials_2');
  const course_info_ws_materials_3 = t('course_info_ws_materials_3');
  const course_info_ws_materials_4 = t('course_info_ws_materials_4');
  const course_info_ws_duration_1 = t('course_info_ws_duration_1');
  const course_info_ws_duration_2 = t('course_info_ws_duration_2');
  const course_info_ws_instructor_1 = t('course_info_ws_instructor_1');
  const course_info_ws_prerequisite_1 = t('course_info_ws_prerequisite_1');
  const course_info_ws_completion_1 = t('course_info_ws_completion_1');
  const course_info_ws_completion_2 = t('course_info_ws_completion_2');
  const course_info_ws_completion_3 = t('course_info_ws_completion_3');
  const course_info_ws_certification_1 = t('course_info_ws_certification_1');
  const course_info_ws_recertification_1 = t(
    'course_info_ws_recertification_1'
  );
  const course_info_ws_recertification_2 = t(
    'course_info_ws_recertification_2'
  );

  const courseDetails = {
    standardFirstAid: {
      title: course_info_sfa_title,
      summary: course_info_sfa_summary,
      image: '/assets/images/standard-first-aid-picture.jpg',
      content: [
        course_info_sfa_content_1,
        course_info_sfa_content_2,
        course_info_sfa_content_3,
        course_info_sfa_content_4,
        course_info_sfa_content_5,
        course_info_sfa_content_6,
        course_info_sfa_content_7,
        course_info_sfa_content_8,
        course_info_sfa_content_9,
        course_info_sfa_content_10,
        course_info_sfa_content_11,
        course_info_sfa_content_12,
        course_info_sfa_content_13,
        course_info_sfa_content_14
      ],
      materials: [
        course_info_sfa_materials_1,
        course_info_sfa_materials_2,
        course_info_sfa_materials_3,
        course_info_sfa_materials_4
      ],
      duration: [course_info_sfa_duration_1, course_info_sfa_duration_2],
      instructor: [course_info_sfa_instructor_1],
      prerequisite: [course_info_sfa_prerequisite_1],
      completion: [course_info_sfa_completion_1, course_info_sfa_completion_2, course_info_sfa_completion_3],
      certification: [course_info_sfa_certification_1],
      recertification: [course_info_sfa_recertification_1, course_info_sfa_recertification_2]
    },
    emergencyFirstAid: {
      title: course_info_efa_title,
      summary: course_info_efa_summary,
      image: '/assets/images/emergency-first-aid-picture.jpg',
      content: [
        course_info_efa_content_1,
        course_info_efa_content_2,
        course_info_efa_content_3,
        course_info_efa_content_4,
        course_info_efa_content_5,
        course_info_efa_content_6,
        course_info_efa_content_7,
        course_info_efa_content_8,
        course_info_efa_content_9
      ],
      materials: [
        course_info_efa_materials_1,
        course_info_efa_materials_2,
        course_info_efa_materials_3,
        course_info_efa_materials_4
      ],
      duration: [course_info_efa_duration_1, course_info_efa_duration_2],
      instructor: [course_info_efa_instructor_1],
      prerequisite: [course_info_efa_prerequisite_1],
      completion: [course_info_efa_completion_1, course_info_efa_completion_2, course_info_efa_completion_3],
      certification: [course_info_efa_certification_1],
      recertification: [course_info_efa_recertification_1, course_info_efa_recertification_2]
    },
    cprAed: {
      title: course_info_cpraed_title,
      summary: course_info_cpraed_summary,
      image: '/assets/images/cpr-aed-picture.jpg',
      content: [
        course_info_cpraed_content_1,
        course_info_cpraed_content_2,
        course_info_cpraed_content_3,
        course_info_cpraed_content_4,
        course_info_cpraed_content_5,
        course_info_cpraed_content_6,
        course_info_cpraed_content_7,
        course_info_cpraed_content_8,
        course_info_cpraed_content_9,
        course_info_cpraed_content_10,
        course_info_cpraed_content_11,
        course_info_cpraed_content_12,
        course_info_cpraed_content_13,
        course_info_cpraed_content_14,
        course_info_cpraed_content_15,
        course_info_cpraed_content_16
      ],
      materials: [
        course_info_cpraed_materials_1,
        course_info_cpraed_materials_2,
        course_info_cpraed_materials_3,
        course_info_cpraed_materials_4
      ],
      duration: [course_info_cpraed_duration_1, course_info_cpraed_duration_2],
      instructor: [course_info_cpraed_instructor_1],
      prerequisite: [course_info_cpraed_prerequisite_1],
      completion: [course_info_cpraed_completion_1, course_info_cpraed_completion_2, course_info_cpraed_completion_3],
      certification: [course_info_cpraed_certification_1],
      recertification: [course_info_cpraed_recertification_1, course_info_cpraed_recertification_2]
    },
    basicLifeSupport: {
      title: course_info_bls_title,
      summary: course_info_bls_summary,
      image: '/assets/images/bls-picture.jpg',
      content: [
        course_info_bls_content_1,
        course_info_bls_content_2,
        course_info_bls_content_3,
        course_info_bls_content_4,
        course_info_bls_content_5,
        course_info_bls_content_6
      ],
      materials: [course_info_bls_materials_1],
      duration: [
        course_info_bls_duration_1,
        course_info_bls_duration_2,
        course_info_bls_duration_3,
        course_info_bls_duration_4
      ],
      instructor: [course_info_bls_instructor_1],
      prerequisite: [course_info_bls_prerequisite_1],
      completion: [course_info_bls_completion_1, course_info_bls_completion_2, course_info_bls_completion_3],
      certification: [course_info_bls_certification_1],
      recertification: [course_info_bls_recertification_1]
    },
    marineBasicFirstAid: {
      title: course_info_mbfa_title,
      summary: course_info_mbfa_summary,
      image: '/assets/images/marine-sfa-picture.jpg',
      content: [
        course_info_mbfa_content_1,
        course_info_mbfa_content_2,
        course_info_mbfa_content_3,
        course_info_mbfa_content_4,
        course_info_mbfa_content_5,
        course_info_mbfa_content_6,
        course_info_mbfa_content_7,
        course_info_mbfa_content_8,
        course_info_mbfa_content_9,
        course_info_mbfa_content_10,
        course_info_mbfa_content_11,
        course_info_mbfa_content_12,
        course_info_mbfa_content_13
      ],
      materials: [
        course_info_mbfa_materials_1,
        course_info_mbfa_materials_2,
        course_info_mbfa_materials_3,
        course_info_mbfa_materials_4
      ],
      duration: [course_info_mbfa_duration_1],
      instructor: [course_info_mbfa_instructor_1],
      prerequisite: [course_info_mbfa_prerequisite_1, course_info_mbfa_prerequisite_2],
      completion: [course_info_mbfa_completion_1, course_info_mbfa_completion_2, course_info_mbfa_completion_3],
      certification: [course_info_mbfa_certification_1],
      recertification: [course_info_mbfa_recertification_1]
    },
    standardFirstAidChild: {
      title: course_info_sfacc_title,
      summary: course_info_sfacc_summary,
      image: '/assets/images/sfa-child-picture.jpg',
      content: [
        course_info_sfacc_content_1,
        course_info_sfacc_content_2,
        course_info_sfacc_content_3,
        course_info_sfacc_content_4,
        course_info_sfacc_content_5,
        course_info_sfacc_content_6,
        course_info_sfacc_content_7,
        course_info_sfacc_content_8,
        course_info_sfacc_content_9,
        course_info_sfacc_content_10,
        course_info_sfacc_content_11,
        course_info_sfacc_content_12,
        course_info_sfacc_content_13,
        course_info_sfacc_content_14,
        course_info_sfacc_content_15,
        course_info_sfacc_content_16
      ],
      materials: [course_info_sfacc_materials_1, course_info_sfacc_materials_2, course_info_sfacc_materials_3],
      duration: [course_info_sfacc_duration_1],
      instructor: [course_info_sfacc_instructor_1],
      prerequisite: [course_info_sfacc_prerequisite_1],
      completion: [course_info_sfacc_completion_1, course_info_sfacc_completion_2, course_info_sfacc_completion_3],
      certification: [course_info_sfacc_certification_1],
      recertification: [course_info_sfacc_recertification_1]
    },
    emergencyFirstAidChild: {
      title: course_info_efacc_title,
      summary: course_info_efacc_summary,
      image: '/assets/images/efa-child-picture.jpg',
      content: [
        course_info_efacc_content_1,
        course_info_efacc_content_2,
        course_info_efacc_content_3,
        course_info_efacc_content_4,
        course_info_efacc_content_5,
        course_info_efacc_content_6,
        course_info_efacc_content_7,
        course_info_efacc_content_8,
        course_info_efacc_content_9,
        course_info_efacc_content_10,
        course_info_efacc_content_11,
        course_info_efacc_content_12,
        course_info_efacc_content_13,
        course_info_efacc_content_14,
        course_info_efacc_content_15
      ],
      materials: [course_info_efacc_materials_1, course_info_efacc_materials_2, course_info_efacc_materials_3],
      duration: [course_info_efacc_duration_1],
      instructor: [course_info_efacc_instructor_1],
      prerequisite: [course_info_efacc_prerequisite_1],
      completion: [course_info_efacc_completion_1, course_info_efacc_completion_2, course_info_efacc_completion_3],
      certification: [course_info_efacc_certification_1],
      recertification: [course_info_efacc_recertification_1]
    },
    oxygenTherapy: {
      title: course_info_ot_title,
      summary: course_info_ot_summary,
      image: '/assets/images/oxygen-therapy-picture.jpg',
      content: [
        course_info_ot_content_1,
        course_info_ot_content_2,
        course_info_ot_content_3,
        course_info_ot_content_4,
        course_info_ot_content_5,
        course_info_ot_content_6
      ],
      materials: [course_info_ot_materials_1],
      duration: [course_info_ot_duration_1, course_info_ot_duration_2],
      instructor: [course_info_ot_instructor_1],
      prerequisite: [course_info_ot_prerequisite_1],
      completion: [course_info_ot_completion_1, course_info_ot_completion_2, course_info_ot_completion_3],
      certification: [course_info_ot_certification_1],
      recertification: [course_info_ot_recertification_1]
    },
    airwayManagement: {
      title: course_info_am_title,
      summary: course_info_am_summary,
      image: '/assets/images/airway-management-picture.jpg',
      content: [
        course_info_am_content_1,
        course_info_am_content_2,
        course_info_am_content_3,
        course_info_am_content_4,
        course_info_am_content_5,
        course_info_am_content_6,
        course_info_am_content_7,
        course_info_am_content_8
      ],
      materials: [course_info_am_materials_1],
      duration: [course_info_am_duration_1, course_info_am_duration_2],
      instructor: [course_info_am_instructor_1],
      prerequisite: [course_info_am_prerequisite_1],
      completion: [course_info_am_completion_1, course_info_am_completion_2, course_info_am_completion_3],
      certification: [course_info_am_certification_1],
      recertification: [course_info_am_recertification_1]
    },
    workshops: {
      title: course_info_ws_title,
      summary: course_info_ws_summary,
      image: '/assets/images/workshops-picture.jpg',
      content: [
        course_info_ws_content_1,
        course_info_ws_content_2,
        course_info_ws_content_3,
        course_info_ws_content_4,
        course_info_ws_content_5,
        course_info_ws_content_6,
        course_info_ws_content_7,
        course_info_ws_content_8,
        course_info_ws_content_9,
        course_info_ws_content_10,
        course_info_ws_content_11,
        course_info_ws_content_12,
        course_info_ws_content_13,
        course_info_ws_content_14
      ],
      materials: [
        course_info_ws_materials_1,
        course_info_ws_materials_2,
        course_info_ws_materials_3,
        course_info_ws_materials_4
      ],
      duration: [course_info_ws_duration_1, course_info_ws_duration_2],
      instructor: [course_info_ws_instructor_1],
      prerequisite: [course_info_ws_prerequisite_1],
      completion: [course_info_ws_completion_1, course_info_ws_completion_2, course_info_ws_completion_3],
      certification: [course_info_ws_certification_1],
      recertification: [course_info_ws_recertification_1, course_info_ws_recertification_2]
    }
  };

  const courseSelector = function () {
    if (window.location.pathname === '/courses/standard-first-aid') {
      return <CourseView courseDetails={courseDetails.standardFirstAid} />;
    } else if (window.location.pathname === '/courses/emergency-first-aid') {
      return <CourseView courseDetails={courseDetails.emergencyFirstAid} />;
    } else if (window.location.pathname === '/courses/cpr-aed') {
      return <CourseView courseDetails={courseDetails.cprAed} />;
    } else if (window.location.pathname === '/courses/basic-life-support') {
      return <CourseView courseDetails={courseDetails.basicLifeSupport} />;
    } else if (window.location.pathname === '/courses/marine-basic-first-aid') {
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

export default Course;
