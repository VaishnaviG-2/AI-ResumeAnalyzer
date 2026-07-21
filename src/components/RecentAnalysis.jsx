import { FaFilePdf } from "react-icons/fa";


function RecentAnalysis(){

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
        Recent Analysis
      </h2>



      {/* Empty State */}

      <div className="
        h-40
        flex
        flex-col
        items-center
        justify-center
        text-gray-400
      ">

        <FaFilePdf className="text-4xl mb-3"/>


        <p>
          No resume analysis yet
        </p>


      </div>


    </div>

  );

}


export default RecentAnalysis;