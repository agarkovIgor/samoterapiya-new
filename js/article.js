
 function onEntry(entry) {
            entry.forEach(change => {
                if (change.isIntersecting) {
                    change.target.classList.add('show');
                } else {
                    change.target.classList.remove('show')
                }
            });
        }
        let options = {
            threshold: [0.5]
        };
        let observer = new IntersectionObserver(onEntry, options);
        let linesRight = document.querySelectorAll(".right");
        let linesLeft = document.querySelectorAll(".left");


        for (let elem of linesRight) {
            observer.observe(elem);
        }
        for (let elem of linesLeft) {
            observer.observe(elem);
        }