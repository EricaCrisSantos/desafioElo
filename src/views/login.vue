<template>
<v-app>
<v-container> 
 <v-card
  elevation="1"
  class="card"
> 
    <v-img src="../assets/imagem.png" alt="logoElo" class="imagem-logo"></v-img>
  
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    class="form"
  >
    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="Usuário *"
      required
    ></v-text-field>

    <v-text-field
      v-model="Senha"
      :rules="senhaRules"
      label="Senha *"
      required
      type="password"
    ></v-text-field>
    
    <v-text-field
      v-model="confirmarSenha"
      :rules="senhaRules"
      label="Confirmar de senha *"
      required
      type="password"
    ></v-text-field>

       <v-btn
      :disabled="!valid"
      class="button-primary"
      @click="validate"
    >
      Registrar
    </v-btn>
  </v-form>
</v-card>
</v-container>
</v-app>
</template>
<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Usuário é obrigatório',
        ],
      Senha: '',
      senhaRules: [
        v => !!v || 'Senha é obrigatória',
        v => !!(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(v))
        ],
      select: null,
    confirmarSenha: ''
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
        if (this.Senha!=this.confirmarSenha){
            alert('senhas devem ser Iguais')
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>

<style scoped>
.card {
width: 500px;
margin: 20px auto ;
padding: 10px;
}

.button-primary {
    background: #FFB31B !important;
    color: #000;
    height: 48px;
    width: 386px;
    border-radius: 5px;
    margin-top: 15px;
    display: flex;
    position: relative;
    left: 8%;
}

.imagem-logo {
    width: 70% !important;
    height: 70% !important;
    position: relative;
    top: 50%;
    left: 16%;
}

.form { 
    padding: 20px 10px; 
}
</style>