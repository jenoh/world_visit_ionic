<template>
  <ion-page>
    <ion-header class="header">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button
            default-href="add-country"
            @click="back()"
          ></ion-back-button>
        </ion-buttons>
        <ion-title>WorldVisit</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-refresher slot="fixed" @ionRefresh="refresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>

      <ion-list>
        <CountryListItem
          v-for="country in countries"
          :key="country.alpha2Code"
          :country="country"
          @click="addDate(country.alpha2Code)"
        />
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import CountryListItem from "@/components/CountryListItem.vue";
import { defineComponent } from "vue";
import { getMessages } from "@/data/messages";
import axios from "axios";

export default defineComponent({
  name: "AddCountry",
  data() {
    return {
      countries: null as any,
    };
  },
  mounted() {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => (this.countries = response.data));
  },
  methods: {
    refresh: (ev: CustomEvent) => {
      setTimeout(() => {
        ev.detail.complete();
      }, 3000);
    },
    back() {
      this.$router.push("/home");
    },
    addDate(numericCode: any) {
      this.$router.push({ path: `/add-date/${numericCode}` });
    },
  },
  components: {
    IonContent,
    IonHeader,
    IonList,
    IonPage,
    IonRefresher,
    IonRefresherContent,
    IonTitle,
    IonToolbar,
    CountryListItem,
  },
});
</script>