// DATA //
import logo from "../assets/Logo_bank.svg";

export default function Header() {
  return (
    <div className="w-dvw h-14 flex justify-center items-center largephone:h-20 largephone:justify-start largephone:pl-8 sm:pl-10 md:pl-14 xl:pl-24 2xl:pl-52">
      <a href="#home" className="link-hover">
        <img src={logo} alt="Lydia logo" className="h-10 largephone:h-14" />
      </a>
    </div>
  );
}
