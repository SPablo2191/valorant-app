import { useState } from "react";
import { Link as Anchor } from "react-router-dom";
import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

export function UiNavbar() {
  const [visible, setVisible] = useState(false);
  const items: MenuItem[] = [
    {
      icon: "pi pi-bars",
      command(event) {
        console.log(event);
        setVisible(true);
      },
    },
  ];
  const routes = [
    { id: 1, name: "Inicio", path: "" },
    { id: 2, name: "Nuestro Agentes", path: "/agents" },
  ];
  return (
    <>
      <Menubar model={items} className="dark:bg-slate-800 border-transparent" />
      <Sidebar
        visible={visible}
        onHide={() => setVisible(false)}
        className="text-white dark:bg-slate-800 border-transparent"
      >
        <h2 className="text-slate-800 dark:text-white font-bold text-2xl mb-4">
          Conoce acerca de...
        </h2>
        <ul>
          {routes.map((route) => (
            <li className="my-2" key={route.id}>
              <Anchor
                to={route.path}
                className="text-slate-800 dark:text-white text-lg hover:text-red-600 "
                onClick={() => setVisible(false)}
              >
                {route.name}
              </Anchor>
            </li>
          ))}
        </ul>
        <Button
          label="Iniciar Sesión"
          className="mt-4 bg-red-500 border-0 hover:bg-red-600"
        />
      </Sidebar>
    </>
  );
}
