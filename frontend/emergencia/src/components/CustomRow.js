import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Emociones from "./Emociones";
import Status from "./Status";
import NivelRiesgo from "./NivelRiesgo";
import Maps from "./Mapa.js";
import Transcript from './Transcript';

function CustomRow(props){
    return(
        <TableRow>
            <TableCell align="center">{props.info}</TableCell>
            <TableCell align="center"><Maps/></TableCell>
            <TableCell align="center">{props.desc}</TableCell>
            <TableCell align="center"><Emociones emocion1={props.emocion1} emocion2={props.emocion2} emocion3={props.emocion3}/></TableCell>
            <TableCell align="center"><NivelRiesgo nivel = {props.nivel}/></TableCell>
            <TableCell align="center"><Status accion={props.accion}/></TableCell>
            <TableCell align="center"><Transcript transcript={props.transcript}/></TableCell>
        </TableRow>
    );
}

export default CustomRow;