const dummyData = [
    {empireName: 'Roman', span: '3.71'},
    {empireName: 'British', span: '26.35'},
    {empireName: 'Mongol', span: '17.81'},
]

function svgCanvasHeight(dataArray){
    return dataArray.length * 65 + 20;
};

const canvasWidth = 585;
const canvasHeight = svgCanvasHeight(dummyData);

const svg = d3.select('#data-canvas')
    .attr('width', canvasWidth)
    .attr('height', canvasHeight);

const greyRects = svg.selectAll('rect.background').data(dummyData);

greyRects.enter()
    .append('rect')
    .attr('width', 550)
    .attr('height', 40)
    .attr('y', (d,i) => {
        return i * 65
    })
    .attr('fill', 'grey')
    .classed('background', true);

const redRects = svg.selectAll('rect.colorBar').data(dummyData);

redRects.enter()
    .append('rect')
    .attr('width', (d) => d.span)
    .attr('height', 40)
    .attr('y', (d,i) => {
        return i * 65
    })
    .attr('fill', 'red')
    .classed('colorBar', true);
    
