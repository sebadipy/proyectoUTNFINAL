const HomePage = (props) => {
    
    const handleRedirect =() =>{
 window.location.href = '/contacto'; 
};

    return (
        <main className="holder">
            <div className="columnas">
                <section className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>
                        El proyecto de Perros Perdidos y Encontrados MGP es una iniciativa que busca reunir y difundir
                        información sobre perros extraviados y encontrados en la región, facilitando la conexión entre
                        dueños y personas que han encontrado mascotas.
                    </p>
                    <p className="resaltado">
                        Los datos una vez publicados estarán vigentes por el término de 30 días corridos a partir de la fecha
                        de publicación en nuestro sitio web municipal www.mardelplata.gov.ar/zoonosisweb. Pasado ese
                        período, la Dirección de Zoonosis y Bienestar Animal dará de baja la publicación sin previo aviso.
                        En caso de que el animal no sea encontrado, podrás reiniciar el proceso de búsqueda y volver a
                        cargar la solicitud. El Municipio se encargará de la difusión del animal perdido o extraviado y no
                        asumirá responsabilidad por el animal ni por las acciones que deban realizar las personas
                        involucradas para reunirse con su mascota. El municipio se encargará de la difusión del animal perdido o
                        extraviado. No se asumirá responsabilidad por el animal ni por las acciones que deban realizar las personas para
                        reunirse con su mascota.
                    </p>
                </section>

                <section className="contacto">
                    <h2>Contacto</h2>
                    <div className="testimonio">
                        <span className="cita">Dirección de Sanidad y Control Animal</span>
                        <p></p>
                        <div className="mb-3">
                        <button type="button" className="btn btn-primary" onClick={handleRedirect}>
                                Formulario de contacto
                            </button>
                        </div>
                    </div>
                </section>
            </div>
            <h2>Últimos animales publicados</h2>
            <div className="container" style={{ backgroundColor: 'rgb(202, 86, 240)' }}>
                <div className="row">
                    <div className="col">
                        <h3>Perdidos</h3>
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="/labrador.jpeg" className="card-img-top" alt="Labrador"/>
                            <div className="card-body">
                                <h5 className="card-title">Nombre del animal: Max</h5>
                                <p className="card-text">
                                    Especie: Perro<br />
                                    Raza: Mestizo (parece tener algo de Beagle)<br />
                                    Color: Marrón claro con una mancha blanca en el pecho<br />
                                    Tamaño: Mediano, aproximadamente 25 kg<br />
                                    Edad: 3 años<br />
                                    Sexo: Macho<br />
                                    Señas particulares:<br />
                                    Lleva un collar rojo con una placa de identificación que dice "Max"<br />
                                    Tiene una cicatriz pequeña en la pata trasera derecha<br />
                                    Es muy amigable y sociable, pero puede asustarse con ruidos fuertes
                                </p>
                            </div>
                        </div>
                        <p></p>
                    </div>
                    <div className="col">
                        <h3>Encontrados</h3>
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="/mestizo.jpeg" className="card-img-top" alt="Mestizo"/>
                            <div className="card-body">
                                <h5 className="card-title">Nombre del animal: No tiene nombre</h5>
                                <p className="card-text">
                                    Especie: Perro<br />
                                    Raza: Mestizo (parece tener algo de Beagle)<br />
                                    Color: Negro con manchas marrones y blancas<br />
                                    Tamaño: Mediano, aproximadamente 20 kg<br />
                                    Edad: Aproximadamente 4 años<br />
                                    Sexo: Macho<br />
                                    Señas particulares:<br />
                                    Lleva un collar azul sin placa de identificación<br />
                                    Tiene una cicatriz en la oreja derecha<br />
                                    Muy amigable y obediente<br />
                                    Fecha: 1 de agosto de 2024<br />
                                    Lugar: Avenida Principal, cerca de la estación de trenes
                                </p>
                            </div>
                        </div>
                        <p></p>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="/siamesa blanca.jpeg" className="card-img-top" alt="Siamesa"/>
                            <div className="card-body">
                                <h5 className="card-title">Nombre del animal: Luna</h5>
                                <p className="card-text">
                                    Especie: Gato<br />
                                    Raza: Siamesa<br />
                                    Color: Blanco con patas, orejas y cola marrón oscuro<br />
                                    Tamaño: Pequeño, aproximadamente 4 kg<br />
                                    Edad: 2 años<br />
                                    Sexo: Hembra<br />
                                    Señas particulares:<br />
                                    Tiene ojos azules muy brillantes<br />
                                    Lleva un collar morado con un cascabel<br />
                                    Le falta un pequeño trozo de la oreja izquierda
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="/gato cruza.jpeg" className="card-img-top" alt="Cruza"/>
                            <div className="card-body">
                                <h5 className="card-title">Nombre del animal: Sin nombre</h5>
                                <p className="card-text">
                                    Especie: Gato<br />
                                    Raza: Cruza de persa<br />
                                    Color: Gris claro con ojos verdes<br />
                                    Tamaño: Mediano, aproximadamente 5 kg<br />
                                    Edad: Aproximadamente 6 años<br />
                                    Sexo: Hembra<br />
                                    Señas particulares:<br />
                                    Lleva un collar rojo con una campanita, sin placa de identificación<br />
                                    Tiene un pequeño manchón de pelo más oscuro en la pata delantera izquierda<br />
                                    Es muy cariñosa y tiende a acercarse a las personas<br />
                                    Lugar donde fue encontrado:<br />
                                    Fecha: 2 de agosto de 2024<br />
                                    Lugar: Avenida Principal, cerca de la estación de autobuses
                                </p>
                            </div>
                        </div>
                        <p></p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HomePage;
