import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";

const NavBar = () => {
  return (
    <div>
      <div className="container h-8 mx-auto p-5">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <div className="bg-gradient-to-r from-blue-600 to-gray-300 w-10 h-10 rounded-lg"></div>
            <h1 className="text-3xl text-gray-600 ml-2">Logo</h1>
          </div>
          <div className="mt-2">
            <a href="#" className="text-gray-600 hover:text-blue-600 p-4">
              Inicio
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 p-4">
              Tienda
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 p-4">
              Promociones
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 p-4">
              Contacto
            </a>
            <CartWidget></CartWidget>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
