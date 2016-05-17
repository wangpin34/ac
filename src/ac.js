function Jsonview(data) {
    this.data = data;
}

Jsonview.prototype.genHtml = function() {

    var gen = function(d) {
        try {
            var ds = '';
            if(typeof d === 'object'){
                ds = JSON.stringify(d, null, 2);
            }else{
                ds = JSON.stringify(JSON.parse(d), null, 2);
            }
            ds = ds.replace(/\n/gim, '<br/>');
            ds = ds.replace(/\s/gim, '&nbsp;');
            return ds;
        }catch(err){
            throw new Error('JSON object parsed failed');
        }
    }

    return '<p>' + gen(this.data) + '</p>';
};

function addEvent(el, eventType, listener){
    if(el.addEventListener){
        el.addEventListener(eventType, listener);
    }else{
        el.attach(eventType,function(){
            listener(window.event);
        });
    }
}

window.onload = function(){
    var jsonBox = document.querySelector('#input'),
        parseBtn = document.querySelector('#parse'),
        outputs = document.getElementById('outputs');

    addEvent(parseBtn, 'click', function(){
        var raw = jsonBox.innerText;
        var jsonView = new Jsonview(raw);
        var html = jsonView.genHtml();
        var output = document.createElement('li');
        output.innerHTML = '<div>' + html + '</div>';
        outputs.appendChild(output);
    })

    

}

