import { ReactComponent as BannerSVG } from "../Images/BannerSVG.svg";

function HeroSection() {
  return (
    <div className="md:flex md:flex-row">
      {/* Business Tag*/}
      <div className="md:w-2/5 flex flex-col justify-center items-center mt-7 md:mt-0">
        <h2 className="font-serif text-5xl text-gray-600 mb-4 text-center md:self-start md:text-left">
          We’re in Business to Improve Lives
        </h2>
        <p className="uppercase text-gray-600 tracking-wide text-center md:self-start md:text-left">
          Earth’s most customer-centric company
        </p>
        <p className="uppercase text-gray-600 tracking-wide text-center md:self-start md:text-left">
          Work Hard. Have Fun. Make History
        </p>
      </div>

      {/* Hero Svg */}
      <div className="md:w-3/5">
        <BannerSVG className="hidden w-full sm:inline" />
      </div>
    </div>
  );
}

export default HeroSection;
