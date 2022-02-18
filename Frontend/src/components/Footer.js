import React from 'react'
import '../assets/styles.css'

function Footer() {
  return (
    <>
      <footer className="footer text-center ">

        <div className="container p-4 pb-0">

          <section className="mb-4">

            <h4>Síguenos en nuestras redes sociales</h4>

            <a
              className="btn btn-dark btn-floating m-1"
              //style={"background-color: #3b5998;"}
              href="https://es-la.facebook.com"
              target="_blank"
              role="button"
            ><i className="fab fa-facebook-f"></i
            ></a>


            <a
              className="btn btn-dark btn-floating m-1"
              //style={"background-color: #55acee"}
              href="https://twitter.com"
              target="_blank"
              role="button"
            ><i className="fab fa-twitter"></i
            ></a>


            <a
              className="btn btn-dark btn-floating m-1"
              href="https://www.instagram.com"
              target="_blank"
              role="button"
            ><i className="fab fa-instagram" ></i>
            </a>

          </section>

        </div>

        <div class="text-center "
        >
          © 2022 Copyright:
          <a
            className="mx-2 text-white"
            href="https://github.com"
            target="_blank">
            Proyecto Aplicaciones web y redes inálambricas
          </a>
        </div>

      </footer>



    </>
  )
}

export default Footer