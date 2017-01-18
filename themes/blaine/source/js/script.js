document.addEventListener("DOMContentLoaded", function (event) {
    if (/*@cc_on!@*/true) { // NOT IE
        (function (doc) {
            var addEvent = 'addEventListener',
                type = 'gesturestart',
                qsa = 'querySelectorAll',
                scales = [1, 1],
                meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];

            function fix() {
                meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
                doc.removeEventListener(type, fix, true);
            }

            if ((meta = meta[meta.length - 1]) && addEvent in doc) {
                fix();
                scales = [.25, 1.6];
                doc[addEvent](type, fix, true);
            }

        })(document);
    }

    var headlines = document.getElementsByTagName('h2');

    for (var i = 0; i < headlines.length; i++) {
        var headline = headlines[i];
        headline.innerHTML = '<span>' + headline.innerHTML + '</span>';
    }

    document.querySelectorAll('pre').forEach(function(ele) {
        var oldClassName = ele.className;
        var prettyprintClassName = 'prettyprint'; // linenums
        if (oldClassName.length === 0) {
            ele.className += prettyprintClassName;
        }
        else {
            var matches = null;
            if (null !== (matches = oldClassName.match(/src-(.*?)(?: |$)/))) {
                ele.className += ' lang-' + matches[1];
            }
            ele.className += ' ' + prettyprintClassName;
        }
    });
    // prettyPrint();
});
