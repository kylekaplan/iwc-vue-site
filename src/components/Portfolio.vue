<template>
  <v-container grid-list-md text-xs-center>
    <h1 class="black--text">Our Work</h1>
    <v-layout row wrap>
      <v-flex v-for="i in 4" :key="`6${i}`" xs6>
        <v-card
          width="75%">
          <v-card-media
            src="/static/img/portfolio/edibullFINAL.png"
            height="200px"
          >
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <div class="headline">Top western road trips</div>
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
    name: "portfolio"
  }
</script>

<style scoped>

</style>
