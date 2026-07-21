import {
  FaCheckCircle,
  FaBullseye,
  FaFileAlt,
  FaChartLine,
} from "react-icons/fa";


function ResumeScore() {

  return (

    <div className="
      bg-white
      rounded-2xl
      shadow-sm
      p-6
    ">


      <h2 className="
        text-lg
        font-semibold
        text-gray-900
        mb-5
      ">
        Resume Score
      </h2>



      {/* Gauge */}

      <div className="
        flex
        justify-center
        items-center
      ">


        <div className="
          w-44
          h-44
          rounded-full
          border-[14px]
          border-violet-600
          flex
          items-center
          justify-center
        ">


          <div className="text-center">

            <h1 className="
              text-4xl
              font-bold
              text-violet-600
            ">
              88%
            </h1>


            <p className="
              text-sm
              text-gray-500
            ">
              ATS Score
            </p>


          </div>


        </div>


      </div>



      {/* Score Details */}


      <div className="
        mt-6
        space-y-3
      ">


        <ScoreItem
          icon={<FaBullseye />}
          title="Keywords"
          value="90%"
        />


        <ScoreItem
          icon={<FaFileAlt />}
          title="Formatting"
          value="85%"
        />


        <ScoreItem
          icon={<FaChartLine />}
          title="Structure"
          value="88%"
        />


        <ScoreItem
          icon={<FaCheckCircle />}
          title="Content Depth"
          value="82%"
        />


      </div>


    </div>

  );
}



function ScoreItem({icon,title,value}){


return(

<div className="
flex
items-center
justify-between
bg-gray-50
rounded-lg
p-3
">


<div className="
flex
items-center
gap-3
text-gray-700
">

<span className="
text-violet-600
">

{icon}

</span>


<span>
{title}
</span>


</div>


<span className="
font-semibold
text-gray-900
">

{value}

</span>


</div>


)

}


export default ResumeScore;