<template>
  <section>
    <h2>{{ experience.name }}</h2>
    <img
      :src="getImage(experience.image ?? 'waikiki-beach.jpg')"
      :alt="experience.name"
    />
    <p>{{ experience.description }}</p>
    <router-link
      :to="{
        name: 'destination.show',
        params: {
          id: id,
          slug: slug,
        },
      }"
    >
      <button class="go-back btn" role="link">Go back</button>
    </router-link>
  </section>
</template>
<script>
import sourceData from "@/data.json";

export default {
  props: {
    id: {
      required: true,
      type: Number,
    },
    slug: {
      required: true,
      type: String,
    },
    experienceSlug: {
      required: true,
      type: String,
    },
  },
  methods: {
    getImage(image) {
      const imagePath = "/images/";
      return imagePath + image;
    },
  },
  computed: {
    experience() {
      const destination = sourceData.destinations.find(
        (destinationItem) =>
          destinationItem.slug === this.slug || destinationItem.id === this.id
      );
      return destination.experiences.find(
        (experienceItem) => experienceItem.slug === this.experienceSlug
      );
    },
  },
};
</script>
