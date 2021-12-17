<template>
  <div class="main">
    <cv-settings id="settings" class="settings"></cv-settings>
    <div
      id="cv"
      class="font-normal flex w-full bg-white"
      style="overflow: scroll; overflow-y: hidden; padding: auto;"
    >
      <cv-preview-front></cv-preview-front>
      <cv-preview></cv-preview>
      <cv-preview-details></cv-preview-details>
      <cv-preview-cover-letter></cv-preview-cover-letter>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CvSettings from '@/components/CvSettings.vue';
import CvPreviewFront from '@/components/CvPreviewFront.vue';
import CvPreview from '@/components/CvPreview.vue';
import CvPreviewDetails from '@/components/CvPreviewDetails.vue';
import CvPreviewCoverLetter from '@/components/CvPreviewCoverLetter.vue';

export default Vue.extend({
  name: 'Index',
  components: {
    CvSettings,
    CvPreview,
    CvPreviewDetails,
    CvPreviewFront,
    CvPreviewCoverLetter,
  },

  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      title: this.$t('title-tag') as string,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('description') as string,
        },
        {
          hid: 'author',
          name: 'author',
          content: 'leonmeka',
        },
        {
          hid: 'og:author',
          property: 'og:author',
          content: 'Leon Meka',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.$t('title-tag') as string,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$t('description') as string,
        },
      ],
    };
  },
  setup() {},
});
</script>
<style lang="postcss" scoped>
@font-face {
  font-family: 'signature';
  src: url(~assets/signature.ttf) format('truetype');
}

@media screen and (min-width: 1024px) {
  .main {
    @apply flex h-full;
  }
  .settings {
    width: 600px !important;
    overflow-y: auto;
  }
}
</style>
