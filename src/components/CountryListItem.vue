<template>
  <ion-item class="list-item">
    <div slot="start"></div>
    <ion-label class="ion-text-wrap">
      <ion-row class="ion-justify-content-start">
        <ion-col size="3">
          <div>
            <ion-thumbnail item-left> <IonImg v-if="country.alpha2Code" :src="`http://www.geognos.com/api/en/countries/flag/${country.alpha2Code}.png`"/> </ion-thumbnail>
          </div>
        </ion-col>
        <ion-col size="6">
          <div>
            <h2>
              {{ country.name }}
              <span class="date">
          <ion-icon :icon="chevronForward" size="small" v-if="isIos()"></ion-icon>
        </span>
            </h2>
            <h3>Capitale : {{ country.capital }}</h3>
            <h3>Continent : {{ country.region }}</h3>
            <h3 v-if="country.date">Date :  {{ country.date }}</h3>
          </div>
        </ion-col>
      </ion-row>
    </ion-label>
  </ion-item>
</template>

<script lang="ts">
import { IonIcon, IonItem, IonLabel, IonImg } from "@ionic/vue";
import { chevronForward } from "ionicons/icons";
import { defineComponent } from "vue";

export default defineComponent({
  name: "CountryListItem",
  components: {
    IonIcon,
    IonItem,
    IonLabel,
    IonImg
  },
  props: {
    country: Object,
  },
  methods: {
    isIos: () => {
      const win = window as any;
      return win && win.Ionic && win.Ionic.mode === "ios";
    },
    // del(alpha2Code: any) {
    //   this.$store.dispatch("removeCountry", alpha2Code);
    // },
  },
  data() {
    return { chevronForward };
  },
});
</script>

<style scoped>

.list-item {
  --padding-start: 0;
  --inner-padding-end: 0;
}

.list-item ion-label {
  margin-top: 12px;
  margin-bottom: 12px;
}

.list-item h2 {
  font-weight: 600;
  margin: 0;
}

.list-item p {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 95%;
}

.list-item .date {
  float: right;
  align-items: center;
  display: flex;
}

.list-item ion-icon {
  color: #c9c9ca;
}

.list-item ion-note {
  font-size: 15px;
  margin-right: 8px;
  font-weight: normal;
}

.list-item ion-note.md {
  margin-right: 14px;
}

.list-item .dot {
  display: block;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  align-self: start;
  margin: 16px 10px 16px 16px;
}

.list-item .dot-unread {
  background: var(--ion-color-primary);
}
</style>