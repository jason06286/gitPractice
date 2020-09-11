for (var i = 0; i < 10; i++) {
    console.log(i);
    (function(i){
    setTimeout(() => {
    console.log('這執行第' + i + '次');
    }, 10);
})(i+1);
}
