import React, {useId} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Image, PlusCircle } from 'react-bootstrap-icons';
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
//import { useSelector } from 'react-redux';

export default function Step1(props) {
    if (props.currentStep !== 1) {
        return null;
    }
    let keyId = useId
    let keyId2 = useId
    let subtotal = props.data.reduce((total, currentValue) => total = total + parseFloat(currentValue.selectedValue * currentValue.selectedCantidad),0.00);
    return (
        <>
            <Table responsive striped size="sm">
                <thead>
                    <tr>
                        <th></th>
                        <th>Descripción</th>
                        <th>Costo</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    { props.data ? props.data.map((datos, index) => (
                        <tr key={(keyId+index)}>
                            <td><Image size={30} /></td>
                            <td><small>{datos.selectedText}</small></td>
                            <td>{(parseFloat(datos.selectedValue)).toFixed(2)}</td>
                            <td key={(keyId2+index)}>
                            <div className="selepapa ">
                                <div className="d-flex flex-row-reverse selehijo">
                                    <Form.Select className="transparente" name="selectedCantidad" id={(index+1)} value={props.data.selectedCantidad} onChange={props.handleChange2}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </Form.Select>
                                </div>
                            </div>
                            </td>
                            <td><strong>{(parseFloat( datos.selectedValue * datos.selectedCantidad )).toFixed(2)}</strong></td>
                        </tr>
                    ))
                    : <></>
                    }
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Subtotal</td>
                        <td><strong>{(subtotal).toFixed(2)}</strong></td>
                    </tr>
                </tbody>
            </Table>
            <br />
            <br />
            <InputGroup>
                <Form.Select aria-label="Default select example" name="selectedValue" value={props.selectedValue} onChange={props.handleChange}>
                    <option></option>
                    <optgroup label="Servicios">
                        <option value="0.10">Formularios de Solicitud de Reclamo de Nota - 0.10</option>
                        <option value="1.00">Créditos No Oficiales - 1.00</option>
                        <option value="160.00">Practica profesional - 160.00</option>
                        <option value="1.00">Certificaciones - 1.00</option>
                        <option value="5.00">Certificación de Evaluación de Ejecutoria de la unidad académica -
                            5.00
                        </option>
                        <option value="5.00">Banco de Datos Extraordinario - 5.00</option>
                        <option value="0.50">Formulario de Evaluación de Ejecutoria - 0.50</option>
                    </optgroup>
                    <optgroup label="Cursos libres diponibles">
                        <option value="0.10">Curso de piano</option>
                        <option value="0.10">Curso de dibujo y pintura</option>
                        <option value="0.10">Curso de guitarra</option>
                        <option value="0.10">Curso de canto</option>
                        <option value="0.10">Curso de teatro</option>
                    </optgroup>
                    <optgroup label="Laboratorio de informática">
                        <option value="0.50">Alquiler de computadora - 0.50</option>
                        <option value="0.05">Hojas 8 1/2 x 11 papel bond blanco - 0.05</option>
                        <option value="0.10">Hojas 8 1/2 x 11 cremas - 0.05</option>
                        <option value="0.05">Cartapacio 8 1/2 x 11 cremas - 0.05</option>
                        <option value="0.05">Cartapacio 8 1/2 x 14 cremas - 0.05</option>
                        <option value="0.15">Impresiones color negro - 0.15</option>
                        <option value="0.15">Impresiones color - 0.15</option>
                        <option value="0.50">Encuadernado (espiral chico) - 0.50</option>
                        <option value="0.75">Encuadernado (espiral mediano) - 0.75</option>
                        <option value="2.50">Encuadernado (espiral grande) - 2.50</option>
                        <option value="0.30">Encuadernado (espiral + cartulina propia) - 0.30</option>
                    </optgroup>
                    <optgroup label="Espacio interactivo y tecnología">
                        <option value="15.00">Grabación en vivo grupo musical - 15.00</option>
                        <option value="1.00">Alquiler de amplificador de bajo - 1.00</option>
                        <option value="1.00">Alquiler de las congas - 1.00</option>
                        <option value="1.00">Alquiler de luces - 1.00</option>
                        <option value="25.00">Alquiler de consola de 6 canales, 2 bocinas, 3 micrófonos - 25.00
                        </option>
                        <option value="100.00">Alquiler de equipo de sonido al aire libre - 100.00</option>
                        <option value="15.00">Alquiler de computadora portátil y equipo multimedia - 15.00
                        </option>
                        <option value="10.00">Alquiler de computadora portátil - 10.00</option>
                        <option value="10.00">Alquiler de multimedia - 10.00</option>
                        <option value="0.05">Alquileres de Salones - 0.05</option>
                    </optgroup>
                </Form.Select>
                <Button variant="btn btn-outline-secondary" type="button" onClick={props.handleOnClick}>
                    <PlusCircle />
                </Button>
            </InputGroup>
            <br />
        </>
    );
}
