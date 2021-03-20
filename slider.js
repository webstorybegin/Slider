function Slider() {
  this.urlImages =[];
  this.currentImageIndex = 0;
  this.btnPrev = document.getElementById('btnPrev');
  this.btnNext = document.getElementById('btnNext');
  this.slideImage = document.getElementById('showImage');
  this.start = function () {
    let that = this;
    this.btnPrev.addEventListener('click', function (e) {
      that.showPrev(e)
    })
    this.btnNext.addEventListener('click', function (e) {
      that.showNext(e)
    })
    this.urlImages.push('https://media.wired.com/photos/5d09594a62bcb0c9752779d9/master/pass/Transpo_G70_TA-518126.jpg');
    this.urlImages.push('https://cdn.thegentlemansjournal.com/wp-content/uploads/2020/01/2020-cars-Mclaren-header-1800x756-c-center.jpg');
    this.urlImages.push('https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iho0QqgeF4K8/v1/1000x-1.jpg');
    this.urlImages.push('https://www.aitrends.com/wp-content/uploads/2019/09/9-13SportsCar-2.jpg');
    this.btnPrev.disabled = true;
    this.slideImage.src = this.urlImages[this.currentImageIndex];
  };
  this.showPrev = function () {
    this.currentImageIndex--;
    this.slideImage.src = this.urlImages[this.currentImageIndex];
    this.btnNext.disabled = false;
    if (this.currentImageIndex === 0) {
      this.btnPrev.disabled = true;
    }
  };
  this.showNext = function () {
    this.currentImageIndex++;
    this.slideImage.src = this.urlImages[this.currentImageIndex]
    this.btnPrev.disabled = false
    if (this.currentImageIndex === (this.urlImages.length - 1)) {
      this.btnNext.disabled = true
    }
  }
}
let slider = new Slider();
slider.start();