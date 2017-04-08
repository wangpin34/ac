<template>
  <a href="javascript:void(0);" class="button" v-on:click="onClick">{{text}}</a>
</template>

<style lang="sass">

.button {
  width: 72px;
  height: 32px;
  line-height: 32px;
  font-size: 16px;
  font-family: Sans-serif,Helvetica;
  text-align: center;
  vertical-align: middle;
  color: #ffffff;
  background-color: #972cb0;
  border-radius: 2px;
  border-width: 0px;
  box-shadow: 1px 1px 5px #9e9e9e;
  outline: none;
  text-decoration: none;

  &:hover {
    background-color: ba68c8;
  }

  &:active {
    background-color: ce93d8;
    box-shadow: 0 0 0;
  }
}

</style>

<script>
export default {
  props: ['onClick', 'text'],
  data() {
  	return {

  	}
  }
}
</script>