<template>
	<ul name="outboxes">
		<li v-for="(index, json) in jsons.slice().reverse()">
			<out-box :index="jsons.length-index" :json="json"></out-box>
		</li>
	</ul>
</template>

<style lang="sass">
[name="outboxes"] {
	padding: 0 0 8px 0;
	li {
		list-style-type: none;
		margin-bottom: 8px;
	}
}
</style>

<script>
import OutBox from './OutBox.vue'
export default {
	props: ['jsons'],
	data() {
		return {}
	},
	components: {
		OutBox
	}
}
</script>