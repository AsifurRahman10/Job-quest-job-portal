import { Outlet } from "react-router-dom";
import { NavbarComponent } from "../Component/NavbarComponent";

export const MainLayout = () => {
  return (
    <div className="bg-[#f1f6fd] font-OpenSans">
      <nav>
        <NavbarComponent></NavbarComponent>
      </nav>
      <section>
        <Outlet></Outlet>
      </section>
    </div>
  );
};
