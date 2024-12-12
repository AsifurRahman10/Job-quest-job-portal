import { Outlet } from "react-router-dom";
import { NavbarComponent } from "../Component/NavbarComponent";
import { Footer } from "../Component/Footer";

export const MainLayout = () => {
  return (
    <div className="bg-[#f1f6fd] font-OpenSans">
      <nav>
        <NavbarComponent></NavbarComponent>
      </nav>
      <section className="min-h-[calc(100vh-390px)]">
        <Outlet></Outlet>
      </section>
      <section>
        <Footer></Footer>
      </section>
    </div>
  );
};
