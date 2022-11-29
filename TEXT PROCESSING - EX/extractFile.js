function extractFile(input){
    let fileFirstIndex = input.lastIndexOf('\\') + 1;
    let fileLastIndex = input.lastIndexOf('.');
    let fileName = input.substring(fileFirstIndex,fileLastIndex);
    let fileExtension = input.substring(fileLastIndex +1, input.length);
    console.log(`File name: ${fileName}`)
    console.log(`File extension: ${fileExtension}`);

}
extractFile('C:\\Internal\\training-internal\\Template.bak.pptx')