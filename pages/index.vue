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

      <div class="toast">
        <div class="bg-white shadow-lg toast-text text-sm">
          <div class="zoom-container bg-gray-800">
            <button
              class="flex-shrink-0 flex bg-gray-500 text-black px-4 py-2 rounded-md"
              type="button"
              @click="
                updateZoomValue(-0.04);
                adjustZoom();
              "
            >
              <b>+</b>
            </button>
            <button
              class="flex-shrink-0 flex bg-gray-500 text-black px-4 py-2 rounded-md"
              type="button"
              @click="
                updateZoomValue(0.04);
                adjustZoom();
              "
            >
              <b>–</b>
            </button>
          </div>

          <div>
            <button
              class="flex-shrink-0 flex bg-gray-800 text-white px-3 py-2 rounded-md text-sm font-medium"
              type="button"
              data-dropdown-toggle="dropdown"
            >
              {{ $t('cv-settings') }}
              <svg
                class="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            <div
              class="hidden bg-white text-base z-20 list-none divide-y divide-gray-100 rounded shadow my-4"
              id="dropdown"
            >
              <ul class="py-1" aria-labelledby="dropdown">
                <li>
                  <label
                    href="#"
                    class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                    >{{ $t('upload-cv') }} ({{ $i18n.locale }})
                    <input
                      type="file"
                      accept=".json"
                      class="hidden"
                      @change="uploadCV"
                    />
                  </label>
                </li>
                <li>
                  <a
                    :href="formSettingsHref"
                    rel="noopener"
                    :download="`CV_${formSettings.name}_${formSettings.lastName}_${$i18n.locale}.json`"
                    class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                    >{{ $t('download-cv-settings') }} ({{ $i18n.locale }})</a
                  >
                </li>
                <li>
                  <a
                    @click="resetForm"
                    class="text-sm hover:bg-red-100 text-red-700 block px-4 py-2"
                    >{{ $t('clear-settings') }}</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
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
import { useCvState } from '~/data/useCvState';
import { computed } from '@nuxtjs/composition-api';

let zoomValue = 1.05;

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
  setup() {
    const { formSettings, uploadCV, resetForm, setUpCvSettings } = useCvState();

    const formSettingsHref = computed(function getFormSettingsHref() {
      return `data:text/json;charset=utf-8,${encodeURIComponent(
        JSON.stringify({ formSettings: formSettings.value })
      )}`;
    });

    function updateZoomValue(value) {
      zoomValue += value;
    }

    function adjustZoom() {
      const canvas = document.getElementById('cv')!;

      var documentWidth = canvas.offsetWidth;
      var documentHeight = canvas.offsetHeight;

      // 1cm = 37.795276px;
      // 21cm width + 1cm of margins each sides
      // 29.7cm height + 1cm of margins each sides
      var zoomWidth = documentWidth / 23;
      var zoomHeight = documentHeight / (31.7 * (zoomValue * 37.795276));
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

    return {
      uploadCV,
      formSettings,
      formSettingsHref,
      resetForm,
      setUpCvSettings,
      updateZoomValue,
      adjustZoom,
    };
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
          hid: 'og:image',
          property: 'og:image',
          content: '/ad-banner.png',
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
        {
          hid: 'twitter:card',
          property: 'twitter:card',
          content: 'summary_large_image',
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
      var zoomHeight = documentHeight / (31.7 * (zoomValue * 37.795276));
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

.toast {
  display: none;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  margin: 20px 20px;
}

.toast-text {
  display: flex;
  border-radius: 10px;
  float: right;
  padding: 7px 15px;
}

.zoom-container {
  display: flex;
  border: solid 1px;
  margin-right: 10px;
  border-radius: 0.375rem;

  button {
    transform: scale(0.75);
  }

  svg {
    margin: auto;
  }
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

  .toast {
    display: block;
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
    width: 30%;
    display: grid;
    border-radius: 10px 10px 0 0;
    -webkit-box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.1);
  }

  #nav {
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.1);
    margin: 0px 20px 20px 20px;
    brackground-color: rgba(51, 51, 51, 1);
  }

  .canvas {
    display: block;
  }
}

.canvas {
  width: 70%;
  height: 100%;
  overflow-y: scroll;
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
  border-radius: 10px;
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
