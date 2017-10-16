if ('addEventListener' in document) { // fastclick
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

function addLoadEvent( func ) {
    var oldonload = window.onload ;
    if ( typeof window.onload != 'function' ) {
        window.onload = func ;
    }
    else {
        window.onload = function(){
            oldonload();
            func();
        }
    }
}

function handleToggle() {
    var tab1 = document.getElementsByClassName('tab1');
    var tab2 = document.getElementsByClassName('tab2');

    [].forEach.call(tab1, function( currentVal, index, arr ) {
        currentVal.addEventListener('click', function (event) {
            /*                            console.log( index );
             console.log(this.parentNode.parentNode.querySelector('.show-code'));*/
            var showCode = this.parentNode.parentNode.querySelector('.show-code');
            var preview = this.parentNode.parentNode.querySelector('.preview');

            showCode.className = "show-code";
            preview.className = "preview hide";

            this.className = "tab tab1 active"; // 自身添加 tab tab1 active
            this.parentNode.querySelector('.tab2').className = "tab tab2" // tab2 删除 active
        } );
    });

    [].forEach.call(tab2, function( currentVal, index, arr ) {

        currentVal.addEventListener('click', function (event) {
            /*                            console.log( index );
             console.log(this.parentNode.parentNode.querySelector('.preview'));*/
            var showCode = this.parentNode.parentNode.querySelector('.show-code');
            var preview = this.parentNode.parentNode.querySelector('.preview');

            showCode.className = "show-code hide";
            preview.className = "preview";

            this.className = "tab tab2 active"; // 自身添加 tab tab2 active
            this.parentNode.querySelector('.tab1').className = "tab tab1" // tab1 删除 active
        } )
    });
}

function isArrayLike(o) {
    if ( o &&
        typeof o === "object" &&
        isFinite(o.length) &&
        o.length >= 0 &&
        o.length === Math.floor(o.length) &&
        o.length < 4294967296 ) {
        alert("是【类数组对象】");
    }
    else {
        alert("不是【类数组对象】");
    }
}

addLoadEvent(handleToggle);
