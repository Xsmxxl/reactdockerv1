import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Image, PlusCircle } from 'react-bootstrap-icons';
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Step1(props) {
    if (props.currentStep !== 1) {
        return null;
    }

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
                    <tr>
                        <td><Image size={30} /></td>
                        <td><small>Formularios de Solicitud de Reclamo de Nota</small></td>
                        <td>0.10</td>
                        <td>5</td>
                        <td><strong>0.50</strong></td>
                    </tr>
                    <tr>
                        <td><Image size={30} /></td>
                        <td><small>Alquiler de computadora</small></td>
                        <td>0.50</td>
                        <td>2</td>
                        <td><strong>1.00</strong></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Subtotal</td>
                        <td><strong>1.50</strong></td>
                    </tr>
                </tbody>
            </Table>
            <br/>
            <br/>
            <InputGroup>
                <Form.Select aria-label="Default select example" name="selectedValue" value={props.selectedValue} onChange={props.handleChange}>
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
                <Button variant="btn btn-outline-secondary">
                    <PlusCircle/>
                </Button>
            </InputGroup>
            <br/>
        </>
    );
}
