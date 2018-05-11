<template>
  <v-app>
    <v-toolbar
      app
      :clipped-left="clipped"
      dense
      clipped-left
    >
      <v-toolbar-items>
        <img src="@/assets/logo.png" style='height: 35px; width: 35px !important; margin-top: 5px;'>
      </v-toolbar-items>
      <v-toolbar-title v-text=title></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      right: true,
      title: 'Ideas Worth Coding'
    }
  },
  name: 'App'
}
</script>
