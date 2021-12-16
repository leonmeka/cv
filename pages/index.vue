<template>
  <div class="main">
    <cv-settings id="settings" class="settings"></cv-settings>
    <div
      id="cv"
      class="font-normal flex w-full bg-white"
      style="overflow: scroll; overflow-y: hidden;"
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
          content: 'claudiabdm',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content:
            'https://repository-images.githubusercontent.com/315020727/e23c6200-8110-11eb-87b8-e9e5757bd827',
        },
        {
          hid: 'og:author',
          property: 'og:author',
          content: 'Claudia Benito',
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
        {
          hid: 'twitter:creator',
          name: 'twitter:creator',
          content: '@claudiabdm',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.$t('title-tag') as string,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.$t('description') as string,
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content:
            'https://repository-images.githubusercontent.com/315020727/e23c6200-8110-11eb-87b8-e9e5757bd827',
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
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
