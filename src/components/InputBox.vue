<template>
  <div>
    <textarea name="input" v-model="input"></textarea>
    <button name="ParseBtn" v-on:click="handleParse">Parse</button>
  </div>
</template>

<style lang="sass">

[name="input"] {
  margin-top: 100px;
  width: 480px;
  height: 320px;
  padding: 10px;
}

[name="ParseBtn"] {
  display: block;

  width: 500px;
  height: 5rem;
  line-height: 5rem;
  font-size: 3rem;
  font-weight: bold;
  vertical-align: middle;
  color: green;

  margin: 2rem auto 2rem auto;

  background: #CCDAD9;
  border-radius: .5rem;

  cursor: pointer;
}

</style>

<script>

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
    
  }
}
</script>