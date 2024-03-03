import Rectangle from "../Rectangle";
import Image from "next/image";
function LoginRectangle(props : any){
    return (
    
    <div className = {" w-[" + props.length.toString() +  "] h-[60px] bg-[#D9D9D9] rounded-[40px] opacity-70"}> 
        <div className = "flex items-center justify-center font-bold text-[35px]">
            Log in 
        </div>
    </div> 
    
    );

}   
export default function Home()
{
    return (
        <main className="flex min-h-screen flex-row" style = {{backgroundImage: "url('BackgroundImage.png')"}}>
            <div className = "flex flex-1 justify-center items-center flex-col">
                <div className = "flex w-full flex-col justify-center items-center">
                <div className = "flex w-[80%] flex-col">
                    <div className = "font-bold text-[40px] ml-[20px]">
                        E-mail
                    </div>
                    <Rectangle length ={"80%"}>
                    </Rectangle>
                    </div>
                </div>
                <div className = "flex w-full flex-col justify-center items-center">
                    <div className = "flex w-[80%] flex-col">
                        <div className = "font-bold text-[40px] ml-[20px]">
                        Password
                    </div>
                    <Rectangle length ={"80%"}>
                    </Rectangle>
                    </div>
                </div>
            </div>
            <div className = "flex flex-1">
                <div>       
                    <div style = {{backgroundImage : "url('Circle.png')"}}>
                        <Image
                            src="/RobotPic.png"
                            alt="Circle" 
                            height = {187}
                            width = {176}
                            >

                        </Image>
                    </div>
                <LoginRectangle length={"500px"}>

                </LoginRectangle>
                </div>              
            </div>
        </main> 
    );
}