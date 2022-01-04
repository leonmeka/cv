<template>
  <div
    tabindex="0"
    aria-label="CV preview"
    :class="[
      'cv',
      'bg-white',
      { blur: isLoading, watermark: state.hasWatermark },
    ]"
  >
    <div class="cv__side w-1/3">
      <!-- PHOTO -->
      <section
        v-if="formSettings.displayPhoto"
        class="cv__section cv__section--main"
      >
        <img id="photo" :src="formSettings.photo" />
      </section>

      <section class="cv__section cv__section--main">
        <h2 class="cv__name">
          {{ formSettings.name }} <b>{{ formSettings.lastName }}</b>
        </h2>
        <h3 class="cv__job-title">{{ formSettings.jobTitle }}</h3>
      </section>

      <section class="cv__section">
        <hr />
      </section>

      <!-- CONTACT -->
      <section class="cv__section">
        <h4 class="cv__section-title">{{ $t('contact') }}</h4>
        <div class="flex flex-col">
          <div v-if="formSettings.phoneNumber" class="cv__icon-wrapper">
            <svg class="cv__icon">
              <use href="@/assets/sprite.svg#phone"></use>
            </svg>
            <a :href="phoneNumberHref" rel="noopener">{{
              formSettings.phoneNumber
            }}</a>
          </div>
          <div v-if="formSettings.email" class="cv__icon-wrapper">
            <svg class="cv__icon">
              <use href="@/assets/sprite.svg#email"></use>
            </svg>
            <a :href="emailHref" rel="noopener">{{ formSettings.email }}</a>
          </div>
          <div v-if="formSettings.location" class="cv__icon-wrapper">
            <svg class="cv__icon">
              <use href="@/assets/sprite.svg#location"></use>
            </svg>
            <span tabindex="0">{{ formSettings.location }}</span>
          </div>
        </div>
      </section>
      <!-- //CONTACT -->

      <section class="cv__section">
        <hr />
      </section>
    </div>

    <div class="cv__main w-2/3">
      <!-- COVER LETTER -->
      <section class="cv__section cv__section--main w-full">
        <h4 class="cv__section-title cv__section-title--main">
          {{ $t('cover-letter') }}
        </h4>

        <hr class="cv__bar" />

        <section class="cv__section cv__section--main w-full">
          <span>{{ $t('cover-letter-introduction') }}</span>
          <br />
        </section>

        <section class="cv__section cv__section--main w-full">
          <p class="font-light letter">
            {{ formSettings.coverLetter }}
          </p>
        </section>
      </section>
      <!-- COVER LETTER -->

      <section class="cv__section cv__section--main w-full">
        <span>{{ $t('cover-letter-greetings') }}</span>
        <p class="font-light">
          {{ formSettings.name }} {{ formSettings.lastName }}
        </p>

        <span style="font-family: signature; font-size: 30pt;">
          {{ formSettings.name }} {{ formSettings.lastName }}</span
        >
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { useContext, computed, reactive } from '@nuxtjs/composition-api';
import { useCvState } from '~/data/useCvState';

export default Vue.extend({
  name: 'CvPreviewCoverLetter',
  setup() {
    const { formSettings, isLoading } = useCvState();
    const context = useContext();

    const phoneNumberHref = computed(function getPhoneNumberHref() {
      return `tel:${formSettings.value.phoneNumber}`;
    });
    const emailHref = computed(function getEmailHref() {
      return `mailto:${formSettings.value.email}`;
    });

    const state = reactive({
      hasWatermark: false,
    });

    if (process.browser) {
      window.addEventListener('beforeprint', (event) => {
        state.hasWatermark = true;
        console.log(state.hasWatermark);
      });

      window.addEventListener('afterprint', (event) => {
        state.hasWatermark = false;
        console.log(state.hasWatermark);
      });
    }

    return {
      state,
      formSettings,
      isLoading,
      phoneNumberHref,
      emailHref,
    };
  },
});
</script>
<style lang="postcss" scoped>
p {
  @apply leading-relaxed;
}
.cv {
  &__side {
    @apply px-6 py-10 bg-gray-100 bg-opacity-100;
  }

  &__name {
    @apply text-xl uppercase font-bold leading-8 mb-3 tracking-wide;
    color: var(--primary);
    margin-bottom: 0px;
  }

  &__job-title {
    @apply text-sm uppercase;
  }

  &__section {
    @apply mt-6;
    &--main {
      @apply mt-0 text-sm;
    }
  }

  &__section-title {
    @apply text-lg uppercase mb-2 font-bold tracking-wide;
    &--sm {
      @apply text-sm;
    }
    &--main {
      color: var(--primary);
    }
  }

  &__icon-wrapper {
    @apply flex flex-row font-light;
    align-items: center;

    & + & {
      margin-top: 5px;
    }
  }

  &__icon {
    @apply flex mr-1 fill-current rounded;
    width: 1.25rem;
    height: 1.25rem;
    min-width: 1.25rem;
    align-items: center;
  }

  &__tags {
    @apply flex flex-wrap;
  }

  &__tag {
    @apply px-2 py-1 rounded text-white text-xs;
    margin: 0.5rem 0.2rem 0.25rem;
    background-color: var(--primary);
  }

  &__list {
    @apply font-light mt-1;
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      padding-left: 1em;
      text-indent: -1em;
    }
    li:first-child {
      @apply mt-1;
    }
    li::before {
      content: '\2022';
      padding-right: 0.2em;
      color: var(--primary);
    }
  }

  &__bar {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      @apply flex flex-col;
    }
    li + li {
      @apply mt-3;
    }
  }
  &__bar-level {
    @apply rounded-full mr-2;
    position: relative;
    height: 0.5rem;

    &--in {
      position: absolute;
      display: inline-block;
      background-color: var(--primary);
    }
  }

  &__main {
    @apply px-8 py-10;
  }

  &__event {
    &-elem + &-elem {
      @apply mt-6;
    }
  }

  &__bar {
    @apply my-5 border-gray-100 border-2;
  }
}

.letter {
  text-align: justify;
  font-size: 10pt;
  word-wrap: break-word;
  white-space: pre-line;
}

.blur {
  filter: blur(10px);
}

.watermark {
  filter: blur(10px);
}

#photo {
  width: 125px;
  height: 125px;
  object-fit: cover;
  margin-bottom: 20px;
}
</style>
