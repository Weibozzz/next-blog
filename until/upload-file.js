
/**
 * 将图片转化为base64
 */
export const imgBase64 = (file, callback) => {
  // 看支持不支持FileReader
  if (!file || !window.FileReader) return;
  // 创建一个 Image 对象
  let image = new Image();
  // 绑定 load 事件处理器，加载完成后执行
  image.onload = function () {
    // 创建 canvas DOM 对象
    let canvas = document.createElement('canvas');
    // 返回一个用于在画布上绘图的环境, '2d' 指定了您想要在画布上绘制的类型
    let ctx = canvas.getContext('2d');
    // 如果高度超标 // 参数，最大高度
    let MAX_HEIGHT = 3000;
    if (image.height > MAX_HEIGHT) {
      // 宽度等比例缩放 *=
      image.width *= MAX_HEIGHT / image.height;
      image.height = MAX_HEIGHT;
    }
    // 获取 canvas的 2d 环境对象,
    // 可以理解Context是管理员，canvas是房子
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // 重置canvas宽高
    canvas.width = image.width;
    canvas.height = image.height;
    // 将图像绘制到canvas上
    ctx.drawImage(image, 0, 0, image.width, image.height);

    callback(image, canvas);

  };
  if (/^image/.test(file.type)) {
    // 创建一个reader
    let reader = new FileReader();
    // 读取成功后的回调
    reader.onload = function () {
      // 设置src属性，浏览器会自动加载。
      // 记住必须先绑定事件，才能设置src属性，否则会出同步问题。
      image.src = this.result;
    };
    // 将图片将转成 base64 格式
    reader.readAsDataURL(file);
  }
};
/**
 * 把Base64转换成file文件
 */
export const convertBase64UrlToFile = (dataurl, filename) => {
  let arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
};

/**
 * 检查并压缩图片大小
 */
export const checkAndHandleCompression = (file, maxSize = 1) => {
  return new Promise((resolve, reject) => {

    imgBase64(file, (image, canvas) => {
      maxSize = maxSize * 1024; // 1M (单位KB)
      let fileSize = file.size / 1024; // 、图片大小 (单位KB)

      let uploadSrc,
        uploadFile;
      // 如果图片大小大于maxSize，进行压缩
      console.log({ fileSize, maxSize });
      if (fileSize > maxSize) {
        uploadSrc = canvas.toDataURL(file.type, maxSize / fileSize); // 转换成DataURL
        uploadFile = convertBase64UrlToFile(uploadSrc, file.name); // 转成file文件
      } else {
        uploadSrc = image.src;
        uploadFile = file;
      }

      let compressedSize = uploadFile.size / 1024;// 压缩后图片大小 (单位KB)
      console.log('压缩后图片大小kb', compressedSize);
      // 判断图片大小是否小于maxSize，如果大于则继续压缩至小于为止
      if (compressedSize.toFixed(2) > maxSize) {
        checkAndHandleCompression(uploadFile);
      } else {
        let fileOptions = { uploadSrc, uploadFile };
        resolve(fileOptions);
      }
    });

  });
};
