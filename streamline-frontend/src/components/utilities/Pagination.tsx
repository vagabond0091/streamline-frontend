import { useState } from "react";

function Pagination(props:any){
    return (
        <div>
        {props.totalPages > 1 && (
            <div className="flex justify-center mt-6 space-x-2">
                <button 
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition text-white rounded-lg  disabled:opacity-50" 
                    onClick={() => props.setCurrentPage((prev: number) => Math.max(prev - 1, 1))}
                    disabled={props.currentPage === 1}
                >
                    Prev
                </button>
                <span className="px-4 py-2 bg-gray-200 rounded-lg">Page {props.currentPage} of {props.totalPages}</span>
                <button 
                    className="px-4 py-2  bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition text-white rounded-lg  disabled:opacity-50" 
                    onClick={() => props.setCurrentPage((prev: number) => Math.min(prev + 1, props.totalPages))}
                    disabled={props.currentPage === props.totalPages}
                >
                    Next
                </button>
                </div>
          )}
        </div>
          
    );

}
export default Pagination;