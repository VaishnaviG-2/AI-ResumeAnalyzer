import {
    createContext,
    useContext,
    useRef
} from "react";


const UploadContext = createContext();


export const UploadProvider = ({children}) => {


    const uploadRef = useRef(null);



    const openUpload = () => {

        uploadRef.current?.click();

    };



    return (

        <UploadContext.Provider
            value={{
                uploadRef,
                openUpload
            }}
        >

            {children}

        </UploadContext.Provider>

    );

};



export const useUpload = () => useContext(UploadContext);