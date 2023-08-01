
import { useRoutes } from "react-router-dom";
import Maestro from "./Maestro";
import Detalle from "./Detalle";


function DetalleMaestro(){
    return useRoutes([
            {
                path: '/',
                element: <Maestro />,
                children: [
                    {
                        path: '/user/:id',
                        element: <Detalle/>
                    }
                ]
            }
        ])
}

export default DetalleMaestro;