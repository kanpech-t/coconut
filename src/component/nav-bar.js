import { useRef, useState } from 'react'
import { ReactComponent as Logo } from '../svg/logo.svg'
import { ReactComponent as Bars } from '../svg/bars.svg'
import { ReactComponent as Close } from '../svg/close.svg'

export default function NavBar({ scrollToItem }) {
  const mobileNav = useRef(null)
  const [displayMobileNav, setDisplayMobileNav] = useState(false)
  const navBar = [
    'About us',
    'Catalog',
    'Service Providing',
    'Activities',
    'Contact',
  ]

  const handleCloseMobile = () => {
    mobileNav.current.classList.add('animate-fadeRight')
    setTimeout(() => {
      setDisplayMobileNav(false)
    }, 250)
  }

  return (
    <>
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
      <div className="w-full h-[92px] xl:h-[96px] flex items-center justify-between py-6 xl:pt-6 xl:pb-2 px-[24px] xl:px-[72px]  fixed top-0 z-[100] bg-[#1C201433]/20 bg-opacity-[0.07] border-b border-white xl:border-none">
        <Logo
          onClick={() => scrollToItem('')}
          className="cursor-pointer size-[44px] xl:size-[55px]"
        />
        <div className="hidden items-center gap-2 xl:flex">
          {navBar.map((item) => (
            <div
              key={item}
              className="px-6 py-4 text-white cursor-pointer text-[18px] font-medium"
              onClick={() => {
                scrollToItem(item)
              }}
            >
              {item.toUpperCase()}
            </div>
          ))}
        </div>
        {/* mobile nav */}
        <Bars
          className="xl:hidden cursor-pointer"
          onClick={() => {
            if (displayMobileNav) {
              handleCloseMobile()
            } else {
              setDisplayMobileNav(true)
            }
          }}
        />
      </div>
    </>
  )
}
