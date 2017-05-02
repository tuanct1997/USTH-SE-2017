function ImageHotspot(){
  this.isOpen = false;
}

ImageHotspot.prototype.open = function(){
  if (!this.isOpen){
    console.log("dahdfbahsf");
    this.isOpen = true;
  } else {
    this.isOpen = false;
  }
}

module.exports = ImageHotspot;