export default function Pagination({totalProducts,pageSize, setCurrentPage}){
    const pages=[]
    for(let i=0;i<Math.ceil(totalProducts/pageSize);i++){
        pages.push(i+1)
    }   
    return(
        <>
        {pages.map((pageNumber,index)=>{
            return (<button 
                    onClick={()=>setCurrentPage(pageNumber)}
                    key={index}
                    >
                    {pageNumber}
                    </button>
            )
            }
        )}
        </>
    )
}