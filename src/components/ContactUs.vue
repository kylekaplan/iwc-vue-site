<template>
  <div class="about-us">
  <v-container grid-list-md text-xs-center>
    <p class="my-title">Let's Build Something</p>
  <v-form ref="form" v-model="valid" lazy-validation action="https://formspree.io/ideasworthcoding@gmail.com"
          method="POST" class="form" data-aos="slide-up" data-aos-easing="ease-in-sin">
    <div class="form-header" >
      <p>Contact Us</p>
      <hr class="style-six">
    </div>
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
    <v-btn @click="clear" >clear</v-btn>
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
  .about-us {
    background: sienna;
    background: #fd6d28;
  }
  .primary--text {
    color: #4487ee !important;
  }
  .my-title {
    top: 75px;
    text-align: center;
    font-size: 43px;
    font-weight: bold;
    position: relative;
    color: black;
  }
  .form {
    width: 70%;
    margin: 0 auto;
    margin-top: 110px;
    margin-bottom: 50px;
    padding: 12px;
    background: #eeeeee;
    text-align: left;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .form-header {
    margin: -10px;
    height: 50px;
    background: #f5f5f5;
    margin-bottom: 10px;
  }
  .form-header p {
    font-size: 22px;
    font-weight: bold;
    padding: 10px;
    /*color: brown;*/
    /*color: sienna;*/
    color: #514753;
  }
  hr.style-six {
    position: relative;
    bottom: 18px;
    border: 0;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }
</style>
