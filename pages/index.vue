<template>
  <div class="holder">
    <navbar></navbar>
    <div class="main">
      <cv-settings id="settings"></cv-settings>
      <div id="cv" class="canvas">
        <cv-preview-front id="front"></cv-preview-front>
        <cv-preview id="overview"></cv-preview>
        <cv-preview-details id="detail"></cv-preview-details>
        <cv-preview-cover-letter id="coverletter"></cv-preview-cover-letter>
      </div>
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
import Navbar from '@/components/Navbar.vue';

export default Vue.extend({
  name: 'Index',
  components: {
    CvSettings,
    CvPreview,
    CvPreviewDetails,
    CvPreviewFront,
    CvPreviewCoverLetter,
    Navbar,
  },

  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      title: this.$t('title-tag') as string,
      meta: [
        {
          hid: 'viewport',
          name: 'viewport',
          content: 'width=device-width,initial-scale=1,user-scalable=no',
        },
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
  mounted() {
    function adjustZoom() {
      const canvas = document.getElementById('cv')!;

      var documentWidth = canvas.offsetWidth;
      var documentHeight = canvas.offsetHeight;

      // 1cm = 37.795276px;
      // 21cm width + 1cm of margins each sides
      // 29.7cm height + 1cm of margins each sides
      var zoomWidth = documentWidth / 23;
      var zoomHeight = documentHeight / (31.7 * (1.05 * 37.795276));
      var zoomLevel = Math.min(zoomWidth, zoomHeight);
      var margin = -2 * zoomLevel;

      const front = document.getElementById('front')!;
      const overview = document.getElementById('overview')!;
      const detail = document.getElementById('detail')!;
      const coverletter = document.getElementById('coverletter')!;

      // stop zooming when book fits page
      if (zoomLevel >= 1) return;

      front.style.transform = 'scale(' + zoomLevel + ')';
      front.style.margin = margin + 'cm auto';
      overview.style.transform = 'scale(' + zoomLevel + ')';
      overview.style.margin = margin + 'cm auto';
      detail.style.transform = 'scale(' + zoomLevel + ')';
      detail.style.margin = margin + 'cm auto';
      coverletter.style.transform = 'scale(' + zoomLevel + ')';
      coverletter.style.margin = margin + 'cm auto';
    }

    adjustZoom();
    window.addEventListener('resize', adjustZoom);
  },
});
</script>

<style lang="postcss" scoped>
@font-face {
  font-family: 'signature';
  src: url(~assets/signature.ttf) format('truetype');
}

.holder {
  padding: 20px;
}

.main {
  background-color: rgba(238, 242, 245, 1) !important;
}

#settings {
  border-radius: 0 0 10px 10px;
  -webkit-box-shadow: 0px 0px 30px 2px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 0px 30px 2px rgba(0, 0, 0, 0.15);
}

#nav {
  width: 100%;
  border-radius: 10px 10px 0 0;
  -webkit-box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.15);
}

.canvas {
  display: none;
}

@media screen and (min-width: 1024px) {
  body,
  html {
    overflow: hidden !important;
  }

  .holder {
    display: flex;
    overflow: hidden;
    padding: 20px 0 0 0;
  }

  .main {
    @apply flex w-full;
    background-color: rgba(238, 242, 245, 1) !important;
    position: absolute;
    top: 104px;
    bottom: 0px;
    padding: 0px 20px 0 20px;
  }

  #settings {
    width: 45% !important;
    display: grid;
    border-radius: 10px 10px 0 0;
    -webkit-box-shadow: 0px 0px 30px 2px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 0px 30px 2px rgba(0, 0, 0, 0.15);
  }

  #nav {
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.15);
    margin: 0px 20px 20px 20px;
  }

  .canvas {
    display: block;
  }
}

.canvas {
  width: 100%;
  height: 100%;
  overflow: scroll;
  align-items: center;
}

.page {
  background-color: rgba(238, 242, 245, 1);
  transform-origin: top center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  margin-left: auto;
  margin-right: auto;
}

.cv {
  margin: auto;
  @apply flex text-gray-800 shadow-lg text-sm font-normal;
  width: 21cm;
  height: 29.69cm;
  min-width: 21cm;
  min-height: 29.69cm;
  max-width: 21cm;
  max-height: 29.69cm;
}
</style>
