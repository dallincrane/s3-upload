(function() {
  document.getElementById('file_input').onchange = init_upload;
})();

function init_upload() {
  var files = document.getElementById('file_input').files;
  var file = files[0];
  if (file === null) {
    alert('No file selected.');
    return;
  }
  get_signed_request(file);
}

function get_signed_request(file) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/s3_signed_url?file_name='+file.name+'&file_type='+file.type);
  xhr.onreadystatechange = function(){
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        upload_file(file, response.signed_request, response.url);
      }
      else alert('Could not get signed URL.');
    }
  };
  xhr.send();
}

function upload_file(file, signed_request, url) {
  var xhr = new XMLHttpRequest();
  xhr.open('PUT', signed_request);
  xhr.setRequestHeader('x-amz-acl', 'public-read');
  xhr.onload = function() {
    if (xhr.status === 200) {
      document.getElementById('preview').src = url;
      console.log('file uploaded to:', url);
    }
  };
  xhr.onerror = function() { alert('Could not upload file.'); };
  xhr.send(file);
}
