import "./App.css";
import img1 from "./assets/images/image-1.webp";
import img2 from "./assets/images/image-2.webp";
import img3 from "./assets/images/image-3.webp";
import img4 from "./assets/images/image-4.webp";
import img5 from "./assets/images/image-5.webp";
import img6 from "./assets/images/image-6.webp";
import img7 from "./assets/images/image-7.webp";
import img8 from "./assets/images/image-8.webp";
import img9 from "./assets/images/image-9.webp";
import img10 from "./assets/images/image-11.jpeg";
import img11 from "./assets/images/image-11.jpeg";

function App() {
  return (
    <>
      <div className="p-5 grid grid-cols-12 gap-5">
        <div className="col-span-4 relative">
          <div>
            <label>
              <input className="absolute top-4 left-4" type="checkbox" />
              <img className="border rounded-md" src={img11} alt="product11" />
            </label>
          </div>

          <div className="grid grid-cols-2 gap-5 mt-5">
            <div className="border rounded-md relative">
              <label>
                <input className="absolute top-4 left-4" type="checkbox" />
                <img className="border rounded-md" src={img4} alt="" />
              </label>
            </div>
            <div className="border rounded-md relative">
              <label>
                <input className="absolute top-4 left-4" type="checkbox" />
                <img className="border rounded-md" src={img8} alt="" />
              </label>
            </div>
          </div>
        </div>

        <div className="col-span-8 grid grid-cols-3 gap-5">
          <div className="border rounded-md relative">
            <label>
              <input className="absolute top-4 left-4" type="checkbox" />
              <img className="border rounded-md" src={img1} alt="img1" />
            </label>
          </div>
          <div className="border rounded-md relative">
            <label>
              <input className="absolute top-4 left-4" type="checkbox" />
              <img className="border rounded-md" src={img2} alt="img2" />
            </label>
          </div>
          <div className="border rounded-md relative">
            <label>
              <input className="absolute top-4 left-4" type="checkbox" />
              <img className="border rounded-md" src={img3} alt="img3" />
            </label>
          </div>
          <div className="border rounded-md relative">
            <label>
              <input className="absolute top-4 left-4" type="checkbox" />
              <img className="border rounded-md" src={img5} alt="img4" />
            </label>
          </div>
          <div className="border rounded-md relative">
            <label>
              <input className="absolute top-4 left-4" type="checkbox" />
              <img className="border rounded-md" src={img6} alt="img5" />
            </label>
          </div>
          <div className="border rounded-md relative">
            <label>
              <input className="absolute top-4 left-4" type="checkbox" />
              <img className="border rounded-md" src={img7} alt="img6" />
            </label>
          </div>
          <div className="border rounded-md relative">
            <label>
              <input className="absolute top-4 left-4" type="checkbox" />
              <img className="border rounded-md" src={img9} alt="img7" />
            </label>
          </div>
          <div className="border rounded-md relative">
            <label>
              <input className="absolute top-4 left-4" type="checkbox" />
              <img className="border rounded-md" src={img10} alt="img8" />
            </label>
          </div>
          <div className="border rounded-md">
            <input
              className="w-full h-full border"
              type="file"
              accept="image/*"
              name=""
              id=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
