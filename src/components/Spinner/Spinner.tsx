import { MoonLoader } from 'react-spinners';

const Spinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div>
        <MoonLoader color="#1642ff" size={40} />
      </div>
    </div>
  );
};

export default Spinner;
