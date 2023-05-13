<template>
  <button class="toggle" :class="{ 'active': isActive }" @click="toggle">
    <div class="toggle-knob"></div>
  </button>
</template>

<script>
import { ref } from 'vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Toggle',
  props: {
    value: {
      type: Boolean,
      default: true,
    },
    toggleOn: {
      type: Boolean,
      required: true
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {

    //get the default toggle state
    const isActive = ref(props.toggleOn);

    const toggle = () => {
      isActive.value = !isActive.value;
      emit('update:modelValue', isActive.value);
    };

    return {
      isActive,
      toggle,
    };
  },
};
</script>

<style scoped lang="scss">
.toggle {
  width: 34px;
  height: 14px;
  border: none;
  border-radius: 15px;
  background-color: #ccc;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s;
}

.toggle.active {
  background-color: #9ECEFF;
}

.toggle-knob {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #FAFAFA;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12);
    margin-left: -10px;
    transition: transform 0.3s;
}

.toggle.active .toggle-knob {
    transform: translateX(25px);
    background: $primary-blue;
}
</style>
