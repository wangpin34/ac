function jsonview(data) {
    this.data = data;
}

jsonview.prototype.genHtml = function() {

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
            console.log('JSON object parsed failed');
        }
    }

    return '<p>' + gen(this.data) + '</p>';
};


$(function() {
    $('.json-viewer').each(function() {
        var jv = $(this);
        var data = $(this).text();
        var jvObj = new jsonview(data);
        var dom = $(jvObj.genHtml());
        $(this).html('');
        $(this).append(dom);
    });
});
