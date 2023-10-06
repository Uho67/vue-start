<template>
  <div v-if="destination">
    <section>
      <h2>{{ destination.name }}</h2>
      <a href=""></a>
      <img
        :src="getImage(destination.image ?? 'waikiki-beach.jpg')"
        :alt="destination.name"
      />
      <p>{{ destination.description }}</p>
    </section>
    <section class="experiences">
      <div class="cards">
        <router-link
          v-for="experience in destination.experiences"
          :key="experience.slug"
          :to="{
            name: 'experience.show',
            params: {
              id: destination.id,
              slug: destination.slug,
              experienceSlug: experience.slug,
            },
          }"
        >
          <h3>{{ experience.name }}</h3>
          <img :src="getImage(experience.image)" :alt="experience.name" />
        </router-link>
      </div>
    </section>
    <router-view />
  </div>
</template>
<script>
import axios from "axios";
import sourceData from "@/data.json";

export default {
  data() {
    return {
      // destination: {},
    };
  },
  props: {
    id: {
      type: Number,
    },
    slug: {
      type: String,
      required: false,
      default: "",
    },
  },
  computed: {
    destination() {
      return sourceData.destinations.find(
        (destinationItem) =>
          destinationItem.slug === this.slug || destinationItem.id === this.id
      );
    },
  },
  methods: {
    getImage(image) {
      const imagePath = "/images/";
      return imagePath + image;
    },
    async updateDestinationData() {
      const destinationResponse = await axios.get(
        `https://travel-dummy-api.netlify.app/${this.$route.params.slug}.json`
      );
      this.destination = destinationResponse.data;
    },
  },
  // created() {
  //   this.updateDestinationData();
  //   // this.$watch(() => this.$route.params.slug, this.updateDestinationData);
  // },
};
</script>
