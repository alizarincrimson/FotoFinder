class Photo {
  constructor(id, file, title, caption) {
    this.id = id || Date.now();
    this.file = file;
    this.title = title;
    this.caption = caption;
    this.favorite = false;
  }
  saveToStorage() {
    localStorage.setItem('storedImages', JSON.stringify(imagesArr));
  }
  deleteFromStorage(selectedId) {
    var selectedId = imagesArr.findIndex(function(photo) {
    return photo.id === selectedId;
  });
  imagesArr.splice(selectedId, 1);
  this.saveToStorage();
  }
  updatePhoto() {
    var photoIdx = imagesArr.findIndex(function(photoObj) {
      return photoObj.id === this.id;
    }, this); 
    imagesArr.splice(photoIdx, 1, this);
    this.saveToStorage();
  }
}
