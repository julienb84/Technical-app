import logo from "../assets/lydia-logo.svg";

export default function Header() {
  return (
    <div className="w-dvw h-14 flex justify-center items-center">
      <a href="#home" className="link-hover">
        <img src={logo} alt="Lydia logo" className="h-6" />
      </a>
    </div>
  );
}
