<template>
  <v-container class="mt-5 garantia-container">
    <v-layout row>
      <v-flex cols="12">
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

        <v-img
          class="text-center mx-auto  mb-5"
          alt
          contain
          src="@/assets/img/banner-garantia.jpeg"
          width="780"
          height="300px"
        />
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
      </v-flex>
      <v-flex class="mb-5">
        <fieldset class="fieldset">
          <p>
            *En algunas circunstancias el correo con la garantía extendida puede llegar a la bandeja
            de correo no deseado, SPAM, por lo que le sugerimos revisar su correo y en caso marcarlo
            como seguro para que pueda descargar correctamente la extensión de garantía.
          </p>
        </fieldset>
      </v-flex>
      <v-flex class="mt-5">
        <v-form :disabled="loading" ref="form" lazy-validation>
          <h3>Formulario</h3>
          <v-row class="px-1">
            <v-col cols="6">
              <v-text-field
                v-model="form.nombre"
                :rules="[rules.required]"
                label="Nombre del propietario*"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="form.email"
                :rules="[rules.required, rules.email]"
                label="E-mail*"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="form.nomHerr"
                :rules="[rules.required]"
                label="Nombre de la herramienta*"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="form.modHerr"
                :rules="[rules.required]"
                label="Modelo herramienta*"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="form.numSerie"
                :rules="[rules.required]"
                label="Numero de serie*"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-select
                v-model="form.state"
                :loading="estadosItems.length === 0"
                :items="estadosItems"
                :rules="[rules.required]"
                label=" Estado*"
              ></v-select>
            </v-col>
            <v-col cols="6">
              <v-autocomplete
                :disabled="!form.state"
                v-model="form.nomDis"
                :items="distribuidoresItems"
                :loading="loadingDistribuidores"
                :rules="[rules.required]"
                label=" Distribuidor Autorizado*"
                hint="En caso de no encontrar el nombre del Distribuidor, selecciona OTRO, al final de la lista."
                persistent-hint
                return-object
              ></v-autocomplete>
            </v-col>

            <v-col cols="6" v-if="isCustomDis">
              <v-text-field
                v-model="form.customDisName"
                label="Nombre del distribuidor"
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>

            <v-col cols="6">
              <v-text-field
                v-model="form.dirDis"
                label="Dirección del distribuidor"
                :disabled="!isCustomDis"
                :rules="isCustomDis ? [rules.required] : []"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="form.numFac"
                label="# de factura o comprobante"
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>

            <!--  <v-col cols="6">
              <v-text-field
                v-model="form.numFac"
                label="# de factura o comprobante"
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>
 -->

            <v-col cols="12" v-if="isCustomDis">
              <v-file-input v-model="imageFile" label="Comprobante de pago"></v-file-input>
            </v-col>

            <v-col cols="12" class="text-center">
              <VueRecaptcha
                class="m-4"
                :loadRecaptchaScript="true"
                sitekey="6Lecw7EZAAAAAMPwsP721JD5O_lO1zbEYqd9RJEe"
                @verify="captcha = true"
              ></VueRecaptcha>
            </v-col>

            <v-col cols="12" class="text-center">
              <v-btn :disabled="!captcha" :loading="loading" color="primary" @click="save">
                Guardar
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha';

import { rules } from '@/helpers/form';
import { mapActions } from 'vuex';
export default {
  components: {
    VueRecaptcha,
  },
  data() {
    return {
      rules,
      loading: false,
      estados: [],
      distribuidores: [],
      loadingDistribuidores: false,
      form: {},
      captcha: false,
      imageFile: null,
    };
  },
  async mounted() {
    try {
      const res = await this.axios.get('/getEstados.php');
      this.estados = res.data.estados;
    } catch (error) {
      console.log(error);
    }
  },
  computed: {
    estadosItems() {
      if (!this.estados) return [];
      return this.estados.map(e => ({
        text: e.Estado,
        value: e.idEstado,
      }));
    },
    distribuidoresItems() {
      const newArr = this.distribuidores.map(e => ({
        text: e.nombreDistribuidor,
        value: e.idDistribuidor,
        direccion: e.direccionDistribuidor,
      }));
      newArr.push({
        text: 'Otro',
        value: 'OTRO',
      });
      return newArr;
    },
    isCustomDis() {
      if (this.form.nomDis && this.form.nomDis.value === 'OTRO') {
        return true;
      }
      return false;
    },
  },
  watch: {
    async 'form.state'(id) {
      if (id) {
        this.loadingDistribuidores = true;
        try {
          const res = await this.axios.post('/getDistribuidorPorEstado.php', { idEstado: id });
          this.distribuidores = res.data.distribuidores;
        } catch (error) {
          console.log(error);
        } finally {
          this.loadingDistribuidores = false;
        }
      }
    },
    'form.nomDis'(item) {
      if (item) {
        if (item.value === 'OTRO') {
          console.log('otro');
        } else {
          this.form.dirDis = item.direccion;
        }
      }
    },
  },
  methods: {
    ...mapActions('ui', ['showToast']),
    async save() {
      const isValid = this.$refs.form.validate();
      if (!isValid) {
        return;
      }
      this.loading = true;
      const formData = new FormData();
      formData.append('nombre', this.form.nombre);
      formData.append('email', this.form.email);
      formData.append('modHerr', this.form.modHerr);
      formData.append('nomHerr', this.form.nomHerr);
      formData.append('numFac', this.form.numFac);
      formData.append('numSerie', this.form.numSerie);
      formData.append('dirDis', this.form.dirDis);
      if (this.form.nomDis) {
        if (this.isCustomDis) {
          const nombreDistribuidor = this.form.customDisName;
          formData.append('nomDis', nombreDistribuidor);
          formData.append('image', this.imageFile);
        } else if (this.form.nomDis.text) {
          formData.append('nomDis', this.form.nomDis.text);
        }
      }
      try {
        const response = await this.axios.post('/generarPdf.php', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        this.showToast({
          text:
            'Se te ha enviado una copia de la garantia a tu correo electronico, revisa tu bandeja de entrada',
          time: 60000,
          color: 'success',
        });
        if (response) {
          this.$refs.form.reset();

          try {
            const byteCharacters = atob(response.data);
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
              byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            const file = new Blob([byteArray], {
              type: 'application/pdf;base64',
            });
            const fileURL = URL.createObjectURL(file);
            window.open(fileURL);
          } catch (error) {
            console.log(error);
          }
        }
      } catch (error) {
        console.log(error);
        this.showToast({
          text: 'Ocurrio un error al realizar la garantia',
          time: 5000,
          color: 'error',
        });
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss">
.garantia-container {
  font-size: 1.3rem;
}
</style>
