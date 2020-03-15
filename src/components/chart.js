import React from 'react';
import { XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, VerticalBarSeries} from 'react-vis';


const Chart = (props) => {
    // console.log(props.data);
    let dataFromServer = props.data;

    console.log(dataFromServer);
    let averageScoreCount = 0;
    // let belowAverageScoreCount = 0;
    // let aboveAverageScoreCount = 0;
    let averageHeight1992 = 0;
    let averageHeight1993 = 0;
    let averageHeight1994 = 0;
    let averageHeight1995 = 0;
    let averageHeight1996 = 0;
    let averageHeight1997 = 0;

    let averageWeight1992 = 0;
    let averageWeight1993 = 0;
    let averageWeight1994 = 0;
    let averageWeight1995 = 0;
    let averageWeight1996 = 0;
    let averageWeight1997 = 0;
    let count = 0;
    dataFromServer.map(element => {
        count = count + 1;
        averageScoreCount = (averageScoreCount + element['SCORE']) / 2;
        if (element['YOB'] === 1992) {
            averageHeight1992 = (averageHeight1992 + element['HEIGHT']) / 2;
        } else if (element['YOB'] === 1993) {
            averageHeight1993 = (averageHeight1993 + element['HEIGHT']) / 2;
        } else if (element['YOB'] === 1994) {
            averageHeight1994 = (averageHeight1994 + element['HEIGHT']) / 2;
        } else if (element['YOB'] === 1995) {
            averageHeight1995 = (averageHeight1995 + element['HEIGHT']) / 2;
        } else if (element['YOB'] === 1996) {
            averageHeight1996 = (averageHeight1996 + element['HEIGHT']) / 2;
        } else {
            averageHeight1997 = (averageHeight1997 + element['HEIGHT']) / 2;
        }

        if (element['YOB'] === 1992) {
            averageWeight1992 = (averageWeight1992 + element['WEIGHT']) / 2;
        } else if (element['YOB'] === 1993) {
            averageWeight1993 = (averageWeight1993 + element['WEIGHT']) / 2;
        } else if (element['YOB'] === 1994) {
            averageWeight1994 = (averageWeight1994 + element['WEIGHT']) / 2;
        } else if (element['YOB'] === 1995) {
            averageWeight1995 = (averageWeight1995 + element['WEIGHT']) / 2;
        } else if (element['YOB'] === 1996) {
            averageWeight1996 = (averageWeight1996 + element['WEIGHT']) / 2;
        } else {
            averageWeight1997 = (averageWeight1997 + element['WEIGHT']) / 2;
        }
    })
    console.log(averageHeight1992);

    

    return (
        <div>

            <XYPlot
                width={300}
                height={300}>
                <VerticalGridLines></VerticalGridLines>
                <HorizontalGridLines></HorizontalGridLines>
                <XAxis title="YoB"></XAxis>
                <YAxis title="Average Height (cm)"></YAxis>
                <VerticalBarSeries data={[
                    { x: 1992, y: averageHeight1992 },
                    { x: 1993, y: averageHeight1993 },
                    { x: 1994, y: averageHeight1994 },
                    { x: 1995, y: averageHeight1995 },
                    { x: 1996, y: averageHeight1996 },
                    { x: 1997, y: averageHeight1997 },
                ]} />
            </XYPlot>
            <br />
            <XYPlot
                width={300}
                height={300}>
                <VerticalGridLines></VerticalGridLines>
                <HorizontalGridLines></HorizontalGridLines>
                <XAxis title="YoB"></XAxis>
                <YAxis title="Average Weight (kg)"></YAxis>
                <VerticalBarSeries data={[
                    { x: 1992, y: averageWeight1992 },
                    { x: 1993, y: averageWeight1993 },
                    { x: 1994, y: averageWeight1994 },
                    { x: 1995, y: averageWeight1995 },
                    { x: 1996, y: averageWeight1996 },
                    { x: 1997, y: averageWeight1997 },
                ]} />
            </XYPlot>
        </div>
    )
}






export default Chart;