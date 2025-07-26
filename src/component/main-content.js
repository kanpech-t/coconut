import { useState, useRef, useEffect } from 'react'

import { ReactComponent as Logo } from '../svg/logo.svg'

import { ReactComponent as Email } from '../svg/email.svg'
import { ReactComponent as Phone } from '../svg/phone.svg'
import { ReactComponent as Youtube } from '../svg/youtube.svg'
import { ReactComponent as Catalog } from '../svg/Catalog.svg'
import { ReactComponent as Address } from '../svg/address.svg'
import { ReactComponent as Whatsapp } from '../svg/whatsapp.svg'
import { ReactComponent as Truck } from '../svg/truck.svg'
import { ReactComponent as Ship } from '../svg/ship.svg'
import { ReactComponent as Custom } from '../svg/custom.svg'

import 'react-slideshow-image/dist/styles.css'
import '../index.css'

import { AspectRatio } from './common/aspect-ratio'
import { CarouselItem } from './common/carousel'
import CustomCarosel from './common/custom-carosel'
import NavBar from './nav-bar'
import HeroSection from './section/hero-section'
import DeliverySection from './section/delivery-section'
import OurProductSection from './section/our-product-section'
import AboutUsSection from './section/about-us-section'
import CompanyBackgroundSection from './section/company-background-section'
import OurServiceSection from './section/our-service-section'

