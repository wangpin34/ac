<template name="jsonnode">
	<template v-if="type === 1">
		<span class="node">"{{node}}"</span>
	</template>
	<template v-if="type === 2">
		<span>[</span>
		<template v-if="node.length > 0">
			<span v-show="expand" v-else class="icon close" v-on:click="handleClose">-</span>
			<span v-else class="icon expand" v-on:click="handleExpand">+</span>
			<ul v-show="expand">
				<li v-for="el in node" track-by="$index"><json-node :node="el"></json-node><span v-if="$index<(node.length - 1)" class="delimiter">,</span></li>
			</ul>
		</template>
		<span>]</span>
	</template>
	<template v-if="type === 3">
		<span>{</span>
		<template v-if="keys.length > 0">
			<span v-show="expand" v-else class="icon close" v-on:click="handleClose">-</span>
			<span v-else class="icon expand" v-on:click="handleExpand">+</span>
			<ul v-show="expand">
				<li v-for="(key,val) in node" track-by="$index"><span>"{{key}}":</span><json-node :node="val"></json-node><span v-if="$index<(keys.length - 1)" class="delimiter">,</span></li>
			</ul>
		</template>
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
				}else if(this.node instanceof Object){
					keys = Object.keys(this.node)
					type = 3
				}else{
					this.node = '';
					type = 1;
				}
				break
			default: break
		}

		return {
			expand: true,
			type,
			keys
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
