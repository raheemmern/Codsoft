function downloadCV() {
    var cvId = '1b3xd7kcgebzfh8mcmfDXCeta7hJdceYM'; 
    var cvPath = 'https://drive.google.com/uc?export=download&id=' + cvId;
    var link = document.createElement('a');
    link.href = cvPath;
    link.download = 'abdulraheem.pdf'; 
    
    document.body.appendChild(link);
    
    link.click();
    
    document.body.removeChild(link);
}
