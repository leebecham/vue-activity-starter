<template>
  <article class="post">
    <div class="activity-title-wrapper">
      <h4 class="activity-title">{{ activity.title }}</h4>
      <i class="fas fa-cog activity-settings" @click="toggleActivityControl" />
    </div>
    <p>{{ textUtility_capitalize(categories[activity.category].text) }}</p>
    <p>{{activity.notes}}</p>
    <div class="media">
      <div class="media-left">
        <p class="image is-32x32">
          <img src="../assets/user.png" />
        </p>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <a href="#">Filip Jerga</a>
            updated {{activity.updatedAt | prettyTime}} &nbsp;
          </p>
        </div>
      </div>
      <div class="media-right">
        <span>
          Progress:
          <span :class="'color-' + activityProgress">{{activity.progress}} %</span>
        </span>
      </div>
    </div>
    <div v-if="activityControlVisible" class="activity-controll">
      <a class="button is-warning" @click="$emit('toggleUpdate')">Edit</a>
      <a class="button is-danger" @click="onClickDelete">Delete</a>
    </div>
  </article>
</template>

<script>
import textUtility from "@/mixins/textUtility";
import store from "@/store";
export default {
  mixins: [textUtility],
  props: {
    activity: {
      type: Object,
      required: true
    },
    categories: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      activityControlVisible: false
    };
  },
  computed: {
    activityProgress() {
      const progress = this.activity.progress;
      if (progress <= 0) {
        return "red";
      }
      if (progress <= 50) {
        return "orange";
      }
      return "green";
    }
  },
  methods: {
    toggleActivityControl() {
      this.activityControlVisible = !this.activityControlVisible;
    },
    onClickDelete() {
      store.deleteActivity(this.activity);
    }
  }
};
</script>


<style scoped lang="scss">
.post .title {
  margin-bottom: 5px;
}

.color-red {
  color: red;
}

.color-orange {
  color: orange;
}

.color-green {
  color: green;
}

.activity-title {
  margin-bottom: 5px;
  display: inline-block;
}

.activity-settings {
  float: right;
  font-size: 22px;

  &:hover {
    cursor: pointer;
  }
}

.activity-controll {
  margin: 20px 0 0 0;

  a {
    margin-right: 5px;
  }
}

.post .title {
  margin-bottom: 5px;
}
</style>