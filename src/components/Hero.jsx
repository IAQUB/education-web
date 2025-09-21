import React from 'react';

const Hero = () => {
  return (
  <>
      {/* hero section */}
      <section className="grid grid-cols-2 items-center">
        {/* left side */}
        <div className="justify-center">
          <p className="bg-white border rounded-md w-fit py-3 px-5 ml-20 railway font-semibold">
            Never stop learning
          </p>

          <p className="ml-20 text-6xl md:text-5xl 2xl:text-6xl font-bold text-[#0B7077] Raleway">
            Grow up your skills by <br /> online courses with <br />
            Onlearning
          </p>

          <div className="flex items-center gap-5">
            <button className="border rounded-lg bg-[#FD661F] Raleway text-[16px] text-[#FFFFFF] font-semibold py-5 px-10 hover:bg-white hover:text-black ml-20 mt-6">
              explore path
            </button>

            <div className="flex items-center justify-center pt-6">
              <img
                className="relative z-40 -ml-0"
                src="https://i.ibb.co/rfT89pVL/Ellipse-67.png"
                alt=""
              />
              <img
                className="relative z-30 -ml-4"
                src="https://i.ibb.co/wrYcJXGP/Ellipse-68.png"
                alt=""
              />
              <img
                className="relative z-20 -ml-4"
                src="https://i.ibb.co/cSfXR0Rr/Ellipse-69.png"
                alt=""
              />
              <img src="https://i.ibb.co/DsBv1p3/rate.png" alt="" />
            </div>
          </div>
        </div>

        {/* right side */}
        <div>
          <img
            src="https://i.ibb.co/nqTwxdJZ/image-u-M5-ZOTW7-R-transformed-1.png"
            alt=""
          />
        </div>

        <div>
          <img
            className="absolute right-40 top-80"
            src="https://i.ibb.co/NgYhqG1B/Group-9.png"
            alt=""
          />
        </div>

        {/* Info Card */}
        <div className="flex items-center w-fit p-4 space-x-4 rounded-xl border border-white/20 bg-white/30 shadow-2xl backdrop-blur-sm absolute left-2/4 top-2/3">
          <svg
            className="w-8 bg-[#23BDEE] p-1 rounded"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            <path
              fill="#ffffff"
              d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM480 496C488.8 496 496 488.8 496 480L496 416L408 416L408 496L480 496zM496 368L496 288L408 288L408 368L496 368zM360 368L360 288L280 288L280 368L360 368zM232 368L232 288L144 288L144 368L232 368zM144 416L144 480C144 488.8 151.2 496 160 496L232 496L232 416L144 416zM280 416L280 496L360 496L360 416L280 416zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176z"
            />
          </svg>
          <div>
            <p className="Nunito Sans font-bold text-[#595959]">250k</p>
            <p className="Nunito Sans text-sm text-[#545567]">Assisted Student</p>
          </div>
        </div>

        {/* Bottom Button */}
        <div className="flex items-center">
          <img
            className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2"
            src="https://i.ibb.co/G4dqHwjc/Ellipse-3.png"
            alt=""
          />
          <img
            className="absolute 2xl:left-1/2 -translate-x-1/2 -bottom-4 translate-y-1/2"
            src="https://i.ibb.co/pv0SDH4N/Group-10.png"
            alt=""
          />
        </div>
      </section>
    </>

  );
};

export default Hero;