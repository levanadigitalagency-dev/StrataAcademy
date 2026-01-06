import FooterSection from './FooterSection';
import logo from '@/public/logo-white.png';
import {
  MapPin,
  Phone,
  Mail,
  ChevronRight
} from 'lucide-react';
import { SiWhatsapp, SiInstagram, SiX } from '@icons-pack/react-simple-icons';
import Image from 'next/image';

const quickLinks = [
  { name: 'Beranda', href: '#home' },
  { name: 'Tentang Kami', href: '#about' },
  { name: 'Cohort Class', href: '#cohort' },
  { name: 'Kelas Privat', href: '#privat' },
  { name: 'Testimoni', href: '#testimoni' },
  { name: 'FAQ', href: '#faq' },
]
const socialLinks = [
  { name: 'Instagram', icon: <SiInstagram size={24} />, href: '#' },
  { name: 'Whatsapp', icon: <SiWhatsapp size={24} />, href: 'https://wa.me/6281717627274' },
  { name: 'X (Twitter)', icon: <SiX size={24} />, href: '#' },
];

const contactList = [
  { icon: Phone, text: '+62 21 5555 1234' },
  { icon: Mail, text: 'info@branddomain.id' },
  { icon: MapPin, text: 'Jl. Sudirman No. 123, Jakarta Pusat, DKI Jakarta 10220', className: 'items-start' },
];

export default function Footer() {
  return (
    <footer className="p-4 bg-primary text-white md:pt-16 md:pb-8 md:px-17.5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_250px_250px_180px] gap-0 md:gap-8 lg:gap-12 mb-12">

        {/* 1. LOGO SECTION */}
        <div className="space-y-6 px-1 mb-8 md:mb-0 md:pt-3">
          <Image
            src={logo}
            alt="StrataAcademy Logo"
            width={250}
            height={100}
            className="w-auto h-auto"
          />
          <p className="text-white/90 leading-relaxed text-base max-w-[45ch]">
            Platform akademik yang membantu mahasiswa memahami akademik dasar, riset medis, publikasi ilmiah, dan persiapan karier akademik secara terarah.
          </p>
        </div>

        <div className="flex flex-col border-b border-white/20 md:contents">

          {/* 2. QUICK LINKS */}
          <FooterSection title="Quick Links">
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-white/80 transition-colors flex items-center group w-fit py-1"
                  >
                    <ChevronRight
                      className="w-3 h-3 mr-2 text-white/70 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"
                    />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </FooterSection>

          {/* 3. CONTACTS */}
          <FooterSection title="Contacts">
            <div className="space-y-4 text-sm">
              {contactList.map((item, index) => (
                <div key={index} className={`flex ${item.className || 'items-center'} group`}>
                  <item.icon className="w-5 h-5 mr-3 shrink-0 text-white/80" />
                  <p className="text-white/90">{item.text}</p>
                </div>
              ))}
            </div>
          </FooterSection>

        </div>

        {/* 4. SOCIAL MEDIA */}
        <div className="px-1 mt-8 md:mt-0 md:pt-3 lg:justify-self-end">
          <h3 className="text-lg font-medium text-white  tracking-wide">Social Media</h3>
          <div className="flex space-x-5 my-3">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                aria-label={`Kunjungi ${social.name}`}
                className="hover:text-white/70 transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <h3 className="text-base font-bold opacity-80">@SocialMedia</h3>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="pt-8 mt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center text-xs text-white/80 gap-4">
        <p>&copy; {new Date().getFullYear()} StrataAcademy. All Rights Reserved.</p>
        <div className="flex space-x-6">
          <a href="https://freepik.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            Images &copy; Freepik
          </a>
        </div>
      </div>
    </footer>
  );
}
