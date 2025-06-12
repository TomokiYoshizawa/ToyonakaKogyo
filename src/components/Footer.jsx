import ToyonakaKogyoLogo from './ToyonakaKogyoLogo'

const Footer = () => {
  return (
    <footer className="bg-[#4480ac] border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <FooterLink href="/about" title="私たちについて" />
          <FooterLink href="/business" title="ビジネス" />
          <FooterLink href="/product" title="製品" />
          <FooterLink href="/recruitment" title="採用" />
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
             <a href="#" className="cursor-pointer">
            <ToyonakaKogyoLogo />
          </a>
          </div>
          <div className="text-white/60 text-sm">
            © {new Date().getFullYear()} Toyonaka Industry Co.,Ltd.. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

const FooterLink = ({ href, title }) => (
  <div>
    <a 
      href={href} 
      className="text-white hover:text-keyenceRed transition-colors duration-300"
    >
      {title}
    </a>
  </div>
)

export default Footer