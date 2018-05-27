<template>
  <div
    data-aos="fade-up"
    data-aos-easing="ease-in-sin"
  >
  <v-container fluid>
  <v-form ref="form" v-model="valid" lazy-validation action="https://formspree.io/ideasworthcoding@gmail.com"
          method="POST">
    <v-text-field
      v-model="name"
      name="name"
      :rules="nameRules"
      :counter="35"
      label="Name"
      required
    ></v-text-field>
    <v-text-field
      v-model="email"
      name="_replyto"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>
    <v-text-field
      v-model="message"
      name="message"
      label="Message"
      multi-line
      required
    ></v-text-field>
    <input type="hidden" name="_next" value="http://ideasworthcoding.com" />
    <input type="hidden" name="_subject" value="Ideas Worth Coding form submission" />
    <v-btn
      :disabled="!valid"
      type="submit"
      value="Submit"
    >
      submit
    </v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>
  </v-container>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "contact-us",
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 35) || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      message: '',
    }),

    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          axios.post('https://formspree.io/ideasworthcoding@gmail.com', {
            name: this.name,
            email: this.email,
            message: this.message,
          })
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>

<style scoped>
  .primary--text {
    color: #4487ee !important;
  }
</style>
