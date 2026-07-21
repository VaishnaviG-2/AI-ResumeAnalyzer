export const validateResume = (file) => {

    const allowedExtensions = [
        "pdf",
        "doc",
        "docx"
    ];


    const fileExtension =
        file.name.split(".").pop().toLowerCase();


    if(!allowedExtensions.includes(fileExtension)){
        return "Only PDF, DOC and DOCX files are allowed";
    }


    const maxSize = 5 * 1024 * 1024;


    if(file.size > maxSize){
        return "File size should be less than 5MB";
    }


    return null;

};