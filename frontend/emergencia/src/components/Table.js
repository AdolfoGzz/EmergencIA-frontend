
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import CustomRow from './CustomRow';

const tableHeaders = {
    fontWeight: 600,
    bgColor: '#E6E6E6',
    align: 'center',
}
const cellCenter = {
    textAlign: 'center',
}

function customTable() {
  return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 1000 }}>
            <TableHead>
                <TableRow sx={{
                    backgroundColor: '#F4F4F4',
                }}>
                    <TableCell sx={cellCenter}><Typography style={tableHeaders}>Info del llamante</Typography></TableCell>
                    <TableCell sx={cellCenter}><Typography style={tableHeaders}>Ubicacion</Typography></TableCell>
                    <TableCell sx={cellCenter}><Typography style={tableHeaders}>Descripcion del problema</Typography></TableCell>
                    <TableCell sx={cellCenter}><Typography style={tableHeaders}>Emociones</Typography></TableCell>
                    <TableCell sx={cellCenter}><Typography style={tableHeaders}>Riesgo</Typography></TableCell>
                    <TableCell sx={cellCenter}><Typography style={tableHeaders}>Status</Typography></TableCell>
                    <TableCell sx={cellCenter}><Typography style={tableHeaders}>Llamada</Typography></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <CustomRow
                    info="Nombre: Juan Pérez
                    Número de teléfono: 555-123-4567
                    Dirección: 123 Calle Principal, Ciudad Ejemplo"
                    desc="Juan Pérez llama al 911 para reportar un incendio en su vecindario. Ha notado humo y llamas que provienen de una casa cercana."
                    emocion1="preocupacion"
                    emocion2="miedo"
                    emocion3="sorpresa"
                    nivel={0.8}
                    accion="Enviar bomberos de inmediato."
                    transcript="¡Hola! Soy Juan Perez ¡Necesito ayuda! Estoy viendo un incendio en la casa de al lado en 123 Calle Principal. ¡Las llamas son enormes y el humo es espeso! Por favor, envíen a los bomberos rápido. Estoy muy preocupado. Por favor, apresúrense."
                />
                <CustomRow
                    info="Nombre: Carlos Rodríguez
                    Número de teléfono: 555-567-8901
                    Dirección: 789 Calle Secundaria, Ciudad Ejemplo"
                    desc="Carlos Rodríguez llama al 911 para informar sobre un robo en progreso en su vecindario. Ha visto a dos individuos sospechosos entrar en una casa cercana."
                    emocion1="miedo"
                    emocion2="negativo"
                    emocion3="odio"
                    nivel={0.9}
                    accion="Enviar a la policía de inmediato."
                    transcript="Llamante (Carlos Rodríguez): [Voz nerviosa] ¡Hola! Necesito ayuda urgente. Acabo de ver a dos personas entrar en la casa de mi vecino en 789 Calle Secundaria. Creo que están robando. No pude ver sus caras claramente, pero ambos estaban vestidos de negro y llevaban mochilas. Por favor, apresúrense."
                />
                <CustomRow
                    info="Nombre: Ana López
                    Número de teléfono: 555-321-4567
                    Dirección: 234 Calle Tranquila, Ciudad Ejemplo"
                    desc="Ana López llama al 911 para informar sobre la desaparición de su hijo de 8 años. El niño salió a jugar en el parque hace dos horas y aún no ha regresado a casa."
                    emocion1="sorpresa"
                    emocion2="preocupacion"
                    emocion3="negativo"
                    nivel={0.5}
                    accion="Enviar a la policía para iniciar la búsqueda"
                    transcript=" ¡Por favor, necesito ayuda! Mi hijo de 8 años salió a jugar en el parque hace dos horas y no ha regresado a casa. Estoy muy preocupada. Estoy en 234 Calle Tranquila.  Mi hijo se llama Diego. Tiene cabello castaño y llevaba una camiseta azul y pantalones cortos rojos. Por favor, encuéntrenlo rápido."
                />
            </TableBody>
        </Table>
    </TableContainer>
  );
}

export default customTable;