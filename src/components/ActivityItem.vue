<template>
  <div>
    <ActivityItemUpdate
      v-if="isUpdating"
      :activity="activity"
      :categories="categories"
      @toggleUpdate="toggleIsUpdating"
      @activityDeleted="onDeleteActivity"
    />
    <ActivityItemDetail
      v-else
      :activity="activity"
      :categories="categories"
      @toggleUpdate="toggleIsUpdating"
    />
  </div>
</template>

<script>
import ActivityItemDetail from "./ActivityItemDetail";
import ActivityItemUpdate from "./ActivityItemUpdate";
export default {
  components: {
    ActivityItemDetail,
    ActivityItemUpdate
  },
  props: {
    activity: {
      required: true,
      type: Object
    },
    categories: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isUpdating: false
    };
  },
  methods: {
    toggleIsUpdating() {
      this.isUpdating = !this.isUpdating;
    },
    onDeleteActivity(a) {}
  }
};
</script>


<style scoped>
</style>