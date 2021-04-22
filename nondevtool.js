// nonDEVtool by michio.xd - Nguyen Anh Duc
// FB: fb.com/michio.xd
// Github: https://github.com/michioxd

(function() {
    'use strict';
    const threshold = 160;
    const nondevtools = ({ DTevents = true } = {}) => {
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;
        if (!(heightThreshold && widthThreshold) &&
            ((window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized) || widthThreshold || heightThreshold)
        ) {
            setInterval(function() {
                document.head.remove();
                document.body.remove();
                console.clear();
                document.write("<center><h1>Lỗi không xác định :((</h1><hr><p>Bạn hãy refresh lại page nhé!</p></center>");
            });
        }
    };
    nondevtools({ DTevents: false });
    setInterval(nondevtools, 500);
})();

// if user try to open devtool, destroy document
document.onkeydown = function(e) {
    if (event.keyCode == 123 || e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0) || e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0) || e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0) || e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        document.head.remove();
        document.body.remove();
        console.clear();
        document.write("<center><h1>Lỗi không xác định :((</h1><hr><p>Bạn hãy refresh lại page nhé!</p></center>");
        return false;
    }
}
