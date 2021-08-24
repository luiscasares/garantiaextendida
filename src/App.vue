<template>
  <div>
    <nav class="login-nav">
      <v-container fluid>
        <v-row class="justify-content-center">
          <v-col cols="4">
            <div class="text-center">
              <a href="https://www.makita.com.mx/">
                <b-img
                  src="https://makita.com.mx/wp-content/uploads/2018/05/logo-2.png"
                  fluid
                  alt="makita logo"
                ></b-img>
              </a>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </nav>
  </div>
  <v-container>
    <v-row>
      <v-col>
        <h2>GARANTÍA MAKITA EXTENDIDA 6 MESES</h2>
        <p>
          Cada herramienta Makita está cuidadosamente inspeccionada y probada
          antes salir de nuestras fábricas, no obstante se garantiza por el
          periodo de UN AÑO a partir de la fecha de compra, contra cualquier
          defecto de fábrica así como en materiales y mano de obra.
        </p>
        <p>
          De surgir algún problema durante este periodo, puede llevar su
          herramienta a uno de los Centros de
          <a href="#" target="_blank">Servicios Autorizados Makita</a>. De
          resultar algún problema de funcionamiento ó componentes, Makita
          México, S.A. de C.V., reemplazará el producto de ser necesario o
          cualquier pieza defectuosa, incluyendo la mano de obra, así como los
          gastos de transportación del producto dentro de la red de servicio de
          Makita.
        </p>

        <img alt src width="780" height="300px" />
        <p>
          El registro de su herramienta por medio de este formulario le da
          derecho a un período de GARANTIA EXTENDIDA DE 6 MESES adicionales al
          año de garantía estipulado en su PÓLIZA y es aplicable bajo los
          siguientes términos:
        </p>
        <ul>
          <li>
            Es necesario que al momento de la compra de la herramienta se
            realice el REGISTRO, cuando aún está VIGENTE LA GARANTIA DE UN AÑO.
          </li>
          <li>
            Se puede hacer uso de los servicios de MANTENIMIENTO Y REPARACIÓN en
            cualquiera de nuestros Centros de Servicios Autorizados Makita
            dentro de la República Mexicana.
          </li>
          <li>
            Es indispensable llevar su comprobante de registro de Garantía
            Extendida de 6 Meses y PÓLIZA o FACTURA para hacer uso de los
            servicios de mantenimiento y reparación.
          </li>
        </ul>

        <h4>Pasos para el registro de cada herramienta</h4>
        <ol>
          <li>
            Ingrese sus datos y verifique que estén correctos, en especial su
            correo y el número de serie de su herramienta.
          </li>
          <li>
            A continuación, verifique que le ha recibido en su correo el
            COMPROBANTE DE REGISTRO en formato PDF, el cual puede imprimir.
          </li>
        </ol>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

.login_container {
  height: 100%;
  background-color: #f5f5f59e;
  & p {
    font-size: 1.3rem;
    text-align: justify;
  }
  & li {
    font-size: 1.1rem;
  }
}
.login-nav {
  padding: 1rem;
  background-color: #e53631;
  display: flex;
  align-items: center;
  box-shadow: 0px 10px 10px -4px rgba(0, 0, 0, 0.75);
}
</style>
