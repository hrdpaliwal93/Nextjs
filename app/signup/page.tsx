export default function Signup(){
    return <>
    
        <div className=" flex justify-center items-center h-screen w-screen bg-blue-100">
            <div className="border-2 h-max p-2" >
                <h2>signup</h2>
                <br />
                Name <br />
                <input className="border-2 rounded " type="text"placeholder="hardik" /><br />
                email <br />
                <input type="email" className="border-2 rounded " placeholder="hardik@gmail.com" /><br />
                 password <br />
                <input className="border-2 rounded " type="password" placeholder="123456" />
            </div>

        </div>
    
    </>
}