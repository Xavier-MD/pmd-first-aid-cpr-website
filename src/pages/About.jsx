import { useTranslation } from "react-i18next";


const About = function() {
  const { t } = useTranslation();

  const about_us_title_1 = t('about_us_title_1');
  const about_us_title_2 = t('about_us_title_2');
  const about_us_mission_title = t('about_us_mission_title');
  const about_us_vision_title = t('about_us_vision_title');
  const about_us_values_title = t('about_us_values_title');

  const about_us_text_1 = t('about_us_text_1');
  const about_us_text_2_item_1 = t('about_us_text_2_item_1');
  const about_us_text_2_item_2 = t('about_us_text_2_item_2');
  const about_us_text_2_item_3 = t('about_us_text_2_item_3');
  const about_us_text_2_item_4 = t('about_us_text_2_item_4');
  const about_us_text_2_item_5 = t('about_us_text_2_item_5');
  const about_us_text_2_item_6 = t('about_us_text_2_item_6');
  const about_us_mission_text = t('about_us_mission_text');
  const about_us_vision_text = t('about_us_vision_text');
  const about_us_values_text = t('about_us_values_text');

  return (
    <div className='flex flex-col grow  mt-24 pb-20'>
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20'>
        <div className='mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none -mb-8'>
          <div className='flex flex-col'>
            <h3 className='font-header font-semibold tracking-tight text-gray-900 text-3xl w-fit'>
              {about_us_title_1}
            </h3>
            <div className='lg:block mb-8 md:mb-0 h-[1px] w-2/3 mt-2 bg-gradient-to-r from-blue-400'></div>
          </div>
        </div>
        <div className='mt-8 lg:grid lg:grid-cols-2 lg:gap-8'>
          <div className='relative lg:row-start-1 lg:col-start-2'>
            <svg
              className='hidden lg:block absolute top-0 right-0 -mt-20 -mr-20'
              width={404}
              height={384}
              fill='none'
              viewBox='0 0 404 384'
              aria-hidden='true'
            >
              <defs>
                <pattern
                  id='de316486-4a29-4312-bdfc-fbce2132a2c1'
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits='userSpaceOnUse'
                >
                  <rect x={0} y={0} width={4} height={4} className='text-slate-200' fill='currentColor' />
                </pattern>
              </defs>
              <rect width={404} height={384} fill='url(#de316486-4a29-4312-bdfc-fbce2132a2c1)' />
            </svg>
            <div className='relative text-base mx-auto max-w-prose lg:max-w-none'>
              <figure>
                <div className='aspect-none'>
                  <img
                    className=''
                    src='/assets/images/paul-transparent-picture.png'
                    alt=''
                    width={1184}
                    height={1376}
                  />
                </div>
              </figure>
            </div>
          </div>
          <div className='mt-8 lg:mt-0'>
            <div className='mt-4 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1'>
              <div className='text-lg bg-blue-400 max-w-fit rounded-full flex justify-center px-3'>
                <p className='text-lg text-white font-header my-1'>Paul Martin Demers – (HBPHE, CEP, FAI)</p>
              </div>
              <p className='text-slate-600'>{about_us_text_1}</p>
              <h3 className='font-semibold font-header tracking-tight text-gray-900 text-3xl'>{about_us_title_2}</h3>
              <div className='h-[1px] w-2/3 bg-gradient-to-r from-blue-400 -mt-2'></div>
              <ul className='text-slate-600'>
                <li>{about_us_text_2_item_1}</li>
                <li>{about_us_text_2_item_2}</li>
                <li>{about_us_text_2_item_3}</li>
                <li>{about_us_text_2_item_4}</li>
                <li>{about_us_text_2_item_5}</li>
                <li>{about_us_text_2_item_6}</li>
              </ul>
              <h3 className='font-semibold font-header tracking-tight text-gray-900 text-3xl'>
                {about_us_mission_title}
              </h3>
              <div className='h-[1px] w-1/2 bg-gradient-to-r from-blue-400 -mt-2 -mb-2'></div>
              <p className='text-slate-600'>{about_us_mission_text}</p>
              <h3 className='font-semibold font-header tracking-tight text-gray-900 text-3xl'>
                {about_us_vision_title}
              </h3>
              <div className='h-[1px] w-1/2 bg-gradient-to-r from-blue-400 -mt-2 -mb-2'></div>
              <p className='text-slate-600'>{about_us_vision_text}</p>
              <h3 className='font-semibold font-header tracking-tight text-gray-900 text-3xl'>
                {about_us_values_title}
              </h3>
              <div className='h-[1px] w-1/2 bg-gradient-to-r from-blue-400 -mt-2 -mb-2'></div>
              <p className='text-slate-600'>{about_us_values_text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
