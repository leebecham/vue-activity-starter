<template>
  <nav class="navbar is-white">
    <div class="container">
      <div class="navbar-menu is-active">
        <div class="navbar-start">
          <a
            :class="{'is-active': filterOption === 'all'}"
            class="navbar-item"
            @click="emitFilter('all')"
          >All</a>
          <a
            :class="{'is-active': filterOption === 'inProgress'}"
            class="navbar-item"
            @click="emitFilter('inProgress')"
          >In Progress</a>
          <a
            :class="{'is-active': filterOption === 'finished'}"
            class="navbar-item"
            @click="emitFilter('finished')"
          >Finished</a>
          <a
            :class="{'is-active': filterOption === 'notStarted'}"
            class="navbar-item"
            @click="emitFilter('notStarted')"
          >Not Started</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      filterOption: "all"
    };
  },
  methods: {
    emitFilter(f) {
      this.filterOption = f;
      this.$emit("filterChanged", f);
    }
  }
};
</script>

