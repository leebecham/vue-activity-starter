import Vue from "vue";
import fakeApi from '@/lib/fakeAPI'



const store = {
  state: {
    activities: {},
    categories: {}
  },



  fetchActivities() {
    return fakeApi.get('activities', { force: 1 }).then(activities => {
      Object.keys(activities).forEach((key) => {
        this.setItem('activities', key, activities[key]);
      })
      return activities;
    })
  },

  fetchCategories() {
    return fakeApi.get('categories', { force: 1 }).then(categories => {
      Object.keys(categories).forEach((key) => {
        this.setItem('categories', key, categories[key]);
      })
      return categories;
    })
  },

  fetchUsers() {
    return {
      name: "Filip Jerga",
      id: "-Aj34jknvncx98812"
    }
  },

  setItem(resource, key, item) {
    Vue.set(this.state[resource], key, item);
  },

  generateUid() {
    return Math.floor(new Date() * Math.random());
  },

  createActivity(a) {
    a.id = this.generateUid();
    a.progress = 0;
    a.createdAt = new Date();
    a.updatedAt = new Date();

    return fakeApi.post('activities', a).then(createdActivity => {
      this.setItem('activities', createdActivity.id, createdActivity);
    })
  },

  updateActivity(a) {
    a.updatedAt = new Date();
    return fakeApi.post('activities', a).then(updatedActivity => {
      this.setItem('activities', updatedActivity.id, updatedActivity);
      return updatedActivity;
    })
  },

  deleteActivity(a) {
    return fakeApi.delete('activities', a).then(deletedActivity => {
      Vue.delete(this.state.activities, a.id)
      return deletedActivity;
    });
  }
}

export default store