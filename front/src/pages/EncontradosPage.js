const EncontradosPage = (props) => {
    return (
        <main className="holder">
            <section className="publicados_texto">
                <h2>Formulario de denuncia - Animales encontrados</h2>
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
                    <label htmlFor="exampleFormControlInput1" className="form-label">Fecha del encuentro:</label>
                    <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="dd/mm/aaaa" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="lugarExtravio" className="form-label">Lugar donde se encontró:</label>
                    <input type="text" className="form-control" id="lugarExtravio" placeholder="Ingrese el lugar de extravío" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput2" className="form-label">Edad apróximada (años):</label>
                    <input type="number" className="form-control" id="exampleFormControlInput2" placeholder="0,1,.." required />
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
                    <input type="text" className="form-control mt-2" id="otraCaracteristica" placeholder="Escriba la otra característica" style={{ display: 'none' }} />
                </div>

                <div className="mb-3">
                    <label htmlFor="fotoFrente" className="form-label">Foto frente (máx. 1 MB, formato PNG, JPG, BMP):</label>
                    <input type="file" className="form-control" id="fotoFrente" accept=".png, .jpg, .bmp" maxSize="1048576" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="fotoPerfil" className="form-label">Foto perfil (máx. 1 MB, formato PNG, JPG, BMP):</label>
                    <input type="file" className="form-control" id="fotoPerfil" accept=".png, .jpg, .bmp" maxSize="1048576" />
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
                    <label htmlFor="nombreDuenio" className="form-label">Nombre del responsable:</label>
                    <input type="text" className="form-control" id="nombreDuenio" placeholder="Ingrese el nombre del responsable" required />
                </div>

                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Enviar Formulario</button>
                </div>
            </div>
        </main>
    );
};

export default EncontradosPage;

