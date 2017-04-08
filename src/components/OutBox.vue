<template>
    <section name="outbox">
        <span class="title" :class="{'valid': valid}"># {{index}}</span>
        <button class="copy-btn" :id.once="id" :data-clipboard-text="copyText" text="Copy" :on-click="onCopy"></button>
        <json-root v-if="valid" :json="obj"></json-root>
        <div v-else>
        Error happended
        </div>
    </section>
</template>

<style lang="sass">
[name="outbox"] {
    background: #f1f1f1;

    width: 100%;
    min-height: 100px;
    padding: 0 0 8px 0;
    text-align: left;
    margin: 0 auto;

    font-size: 2.5rem;

    border-radius: .5rem;

    .title {
        width: 100%;
        height: 24px;
        line-height: 24px;
        box-sizing: content-box;
        display: inline-block;
        font-size: 16px;
        text-align: left;
        margin-bottom: 8px;
        color: #ffffff;
        background: #e51c23;
        &.valid {
            background: #009688;
        }
    }

    .copy-btn {
        float:right;
        font-family: Sans-serif,Helvetica;
    }
}
</style>

<script>
import Button from './Button.vue'
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
    methods: {
        onCopy() {
            //Do nothing
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
        JsonRoot,
        Button
    }
}
</script>