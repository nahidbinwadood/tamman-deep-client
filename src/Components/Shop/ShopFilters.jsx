import GradientButton from "../Buttons/GradientButton";
import { DotLightSvg, DotSvg, FilterLightSvg, FilterSvg } from "../SvgContainer";



const ShopFilters = () => {
  return (
    <div className="mt-16 w-full flex items-center justify-between">
      <div>
        <GradientButton
          title={'Show filters'}
          prev={<FilterSvg />}
          prevLight={<FilterLightSvg />}
        />
      </div>
      <div className="flex items-center gap-5">
        <p className="text-nowrap">Sort by:</p>
        <GradientButton
          title={'Best Selling'}
          next={<DotSvg />}
          nextLight={<DotLightSvg />}
        />
      </div>
    </div>
  );
};

export default ShopFilters;
