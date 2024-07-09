import Axios from 'axios';

export default  function forgetfunc(){
    return async function(e){
        e.preventDefault();
        try{
            const res=  await Axios.post('http://localhost:3000/api/v1/users/forgetPassword',{
                email: e.target.email.value});
                if(res.data.status === 'success'){
                    document.getElementById('instruction').style.display = 'none';
                    document.getElementById('errMessage').style.visibility = 'visible';
                    document.getElementById('errMessage').style.color = 'green';
                    document.getElementById('errMessage').innerHTML = res.data.message;
                 
                 }
        }
        catch(err){
            if(err.response) {
                document.getElementById('instruction').style.display = 'none';
                document.getElementById('errMessage').style.visibility = 'visible';
                document.getElementById('errMessage').innerHTML = err.response.data.message;
               
            }else{
                document.getElementById('errMessage').style.display = 'none';
                alert(err)
            }
           
        }
    }

}