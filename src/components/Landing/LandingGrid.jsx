export const LandingGrid = () => {
  return (
    <div className='w-full h-full flex justify-between'>
      <div className='h-full w-[15rem] flex flex-col'>
        <img
          className='m-[0.5rem] rounded-2xl shadow-xl'
          src='/images/cpr_landing.jpeg'
          alt='woman performing cpr on mannequin'
        />
        <div className='h-full m-[0.5rem] rounded-xl bg-white'>
          <p>Learn more about what makes us special</p>
        </div>
      </div>
      <div className='h-full w-[12rem] flex flex-col'>
        <div className='h-full m-[0.5rem] rounded-xl bg-white'>
          <p>Questions? Message our trainers directly </p>
        </div>
        <img
          className='m-[0.5rem] rounded-2xl shadow-xl'
          src='/images/woman_crossing_arms_landing.jpg'
          alt='woman crossing arms in front of an ambulance'
        />
      </div>
      <div className='h-full w-[10rem] flex flex-col'>
        <img
          className='m-[0.5rem] rounded-2xl shadow-md'
          src='/images/cpr_form_landing.jpg'
          alt='group of students demonstrating proper cpr form'
        />
        <div className='h-full m-[0.5rem] rounded-xl bg-white'>
          <p>Learn more about what makes us special</p>
        </div>
      </div>
    </div>
  );
};
