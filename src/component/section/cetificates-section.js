export const CertificatesSection = () => {
  const certificatesList = [
    {
      key: 'gmp',
      image: '/images/certificate-gmp.png',
    },
    {
      key: 'halal',
      image: '/images/certificate-halal.png',
    },
    {
      key: 'fda',
      image: '/images/certificate-fda.png',
    },
    {
      key: 'iso14001',
      image: '/images/certificate-iso14001.png',
    },
    {
      key: 'iso',
      image: '/images/certificate-iso.png',
    },
    {
      key: 'haccp',
      image: '/images/certificate-haccp.png',
    },
  ]
  return (
    <div className="w-full flex flex-col xl:flex-row bg-[#EDEEEA]">
      <div className="hidden xl:block">
        <img
          src="/images/certificate-background.jpg"
          className="w-[392px] h-full object-cover"
          alt="certificate-background"
          loading="lazy"
        />
      </div>
      <div className="flex mx-auto xl:flex-1 flex-col py-[72px] xl:py-[128px] max-w-[768px] xl:max-w-[1088px]">
        <div className="flex flex-col mx-[24px] sm:mx-auto mb-[56px] xl:mb-[72px] max-w-[696px] text-center xl:text-start">
          <span className="text-[40px] xl:text-[56px] leading-[52px] xl:leading-[64px] font-semibold text-[#8EA262] mb-[28px] poppins xl:uppercase">
            Certificates
          </span>
          <span className="text-[18px] xl:text-[20px] leading-[24px] xl:leading-[28px] font-bold text-[#4D4D4D]">
            At Siriphon Thai Fruit Co.,Ltd.
            <br /> we work closely with trusted, certified manufacturers to
            ensure we export meets international standards for food safety and
            quality.
          </span>
        </div>

        <div className="grid grid-cols-2 xl:grid-cols-3 gap-[32px] xl:gap-[48px] mx-[24px] xl:mx-auto">
          {certificatesList.map((certificate) => (
            <img
              key={certificate.key}
              src={certificate.image}
              className="size-[120px] xl:size-[190px] justify-self-center"
              alt={certificate.key}
              loading="lazy"
            />
          ))}
        </div>
      </div>
      <div className="block xl:hidden">
        <img
          src="/images/certificate-background-mobile.png"
          className="w-full h-[280px] object-cover"
          alt="certificate-background-mobile"
          loading="lazy"
        />
      </div>
    </div>
  )
}
