<template>
  <main>
    <section class="flex flex-col h-screen pt-10 pd-20">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1"></div>
        <div class="col-start-2 col-span-5">
          <headline />
          <job-search-form />
        </div>
        <div class="col-start-7 col-span-5 self-center justify-self-center">
          <img class="w-80 h-80 object-contain" src="vue_logo.png" />
        </div>
        <div class="col-start-12 col-span-1"></div>
      </div>
    </section>
  </main>
</template>

<script>
import Headline from "@/components/JobSearch/Headline.vue";
import JobSearchForm from "@/components/JobSearch/JobSearchForm.vue";

export default {
  name: "Hero",
  components: {
    Headline,
    JobSearchForm,
  },
};
</script>
