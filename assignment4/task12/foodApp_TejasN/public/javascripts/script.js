if(!!document.querySelector('.img-upload-wrap')){
    const btnUpload = document.querySelector('#upload_file');
    const errTxt = document.querySelector('.error_msg');
    let imgStr = "";
    btnUpload.addEventListener('change', (e) => {
        let ext = btnUpload.value.split('.').pop().toLowerCase();
        if(!['gif','png','jpg','jpeg'].includes(ext))
            errTxt.innerHTML = "Not an image"
        else{
            document.querySelector('.button_outer').style.display = "none";
            let uploadedFile = `/images/${e.target.files[0].name}`;
            document.querySelector('#uploaded_view').innerHTML = `<img src=${uploadedFile} />`;
            document.querySelector('#uploaded_view').classList.add('show');
            imgStr = e.target.files[0].name;
            errTxt.innerHTML = imgStr;
            errTxt.classList.add('no-err')
        }
    });

    document.querySelector('.submt-new-fd').addEventListener('click', (e) => {
        e.preventDefault();
        const txtToBeValidt = document.querySelectorAll('.vld');
        let formSubmitFlag = false;
        if(!!imgStr){
            document.querySelector('#img').value = imgStr;
            formSubmitFlag = true;
        }
        else{
            errTxt.innerHTML = "Food image is required";
            formSubmitFlag = false;
        }

        txtToBeValidt.forEach(elem => {
            if(elem.value.trim().length <= 0){
                elem.nextElementSibling.innerHTML = "This field is required";
                formSubmitFlag = false;
            }
            else{
                elem.nextElementSibling.innerHTML = "";
                formSubmitFlag = true;
            }
        });

        if(formSubmitFlag)
            document.querySelector('.new-food-wrap form').submit();
    });
}