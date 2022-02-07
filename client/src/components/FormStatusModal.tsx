import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setFormStatus, toggleSubmitting } from "../app/reduxSlices/formStatusSlice";
import { PaperAirplaneIcon, EmojiHappyIcon, EmojiSadIcon } from '@heroicons/react/outline'

const FormStatusModal = () => {
  const dispatch = useAppDispatch();
  const formStatus = useAppSelector(state => state.formStatus.status);

  const handleClick = () => {
    dispatch(toggleSubmitting(false));
    dispatch(setFormStatus(undefined));
  }

  return (
    <div className='absolute bg-secDarkBlue bg-opacity-50 w-screen h-screen z-20 flex flex-col justify-center items-center '>
      <div className='bg-bgGreen font-bold text-center text-h3sm text-secDarkBlue h-36 w-3/4 flex flex-col justify-center items-center rounded-xl mb-2 max-w-lg '>
        {formStatus === undefined && (
          <div className="flex flex-col items-center justify-center ">
            <p>Form is submitting...</p>
            <div className="w-6 mt-2 ">
              <PaperAirplaneIcon />
            </div>
          </div>
        )}
        {formStatus === false && (
          <div className="flex flex-col items-center justify-center ">
            <p>Submission failed. Please try agian.</p>
            <div className="w-6 mt-2 ">
              <EmojiSadIcon />
            </div>
          </div>
        )}
        {formStatus && (
          <div className="flex flex-col items-center justify-center ">
            <p>Form submitted successfully</p>
            <div className="w-6 mt-2 ">
              <EmojiHappyIcon />
            </div>
          </div>
        )}
      </div>

      <button className="bg-primPink text-primWhite px-4 py-1 rounded-md "
        onClick={handleClick} >
        Close
      </button>
    </div >
  );
};

export default FormStatusModal;
