import { ReactComponent as Logo } from '../svg/logo.svg'
import { ReactComponent as Address } from '../svg/address-green.svg'
import { ReactComponent as Whatsapp } from '../svg/whatsapp-green.svg'
import { ReactComponent as Email } from '../svg/email-green.svg'
import { ReactComponent as Phone } from '../svg/phone-green.svg'

export const Footer = ({ contact, scrollToItem }) => {
  return (
    <>
      <div
        className="py-[72px] px-[24px] xl:p-[72px] bg-[#475131]"
        ref={contact}
        id="contact"
      >
        <div className="xl:mx-auto flex flex-col xl:flex-row xl:justify-between gap-[72px] xl:gap-[81px] max-w-[768px] xl:max-w-[1088px]">
          <div className="flex flex-col gap-[32px]">
            <Logo
              onClick={() => scrollToItem('')}
              className="cursor-pointer size-[44px] xl:size-[55px]"
            />
            <div className="flex flex-col gap-[8px] w-[277px]">
              <h1 className="text-white text-[18px] font-bold mb-[8px]">
                SIRIPHON THAI FRUIT CO., LTD
              </h1>
              <div className="text-[#DADCD6] text-[16px]">
                Aromatic Young Coconuts and Thai fruit
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[32px]">
            <div className="text-[#DADCD6] text-[20px] font-bold">
              Contact Us
            </div>
            <div className="flex flex-col xl:grid xl:grid-cols-2 gap-[32px]">
              <div className="w-[220px] mr-[24px]">
                <Address className="cursor-pointer size-[16px] xl:size-[24px] mb-[24px]" />
                <div className="text-white text-[20px] font-bold">Address</div>
                <div className="text-white text-[16px] ">
                  39 moo 1 Khlong Khon, Samut Songkhram 75000 THAILAND
                </div>
              </div>
              <div className="w-[220px] mr-[24px]">
                <Phone className="cursor-pointer size-[16px] xl:size-[24px] mb-[24px]" />
                <div className="text-white text-[20px] font-bold">Phone</div>
                <div className="text-white text-[16px]">
                  <a href="tel:+66917105668">+66 91 710 5668</a>
                </div>
                <div className="text-white text-[16px]">
                  <a href="tel:+66882304451">+66 88 230 4451</a>
                </div>
              </div>

              <div className="w-[220px] mr-[24px]">
                <Whatsapp className="cursor-pointer size-[16px] xl:size-[24px] mb-[24px]" />
                <div className="text-white text-[20px] font-bold">Whatsapp</div>
                <div className="text-white text-[16px]">
                  <a href="https://wa.me/66917105668">+66 91 710 5668</a>
                </div>
              </div>
              <div className="w-[220px] mr-[24px]">
                <Email className="cursor-pointer size-[16px] xl:size-[24px] mb-[24px]" />
                <div className="text-white text-[20px] font-bold">Email</div>
                <div className="text-white text-[16px]">
                  <a href="mailto:srpthaifruit@gmail.com">
                    srpthaifruit@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[32px] w-[225px]">
            <div className="text-[#DADCD6] text-[20px] font-bold">Explore</div>
            <ul>
              <li
                className="text-[20px] font-semibold text-white py-[16px] cursor-pointer Montserrat"
                onClick={() => {
                  scrollToItem('About us')
                }}
              >
                ABOUT US
              </li>
              <li
                className="text-[20px] font-semibold text-white py-[16px]  cursor-pointer Montserrat"
                onClick={() => {
                  scrollToItem('Catalog')
                }}
              >
                CATALOG
              </li>
              <li
                className="text-[20px] font-semibold text-white py-[16px]  cursor-pointer Montserrat"
                onClick={() => {
                  scrollToItem('Service Providing')
                }}
              >
                SERVICE PROVIDING
              </li>
              <li
                className="text-[20px] font-semibold text-white py-[16px]  cursor-pointer Montserrat"
                onClick={() => {
                  scrollToItem('Activities')
                }}
              >
                ACTIVITIES
              </li>
              <li
                className="text-[20px] font-semibold text-white py-[16px]  cursor-pointer Montserrat"
                onClick={() => {
                  scrollToItem('Contact')
                }}
              >
                CONTACT
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
