class RunText {
    constructor(obj) {
        this.run_text__wrap = document.querySelector(obj.run_text__wrap);
        this.run_text = document.querySelectorAll(obj.run_text);
        this.i = true;
        this.bias_transform = obj.bias_transform || 300;
        this.debounce_time = 0;
        this.run_text__wrap.addEventListener('mousemove', this.move.bind(this))
    }

    move () {
        clearTimeout(this.debounce_time);
        this.debounce_time = setTimeout(() => {
            if (this.i) {
                this.run_text.forEach((item, index, arr) => {
                    if ((index % 2) !== 0) {
                        item.style.transform = `translateX(${this.bias_transform}px)`
                    } else {
                        item.style.transform = `translateX(-${this.bias_transform}px)`
                    }
                });
                this.i = false;
            } else {
                this.run_text.forEach((item, index, arr) => {
                    if ((index % 2) !== 0) {
                        item.style.transform = `translateX(-${this.bias_transform}px)`
                    } else {
                        item.style.transform = `translateX(${this.bias_transform}px)`
                    }
                });
                this.i = true;
            }
        }, 100);
    }
}