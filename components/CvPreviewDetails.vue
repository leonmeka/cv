<template>
  <div
    tabindex="0"
    aria-label="CV preview"
    :class="['cv', 'bg-white', { blur: isLoading }]"
  >
    <div class="cv__side w-1/3">
      <!-- PHOTO -->
      <section
        v-show="formSettings.displayPhoto"
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
      <!-- PROJECTS -->
      <section class="cv__section cv__section--main w-full">
        <h4 class="cv__section-title cv__section-title--main">
          {{ $t('projects') }}
        </h4>
        <ul class="cv__event mt-3">
          <li
            v-for="project in projects"
            :key="project.title"
            class="cv__event-elem"
          >
            <h5 class="cv__section-title cv__section-title--sm">
              {{ project.title }}
            </h5>
            <div>
              <span>{{ project.location }} | </span>
              <span>
                {{ formatDate(project.from) }} -
                <template v-if="project.current">{{ $t('current') }}</template>
                <template v-else>{{ formatDate(project.to) }}</template>
              </span>
            </div>
            <ul v-if="project.summaryArr.length > 1" class="cv__list">
              <li v-for="(line, index) in project.summaryArr" :key="index">
                {{ line }}
              </li>
            </ul>
            <p v-else class="font-light">
              {{ project.summaryArr[0] }}
            </p>
          </li>
        </ul>
      </section>
      <!-- // PROJECTS -->

      <section class="cv__section">
        <hr />
      </section>

      <!-- ADDITIONAL SKILLS -->
      <section class="cv__section">
        <h4 class="cv__section-title cv__section-title--main">
          {{ $t('additional-skills') }}
        </h4>
        <ul class="cv__list">
          <li
            v-for="skill in formSettings.additionalSkills"
            :key="`preview${skill}`"
          >
            {{ skill }}
          </li>
        </ul>
      </section>
      <!-- ADDITIONAL SKILLS -->

      <section class="cv__section">
        <hr />
      </section>

      <!-- HOBBIES -->
      <section class="cv__section">
        <h4 class="cv__section-title cv__section-title--main">
          {{ $t('hobbies') }}
        </h4>
        <ul class="cv__list">
          <li
            v-for="skill in formSettings.hobbySkills"
            :key="`preview${skill}`"
          >
            {{ skill }}
          </li>
        </ul>
      </section>
      <!-- HOBBIES -->

      <section class="cv__section">
        <hr />
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { useContext, computed, reactive } from '@nuxtjs/composition-api';
import { CvEvent } from '~/types/cvfy';
import { useCvState } from '~/data/useCvState';

export default Vue.extend({
  name: 'CvPreviewDetails',
  setup() {
    const { formSettings, isLoading } = useCvState();
    const context = useContext();

    const phoneNumberHref = computed(function getPhoneNumberHref() {
      return `tel:${formSettings.value.phoneNumber}`;
    });
    const emailHref = computed(function getEmailHref() {
      return `mailto:${formSettings.value.email}`;
    });

    const projects = computed(function getProjects() {
      return orderEvents(formSettings.value.projects);
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

    function orderEvents(arr: CvEvent[]): CvEvent[] {
      return arr
        .map((event) => {
          event.summaryArr = getSummaryLines(event.summary);
          return event;
        })
        .sort(
          (a, b) => new Date(b.from).getTime() - new Date(a.from).getTime()
        );
    }

    function getSummaryLines(summary: string): string[] {
      const lines = summary.split('\n').map((line) => {
        if (line[0] === '-') {
          line = line.slice(1).trim();
        }
        return line;
      });
      return lines;
    }

    function formatDate(date: Date): string {
      const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short',
      };
      const dateObj = new Date(date);
      return dateObj.toLocaleDateString(context.app.i18n.locale, options);
    }

    return {
      state,
      formSettings,
      isLoading,
      phoneNumberHref,
      emailHref,
      projects,
      formatDate,
    };
  },
});
</script>
<style lang="postcss" scoped>
p {
  @apply leading-relaxed;
}
.cv {
  @apply flex text-gray-800 shadow-lg text-sm font-normal;
  width: 21cm;
  height: 29.69cm;
  min-width: 21cm;
  min-height: 29.69cm;
  max-width: 21cm;
  max-height: 29.69cm;
  margin: 0;
  align-self: center;
  word-break: break-word;
  transform: scale(0.3);
  overflow-y: hidden;

  @media screen and (min-height: 550px) {
    transform: scale(0.4);
  }
  @media screen and (min-height: 650px) {
    transform: scale(0.5);
  }
  @media screen and (min-height: 750px) {
    transform: scale(0.6);
  }
  @media screen and (min-height: 870px) {
    transform: scale(0.7);
  }
  @media screen and (min-height: 1024px) {
    transform: scale(1);
  }

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
