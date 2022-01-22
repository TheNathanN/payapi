const Benefits = () => {
  return (
    <section>
      <div>
        <div className='flex justify-center items-center'>
          <img
            src='/assets/home/desktop/illustration-easy-to-implement.svg'
            alt='a page of code'
            className='ml-6 '
          />
        </div>
        <div className='text-center px-4 '>
          <h2 className='font-serif text-h3lg text-secBlue '>
            Easy to implement
          </h2>
          <p className='font-sans text-body text-secLightBlue my-4 '>
            Our API comes with just a few lines of code. You'll be up and
            running in no time. We built our documentation page to integrate
            payments functionality with ease.
          </p>
        </div>
      </div>

      <div>
        <div className='flex items-center justify-center '>
          <img
            src='/assets/home/desktop/illustration-simple-ui.svg'
            alt='2 phones showing the ui/ux of the pay api app'
            className='ml-5 mt-2 '
          />
        </div>
        <div className='text-center px-4 '>
          <h2 className='font-serif text-h3lg text-secBlue '>Simple UI & UX</h2>
          <p className='font-sans text-body text-secLightBlue my-4 '>
            Our pre-built form is easy to integrate in your app or website's
            checkout flow and designed to optimize conversion.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
