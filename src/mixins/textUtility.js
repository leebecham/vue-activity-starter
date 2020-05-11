export default {
  data() {
    return {
      utilityName: 'text utility',
      creator: 'Lee Becham'
    }
  },

  computed: {
    fullName() {
      return this.utilityName + ' ' + creator
    }
  },

  methods: {
    textUtility_capitalize(str) {
      if (str && typeof str == "string") {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }
    }
  },

}