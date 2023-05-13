<template>
  <div class="dropdown-wrapper" :class="{ active: isOpen }" @click="toggleDropdown">{{ selectedOption }}
    <ul v-show="isOpen" class="dropdown">
      <li v-for="(option, index) in options" :key="index" @click="selectOption(option)">
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Dropdown',
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
      selectedOption: this.options[0],
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.isOpen = false;
      this.$emit('update:modelValue', option);
    },
  },
};
</script>

<style scoped lang="scss">

.dropdown-wrapper {
    position: relative;
    max-width: 264px;
    padding: 12px 15px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease-out;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 10px;
    font-size: 1.4rem;
    text-align: left;
}

/* arrow */
.dropdown-wrapper:after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: 50%;
    right: 15px;
    margin-top: -3px;
    border-width: 6px 6px 0 6px;
    border-style: solid;
    border-color: #0000008a transparent;
}

.dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #fff;
    border-radius: 0 0 5px 5px;
    border: 1px solid rgba(0,0,0,0.2);
    border-top: none;
    border-bottom: none;
    list-style: none;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -ms-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
    max-height: 0;
}

.dropdown li {
    padding: 2px 10px;
}

.dropdown li i {
    margin-right: 5px;
    color: inherit;
    vertical-align: middle;
}

.dropdown li:hover {
    color: $primary-blue;
}

/* active states */
.dropdown-wrapper.active {
    border-radius: 5px 5px 0 0;
    background: $primary-blue;
    box-shadow: none; 
    border-bottom: none;
}

.dropdown-wrapper.active:after {
    border-color: #007DFF transparent;
}

.dropdown-wrapper.active .dropdown {
    padding: 5px;
    margin: -1px;
}

.dropdown-wrapper.active {
    border-radius: 5px 5px 0 0;
    background: $primary-blue;
    box-shadow: none;
    border-bottom: none;
}

.dropdown-wrapper.active:after {
    border-color: #007DFF transparent;
}

.dropdown-wrapper.active .dropdown {
    border-bottom: 1px solid rgba(0,0,0,0.2);
    max-height: 400px;
}
</style>