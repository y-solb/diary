const url = process.env.REACT_APP_CLOUDINARY_API_KEY;
const name = process.env.REACT_APP_CLOUDINARY_PROJECT_NAME;

class ImageUploader {
  async upload(file) {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', name);

    const res = await fetch(url, {
      method: 'POST',
      body: data,
    });
    return await res.json();
  }
}

export default ImageUploader;
