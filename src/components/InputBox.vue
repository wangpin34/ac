<template>
  <div>
    <textarea name="input" v-model="input"></textarea>
    <Button name="parse-btn" :on-click="handleParse" text="Parse" style="width: 100%;box-sizing: border-box;"></Button>
  </div>
</template>

<style lang="sass">

[name=input] {
  width: 100%;
  height: 240px;
  padding: 10px;
  outline: none;
  resize: none;
  box-sizing: border-box;
  border-radius: 2px;
  border: 1px solid #607d8b;
  color: #607d8b;
  font-size: 16px;

  &::selection {
    background-color: #009688;
    color: #f1f1f1;
  }
}

[name=parse-btn] {
  display: block;
  margin: 16px auto;
}

</style>

<script>
import Button from './Button.vue'

export default {
  props: ['parse'],
  data() {
  	return {
      input: ''
  	}
  },
  methods: {
    handleParse() {
      this.parse(this.input + '')
    }
  },
  components: {
    Button
  }
}
</script>