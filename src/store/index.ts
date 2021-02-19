import { createStore } from "vuex";
import axios from "axios";

export const store = createStore({
    state() {
        return {
            countries: []
        };
    },
    actions: {
        async setCountry({ commit }, alpha2Code) {
            const allCountries = await axios.get("https://restcountries.eu/rest/v2/all")
            for (const c of allCountries.data) {
                if (c.alpha2Code == alpha2Code[0]) {
                    c.date = alpha2Code[1]
                    commit("set", c);
                    commit("sync");
                }
            }
        },
        removeCountry({ commit }, alpha2Code) {
            commit("remove", alpha2Code);
            commit("sync");
        },
    },

    mutations: {
        set(state: any, country) {
            state.countries.push(country);
        },
        remove(state: any, alpha2Code) {
            for (const c of state.countries) {
                if (c.alpha2Code == alpha2Code) {
                    state.countries.splice(state.countries.indexOf(c), 1)
                }
            }
        },
        sync(state: any) {
            localStorage.countries = JSON.stringify(state.countries);
        }
    }
});
