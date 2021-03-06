<template>
  <section id="projects" class="section no-h-padding">
    <div class="block has-text-centered">
      <h2 class="title is-2">Projects</h2>
      <separator></separator>
    </div>

    <div class="mode-select block has-text-centered">
      View as a
      <b-dropdown v-model="mode">
        <button class="button" slot="trigger">
            <span>{{ mode }}</span>
            <b-icon icon="caret-down" size="is-small"></b-icon>
        </button>
        <b-dropdown-option value="Designer">Designer</b-dropdown-option>
        <b-dropdown-option value="Developer">Developer</b-dropdown-option>
      </b-dropdown>
    </div>

    <!-- Designer -->
    <div v-if="mode === 'Designer'" class="columns designer">
      <div class="column is-3 is-offset-1 js-project-list">
        <project-list :projects="projects"></project-list>
      </div>
      <div class="column details"
        :class="{ active: showDetails }">
        <project-details></project-details>
      </div>
    </div>

    <!-- Developer -->
    <div v-if="mode === 'Developer'" class="container">
      <div class="columns developer">
        <div class="column is-8">
          <timeline :projects="projects"></timeline>
        </div>
        <div class="column is-4">
          <repo-panel
            title="Team projects contributed to"
            :repos="career"></repo-panel>
          <repo-panel
            title="Rohan's projects"
            :repos="personal"></repo-panel>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import { mapState } from 'vuex';

import Timeline from './Timeline';
import RepoPanel from './RepoPanel';
import ProjectList from './ProjectList';
import ProjectDetails from './ProjectDetails';

import projects from './projects';

export default {
  name: 'projects',
  components: {
    Timeline,
    RepoPanel,
    ProjectList,
    ProjectDetails,
  },
  data() {
    return {
      projects,
      mode: 'Developer',
    };
  },
  computed: {
    ...mapState([
      'activeProject',
      'showDetails',
    ]),
    career() {
      return projects.filter(p => p.type === 'career');
    },
    personal() {
      return projects.filter(p => p.type === 'personal');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~vars';
@import '~bulma/sass/utilities/mixins';

.section.no-h-padding {
  padding: 3rem 0;
}

.mode-select {
  line-height: 2.25rem;
  margin-bottom: 3rem;
}

.developer {
  padding: 0 1.5rem;
}

.designer {
  position: relative;
  background-color: $dark;

  & > .column {
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 0;
    padding-bottom: 0;
  }
  .details {
    &.active {
      @include mobile {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 0;
      }
    }
  }
}
</style>

