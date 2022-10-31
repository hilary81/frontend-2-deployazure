import http from '../Common';


class UploadFileService {
  upload(file, onUploadProgress) {
    let formData = new FormData();

    formData.append("file", file);

    return http.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }
  getFiles() {
    return http.get("/files");
  }

  deleteFile(name){
    return http.delete("/delete/"+name);
}
}

export default new UploadFileService();