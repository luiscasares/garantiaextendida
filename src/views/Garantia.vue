<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2 class="mb-3 text-center">GARANTÍA MAKITA EXTENDIDA 6 MESES</h2>
        <p>
          Cada herramienta Makita está cuidadosamente inspeccionada y probada antes salir de
          nuestras fábricas, no obstante se garantiza por el periodo de UN AÑO a partir de la fecha
          de compra, contra cualquier defecto de fábrica así como en materiales y mano de obra.
        </p>
        <p>
          De surgir algún problema durante este periodo, puede llevar su herramienta a uno de los
          Centros de
          <a href="#" target="_blank">Servicios Autorizados Makita</a>. De resultar algún problema
          de funcionamiento ó componentes, Makita México, S.A. de C.V., reemplazará el producto de
          ser necesario o cualquier pieza defectuosa, incluyendo la mano de obra, así como los
          gastos de transportación del producto dentro de la red de servicio de Makita.
        </p>

        <img alt src width="780" height="300px" />
        <p>
          El registro de su herramienta por medio de este formulario le da derecho a un período de
          GARANTIA EXTENDIDA DE 6 MESES adicionales al año de garantía estipulado en su PÓLIZA y es
          aplicable bajo los siguientes términos:
        </p>
        <ul>
          <li>
            Es necesario que al momento de la compra de la herramienta se realice el REGISTRO,
            cuando aún está VIGENTE LA GARANTIA DE UN AÑO.
          </li>
          <li>
            Se puede hacer uso de los servicios de MANTENIMIENTO Y REPARACIÓN en cualquiera de
            nuestros Centros de Servicios Autorizados Makita dentro de la República Mexicana.
          </li>
          <li>
            Es indispensable llevar su comprobante de registro de Garantía Extendida de 6 Meses y
            PÓLIZA o FACTURA para hacer uso de los servicios de mantenimiento y reparación.
          </li>
        </ul>

        <h4>Pasos para el registro de cada herramienta</h4>
        <ol>
          <li>
            Ingrese sus datos y verifique que estén correctos, en especial su correo y el número de
            serie de su herramienta.
          </li>
          <li>
            A continuación, verifique que le ha recibido en su correo el COMPROBANTE DE REGISTRO en
            formato PDF, el cual puede imprimir.
          </li>
        </ol>
      </v-col>
      <b-col class="mb-5">
        <div class="header">
          <b-row>
            <b-col cols="12">
              <fieldset class="fieldset">
                <p>
                  *En algunas circunstancias el correo con la garantía extendida puede llegar a la
                  bandeja de correo no deseado, SPAM, por lo que le sugerimos revisar su correo y en
                  caso marcarlo como seguro para que pueda descargar correctamente la extensión de
                  garantía.
                </p>
              </fieldset>
            </b-col>
          </b-row>
        </div>
        <!-- <div class="content">
              <Form
                ref="form"
                v-if="formData"
                v-model="formData"
                class="dashboard-form"
                :disabled="loading"
                :config="garantiaFormConfig"
                @submit="onSubmit()"
                @validRecaptcha="validRecaptcha"
                @onFileChange="onFileChange"
              >
                <template slot="titleText" slot-scope="props">
                <h4 v-if="props.fieldTitleText" class="title my-4 ml-2">{{ props.fieldTitleText }}</h4>
                </template>
              </Form>
              <Loader v-if="loading" color="#66605a" class="mt-4" />
            </div> -->
      </b-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>
