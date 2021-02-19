<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header class="header">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button
              default-href="add-country"
              @click="redirect()"
            ></ion-back-button>
          </ion-buttons>
          <ion-title>WorldVisit</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-item>
        <!-- <ion-label position="floating">MM/DD/YYYY</ion-label> -->
        <ion-datetime
          display-format="MM/DD/YYYY"
          min="1994-03-14"
          max="2045-12-09"
          v-model="actualDate"
        ></ion-datetime>
      </ion-item>
    </ion-content>
    <ion-footer>
      <ion-button expand="full" @click="addCountry()"
        >Ajouter la date</ion-button
      >
    </ion-footer>
  </ion-page>
</template>


<script lang="ts">
// import CountryListItem from "@/components/CountryListItem.vue";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonDatetime,
} from "@ionic/vue";
import { defineComponent } from "vue";
// import { useStore } from "vuex";

export default defineComponent({
  name: "AddDate",
  //   setup() {
  //     const store = useStore();
  //   },
  data() {
    return {
      numericCode: this.$route.params.numericCode,
      actualDate: null as any,
    };
  },
  methods: {
    addCountry() {
      const array = [this.$route.params.numericCode, this.actualDate];
      this.$store.dispatch("setCountry", array);
      this.$router.push("/home");
    },
  },
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonDatetime,
  },
});
</script>