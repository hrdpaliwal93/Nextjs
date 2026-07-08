
import axios from 'axios'

async function getuser(){
    const response = await axios.get("http://localhost:8000/")
    return response.data;
}

// async components -- standard way of doing data fetching in nect js , at the top of the components
export default  async function User(){
const user = await getuser();

       return <>
<div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="p-5 border border-grey-100">
            Name: {user.name} <br />
            Email:{user.email}

        </div>

       </div>

    
    </>
}