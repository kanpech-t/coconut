import { AspectRatio } from '../common/aspect-ratio'

export default function OurServiceSection() {
  return (
    <div
      className="relative py-[72px] px-6 flex justify-center"
      style={{
        backgroundImage: `url("/images/Figure 4-1_compressed.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-white/60 size-full absolute top-0 left-0 z-[1]" />
      <div
        className="relative z-[2] p-[28px] xl:p-[56px] rounded-[16px] bg-white flex flex-col xl:flex-row max-w-3xl w-full xl:max-w-1088 xl:gap-16"
        style={{
          boxShadow:
            '0px 16px 32px -4px rgba(12, 12, 13, 0.1), 0px 4px 4px -4px rgba(12, 12, 13, 0.05)',
        }}
      >
        <div className="flex flex-col">
          <h2 className="text-[24px] font-bold leading-[32px] text-[#8EA262] poppins">
            Our Service
          </h2>
          <span className="poppins text-[24px] leading-[40px] text-balance xl:leading-[40px] xl:text-[28px] text-[#475131] font-semibold mt-3">
            We Provide Global Shipping Services,
          </span>
          <span className=" text-[18px] xl:text-[20px] leading-[24px] xl:leading-[28px] font-medium text-[#4D4D4D] mb-10 xl:mb-0 text-balance mt-6">
            delivering directly from our production facility to destinations
            worldwide. Through our meticulous quality control measures, we
            ensure that our customers consistently receive top-notch products of
            the highest quality.
          </span>
        </div>
        <div className="xl:w-[511px] xl:flex-shrink-0">
          <AspectRatio
            ratio={271 / 180}
            className="rounded-[8px] overflow-hidden "
          >
            <img
              src="/images/our-service.png"
              className="w-full h-full object-cover"
              alt="our service"
            />
          </AspectRatio>
        </div>
      </div>
    </div>
  )
}
