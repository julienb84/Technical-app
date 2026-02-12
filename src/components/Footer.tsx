// ICONS //
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="h-20 w-100dvh flex flex-col items-center justify-center pb-2 gap-1 md:gap-2.5 md:pb-6">
      <div>
        <a
          href="https://www.lydia.me"
          target="_blank"
          className="font-bold tracking-wide text-brand-800/80 text-[18px] md:text-2xl"
        >
          Lydia
        </a>
      </div>
      <div className="flex items-center gap-1.5 text-brand-800 md:text-[18px]">
        <span className="font-semibold text-brand-800/80">Julien Bouchez</span>
        <div className="flex gap-1.5">
          <a
            href="https://github.com/JulienBCHZ"
            target="_blank"
            className="text-brand-800 text-[20px] md:text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/julien-bouchez-developer/"
            target="_blank"
            className="text-brand-800 text-[20px] md:text-2xl"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}
