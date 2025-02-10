/* eslint-disable react/prop-types */
import { RightSvg } from './SvgContainer';

const TextImageSection = ({
  title,
  highlightedTitle,
  description,
  image,
  reverse,
}) => {
  return (
    <section
      className={`  w-full flex items-center py-7 md:py-10 lg:py-20 ${
        reverse
          ? 'md:flex-row-reverse gap-6 md:gap-8 lg:gap-[136px] flex-col'
          : 'md:flex-row flex-col gap-6 md:gap-8'
      }`}
    >
      <div className="w-full lg:w-[65%]">
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            {title}
            <span className="ml- text-transparent bg-clip-text bg-gradient-to-l from-[#116DFF] to-[#23C0B6] f  leading-[132%] tracking-[-0.48px]">
              {highlightedTitle}
            </span>
          </h2>
          <p className="text-textColor text-lg pt-3 lg:w-[85%]">{description}</p>
        </div>
        <div className="pt-8 space-y-4">
          <div className="flex gap-3 lg:w-[75%]">
            <div className="size-6">
              <RightSvg />
            </div>
            <div>
              <h5 className="text-lg text-textColor">
                <span className="font-bold text-black">
                  Fastest loading speed
                </span>{' '}
                - Lorem Ipsum has been the industry&apos;s standard dummy text
                ever since the 1500s.
              </h5>
            </div>
          </div>
          <div className="flex gap-3 lg:w-[75%]">
            <div className="size-6">
              <RightSvg />
            </div>
            <div>
              <h5 className="text-lg text-textColor">
                <span className="font-bold text-black">
                  Fastest loading speed
                </span>{' '}
                - Lorem Ipsum has been the industry&apos;s standard dummy text
                ever since the 1500s.
              </h5>
            </div>
          </div>
          <div className="flex gap-3 lg:w-[75%]">
            <div className="size-6">
              <RightSvg />
            </div>
            <div>
              <h5 className="text-lg text-textColor">
                <span className="font-bold text-black">
                  Fastest loading speed
                </span>{' '}
                - Lorem Ipsum has been the industry&apos;s standard dummy text
                ever since the 1500s.
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <div className="relative h-72 md:h-96 lg:h-[550px] bg-gradient-to-l from-[rgba(17,109,255,0.1)] to-[rgba(35,192,182,0.1)] rounded-[20px] overflow-hidden">
          <img
            className="absolute inset-0 h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pt-20"
            src={image}
            alt="Image"
          />
        </div>
      </div>
    </section>
  );
};

export default TextImageSection;
