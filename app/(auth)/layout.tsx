import { ReactNode } from "react";

export default function ({children}:{children:ReactNode}){
    return <>
        <div className="border-b text-center">
            20% off after siginup in 3 days !!
               
        </div>
         {children}
    </>
}