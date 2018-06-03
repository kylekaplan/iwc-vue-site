<template>
  <v-container fluid class="footer-wrapper">
    <h6>&copy; 2018</h6>
    <h6>Photo by Clemente Ruiz Abenza on Unsplash</h6>
    <a href="https://www.linkedin.com/company/ideas-worth-coding/" target="_blank">
      <linkedin-box-icon title="Find us on LinkedIn!" />
    </a>
  </v-container>
</template>

<script>
  import LinkedinBoxIcon from "vue-material-design-icons/linkedin-box";
  export default {
    components: {
      LinkedinBoxIcon,
    },
    name: "footer"
  }
</script>

<style scoped>
  .footer-wrapper {
    background: #eeeeee;
    /*box-shadow: 0 -5px 6px #00000047*/
    /*height: 450px;*/
  }
</style>
