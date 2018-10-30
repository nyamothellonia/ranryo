const PNGCrop = require('png-crop');
const fs = require('fs');

const config = {width: 1125, height: 2202, top: 132, left: 0};
const configIcon = {width: 288, height: 236, top: 1469, left: 8};

fs.readdir('./tmp-image', function (err, files) {
  if (err) throw err;
  const fileList = [];
  console.log(fileList);

  files.forEach((itemPath) => {
    const imgBuffer = fs.readFileSync('./tmp-image/' + itemPath);

  if (!itemPath.includes('.png')) {
    return;
  }
  console.log(itemPath);

  PNGCrop.cropToStream(imgBuffer, config, function (err, outputStream) {
    if (err) throw err;
    outputStream.pipe(fs.createWriteStream(`./dist/chara-image-list/${itemPath}`));
  });

  PNGCrop.cropToStream(imgBuffer, configIcon, function (err, outputStream) {
    if (err) throw err;
    outputStream.pipe(fs.createWriteStream(`./dist/chara-image-icon/${itemPath}`));
  });
});
});
