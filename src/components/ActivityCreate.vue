<template>
  <div class="activityCreateForm">
    <a
      v-if="!isFormDisplayed"
      class="button is-primary is-block is-alt is-large"
      href="#"
      @click="toggleFormVisibility"
    >New Activity</a>
    <div v-if="isFormDisplayed" class="create-form">
      <h2>Create Activity</h2>
      <form>
        <div class="field">
          <label class="label">Title</label>
          <div class="control">
            <input v-model="newActivity.title" class="input" type="text" placeholder="Read a Book" />
          </div>
        </div>
        <div class="field">
          <label class="label">Notes</label>
          <div class="control">
            <textarea v-model="newActivity.notes" class="textarea" type="text" placeholder="Notes"></textarea>
          </div>
        </div>
        <div class="field">
          <label class="label">Category</label>
          <div class="control">
            <select v-model="newActivity.category" class="select">
              <option disabled value>Please Select One</option>
              <option v-for="category in categories" :key="category.id">{{ category.text }}</option>
            </select>
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button
              :disabled="!isFormValid"
              class="button is-link"
              @click.prevent="createActivity"
            >Create Activity</button>
            <button
              v-if="isFormDisplayed"
              class="button is-link"
              @click="toggleFormVisibility"
            >Cancel</button>
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <!-- <button v-if="isFormDisplayed" @click="toggleFormVisibility" class="button is-link">Cancel</button> -->
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {
  fetchActivities,
  fetchUsers,
  fetchCategories,
  createActivityAPI
} from "@/api";

export default {
  data() {
    return {
      isFormDisplayed: false,
      newActivity: {
        title: "",
        notes: "",
        category: ""
      },
      categories: {}
    };
  },
  computed: {
    isFormValid() {
      return (
        this.newActivity.title &&
        this.newActivity.notes &&
        this.newActivity.category
      );
    }
  },

  created() {
    this.categories = fetchCategories();
  },

  methods: {
    createActivity() {
      createActivityAPI(this.newActivity).then(activity => {
        this.$emit("activityCreated", { ...activity });
        this.resetActivity();
        this.toggleFormVisibility();
      });
    },

    toggleFormVisibility() {
      this.isFormDisplayed = !this.isFormDisplayed;
    },

    resetActivity() {
      this.newActivity.title = this.newActivity.notes = this.newActivity.category =
        "";
    }
  }
};
</script>

<style scoped lang="scss">
</style>