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
        <div className="col-span-4">
          <div className="border">
            <img src={img11} alt="" />
          </div>

          <div className="grid grid-cols-2 gap-5 mt-5">
            <div className="border">
              <img src={img4} alt="" />
            </div>
            <div className="border">
              <img src={img8} alt="" />
            </div>
          </div>
        </div>

        <div className="col-span-8 grid grid-cols-3 gap-5">
          <div className="border">
            <img src={img1} alt="img1" />
          </div>
          <div className="border">
            <img src={img2} alt="img2" />
          </div>
          <div className="border">
            <img src={img3} alt="img3" />
          </div>
          <div className="border">
            <img src={img5} alt="img4" />
          </div>
          <div className="border">
            <img src={img6} alt="img5" />
          </div>
          <div className="border">
            <img src={img7} alt="img6" />
          </div>
          <div className="border">
            <img src={img9} alt="img7" />
          </div>
          <div className="border">
            <img src={img10} alt="img8" />
          </div>
          <div className="border">
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
