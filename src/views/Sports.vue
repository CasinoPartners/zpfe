<template>
  <div class="sports-page">
      <div class="sports-container is-sports-theater" :class="`${ theaterMode === true ? 'is-theater' : ''}`">
        <div class="sports-iframe-container is-sports-theater" :class="`${ theaterMode === true ? 'is-theater' : ''}`">
          <div id='pgsb-con'></div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent } from "vue";
  import { mapGetters } from 'vuex'
  export default defineComponent({
    name: "Sports",
    computed: {
      ...mapGetters(['loggedIn', 'selectedCurrency']),
    },
    watch: {
      // selectedCurrency() {
      //   this.openSports();
      // },
      // loggedIn() {
      //   if(this.loggedIn == false) {
      //     this.launchUrl = '';
      //     this.showCurrencySelect = true;
      //   } else {
      //     this.openSports();
      //   }
      // }
    },
    data() {
      return {
        // launchUrl: '',
        // showCurrencySelect: true,
      }
    },
    async mounted() {
      if(this.loggedIn) {
        const response = await this.$securedAxios({
          method: "get",
          url: "/sports/get-session?currency=" + this.selectedCurrency,
        });
  
        if (response.status == 200) {
          this.createIFrame(response.data.token);
        }
      } else {
        this.createIFrame(null);
      }
    },
    methods: {
      createIFrame(token) {
        (function(x,y,z,a,b,c,d){
          x['PgSbObject'] = b;
          x[b]=x[b] || function() {
            (x[b].j=x[b].j||[]).push(arguments)
          },
          x[b].x = 1 * new Date();
          c=y.createElement(z),
          d=y.getElementsByTagName(z)[0];
          c.async = 1;
          c.src=a;
          d.parentNode.insertBefore(c,d)
        })(window,document,'script',('https://v3-test.pronetstatic.com/common/externaltrader/ifr-sol.js?v='+(Date.now())),'pgsb');
        pgsb('settings', {
          container: 'pgsb-con', // for html frame container
          origin: document.referrer, // parent site origin url
          sourceUrl: 'https://sharkcasino-sl.sporting-dev.com',
          params: {
            language: 'en',
            token,
          }
        });
      }
    }
  });
  </script>