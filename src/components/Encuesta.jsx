import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import "../App.css";
const Encuesta = ({ listaEncuestas, responderEncuesta }) => {
    const { id } = useParams(); // Obtiene el ID de la encuesta desde la URL
    console.log(listaEncuestas);
    console.log(listaEncuestas.find((enc) => enc.id === parseInt(id)));

    const encuesta = listaEncuestas.find((enc) => enc.id === parseInt(id));
    const [seleccion, setSeleccion] = useState({});
    const handleSelect = (opcion,id) => {
        const newSeleccion = {...seleccion};    
        if(newSeleccion[id]===opcion){
            delete newSeleccion[id];
        }else{
            newSeleccion[id] = opcion
        }
        console.log(seleccion[id])
        setSeleccion(newSeleccion);
    }
    console.log("Preguntas: ", encuesta);
    console.log(encuesta.preguntas.map((p) => p.opciones));
    return (
        <div>
            <div className="encuesta-item-container">
                <div className="encuesta-item">
                    <h2>{encuesta.titulo}</h2>
                    <p>{encuesta.descripcion}</p>
                    <br />
                </div>
            </div>
            <div className="encuesta-item-container">
                <div className="encuesta-item">
                    <h2>Preguntas</h2>
                    <p>
                        {!encuesta.preguntas && <p>Sin preguntas definidas.</p>}
                        {encuesta.preguntas &&
                            encuesta.preguntas.map((pregunta) => (
                                <div key={pregunta.id}>
                                    <p>{pregunta.pregunta}</p>
                                    <ul className="opciones">
                                        {pregunta.opciones.map((opcion) => (
                                                    <li key={opcion.id} onClick={() => handleSelect(opcion,encuesta.id)} className={seleccion[encuesta.id] === opcion ? 'selected' : ''}>{opcion.texto}</li>

                                        ))}
                                    </ul>
                                </div>
                            ))}
                    </p>
                    <br />
                </div>
            </div>
            <Link to="/">Volver</Link>
        </div>
    );
};
export default Encuesta;















