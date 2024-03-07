import { banner_1, banner_2, banner_3 } from "../assets";

const Banner = () => {
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-screen h-[650px] relative">
        <div className="w-[300vw] h-full flex">
          <img src={banner_3} alt="" className="w-screen h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
