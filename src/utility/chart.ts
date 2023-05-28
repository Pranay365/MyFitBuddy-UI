import { useState, useEffect } from "react";

export function useCanvas(canvas: any, xData: string[], yData: string[]) {
  const [dimensions, setDimensions] = useState([
    window.innerHeight / 2,
    window.innerWidth / 2,
  ]);
  window.onresize = (_) => {
    const [height, width] = [window.innerHeight / 2, window.innerWidth / 2];
    setDimensions([height, width]);
  };
  useEffect(() => {
    if (canvas.current) {
      const canvasEl = new Canvas(
        canvas.current,
        xData,
        yData,
        dimensions[0],
        dimensions[1]
      );
      canvasEl.draw();
    }
  }, [dimensions, canvas.current, xData, yData]);
}
class Canvas {
  canvas: any;
  xData: string[];
  yData: string[];
  height: number;
  width: number;
  constructor(
    canvas: HTMLCanvasElement,
    xData: string[],
    yData: string[],
    height: number,
    width: number
  ) {
    this.canvas = canvas;
    this.xData = xData;
    this.yData = yData;
    this.height = height;
    this.width = width;
    this.draw();
  }
  draw() {
    const context = this.canvas.getContext("2d");
    let height = Math.floor(0.9 * this.height);
    let y = Math.floor(0.1 * this.height);
    let width = Math.floor(0.9 * this.width);
    let x = Math.floor(0.1 * this.width);
    let uniqueXData = Array.from(new Set(this.xData)).sort((a, b) =>
      a > b ? 1 : -1
    );
    let uniqueYData = Array.from(new Set(this.yData)).sort((a, b) =>
      a > b ? 1 : -1
    );
    let maxY = uniqueYData[uniqueYData.length - 1];
    let maxX = uniqueYData[uniqueXData.length - 1];
    let step = Math.floor(height/ +maxY);
    console.log("step and height is ",step,height,maxY);
    let intervalsx = width / (uniqueXData.length + 1);
    let intervalsy = height / (uniqueYData.length + 1);
    //console.log(x, y, height, width, intervalsx, intervalsy);
    //@ts-ignore
    context.strokeStyle = "red";
    context?.beginPath();
    context?.moveTo(x, y);
    context?.lineTo(x, height);
    context?.lineTo(width, height);
    context?.moveTo(x, height);
    context.lineCap="butt";
    context?.stroke();
    //@ts-ignore
    context?.strokeStyle = "black";
    //draw Axis
    for (let i = 1; i <=height/step; i++) {
      //console.log(x, height - intervalsy, uniqueYData[i]);
      context?.beginPath();
      //@ts-ignore
      context?.textAlign = "left";
      //@ts-ignore
      context?.fillStyle = "orange";
      context?.fillText(
        i,
        x - width * 0.05,
        height - i * step+0.1*height
      );
    }
    context?.moveTo(x, height);
    for (let i = 1; i <=intervalsx ; i++) {
      context?.beginPath();
      //@ts-ignore
      context?.textAlign = "left";
      //@ts-ignore
      context?.fillStyle = "orange";
      context?.fillText(
        uniqueXData[i-1],
        x + i * intervalsx,
        height + height * 0.05
      );
    }
    context?.moveTo(x+intervalsx, 1.1*height- +this.yData[0]*step);
    for (let i = 1; i < this.xData.length; i++) {
      context?.lineTo(x + (i + 1) * intervalsx, height - +this.yData[i] * step);
      context?.moveTo(x + (i + 1) * intervalsx, height - +this.yData[i] * step);
    }
    context?.stroke();
  }
}
