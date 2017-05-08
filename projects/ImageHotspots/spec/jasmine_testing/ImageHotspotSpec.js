describe("ImageHotspot", function(){
  var ImageHotspot = require('../../lib/jasmine_testing/ImageHotspot');

  var imageHotspot;
  beforeEach(function(){
    imageHotspot = new ImageHotspot();
  })

  it("clicks on a closed hotspot", function(){
    imageHotspot.open();
    expect(imageHotspot.isOpen).toEqual(true);
  })
})