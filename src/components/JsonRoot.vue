<template>
	<div name="jsonroot">
		<json-node :node="json"></json-node>
	</div>
</template>

<style lang="sass">

[name="jsonroot"] {

	width: 100%;
	max-height: 300px;
	overflow: auto;

	span {

		&.node {
			white-space: nowrap;
		}

		&.delimiter {
			vertical-align: baseline;	
		}

		&.icon {
			display: inline-block;
			border: 1px solid #972cb0;
			width: 14px;
			height: 16px;
			font-size: 16px;
			line-height: 16px;
			text-align: center;
			color: #972cb0;
			cursor: pointer;
			padding: 1px 5px;
			background: #ffffff;
		}
	}

	ul {
		margin: 0;
		// 1rem is left padding
		padding: .5rem .5rem 0 2rem;

		li {
			list-style-type: none;
			margin: 0;
			white-space: nowrap;
		}
	}
}

</style>

<script>
import JsonNode from './JsonNode.vue'
export default {
	props: ['json'],
	data() {
		return {
			
		}
	},
	components: {
		JsonNode
	}
}
</script>