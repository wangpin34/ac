<template>
  <div class="ac">
    <header>
      <h1>AC</h1>
    </header>
    <div class="workarea">
      <input-box name="input-box" :parse="actions.parse"></input-box>
      <out-boxes :jsons="state.jsons"></out-boxes>
    </div>
  </div>
</template>

<style lang="sass">

html {
	font-size: 6px;
	background-color:#f8f8f8;
}
html,body{
	width: 100%;
	height: 100%;
  min-height: 100%;
	margin: 0;
	padding: 0;
  background-color: #f1f1f1;
}

.ac {
  width: 550px;
  min-height: 100%;
  background-color: #ffffff;


  text-align: center;
  margin: 10px auto;
  box-sizing: border-box;
  -moz-box-sizing:border-box; /* Firefox */
  -webkit-box-sizing:border-box; /* Safari */
  box-shadow: 2px 2px 10px #9e9e9e;

  header {
    height: 100px;
    line-height: 100px;
  }

  header h1 {
    height: 100px;
    line-height: 100px;
    display: block;
    margin: 0 auto;
    text-align: center;
    color: #259b24;
    font-size: 64px;
    font-family: Sans-serif,Helvetica;
  }

  .workarea {
    width: 100%;
    padding: 8px 32px;
    box-sizing: border-box;
    font-family: Sans-serif,Helvetica;
  }
}

</style>

<script>
import { state, actions } from '../store'
import InputBox from './InputBox.vue'
import OutBoxes from './OutBoxes.vue'

export default {
  
  data() {
  	return {
      state,
      actions
    }
  },
  components: {
    InputBox,
    OutBoxes
  }
}
</script>