import React, { useState } from 'react';

const PerdidosPage = (props) => {
    

    return (
        <main className="holder">
            <section className="publicados_texto">
                <h2>Formulario de denuncia - Animales perdidos</h2>
            </section>
            <div className="container" style={{ backgroundColor: 'rgb(202, 86, 240)' }}>
                <div className="mb-3">
                    <label htmlFor="tipoAnimal" className="form-label">Tipo:</label>
                    <select className="form-control" id="tipoAnimal">
                        <option value="canino">Canino</option>
                        <option value="felino">Felino</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="nombreAnimal" className="form-label">Nombre del animal:</label>
                    <input type="text" className="form-control" id="nombreAnimal" placeholder="Ej. Toby" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="fechaExtravío" className="form-label">Fecha de extravío:</label>
                    <input type="date" className="form-control" id="fechaExtravío" placeholder="dd/mm/aaaa" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="lugarExtravio" className="form-label">Lugar de extravío:</label>
                    <input type="text" className="form-control" id="lugarExtravio" placeholder="Ingrese el lugar de extravío" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="edadAnimal" className="form-label">Edad (años):</label>
                    <input type="number" className="form-control" id="edadAnimal" placeholder="0,1,.." required />
                </div>

                <div className="mb-3">
                    <label htmlFor="tamanoAnimal" className="form-label">Tamaño:</label>
                    <select className="form-control" id="tamanoAnimal">
                        <option value="chico">Chico</option>
                        <option value="mediano">Mediano</option>
                        <option value="grande">Grande</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="comportamientoAnimal" className="form-label">Comportamiento:</label>
                    <select className="form-control" id="comportamientoAnimal">
                        <option value="amigable">Amigable</option>
                        <option value="tieneMiedo">Tiene miedo</option>
                        <option value="muerde">Muerde</option>
                        <option value="esAgresivo">Es agresivo</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="otrasCaracteristicas" className="form-label">Otras características:</label>
                    <select className="form-control" id="otrasCaracteristicas" >
                        <option value="manchas">Manchas</option>
                        <option value="microchip">Tiene microchip</option>
                        <option value="informacionMedica">Información médica</option>
                        <option value="otra">Otra</option>
                    </select>
                    
                </div>

                <div className="mb-3">
                    <label htmlFor="fotoFrente" className="form-label">Foto frente (máx. 1 MB, formato PNG, JPG, BMP):</label>
                    <input type="file" className="form-control" id="fotoFrente" accept=".png, .jpg, .bmp" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="fotoPerfil" className="form-label">Foto perfil (máx. 1 MB, formato PNG, JPG, BMP):</label>
                    <input type="file" className="form-control" id="fotoPerfil" accept=".png, .jpg, .bmp" />
                </div>

                <div className="mb-3">
                    <label htmlFor="estadoAnimal" className="form-label">Estado al momento de extraviarse:</label>
                    <input type="text" className="form-control" id="estadoAnimal" placeholder="Ej: Llevaba collar rojo" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="telefono" className="form-label">Teléfono / WhatsApp:</label>
                    <input type="tel" className="form-control" id="telefono" placeholder="Ingrese su número de teléfono" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="correoElectronico" className="form-label">Correo electrónico:</label>
                    <input type="email" className="form-control" id="correoElectronico" placeholder="Ingrese su correo electrónico" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="redSocial" className="form-label">Red social publicada:</label>
                    <input type="text" className="form-control" id="redSocial" placeholder="Ej: Facebook, Instagram" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="nombreDuenio" className="form-label">Nombre del dueño responsable:</label>
                    <input type="text" className="form-control" id="nombreDuenio" placeholder="Ingrese el nombre del dueño" required />
                </div>

                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Enviar Formulario</button>
                </div>
            </div>
        </main>
    );
};

export default PerdidosPage;
