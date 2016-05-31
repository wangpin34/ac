<template name="jsonnode" :class="classObject">
	<template v-if="type === 1">
		<span class="node">"{{node}}"</span>
	</template>
	<template v-if="type === 2">
		<span>[</span>
		<span v-show="expand" v-else class="icon close" v-on:click="handleClose">-</span>
		<span v-else class="icon expand" v-on:click="handleExpand">+</span>
		<ul v-show="expand">
			<li v-for="el in node"><json-node :node="el"></json-node><span v-if="$index<(node.length - 1)" class="delimiter">,</span></li>
		</ul>
		<span>]</span>
	</template>
	<template v-if="type === 3">
		<span>{</span>
		<span v-show="expand" v-else class="icon close" v-on:click="handleClose">-</span>
		<span v-else class="icon expand" v-on:click="handleExpand">+</span>
		<ul v-show="expand">
			<li v-for="(key,val) in node"><span>"{{key}}":</span><json-node :node="val"></json-node><span v-if="$index<(keys.length - 1)" class="delimiter">,</span></li>
		</ul>
		<span>}</span>
	</template>
</template>


<script>
export default {
	name: 'json-node',
	props: ['node'],
	data() {

		let type = 1
		let keys = []

		switch(typeof this.node) {
			case 'string': type = 1; break
			case 'object': 
				if(this.node instanceof	Array) {
					type = 2
				}else {
					keys = Object.keys(this.node)
					type = 3
				}
				break
			default: break
		}

		return {
			expand: true,
			type,
			keys,
			classObject: {
				'string-node': type === 1,
				'array-node': type === 2,
				'object-node': type === 3
			}
		}
	},

	methods: {
		handleClose() {
			this.expand = false
		},

		handleExpand() {
			this.expand = true
		}
	}
}
</script>