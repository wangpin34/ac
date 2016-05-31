import Vue from 'vue'
import App from './components/App.vue'


let app = {
	initialize:() => {
		new Vue({   
          el: 'body',
          components: {
            // include the required component
            // in the options
            app: App

          }
    	})
	}
}



window.onload = () => {
	app.initialize()
}

    

