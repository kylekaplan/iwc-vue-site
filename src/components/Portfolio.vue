<template>
  <v-container grid-list-xl text-xs-center>
    <h1 class="black--text">Our Work</h1>
    <v-layout row wrap align-center>
      <v-flex v-for="item in items" xs12 sm6 lg6 xl3>
        <v-card
          width="100%"
          style="max-width: 450px; margin: 0 auto;"

        >
          <v-card-media
            src="/static/img/portfolio/edibullFINAL.png"
            height="256px"
            contain="true"
            style="background: #0a684c"
          >
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <div class="headline">{{item.name}}</div>
              <span class="grey--text">1,000 miles of wonder</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat>Share</v-btn>
            <v-btn flat color="purple">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: "portfolio",
    data () {
      return {
        items: [
          {
            name: 'EdiBull',
            logoColor: '#0a684c',
            description: '1,000 miles of wonder'
          },
          {
            name: 'Availa-Bull',
            logoColor: '#0a684c',
            description: '1,000 miles of wonder'
          },
          {
            name: 'USF PAMSA',
            logoColor: '#0a684c',
            description: '1,000 miles of wonder'
          },
          {
            name: 'Pie Guy',
            logoColor: '#0a684c',
            description: '1,000 miles of wonder'
          },
        ],
      }
    },
  }
</script>

<style scoped>

</style>
