<template>
  <v-container fill-height>
    <v-layout class="h-100" column justify-center align-center>
      <v-flex class="login-content" xs6>
        <v-card class="login-card">
          <v-container grid-list-md>
            <div class="text-center">
              <p class="headline mt-5">
                Iniciar sesión
              </p>
            </div>
            <v-form ref="form" class="signup-form" lazy-validation>
              <v-text-field
                v-model="email"
                class="mb-3"
                :rules="[rules.required, rules.email]"
                label="Email"
              ></v-text-field>
              <v-text-field
                v-model="password"
                class="mb-3"
                :rules="[rules.required]"
                type="password"
                label="Password"
              ></v-text-field>

              <v-row class="mt-4">
                <v-col cols="12 text-center">
                  <v-btn
                    class="ma-2"
                    :loading="loading"
                    :disabled="loading"
                    color="info"
                    @click="handleSubmit"
                  >
                    Iniciar sesión
                    <template v-slot:loader>
                      <span class="custom-loader">
                        <v-icon light>mdi-cached</v-icon>
                      </span>
                    </template>
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { rules } from '@/helpers/form';

export default {
  data() {
    return {
      rules,
      email: '',
      password: '',
      loading: false,
    };
  },
  methods: {
    handleSubmit() {
      const isValid = this.$refs.form.validate();
      if (!isValid) {
        return;
      }
      this.$store.dispatch('auth/login', { email: this.email, password: this.password });
    },
  },
};
</script>

<style>
.login-content {
  width: 90%;
}

@media (min-width: 961px) {
  .login-content {
    width: 40%;
  }
}

.login-card {
  border-radius: 13px !important;
  box-shadow: 0 0 30px -4px rgb(0 0 0 / 75%) !important;
  padding: 30px 30px 0 !important;
}
</style>
