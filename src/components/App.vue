<template>
  <div class="ac">
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
}

.ac {
  width: 550px;
  min-height: 100%;
  background-color: #D7ECD7;

  text-align: center;
  margin: 0 auto;

  .workarea {
    width: 100%;
    font-family: "Ubuntu Mono",Menlo,Monaco,Consolas,"Courier New",monospace;
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