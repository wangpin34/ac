<template>
	<section name="outbox">
		<span class="title" :class="{'valid': valid}"># {{index}}</span>
		<json-root v-if="valid" :json="obj"></json-root>
		<div v-else>
		Error happended
		</div>
	</section>
</template>

<style lang="sass">
[name="outbox"] {
	background: #CCDAD9;

	width: 440px;
    min-height: 100px;
    padding: 12px 30px;
    text-align: left;
    margin: 0 auto;

    font-size: 2.5rem;

    border-radius: .5rem;

    .title {
    	width: 440px;
    	display: inline-block;
    	margin-bottom: 2rem;
    	color: #ffffff;
    	background: red;
    	&.valid {
    		background: green;
    	}
    }
}
</style>

<script>
import JsonRoot from './JsonRoot.vue'
export default {
	props: ['index','json'],
	data() {
		let json = this.json
		return {
			obj: json.obj,
			err: json.err,
			valid: json.valid
		}
	},
	components: {
		JsonRoot
	}
}
</script>