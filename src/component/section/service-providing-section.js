import { ReactComponent as Truck } from '../../svg/truck.svg'
import { ReactComponent as Ship } from '../../svg/ship.svg'
import { ReactComponent as Custom } from '../../svg/custom.svg'

import { AspectRatio } from '../common/aspect-ratio'

export const ServiceProvidingSection = ({ serviceProviding }) => {
  const serviceProvidingList = [
    {
      key: 'inland_transport',
      image: '/images/service-truck.png',
      icon: <Truck className="size-[24px]" />,
      title: 'Inland Transport',
      description:
        'We offer product delivery services to ports throughout Thailand, tailored to meet specific trading conditions.',
    },
    {
      key: 'freight_shipping',
      image: '/images/service-ship.png',
      icon: <Ship className="size-[24px]" />,
      title: 'Freight Shipping',
      description:
        'Our shipping services encompass sea freight, air freight, and cross- border transportation, in accordance with the agreed Incoterms between the company and the customer.',
    },
    {
      key: 'custom_clearance',
      image: '/images/service-custom.png',
      icon: <Custom className="size-[24px]" />,
      title: 'Custom Clearance',
      description:
        'We provide expert assistance with export customs formalities, including the preparation of necessary documents to facilitate smooth import customs clearance for our customers.',
    },
  ]
  return (
    <>
      <div
        className="py-[72px] px-[24px] xl:py-[128px] xl:px-[96px] bg-primary-green text-center"
        ref={serviceProviding}
        id="service-providing"
      >
        <div className="mx-auto max-w-[768px] xl:max-w-[1088px]">
          <h2 className="text-white text-[40px] xl:text-[56px] font-semibold mb-[56px] xl:mb-[110px] poppins xl:uppercase">
            Service Providing
          </h2>
          <div className="flex flex-col xl:items-start items-center gap-[54px] xl:gap-[30px] xl:flex-row xl:justify-evenly">
            {serviceProvidingList.map((serviceProviding) => (
              <div className="xl:w-[359px] flex flex-col items-center w-full">
                <div className="flex justify-center items-center rounded-[8px] w-full xl:w-[340px] max-w-[340px] max-h-[300px] overflow-hidden">
                  <AspectRatio ratio={1 / 1}>
                    <img
                      alt={serviceProviding.key}
                      src={serviceProviding.image}
                      className="rounded-[8px] object-cover w-full h-full"
                      loading="lazy"
                    />
                  </AspectRatio>
                </div>

                <div className="flex flex-col mr-auto gap-3 pb-[24px] pt-[36px]">
                  {serviceProviding.icon}
                  <p className="text-white font-bold text-[20px]">
                    {serviceProviding.title}
                  </p>
                </div>

                <p className="text-[#EDEEEA] font-[500] self-start text-start text-[18px]">
                  {serviceProviding.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
