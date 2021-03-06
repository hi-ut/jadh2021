Vue.component("Layout", {
  data: function () {
    return {
      fab: false,
      drawer: false,
      mobileFlag: false,
    };
  },
  methods: {
    toTop() {
      // @ts-ignore
      this.$vuetify.goTo(0);
    },
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },

    setMobileFlag() {
      const bp = this.$vuetify.breakpoint.name;
      let mobileFlag = false;
      if (bp === "xs" || bp === "sm") {
        mobileFlag = true;
      } else {
        this.drawer = true;
      }

      this.mobileFlag = mobileFlag;
    },
  },
  computed: {
    bp() {
      return this.$vuetify.breakpoint.name;
    },
  },

  created() {
    this.setMobileFlag();
  },

  watch: {
    bp: function () {
      this.setMobileFlag();
    },
  },
  template: `
  <v-app>
  <v-navigation-drawer v-model="drawer" app>
    <v-list>
      <v-list-item link exact href="index.html">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-group
        sub-group
        no-action
        :value="true"
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          link
          href="cfp.html"
        >
          <v-list-item-title v-text="'CFP'" />
        </v-list-item>

        <v-list-item
          link
          href="local-organizers.html"
        >
          <v-list-item-content>
            <v-list-item-title v-text="'Local Organizers'" />
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          link
          href="program-committee.html"
        >
          <v-list-item-content>
            <v-list-item-title v-text="'Program Committee'" />
          </v-list-item-content>
        </v-list-item>
      </v-list-group>

      <v-list-item link exact href="contact.html">
        <v-list-item-icon>
          <v-icon>mdi-contacts</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Contact</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-app-bar app>
    <v-app-bar-nav-icon
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>

    <v-toolbar-title>
      <a href="index.html" style="color: inherit; text-decoration: inherit">
        {{ 'JADH2021' }}
      </a>
    </v-toolbar-title>
  </v-app-bar>

  <v-main>
  <slot />

  <v-container class="mt-10">
  <h2>Contact</h2>
Please direct all queries to the <a href="https://forms.gle/V5o4XcFExn9siKLQ7">Google Forms</a>.
</v-container>
  
  </v-main>

  

  <v-footer dark class="mt-15">
    <v-container class="text-center my-5">
      <p class="my-0">JADH2021 Organizers</p>
    </v-container>
  </v-footer>

  <v-btn
    v-show="fab"
    v-scroll="onScroll"
    fab
    dark
    fixed
    bottom
    right
    large
    color="error"
    @click="toTop"
  >
    <v-icon>mdi-arrow-up</v-icon>
  </v-btn>
</v-app>
     
      `,
});
