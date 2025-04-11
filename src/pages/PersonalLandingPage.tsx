import { AiFillTikTok, } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";
import { FaXTwitter, FaCalculator } from "react-icons/fa6";
import { Link } from "react-router-dom";
import FotoRodri from "../assets/Foto-Rodri.jpeg";

const PersonalLandingPage: React.FC = () => {
  const personalInfo = {
    name: "Rodrigo Garcia",
    description:
      "Emprendedor | Apasionado del ciclismo, la cocina y los viajes",
  };

  const links = [
    {
      title: "TikTok",
      url: "https://tiktok.com/@rodrigopedalea",
      icon: <AiFillTikTok size={24} />,
    },
    {
      title: "YouTube",
      url: "https://youtube.com/@Rodrigobicicocina",
      icon: <IoLogoYoutube size={24} />,
    },
    {
      title: "(ex-Twitter)",
      url: "https://x.com/NegroRgo",
      icon: <FaXTwitter size={24} />,
    },
    {
      title: "Herramientas Financieras",
      url: "https://egkike.github.io/Landing-Kike/financial-tools",
      icon: <FaCalculator size={24} />,
    },
  ];

  const handleLinkClick = (url: string) => {
    // Construye la URL completa con el basename en producción
    const base = process.env.NODE_ENV === "production" ? "/Landing-Rodri" : "";
    window.open(`${base}${url}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-background dark:bg-dark-2 flex items-center justify-center p-4 sm:p-6">
      <div
        className={`
          w-full max-w-md bg-white dark:bg-dark-1 rounded-[15px] shadow-[0_4px_10px_rgba(0,0,0,0.3)] p-6 sm:p-8 text-center
          animate-fade-in
          transition-all duration-300 ease-in-out
          hover:-translate-y-2 hover:scale-105 hover:shadow-xl hover:border-2 hover:border-primary
        `}
      >
        <div className="relative mb-6">
          <img
            src={FotoRodri}
            alt="Foto de Rodrigo Garcia"
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full mx-auto object-cover border-4 border-primary transition-transform duration-300 hover:scale-105"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-text-dark dark:text-text-primary mb-3 tracking-tight">
          {personalInfo.name}
        </h1>
        <p className="text-sm sm:text-base text-[#0fbcf9] mb-8 leading-relaxed">
          {personalInfo.description}
        </p>

        <div className="space-y-4">
          {links.map((link, index) =>
            link.url.startsWith("http") ? (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center py-3 px-6 text-text-dark dark:text-text-primary bg-primary rounded-[25px] border-2 border-primary uppercase tracking-wider transition-all duration-300 hover:bg-transparent hover:text-primary hover:scale-105"
              >
                {link.icon && <span className="mr-3">{link.icon}</span>}
                {link.title}
              </a>
            ) : (
              <Link
                key={index}
                to={link.url}
                onClick={(e) => {
                  e.preventDefault(); // Evita la navegación por defecto de Link
                  handleLinkClick(link.url);
                }}
                className="flex items-center justify-center py-3 px-6 text-text-dark dark:text-text-primary bg-primary rounded-[25px] border-2 border-primary uppercase tracking-wider transition-all duration-300 hover:bg-transparent hover:text-primary hover:scale-105"
              >
                {link.icon && <span className="mr-3">{link.icon}</span>}
                {link.title}
              </Link>
            )
          )}
        </div>

        <p className="mt-8 text-sm text-[#0fbcf9]">
          © {new Date().getFullYear()} {personalInfo.name}
        </p>
      </div>
    </div>
  );
};

export default PersonalLandingPage;
