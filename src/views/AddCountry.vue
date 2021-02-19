<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-title>Inbox</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <ion-refresher slot="fixed" @ionRefresh="refresh($event)">
                <ion-refresher-content></ion-refresher-content>
            </ion-refresher>

            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Inbox</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-list>
                <CountryListItem v-for="country in countries" :key="country.alpha2Code" :country="country" />
            </ion-list>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
    import { IonContent, IonHeader, IonList, IonPage, IonRefresher, IonRefresherContent, IonTitle, IonToolbar } from '@ionic/vue';
    import CountryListItem from '@/components/CountryListItem.vue';
    import { defineComponent } from 'vue';
    import axios from 'axios';

    export default defineComponent({
        name: 'AddCountry',
        data() {
            return {
                countries: null as any,
                countryName: null as any,
            }
        },
        mounted () {
            axios
                .get('https://restcountries.eu/rest/v2/all')
                .then(response => (this.countries = response.data))
        },
        methods: {
            refresh: (ev: CustomEvent) => {
                setTimeout(() => {
                    ev.detail.complete();
                }, 3000);
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
            CountryListItem
        },
    });
</script>