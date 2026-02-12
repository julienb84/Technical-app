import logo from "../assets/lydia-logo.svg";

export default function Header() {
  return (
    <div className="w-dvw h-14 flex justify-center items-center largephone:h-20 largephone:justify-start largephone:pl-8 sm:pl-10">
      <a href="#home" className="link-hover">
        <img src={logo} alt="Lydia logo" className="h-6 largephone:h-8" />
      </a>
    </div>
  );
}
