
import AddItem from './AddItem';

const App = () => {
  return (
    <div>
      <div className="relative p-2 h-screen flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('https://wallpaperaccess.com/full/4671256.jpg')" }}>
        
        <div className="absolute inset-0 bg-white bg-opacity-50">
          <h1 className='text-center  items-center shadow-lg  lg:text-4xl font-bold my-6 text-[30px] hover:bg-red-400 '>What to do ?</h1>
        </div>
        <div className="z-10">
          <AddItem />
        </div>
      </div>
    </div>

  );
};

export default App;

// bg - blue - 500 hover:bg-blue-700 text - white font - bold py - 2 px - 4 rounded shadow - md