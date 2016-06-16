<template>
    <section name="outbox">
        <span class="title" :class="{'valid': valid}"># {{index}}</span>
        <button class="copyBtn" :id.once="id" :data-clipboard-text="copyText">Copy</button>
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

    .copyBtn {
        float:right;
    }
}
</style>

<script>
import JsonRoot from './JsonRoot.vue'
export default {
    props: ['index','json'],
    data() {
        let id = Math.random() + ''
        let json = this.json

        return {
            id: id,
            copyText: JSON.stringify(json.obj, null, 4),
            obj: json.obj,
            err: json.err,
            valid: json.valid
        }
    },
    ready() {
        let client = new ZeroClipboard( document.getElementById(this.id) )
        client.on( 'ready', readyEvent => {

          client.on( 'aftercopy', event =>  {

            //alert("Copied text to clipboard: " + event.data["text/plain"] );

            alert('Copy succeed !')

          });
        });
    },
    components: {
        JsonRoot
    }
}
</script>