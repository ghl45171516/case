$(function () {
    // e.stopPropagation();
    var box = document.querySelector('header div');
    var hgroup = document.querySelector('hgroup');
    var spans = hgroup.querySelectorAll('span');
    var div = hgroup.querySelectorAll('div');
    var fool = true;
    var x = true;
    box.addEventListener('click', function () {
        if (fool) {
            fool = false;
            box.innerHTML = '<i class="fa fa-close"></i>';
            hgroup.style.display = 'block';
        } else {
            box.innerHTML = '<i class="fa fa-bars"></i>';
            hgroup.style.display = 'none';
            fool = true;
        }
    })
    for (var i = 0; i < spans.length; i++) {
        spans[i].index = i;
        spans[i].addEventListener('click', function () {
            if (x) {
                x=false
                this.innerHTML = '<i class="fa fa-chevron-up"></i>'
                div[this.index].style.display = 'block';
            }else {
                this.innerHTML = '<i class="fa fa-chevron-down"></i>'
                div[this.index].style.display = 'none';
                x = true;
            }
        })
    }
})
