if(!!document.querySelector('.arrow')){
    document.querySelector('.arrow').addEventListener('click', () => {
        document.querySelector('.arrow').scrollIntoView();
    });
} 

// if(!!document.querySelector('.new-phone-wrap')){
//     const btnUpload = document.querySelector('#upload_file');
//     const errTxt = document.querySelector('.error_msg');
//     let imgStr = "";
//     btnUpload.addEventListener('change', (e) => {
//         let ext = btnUpload.value.split('.').pop().toLowerCase();
//         if(!['gif','png','jpg','jpeg'].includes(ext))
//             errTxt.innerHTML = "Not an image"
//         else{
//             document.querySelector('.button_outer').style.display = "none";
//             let uploadedFile = `/images/${e.target.files[0].name}`;
//             document.querySelector('#uploaded_view').innerHTML = `<img src=${uploadedFile} />`;
//             document.querySelector('#uploaded_view').classList.add('show');
//             imgStr = e.target.files[0].name;
//             errTxt.innerHTML = imgStr;
//             errTxt.classList.add('no-err')
//         }
//     });

//     document.querySelector('.submt-new-ph').addEventListener('click', (e) => {
//         e.preventDefault();
//         const txtToBeValidt = document.querySelectorAll('.vld');
//         let formSubmitFlag = false;
//         let storageStr = "";
//         let colorStr = "";
//         let storageChkbxs = document.querySelectorAll('.for-storage_options .chkbx');
//         let colorChkbxs = document.querySelectorAll('.for-colors .chkbx');
//         storageChkbxs.forEach(elem => {
//             if(elem.checked)
//             storageStr.length == 0 ? storageStr += elem.value : storageStr += "," + elem.value;
//         });
//         colorChkbxs.forEach(elem => {
//             if(elem.checked)
//             colorStr.length == 0 ? colorStr += elem.value : colorStr += "," + elem.value;
//         });

//         if(!storageStr){
//             document.querySelector('.err-strg').innerHTML = "&#60;---&nbsp;&nbsp;This field is required";
//             formSubmitFlag = false;
//         }
//         else{
//             document.querySelector('#storage_options').value = storageStr;
//             document.querySelector('.err-strg').innerHTML = "";
//             formSubmitFlag = true;
//         }
//         if(!colorStr){
//             document.querySelector('.err-clrs').innerHTML = "&#60;---&nbsp;&nbsp;This field is required";
//             formSubmitFlag = false;
//         }
//         else{
//             document.querySelector('#colors').value = colorStr;
//             document.querySelector('.err-clrs').innerHTML = "";
//             formSubmitFlag = true;
//         }
//         if(!imgStr){
//             errTxt.innerHTML = "&#60;---&nbsp;&nbsp;This field is required";
//             formSubmitFlag = false;
//         }
//         else{
//             document.querySelector('#image').value = imgStr;
//             errTxt.innerHTML = imgStr;
//             formSubmitFlag = true;
//         }
//         txtToBeValidt.forEach(elem => {
//             if(elem.value.trim().length <= 0){
//                 elem.nextElementSibling.innerHTML = "&#60;---&nbsp;&nbsp;This field is required";
//                 formSubmitFlag = false;
//             }
//             else{
//                 elem.nextElementSibling.innerHTML = "";
//                 formSubmitFlag = true;
//             }
//         });

//         if(formSubmitFlag)
//             document.querySelector('.new-phone-wrap form').submit();
//     });
// }


