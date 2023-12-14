import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"


const Footer = () => {
  return (
    <footer className="max-container bg-black"
    ><div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
      <div className="flex flex-col items-start">
        <a href="/"><img src={footerLogo} width={150}height={46}/><p className="mt-6 text-white leading-7 font-monsterrat">Get shoes ready</p>
        <div className="flex items-center gap-5 mt-8">
          {socialMedia.map((icon)=>(<div className="flex justify-center items-center w-12 h-12 bg-white rounded-full"><img src={icon.src} width={24} height={24}/></div>))}</div></a></div>
          <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
            {footerLinks.map((section)=>(<div key={section}><h4 className="text-white font-montserrat text-2xl mb-6">{section.title}</h4>
            <ul className="text-white mt-3 hover:text-slate-gray cursor-pointer" >
              {section.links.map((link)=>(<li key={link.name}><a>{link.name}</a></li>))}
            </ul>
            </div>))}</div>
            <div className="flex justify-between text-white mt-24 max-sm:flex-col max-sm:items-center">
              <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer"><img src={copyrightSign} height={20} width={20} className="rounded-full m-0"/>
              <p className="text-white">Copyright.all right reserverd</p>
              <p className="text-white">Terms&conditions</p></div>
            </div>
          
          </div></footer>
  )
}

export default Footer