export default function MainContent() {
  // ====================== useState ======================

  const [currentSidebarHover, setCurrentSidebarHover] = useState('')

  const [displaySidebar, setDisplaySidebar] = useState(false)

  const aboutUs = useRef(null)

  const catalog = useRef(null)

  const serviceProviding = useRef(null)

  const activities = useRef(null)

  const contact = useRef(null)

  const mainContainer = useRef(null)

  useEffect(() => {
    const hash = window.location.hash.substring(1)
    if (hash) {
      const target = document.getElementById(hash)

      if (target) {
        target.scrollIntoView()
      }
    }
  }, [])

  const scrollToItem = (item) => {
    switch (item) {
      case 'About us':
        aboutUs.current.scrollIntoView({ behavior: 'smooth' })
        break
      case 'Catalog':
        catalog.current.scrollIntoView({ behavior: 'smooth' })
        break
      case 'Service Providing':
        serviceProviding.current.scrollIntoView({ behavior: 'smooth' })
        break
      case 'Activities':
        activities.current.scrollIntoView({ behavior: 'smooth' })
        break
      case 'Contact':
        contact.current.scrollIntoView({ behavior: 'smooth' })
        break
      default:
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const onScroll = () => {
      if (
        mainContainer.current.scrollTop > mainContainer.current.clientHeight
      ) {
        setDisplaySidebar(true)
      } else {
        setDisplaySidebar(false)
      }
    }
    document.getElementById('main').addEventListener('scroll', onScroll)

    return () =>
      document.getElementById('main').removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      id="main"
      className="relative h-dvh overflow-y-auto"
      ref={mainContainer}
    >
      <NavBar scrollToItem={scrollToItem} />
      <HeroSection />
      <AboutUsSection aboutUs={aboutUs} />
      <OurServiceSection />
      <CompanyBackgroundSection />
      <DeliverySection />
      <OurProductSection catalog={catalog} />
      {/* sidebar */}
      {displaySidebar && (
        <div
          className={`fixed top-[150px] ${currentSidebarHover === '' ? 'w-[48px]' : 'w-[178px]'} h-[px]  overflow-visible z-[10]  right-0  flex-col items-end hidden xl:flex`}
        >
          <div
            className={`${currentSidebarHover === 'phone' ? 'px-[14px] h-[48px] bg-primary-green' : 'size-12 bg-[#6B7949]'} gap-4 flex items-center justify-center  `}
            onMouseEnter={() => {
              setCurrentSidebarHover('phone')
            }}
            onMouseLeave={() => {
              setCurrentSidebarHover('')
            }}
          >
            <Phone />
            {currentSidebarHover === 'phone' && (
              <span className="text-[14px] text-white">
                <a href="tel:+66917105668">+66 91 710 5668</a>
              </span>
            )}
          </div>
          <div
            className={`${currentSidebarHover === 'email' ? 'px-[14px] h-[48px] bg-primary-green' : 'size-12 bg-[#6B7949]'} gap-4 flex items-center justify-center  border-t border-white `}
            onMouseEnter={() => {
              setCurrentSidebarHover('email')
            }}
            onMouseLeave={() => {
              setCurrentSidebarHover('')
            }}
          >
            <Email />
            {currentSidebarHover === 'email' && (
              <span className="text-[14px] text-white">
                <a href="mailto:srpthaifruit@gmail.com">
                  srpthaifruit@gmail.com
                </a>
              </span>
            )}
          </div>
          {/* <div
          className={`${currentSidebarHover === 'facebook' ? 'px-[14px] h-[48px] bg-primary-green' : 'size-12 bg-[#6B7949]'} gap-4 flex items-center justify-center   border-t border-white`}
          onMouseEnter={() => {
            setCurrentSidebarHover('facebook')
          }}
          onMouseLeave={() => {
            setCurrentSidebarHover('')
          }}
        >
          <Facebook />
          {currentSidebarHover === 'facebook' && (
            <span className="text-[14px] text-white">coconut</span>
          )}
        </div> */}
          <div
            className={`${currentSidebarHover === 'youtube' ? 'px-[14px] w-[200px] h-[48px] bg-primary-green' : 'size-12 bg-[#6B7949]'} gap-4 flex items-center justify-center   border-t border-white`}
            onMouseEnter={() => {
              setCurrentSidebarHover('youtube')
            }}
            onMouseLeave={() => {
              setCurrentSidebarHover('')
            }}
          >
            <Youtube />
            {currentSidebarHover === 'youtube' && (
              <span className="text-[14px] text-white">
                <a
                  href="https://www.youtube.com/@FruitXportThailand"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FruitXport Thailand
                </a>
              </span>
            )}
          </div>
          {/* <div
          className={`${currentSidebarHover === 'cart' ? 'px-[14px] h-[48px] bg-primary-green' : 'size-12 bg-[#6B7949]'} gap-4 flex items-center justify-center  border-t border-white `}
          onMouseEnter={() => {
            setCurrentSidebarHover('cart')
          }}
          onMouseLeave={() => {
            setCurrentSidebarHover('')
          }}
        >
          <Cart />
          {currentSidebarHover === 'cart' && (
            <span className="text-[14px] text-white">coconut</span>
          )}
        </div> */}
          <div
            className="flex justify-center items-center h-[93px] w-12 border-t border-white bg-[#6B7949]  cursor-pointer"
            onClick={() => {
              scrollToItem('Catalog')
            }}
          >
            <Catalog />
          </div>
        </div>
      )}

      {/* Service Providing */}
      <div
        className="py-[56px] px-[24px] xl:py-[96px] xl:px-[135px] bg-primary-green text-center"
        ref={serviceProviding}
        id="service-providing"
      >
        <h2 className="text-white text-[28px] font-[600] xl:text-[36px] xl:font-[700] mb-[72px]">
          Service Providing
        </h2>
        <div className="flex flex-col xl:items-start items-center gap-[54px] xl:gap-[30px] xl:flex-row xl:justify-evenly">
          <div className="xl:w-[359px] flex flex-col items-center w-full">
            <div className="flex justify-center items-center rounded-[16px] w-full xl:w-[300px]  overflow-hidden">
              <AspectRatio ratio={1 / 1}>
                <img
                  alt="truck"
                  src={require('../picture/service-truck.png')}
                  className="rounded-[16px] object-cover w-full h-full"
                  loading="lazy"
                />
              </AspectRatio>
            </div>

            <div className="text-white font-[600] xl:text-[18px] flex self-start gap-[24px] px-[24px] xl:py-[26px] pt-[24px] pb-[16px]">
              <Truck className="size-[24px]" />
              <span>Inland Transport</span>
            </div>
            <p className="text-white px-6 self-start text-start text-[18px]">
              We offer product delivery services to ports throughout Thailand,
              tailored to meet specific trading conditions.
            </p>
          </div>

          <div className="xl:w-[359px] flex flex-col items-center">
            <div className="flex justify-center items-center rounded-[16px] xl:w-[300px] overflow-hidden w-full">
              <AspectRatio ratio={1 / 1}>
                <img
                  alt="ship"
                  src={require('../picture/service-ship.png')}
                  className="rounded-[16px] object-cover w-full h-full"
                  loading="lazy"
                />
              </AspectRatio>
            </div>

            <div className="text-white font-[600] xl:text-[18px] flex self-start gap-[24px] px-[24px] xl:py-[26px] pt-[24px] pb-[16px]">
              <Ship className="size-[24px]" />
              <span>Freight Shipping</span>
            </div>
            <p className="text-white px-6 self-start text-start text-[18px]">
              Our shipping services encompass sea freight, air freight, and
              cross- border transportation, in accordance with the agreed
              Incoterms between the company and the customer
            </p>
          </div>

          <div className="xl:w-[359px] flex flex-col items-center">
            <div className="flex justify-center items-center rounded-[16px] xl:w-[300px] overflow-hidden w-full">
              <AspectRatio ratio={1 / 1}>
                <img
                  alt="custom"
                  src={require('../picture/service-custom.png')}
                  className=" rounded-[16px] object-cover w-full h-full"
                  loading="lazy"
                />
              </AspectRatio>
            </div>

            <div className="text-white font-[600] xl:text-[18px] flex self-start gap-[24px] px-[24px] xl:py-[26px] pt-[24px] pb-[16px]">
              <Custom className="size-[24px]" />
              <span>Custom Clearance</span>
            </div>
            <p className="text-white px-6 self-start text-start text-[18px]">
              We provide expert assistance with export customs formalities,
              including the preparation of necessary documents to facilitate
              smooth import customs clearance for our customers.
            </p>
          </div>
        </div>
      </div>

      {/* Activities */}
      <div
        className="px-[24px] py-[56px] xl:px-[135px] xl:py-[96px] flex flex-col items-center bg-[#EDEEEA] first-letter "
        ref={activities}
        id="activities"
      >
        <div className="flex flex-col xl:flex-row gap-[84px]  items-center justify-center  xl:justify-between w-full">
          <div className="Detail w-full">
            <h3 className="text-primary-green text-[28px] xl:text-[36px] font-semibold xl:font-bold  mb-[44px] xl:mb-[72px]">
              Activities
            </h3>
            <div className="block xl:hidden  mb-[44px]  flex-col items-center">
              <CustomCarosel
                className={'w-full '}
                totalImage={6}
                content={
                  <>
                    {[
                      require('../picture/activity1-1.png'),
                      require('../picture/activity1-2.png'),
                      require('../picture/activity1-3.jpeg'),
                      require('../picture/activity1-4.jpeg'),
                      require('../picture/activity1-5.jpg'),
                      require('../picture/activity1-6.jpg'),
                    ].map((item, index) => (
                      <CarouselItem key={index}>
                        <AspectRatio ratio={1 / 1}>
                          <img
                            src={item}
                            className="object-cover w-full h-full"
                            alt="activity"
                          />
                        </AspectRatio>
                      </CarouselItem>
                    ))}
                  </>
                }
              />
            </div>
            {/* <ImageSlide
              images={[
                require('../picture/activity1-1.png'),
                require('../picture/activity1-2.png'),
                require('../picture/activity1-3.jpeg'),
                require('../picture/activity1-4.jpeg'),
                require('../picture/activity1-5.jpg'),
                require('../picture/activity1-6.jpg'),
              ]}
              customStyle={
                'block xl:hidden  mb-[44px] flex flex-col items-center'
              }
              customStylePic={'rounded-2xl  mb-[44px]'}
            /> */}

            <p className="text-[#394127] font-[600] text-[28px]">
              Our facility
            </p>
          </div>

          {/* <ImageSlide
            images={[
              require('../picture/activity1-1.png'),
              require('../picture/activity1-2.png'),
              require('../picture/activity1-3.jpeg'),
              require('../picture/activity1-4.jpeg'),
              require('../picture/activity1-5.jpg'),
              require('../picture/activity1-6.jpg'),
            ]}
            customStyle={'hidden xl:block  w-full flex flex-col items-center'}
            customStylePic={
              'rounded-2xl  min-w-[370px]  min-h-[300px]  mb-[44px]'
            }
          /> */}

          <div className="hidden xl:block  mb-[44px] w-full flex-col items-center ">
            <CustomCarosel
              className={'w-full h-full max-w-[580px] '}
              totalImage={6}
              content={
                <>
                  {[
                    require('../picture/activity1-1.png'),
                    require('../picture/activity1-2.png'),
                    require('../picture/activity1-3.jpeg'),
                    require('../picture/activity1-4.jpeg'),
                    require('../picture/activity1-5.jpg'),
                    require('../picture/activity1-6.jpg'),
                  ].map((item, index) => (
                    <CarouselItem key={index}>
                      <AspectRatio ratio={1 / 1}>
                        <img
                          src={item}
                          className="object-cover w-full h-full   "
                          alt="activity"
                        />
                      </AspectRatio>
                    </CarouselItem>
                  ))}
                </>
              }
            />
          </div>
        </div>
      </div>

      <div className="px-[24px] py-[56px] xl:px-[135px] xl:py-[96px] flex flex-col items-center">
        <div className="flex flex-col xl:flex-row-reverse gap-[84px]  items-center justify-center xl:justify-between w-full">
          <div className="Detail w-full">
            {/* <ImageSlide
              images={[
                require('../picture/activity2-1.jpg'),
                require('../picture/activity2-2.jpg'),
                require('../picture/activity2-3.jpg'),
              ]}
              customStyle={'block xl:hidden w-full xl:w-fit'}
              customStylePic={'rounded-2xl   mb-[44px]'}
            /> */}

            <div className="block xl:hidden  mb-[44px]  flex-col items-center">
              <CustomCarosel
                className={'w-full '}
                totalImage={3}
                content={
                  <>
                    {[
                      require('../picture/activity2-1.jpg'),
                      require('../picture/activity2-2.jpg'),
                      require('../picture/activity2-3.jpg'),
                    ].map((item, index) => (
                      <CarouselItem key={index}>
                        <AspectRatio ratio={1 / 1}>
                          <img
                            src={item}
                            className="object-cover w-full h-full"
                            alt="activity"
                          />
                        </AspectRatio>
                      </CarouselItem>
                    ))}
                  </>
                }
              />
            </div>

            <p className="text-[#394127] font-[600] text-[28px]">
              Our coconut farm
            </p>
          </div>
          {/* <ImageSlide
            images={[
              require('../picture/activity2-1.jpg'),
              require('../picture/activity2-2.jpg'),
              require('../picture/activity2-3.jpg'),
            ]}
            customStyle={'hidden xl:block'}
            customStylePic={
              'rounded-2xl max-w-[570px] min-w-[370px] max-h-[504px] min-h-[300px]  mb-[44px]'
            }
          /> */}

          <div className="hidden xl:block  mb-[44px] w-full flex-col items-center ">
            <CustomCarosel
              className={'w-full h-full max-w-[580px] '}
              totalImage={3}
              content={
                <>
                  {[
                    require('../picture/activity2-1.jpg'),
                    require('../picture/activity2-2.jpg'),
                    require('../picture/activity2-3.jpg'),
                  ].map((item, index) => (
                    <CarouselItem key={index}>
                      <AspectRatio ratio={1 / 1}>
                        <img
                          src={item}
                          className="object-cover w-full h-full   "
                          alt="activity"
                        />
                      </AspectRatio>
                    </CarouselItem>
                  ))}
                </>
              }
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="px-[24px] py-[56px] xl:px-[135px] xl:py-[96px] flex justify-between flex-col xl:flex-row bg-[#475131]"
        ref={contact}
        id="contact"
      >
        <div className="mb-[48px]">
          <Logo
            onClick={() => scrollToItem('')}
            className="cursor-pointer size-[44px] xl:size-[55px] mb-[32px]"
          />
          <h1 className="text-white text-[16px] font-[600] mb-[8px]">
            SIRIPHON THAI FRUIT CO., LTD
          </h1>
          <div className="text-white text-[14px]">
            Aromatic Young Coconuts and Thai fruit
          </div>
        </div>

        <div className="flex flex-col xl:flex-row ">
          <div className="mb-[48px]">
            <div className="text-white text-[20px] font-[600] mb-[32px]">
              Contact Us
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row  mb-[32px]">
                <div className="w-[220px] mr-[24px]">
                  <Address className="cursor-pointer size-[16px] xl:size-[24px] mb-[24px]" />
                  <div className="text-white text-[14px] xl:text-[16px] font-[600]">
                    Address
                  </div>
                  <div className="text-white text-[10px] xl:text-[14px] ">
                    39 moo 1 Khlong Khon, Samut Songkhram 75000 THAILAND
                  </div>
                </div>
                <div className="w-[220px] mr-[24px]">
                  <Phone className="cursor-pointer size-[16px] xl:size-[24px] mb-[24px]" />
                  <div className="text-white text-[14px] xl:text-[16px] font-[600]">
                    Phone
                  </div>
                  <div className="text-white text-[10px] xl:text-[14px]">
                    <a href="tel:+66917105668">+66 91 710 5668</a>
                  </div>
                  <div className="text-white text-[10px] xl:text-[14px]">
                    <a href="tel:+66882304451">+66 88 230 4451</a>
                  </div>
                </div>
              </div>
              <div className="flex flex-row mb-[32px]">
                <div className="w-[220px] mr-[24px]">
                  <Whatsapp className="cursor-pointer size-[16px] xl:size-[24px] mb-[24px]" />
                  <div className="text-white text-[14px] xl:text-[16px] font-[600]">
                    Whatsapp
                  </div>
                  <div className="text-white text-[10px] xl:text-[14px]">
                    <a href="https://wa.me/66917105668">+66 91 710 5668</a>
                  </div>
                </div>
                <div className="w-[220px] mr-[24px]">
                  <Email className="cursor-pointer size-[16px] xl:size-[24px] mb-[24px]" />
                  <div className="text-white text-[14px] xl:text-[16px] font-[600]">
                    Email
                  </div>
                  <div className="text-white text-[10px] xl:text-[14px]">
                    <a href="mailto:srpthaifruit@gmail.com">
                      srpthaifruit@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="w-[220px] mr-[24px]">
                  <Youtube className="cursor-pointer size-[16px] xl:size-[24px] mb-[24px]" />
                  <div className="text-white text-[14px] xl:text-[16px] font-[600]">
                    Youtube
                  </div>
                  <div className="text-white text-[10px] xl:text-[14px]">
                    <a href="https://www.youtube.com/@FruitXportThailand">
                      FruitXport Thailand
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-[48px]">
            <div className="text-white text-[20px] font-[600] mb-[32px]">
              Explore
            </div>
            <ul>
              <li
                className="text-white pb-[16px] cursor-pointer"
                onClick={() => {
                  scrollToItem('About us')
                }}
              >
                About us
              </li>
              <li
                className="text-white py-[16px]  cursor-pointer"
                onClick={() => {
                  scrollToItem('Catalog')
                }}
              >
                Catalog
              </li>
              <li
                className="text-white py-[16px]  cursor-pointer"
                onClick={() => {
                  scrollToItem('Service Providing')
                }}
              >
                Service Providing
              </li>
              <li
                className="text-white py-[16px]  cursor-pointer"
                onClick={() => {
                  scrollToItem('Activities')
                }}
              >
                Activities
              </li>
              <li
                className="text-white py-[16px]  cursor-pointer"
                onClick={() => {
                  scrollToItem('Contact')
                }}
              >
                Contact
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
