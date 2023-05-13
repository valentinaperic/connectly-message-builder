<template>
    <div v-if="isDisplayed" class="header-tips-container">
    <div class="header-tips-title">
        <h2>
            <img :src="require('@/assets/img/flashlight.svg')" class="flashlight-img" alt="tooltip" /> 
            {{ tipsHeader }}
        </h2>
        <img :src="require('@/assets/img/exit-no-circle.svg')" @click="closeTip" class="close-x"
        alt="close out image header tips." />
    </div>
    <p>{{ tipsBody }} </p>
    <a href="#" class="flashlight-img">Learn More</a>
    </div>
</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Tip',
  props: {
    tipsHeader: String,
    tipsBody: String
  }, 
  data() {
      return {
          isDisplayed: true,
      };
  },
  methods: {
    closeTip() {
        this.isDisplayed = false;
    },
  },

};
</script>

<style scoped lang="scss">
    .header-tips-container {
      background: #F5F5F5;
      border-radius: 8px;
      padding: 16px;
      margin-top: 16px;

      p {
        padding-right: 50px;
      }
    }

    .header-tips-title {
      display: flex;
      justify-content: space-between;
      align-items: baseline;

      h2 {
        margin-bottom: 0px;
      }

      .flashlight-img {
        position: relative;
        top: 3px;
        margin-right: 3px;
      }

      p {
        margin-top: 4px;
        padding: 50px;
      }
    }
</style>
