"use client"

export default function () {
    function handler() {
        alert("button clicked!!")
    }

    return <>
        <div className=" flex justify-center items-center h-screen w-screen bg-blue-100">
            <div>
                <h3 className="text-blue text-lg ">SignIn</h3>
                Name <br />
                <input className="border rounded border-grey-100" type="text" placeholder="hardik" /><br />
                Email <br />
                <input className="border rounded border-grey-100" type="email" placeholder="hardik@gmail.com" /><br />
                Password <br />
                <input className="border rounded border-grey-100" type="password" placeholder="123456" />

                <button onClick={handler} className="border cursor-pointer rounded-md bg-black text-white" type="submit">SignIn</button>
            </div>
        </div>
    </>
}