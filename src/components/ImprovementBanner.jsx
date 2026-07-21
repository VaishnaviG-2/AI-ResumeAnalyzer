import {
    FaRocket
} from "react-icons/fa";


import {
    useUpload
} from "../context/UploadContext";



function ImprovementBanner(){


const {
    openUpload
}=useUpload();



return(

<div className="
bg-gradient-to-r
from-violet-600
to-purple-500
rounded-2xl
p-6
text-white
flex
items-center
justify-between
">


<div>


<div className="
flex
items-center
gap-3
">


<FaRocket/>


<h2 className="
text-xl
font-bold
">

Keep Improving!

</h2>


</div>


<p className="
mt-2
text-purple-100
">

Upload another resume and get better AI suggestions.

</p>


</div>





<button

onClick={openUpload}

className="
bg-white
text-violet-600
px-6
py-3
rounded-xl
font-semibold
hover:bg-gray-100
transition
"

>

Upload Another Resume

</button>



</div>

)

}


export default ImprovementBanner;