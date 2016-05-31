let trim = str => {
  return str.replace(/(^[\s\t]+)|([\s\t]+$)/g, '');
}

export const state = {
	jsons: []
}

export const actions = {
	parse(jsonStr) {
		if(!trim(jsonStr)) return

		let jsonObj = null
		try{	
			jsonObj = JSON.parse(jsonStr)
		}catch(err){
			state.jsons.push({err: jsonStr + '', valid: false })

		}
		if(jsonObj){
			state.jsons.push({obj:jsonObj, valid: true})
		}
	}
}
