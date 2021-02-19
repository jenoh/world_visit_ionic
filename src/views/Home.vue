<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-refresher slot="fixed" @ionRefresh="refresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>
      <ion-header class="header">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button></ion-back-button>
          </ion-buttons>
          <ion-title>WorldVisit</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-list>
        <!-- {{countries}} -->
        <CountryListItem
          v-for="country in countries"
          :key="country.alpha2Code"
          :country="country"
        />
      </ion-list>
    </ion-content>
    <ion-footer>
      <ion-button expand="full" @click="redirect()">Ajouter un pays</ion-button>
    </ion-footer>
  </ion-page>
</template>


<script lang="ts">
import CountryListItem from "@/components/CountryListItem.vue";
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
import MessageListItem from "@/components/MessageListItem.vue";
import { computed, defineComponent } from "vue";
import { getMessages } from "@/data/messages";
import { useStore } from "vuex";

export default defineComponent({
  name: "Home",
  setup() {
    const store = useStore();
    return {
      countries: computed(() => store.state.countries),
    };
  },
  methods: {
    redirect() {
      this.$router.push("/add-country");
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