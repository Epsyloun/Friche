import { Typography } from '@mui/material';
import React from 'react';
import Ajustes from '../../components/AjustesComponents/Ajustes';
import {Title} from '../../components/GenericComponents/Title';

function AjustesContainer() {
    const oldNombre = 'Rodrigo';
    const oldApellido = 'Diaz';
    const oldCorreo = 'rodrigo.diaz8b@gmail.com';
    return (
        <div className="content-container">
        <Title
            titleText="Configuración"
        />
        <Ajustes
            oldNombre={oldNombre}
            oldApellido={oldApellido}
            oldCorreo={oldCorreo}
        />
        </div>
     );
}

export {AjustesContainer};