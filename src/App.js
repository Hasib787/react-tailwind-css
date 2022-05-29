import logo from "./logo.svg";
import "./App.css";

export default function App() {
  return (
    <div className="container bg-cyan-400 flex flex-wrap">
      <img
        className="max-h-60 w-80 flex-initial" 
        src="https://wallpaperaccess.com/full/349872.jpg"
        alt="logo"
      />
      <h1 className="text-center text-2xl font-bold text-white flex-initial w-halfScreen">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        perferendis dignissimos, minus quo labore assumenda vel, officiis non
        repellat possimus nam tempore modi laboriosam magnam distinctio enim
        fugit recusandae odio!
      </h1>
    </div>
  );
}
