const dummyData = [
    {empireName: 'Roman', span: '3.71'},
    {empireName: 'British', span: '26.35'},
    {empireName: 'Mongol', span: '17.81'},
    {empireName: 'Umayyad', span: '8.24'},
    {empireName: 'Ottoman', span: '3.86'},
    {empireName: 'Ottoman', span: '3.86'},
    {empireName: 'Ottoman', span: '3.86'},
    {empireName: 'Ottoman', span: '3.86'},
    {empireName: 'Ottoman', span: '3.86'},
    {empireName: 'Umayyad', span: '8.24'},
    {empireName: 'Ottoman', span: '3.86'},
    {empireName: 'Ottoman', span: '3.86'},
    {empireName: 'Ottoman', span: '3.86'},
    {empireName: 'Ottoman', span: '3.86'},
    {empireName: 'Ottoman', span: '3.86'},
]

function svgCanvasHeight(dataArray){
    return dataArray.length * 65 + 20;
};

const canvasWidth = 585;
const canvasHeight = svgCanvasHeight(dummyData);

const svg = d3.select('#data-canvas')
    .attr('width', canvasWidth)
    .attr('height', canvasHeight);

const rects = svg.selectAll('rect')
    .data(dummyData);

rects.enter()
    .append('rect')
    .attr('width', 550)
    .attr('height', 40)
    .attr('y', (d,i) => {
        return i * 65
    })
    .attr('fill', 'grey');

console.log(rects);