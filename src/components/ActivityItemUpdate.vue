<template>
  <article class="post">
    <div class="activity-title">
      <i
        class="fas fa-cog activity-settings"
        @click="activityControlVisible = !activityControlVisible"
      />
      <input v-model="modifiedActivity.title" type="text" class="input" />
    </div>
    <div class="activity-category">
      <select v-model="modifiedActivity.category" class="select">
        <option disabled value>Please select one</option>
        <option
          v-for="category in categories"
          :key="category.id"
          :value="category.id"
        >{{ category.text }}</option>
      </select>
    </div>
    <div class="control activity-notes">
      <textarea
        v-model="modifiedActivity.notes"
        class="textarea"
        placeholder="Write some notes here"
      />
    </div>
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
            updated {{ modifiedActivity.updatedAt | prettyTime }} &nbsp;
          </p>
        </div>
      </div>
      <div class="media-right">
        <input
          id="progress"
          v-model.number="modifiedActivity.progress"
          type="range"
          name="progress"
          min="0"
          max="100"
          value="90"
          step="10"
        />
        <label for="progress">{{ modifiedActivity.progress }} %</label>
      </div>
    </div>
    <div v-if="activityControlVisible" class="activity-controll">
      <a class="button is-warning" @click="onUpdateActivity">Commit Update</a>
      <a class="button is-danger" @click="$emit('toggleUpdate')">Cancel</a>
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
      activityControlVisible: true,
      modifiedActivity: { ...this.activity }
    };
  },
  methods: {
    onUpdateActivity() {
      //!!!console.log(this.activity);
      store
        .updateActivity({ ...this.modifiedActivity })
        .then(() => this.$emit("toggleUpdate"));
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
  margin-bottom: 10px;

  > i {
    margin-bottom: 10px;
  }
}

.activity-category {
  margin-bottom: 10px;
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

.activity-notes {
  margin-bottom: 10px;
}

.post .title {
  margin-bottom: 5px;
}
</style>