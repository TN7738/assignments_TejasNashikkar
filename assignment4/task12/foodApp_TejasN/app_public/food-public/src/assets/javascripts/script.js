if(!!document.querySelector('.img-upload-wrap')){
    const btnUpload = document.querySelector('#upload_file');
    const errTxt = document.querySelector('.error_msg');
    let imgStr = "";
    btnUpload.addEventListener('change', (e) => {
        let ext = btnUpload.value.split('.').pop().toLowerCase();
        if(!['gif','png','jpg','jpeg'].includes(ext)){
            errTxt.innerHTML = "Not an image";
            document.querySelector('#img').value = "";
        }
        else{
            document.querySelector('.button_outer').style.display = "none";
            let uploadedFile = `/assets/images/${e.target.files[0].name}`;
            document.querySelector('#uploaded_view').innerHTML = `<img src=${uploadedFile} />`;
            document.querySelector('#uploaded_view').classList.add('show');
            imgStr = e.target.files[0].name;
            document.querySelector('#img').value = imgStr;
            errTxt.innerHTML = imgStr;
            errTxt.classList.add('no-err');
        }
    });

    document.querySelector('.submt-new-fd').addEventListener('click', (e) => {
        const txtToBeValidt = document.querySelectorAll('.vld');
        let formSubmitFlag = false;
        if(!!imgStr){
            formSubmitFlag = true;
        }
        else{
            errTxt.innerHTML = "Food image is required";
            formSubmitFlag = false;
            e.preventDefault();
        }
        txtToBeValidt.forEach(elem => {
            if(elem.value.trim().length <= 0){
                elem.nextElementSibling.innerHTML = "This field is required";
                formSubmitFlag = false;
                e.preventDefault();
            }
            else{
                elem.nextElementSibling.innerHTML = "";
                formSubmitFlag = true;
            }
        });
        if(formSubmitFlag)
            return true;
    });
}