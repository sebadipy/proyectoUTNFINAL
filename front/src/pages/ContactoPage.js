import React from 'react';

const ContactoPage = (props) => {
    return (
        <main className="holder">
            <section className="holder form_contacto">
                <div>
                    <h2>Contacto!</h2>
                    <form action="" method="" className="formulario">
                        <p>
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" name="nombre" id="nombre" />
                        </p>
                        <p>
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email" />
                        </p>
                        <p>
                            <label htmlFor="telefono">Teléfono</label>
                            <input type="text" name="telefono" id="telefono" />
                        </p>
                        <p>
                            <label htmlFor="mensaje">Mensaje</label>
                            <textarea name="mensaje" id="mensaje"></textarea>
                        </p>
                        <p>
                            <input type="submit" value="Enviar consulta" className="btn btn-primary" />
                        </p>
                    </form>
                </div>

                <div className="datos">
                    <h2>Zoonosis las 24 x 7</h2>
                    <p>Contactarse con nosotros a través de nuestro chatzoo enviando un whatsapp al 2235280718 con la palabra “hola”</p>

                    <h2>Otras maneras de contactarnos</h2>
                    <ul>
                        <li>Dirección: Hernandarias 10200 // Canesa esq.Guanahani Mar del Plata</li>
                        <li>Teléfono: 223 4652510</li>
                        <li>Email: zoonosismdp@yahoo.com.ar</li>
                        <li>Facebook: zoonosismdp</li>
                    </ul>
                </div>

                <div className="holder">
                    <h2>Escanea el QR para acceder a nuestro ChatZoo</h2>
                    <img src="/qr.jpg" alt="Perdidos y Encontrados" width="100" />
                </div>
            </section>
        </main>
    );
};

export default ContactoPage;

