import { useRef, useEffect } from "react";

function Canvas() {
  const canvasRef=useRef(null);
  useEffect(()=>{
    const current:HTMLCanvasElement|null=canvasRef.current;
    const context=current!.getContext("2d");
    context?.beginPath();
    context?.moveTo(10,10);
    context?.lineTo(10,150);
    context?.lineTo(300,150);
    context?.stroke();
    //@ts-ignore
    context?.font="14px sans-serif";
    let data=[10,20,30,40,50];
    let xdata=[1,2,3,4,5];
    let intervals=data.length/10;
    let count=0;
    for(let i=0;i<intervals;i++){
      context?.strokeText(`${data[i]}`,10,)
    }
    //@ts-ignore
    context?.strokeStyle="red";
 
  },[])
  return <canvas ref={canvasRef} style={{height:"40vh",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}} id="history"></canvas>;
}

export default Canvas;
