import { useState, useRef, useEffect } from 'react'

import { ReactComponent as Email } from '../svg/email.svg'
import { ReactComponent as Phone } from '../svg/phone.svg'
import { ReactComponent as Youtube } from '../svg/youtube.svg'
import { ReactComponent as Catalog } from '../svg/Catalog.svg'

import 'react-slideshow-image/dist/styles.css'
import '../index.css'

import NavBar from './nav-bar'
import HeroSection from './section/hero-section'
import DeliverySection from './section/delivery-section'
import OurProductSection from './section/our-product-section'
import AboutUsSection from './section/about-us-section'
import CompanyBackgroundSection from './section/company-background-section'
import OurServiceSection from './section/our-service-section'
import { CertificatesSection } from './section/cetificates-section'
import { ServiceProvidingSection } from './section/service-providing-section'
import { ActivitiesSection } from './section/activities-section'
import { Footer } from './footer'

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
      <CertificatesSection />
      <ServiceProvidingSection serviceProviding={serviceProviding} />
      <ActivitiesSection activities={activities} />
      <Footer contact={contact} scrollToItem={scrollToItem} />

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
    </div>
  )
}
