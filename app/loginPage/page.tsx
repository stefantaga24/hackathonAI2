import Rectangle from "../Rectangle";
import Image from "next/image";
import Link from "next/link";
function LoginRectangle(props: any) {
    return (

        <div className={" w-[" + props.length.toString() + "] flex items-center justify-center h-[60px] bg-[#D9D9D9] rounded-[40px] opacity-70"}>
            <div className="flex items-center justify-center font-bold text-[25px]">
                Log in
            </div>
        </div>

    );

}
export default function Home() {
    return (
        <main className="flex min-h-screen flex-row" style={{ backgroundImage: "url('BackgroundImage.png')" }}>
            <div className="flex flex-1 justify-center items-center flex-col">
                <div className="flex w-full flex-col justify-center items-center">
                    <div className="flex w-[80%] flex-col">
                        <div className="font-bold text-[40px] ml-[20px]">
                            E-mail
                        </div>
                        <Rectangle length={"80%"}>
                        </Rectangle>
                    </div>
                </div>
                <div className="flex w-full flex-col justify-center items-center">
                    <div className="flex w-[80%] flex-col">
                        <div className="font-bold text-[40px] ml-[20px]">
                            Password
                        </div>
                        <Rectangle length={"80%"}>
                        </Rectangle>
                    </div>
                </div>
            </div>
            <div className="flex flex-1 w-full">
                <div className="flex w-full flex-col justify-center">
                    <div className="flex w-[200px] items-center flex-col">
                        <div className="bg-cover flex w-[118.5px] h-[118px] justify-center items-center"
                            style={{ backgroundImage: "url('Circle.png')" }}>
                            <Image
                                src="/RobotPic.png"
                                alt="Circle"
                                height={93.5}
                                width={88}
                            >

                            </Image>
                        </div>
                        <Link 
                        key={""}
                        href={"home"} 
                        className={" w-[150px] flex items-center justify-center h-[60px] bg-[#D9D9D9] rounded-[40px] opacity-70"}>
                            <div className="flex items-center justify-center font-bold text-[25px]">
                                Log in
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}