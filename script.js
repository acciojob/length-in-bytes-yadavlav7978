const byteSize = (str) => {
let byteSize = 0;
  for (let i = 0; i < str.length; i++) {
    const codePoint = str.charCodeAt(i);

    // Basic ASCII characters (0-127) take up 1 byte each
    if (codePoint < 128) {
      byteSize += 1;
    }
    // Extended ASCII characters (128-255) take up 2 bytes each
    else if (codePoint >= 128 && codePoint <= 255) {
      byteSize += 2;
    }
    // Other Unicode characters (including multi-byte UTF-8 characters)
    else {
      byteSize += 3;
    }
  }
  return byteSize;
      
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
