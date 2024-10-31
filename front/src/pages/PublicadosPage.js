import React from 'react';

const PublicadosPage = (props) => {
    return (
        <main className="holder">
            <section className="publicados_texto">
                <h2>Animales publicados! </h2>
            </section>
            <div className="container" style={{ backgroundColor: 'rgb(202, 86, 240)' }}>
                <div className="publicados">
                    <img src="/mestizo.jpeg" alt="Encontrado" />
                    <div className="info">
                        <h5>Nombre del animal: No tiene nombre.</h5>
                        <h5>Fecha de publicación: 07/08/2024</h5>
                        <p>
                            Especie: Perro<br />
                            Raza: Mestizo (parece tener algo de Beagle)<br />
                            Nombre del animal: Max<br />
                            Especie: Perro<br />
                            Raza: Labrador Retriever<br />
                            Color: Marrón claro con una mancha blanca en el pecho<br />
                            Tamaño: Mediano, aproximadamente 25 kg<br />
                            Edad: 3 años<br />
                            Sexo: Macho<br />
                            Señas particulares: Lleva un collar rojo con una placa de identificación que dice "Max". Tiene una cicatriz pequeña en la pata trasera derecha. Es muy amigable y sociable, pero puede asustarse con ruidos fuertes.
                        </p>
                    </div>
                </div>

                <div className="publicados">
                    <img src="/labrador.jpeg" alt="Labrador" />
                    <div className="info">
                        <h5>Nombre del animal: MAX</h5>
                        <h5>Fecha de publicación: 07/08/2024</h5>
                        <p>
                            Especie: Perro<br />
                            Raza: Labrador Retriever<br />
                            Color: Marrón claro con una mancha blanca en el pecho<br />
                            Tamaño: Mediano, aproximadamente 25 kg<br />
                            Edad: 3 años<br />
                            Sexo: Macho<br />
                            Señas particulares: Lleva un collar rojo con una placa de identificación que dice "Max". Tiene una cicatriz pequeña en la pata trasera derecha. Es muy amigable y sociable, pero puede asustarse con ruidos fuertes.
                        </p>
                    </div>
                </div>

                <div className="publicados">
                    <img src="/gato cruza.jpeg" alt="Tren" />
                    <div className="info">
                        <h5>Nombre del animal: No tiene nombre.</h5>
                        <h5>Fecha de publicación: 02/08/2024</h5>
                        <p>
                            Especie: Gato<br />
                            Raza: Cruza de persa<br />
                            Color: Gris claro con ojos verdes<br />
                            Tamaño: Mediano, aproximadamente 5 kg<br />
                            Edad: Aproximadamente 6 años<br />
                            Sexo: Hembra<br />
                            Señas particulares: Lleva un collar rojo con una campanita, sin placa de identificación. Tiene un pequeño manchón de pelo más oscuro en la pata delantera izquierda. Es muy cariñosa y tiende a acercarse a las personas.
                        </p>
                    </div>
                </div>

                <div className="publicados">
                    <img src="/siamesa blanca.jpeg" alt="Tren" />
                    <div className="info">
                        <h5>Nombre del animal: Luna.</h5>
                        <h5>Fecha de publicación: 02/08/2024</h5>
                        <p>
                            Especie: Gato<br />
                            Raza: Siamesa<br />
                            Color: Blanco con patas, orejas y cola marrón oscuro<br />
                            Tamaño: Pequeño, aproximadamente 4 kg<br />
                            Edad: 2 años<br />
                            Sexo: Hembra<br />
                            Señas particulares: Tiene ojos azules muy brillantes. Lleva un collar morado con un cascabel. Le falta un pequeño trozo de la oreja izquierda.
                        </p>
                    </div>
                </div>

                
            </div>
        </main>
    );
};

export default PublicadosPage;
