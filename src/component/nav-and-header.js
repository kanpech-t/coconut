import { useState, useRef } from 'react'

import { ReactComponent as Logo } from '../svg/logo.svg'
import { ReactComponent as ArrowLeft } from '../svg/arrow-left.svg'
import { ReactComponent as ArrowRight } from '../svg/arrow-right.svg'
import { ReactComponent as Varietires } from '../svg/varietires.svg'
import { ReactComponent as Quality } from '../svg/quality.svg'
import { ReactComponent as Bars } from '../svg/bars.svg'
import { ReactComponent as Email } from '../svg/email.svg'
import { ReactComponent as Facebook } from '../svg/facebook.svg'
import { ReactComponent as Youtube } from '../svg/youtube.svg'
import { ReactComponent as Phone } from '../svg/phone.svg'
import { ReactComponent as Cart } from '../svg/cart.svg'
import { ReactComponent as Catalog } from '../svg/Catalog.svg'
import { ReactComponent as Close } from '../svg/close.svg'

import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import '../index.css'
import PictureView from './picture-view'

export default function Nav() {
  // ====================== useState ======================
  const [currentBackGroundPage, setCurrentBackGroundPage] = useState(0)

  const [currentSidebarHover, setCurrentSidebarHover] = useState('')

  const [displayMobileNav, setDisplayMobileNav] = useState(false)

  const mobileNav = useRef(null)

  const aboutUs = useRef(null)

  const navBar = [
    'About us',
    'Catalog',
    'Service Providing',
    'Activities',
    'Contact',
  ]

  const slideImages = [
    require('../picture/cover-img-1.jpg'),
    require('../picture/cover-img-2.jpg'),
    require('../picture/cover-img-3.jpg'),
  ]

  const backgroundContent = [
    `   With over 50 years of experience as coconut farmers, our company's
  roots run deep in agriculture. Progressing with the times, the next
  generation of entrepreneurs brought expertise in international
  trade, leading us to expand into exporting coconuts and fruits
  globally. Today, we offer comprehensive logistics services,
  including transportation and custom clearance, for FOB, CFR and CIF
  of incoterms, ensuring seamless business operations for our clients.`,
    `We possess an extensive 112,000-square-meter coconut farm situated in Samut Songkram province in
  the western region of Thailand. This area is renowned for its exceptional coconut-growing conditions,
  nestled within a river basin that is periodically flooded by the sea. The resulting soil is abundant in minerals,
  particularly potassium, which is perfect for nurturing coconut trees. Located in the Ban Phaeo district, our
  farm benefits from a consistent water source that nourishes the coconut plantation, imparting a delightful
  aroma to the coconuts.
  `,
    `With these exceptional conditions, our coconut meat offers a sweet, mellow taste and a pleasant aroma,
    making it a refreshing choice to quench your thirst and cool you down. Our young coconuts have become our
    best-selling product, preferred by consumers who enjoy both the meat and the healthy coconut water.
    Additionally, they are processed into a variety of delicious coconut-based products, catering to the
    preferences of both Thai locals and international buyers.`,
  ]

  const handleChangeBackgroundPage = (page) => {
    if (page > -1 && page < backgroundContent.length) {
      setCurrentBackGroundPage(page)
    }
  }

  const handleCloseMobile = () => {
    mobileNav.current.classList.add('animate-fadeRight')
    setTimeout(() => {
      setDisplayMobileNav(false)
    }, 250)
  }

  const scrollToItem = (item) => {
    switch (item) {
      case 'About us':
        aboutUs.current.scrollIntoView({ behavior: 'smooth' })
        break
      default:
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div className="relative h-dvh overflow-y-auto">
      {/* mobile nav bar */}
      {displayMobileNav && (
        <div
          className="fixed h-dvh w-[230px] bg-[#EDEEEA]  z-[101] py-[36px] px-6 flex-col gap-6 flex text-[#8EA262] border-r border-white animate-fadeLeft"
          ref={mobileNav}
        >
          <Close
            className="size-[30px] self-end cursor-pointer"
            fill="#8EA262"
            onClick={handleCloseMobile}
          />
          {navBar.map((item) => (
            <div
              className="cursor-pointer text-[20px] "
              onClick={() => {
                scrollToItem(item)
                handleCloseMobile()
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}

      {/* nav bar */}
      <div className="w-full h-[92px] lg:h-[128px] flex items-center justify-between py-9 px-[24px] lg:px-[72px]  fixed top-0 z-[100] bg-primary-green bg-opacity-[0.07] border-b border-white lg:border-none">
        <Logo
          onClick={() => scrollToItem('')}
          className="cursor-pointer size-[44px] lg:size-[55px]"
        />
        <div className="hidden items-center gap-8 lg:flex">
          {navBar.map((item) => (
            <div
              key={item}
              className="px-8 py-4 text-white cursor-pointer text-[18px] font-medium"
              onClick={() => {
                scrollToItem(item)
              }}
            >
              {item}
            </div>
          ))}
        </div>
        {/* mobile nav */}
        <Bars
          className="lg:hidden cursor-pointer"
          onClick={() => {
            if (displayMobileNav) {
              handleCloseMobile()
            } else {
              setDisplayMobileNav(true)
            }
          }}
        />
      </div>
      {/* cover img */}
      <div className="h-[100dvh] overflow-hidden relative z-[15] flex flex-col justify-center lg:justify-start">
        <Slide arrows={false} swipe={false}>
          {slideImages.map((image, index) => (
            <div key={index} className="each-slide">
              <img
                src={image}
                className="h-[100dvh] w-full object-cover"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </Slide>
        <div className="self-center justify-self-center absolute w-[465px] h-[176px] text-center lg:bottom-[205px] lg:left-[135px] z-[100] text-[#F0F4E4]">
          <p className="text-[24px] lg:text-[40px] sacramento-regular ">
            Taste of nature
          </p>
          <p className="text-[36px] lg:text-[64px] font-bold">Coconut Milk</p>
          <p className="text-[20px] lg:text-[26px] font-semibold">
            for industrial
          </p>
        </div>
      </div>
      {/* sidebar */}
      <div
        className={`fixed top-[150px] ${currentSidebarHover === '' ? 'w-[48px]' : 'w-[178px]'} h-[px]  overflow-visible z-[10]  right-4  flex-col items-end hidden lg:flex`}
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
            <span className="text-[14px] text-white">+66 91 710 5668</span>
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
              srpthaifruit@gmail.com
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
        {/* <div
          className={`${currentSidebarHover === 'youtube' ? 'px-[14px] h-[48px] bg-primary-green' : 'size-12 bg-[#6B7949]'} gap-4 flex items-center justify-center   border-t border-white`}
          onMouseEnter={() => {
            setCurrentSidebarHover('youtube')
          }}
          onMouseLeave={() => {
            setCurrentSidebarHover('')
          }}
        >
          <Youtube />
          {currentSidebarHover === 'youtube' && (
            <span className="text-[14px] text-white">coconut</span>
          )}
        </div> */}
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
        <div className="flex justify-center items-center h-[93px] w-12 border-t border-white bg-[#6B7949]  cursor-pointer">
          <Catalog />
        </div>
      </div>
      {/* about us */}
      <div
        className=" py-[56px] lg:py-[96px] px-[24px] lg:px-[135px] overflow-hidden relative"
        ref={aboutUs}
      >
        <div className="flex gap-[72px] items-center">
          {/* img */}
          <PictureView
            customStyle={'hidden lg:block '}
            customStylePic={'max-w-[440px] min-w-[440px] h-[674px] '}
            firstImage={require('../picture/our-product-img-1.jpg')}
            secondImage={require('../picture/our-product-img-2.jpg')}
          />
          <div className=" py-[10px] flex flex-col">
            <h1 className="text-primary-green text-[28px] lg:text-[36px] font-semibold lg:font-bold mb-9">
              Our Product
            </h1>
            <PictureView
              customStyle={'lg:hidden mb-[44px]'}
              customStylePic={'max-h-[500px] sm:max-h-full'}
              firstImage={require('../picture/our-product-img-1.jpg')}
              secondImage={require('../picture/our-product-img-2.jpg')}
            />
            <p className="text-[16px] lg:text-[18px] font-medium mb-[24px] text-[#1C2014]">
              Our key products consist of authentic aromatic young coconuts,
              cultivated in the lush western region of Thailand— an area
              well-known for its ideal coconut growing environment.
            </p>
            <p className="text-[18px] font-medium mb-[24px]  text-[#1C2014]">
              Benefiting from this prime location, our coconuts exhibit a
              delightful blend of sweetness, creaminess, and richness, capturing
              the distinctive flavor profile of original Thai aromatic coconuts.
              In addition to our signature coconuts, we offer a wide selection
              of seasonal fruits and vegetables sourced directly from Thailand's
              fertile landscapes.
            </p>
            <p className="text-[18px] font-medium  text-[#1C2014] ">
              Moreover, we tailor our services to individual customer
              preferences by offering customized orders of Thai seasonal
              produce.
            </p>
          </div>
        </div>

        <img
          src={require('../picture/our-service.png')}
          className="mt-[72px] w-full  bg-slate-400 rounded-2xl hidden lg:block"
          alt={`our service`}
        />

        <div className="mt-[56px]">
          <span className=" text-[20px] font-semibold text-[#8EA262]">
            our service
          </span>
          <div className="flex mt-4 lg:gap-[64px] lg:flex-row flex-col">
            <div className="lg:text-[36px] text-[28px] font-semibold lg:font-bold lg:max-w-[calc(33%-32px)]">
              We provide global shipping services,
            </div>
            <img
              src={require('../picture/our-service.png')}
              className="mt-[44px] w-full  bg-slate-400 rounded-2xl  lg:hidden"
              alt={`our service`}
            />
            <div className="mt-[44px] lg:mt-0 lg:max-w-[calc(66%-32px)] text-[18px] font-medium">
              delivering directly from our production facility to destinations
              worldwide. Through our meticulous quality control measures, we
              ensure that our customers consistently receive top-notch products
              of the highest quality.
            </div>
          </div>
        </div>
      </div>
      {/* background */}
      <div className="px-[24px] py-[56px] lg:px-[135px] lg:py-[96px] flex flex-col items-center bg-[#EDEEEA]">
        <span className=" text-[20px] font-semibold text-[#8EA262] mb-[72px]">
          Company Background
        </span>
        <div className="flex flex-col items-center">
          <div className="lg:text-[36px] text-[28px] font-semibold lg:font-bold text-primary-green lg:w-[60%] text-center mb-[48px] lg:mb-[56px]">
            “ Siriphon Thai Fruit company is a leading exporter of fresh
            coconuts and Thai fruits worldwide. ”
          </div>
          <span className="lg:w-[60%] text-[16px] text-[#1C2014] lg:text-[18px] ">
            {backgroundContent[currentBackGroundPage]}
          </span>
          <div className="mt-[40px] flex gap-4 lg:self-center self-end">
            <div
              className={`size-[56px] rounded-full flex justify-center items-center cursor-pointer ${currentBackGroundPage === 0 ? 'bg-[#DADCD6]' : 'bg-[#6B7949] '}`}
              onClick={() => {
                handleChangeBackgroundPage(currentBackGroundPage - 1)
              }}
            >
              <ArrowLeft />
            </div>
            <div
              className={`size-[56px] rounded-full flex   justify-center items-center cursor-pointer ${currentBackGroundPage === backgroundContent.length - 1 ? 'bg-[#DADCD6]' : 'bg-[#6B7949]'}`}
              onClick={() => {
                handleChangeBackgroundPage(currentBackGroundPage + 1)
              }}
            >
              <ArrowRight />
            </div>
          </div>
        </div>
      </div>
      <div className="py-[56px] px-[24px] lg:py-[96px] lg:px-[135px] bg-primary-green text-center">
        <h2 className="font-semibold text-[20px] lg:text-[28px] text-white">
          We have a commitment to delivering
        </h2>
        <div className="flex-col flex lg:flex-row  gap-16 mt-16 lg:h-[134px] items-center justify-center">
          <div className="flex gap-8 items-center text-start">
            <Varietires />
            <div>
              <h2 className="font-semibold text-[28px] lg:font-bold lg:text-[36px] text-white">
                Varieties
              </h2>
              <span className="text-[20px] font-semibold text-white">
                Aromatic young coconuts
              </span>
            </div>
          </div>
          <div className="flex gap-8 items-center text-start">
            <Quality />
            <div>
              <h2 className="font-semibold text-[28px] lg:font-bold  text-white">
                Quality
              </h2>
              <span className="text-[20px] font-semibold text-white">
                No pest, 100% organic
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
