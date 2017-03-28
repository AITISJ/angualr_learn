//newBook.js
function newBook() {
    var config={
        link:init,
        restrict: 'A'
    }

    return config;

    function init(scope,element,attrs){
        element.addClass('newBook');
    }
}

app.directive('newBook', newBook);