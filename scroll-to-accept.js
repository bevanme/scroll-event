function scrollToAccept() {
    const terms_and_conditions = document.querySelector('.terms-and-conditions');


    if (terms_and_conditions) {
        // observe if something is viewable on the page ... define where to observe and to what extent
 //       const ob = new IntersectionObserver(obCallBack, { root: terms_and_conditions, threshold: 1});
 const ob = new IntersectionObserver(obCallBack);
        // define what to observe
        const watch = document.querySelector('#copyright');
        // observe
        ob.observe(watch);

        function obCallBack(payload) {

 
            console.log(payload[0].isIntersecting, payload[0].intersectionRatio);
        }    
    }

//    if (terms) {
//        terms.addEventListener('scroll', function(e) {
//            console.log(e.currentTarget);
//            console.log(e.currentTarget.scrollTop);
//            console.log(e.currentTarget.scrollHeight);
//        });
//    }

 
}

scrollToAccept();