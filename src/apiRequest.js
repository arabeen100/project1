const apiReq=async(url='',objOptions=null,errMes=null)=>{
    try {
        const response=await fetch(url,objOptions);
        if(!response.ok)throw Error("please reload the page")

        
    } catch (err) {
        errMes=err.message;
    }finally{
        return errMes;

    }
}
export default apiReq;