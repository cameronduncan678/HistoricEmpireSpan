//Test data
const dummyData = [
    {empireName: 'Roman', span: '3.71'},
    {empireName: 'British', span: '26.35'},
    {empireName: 'Mongol', span: '17.81'},
]

//Function for dynamic SVG canvas height
function svgCanvasHeight(dataArray){
    return dataArray.length * 65 + 20;
};

d3.csv('../data/historicalEmpireData_Format.csv').then(data =>{

    data.forEach(el => {
        el.MaximumlandareaPerc = Number(el.MaximumlandareaPerc);
    });

    console.log(data);
    const canvasWidth = 585;
    const canvasHeight = svgCanvasHeight(data);

    const svg = d3.select('#data-canvas')
    .attr('width', canvasWidth)
    .attr('height', canvasHeight);

    //Scales
    var x_scale = d3.scaleLinear()
    .domain([0, 50])
    .range([0, 585]);


    const greyRects = svg.selectAll('rect.background').data(data);

    greyRects.enter()
    .append('rect')
    .attr('width', 550)
    .attr('height', 40)
    .attr('y', (d,i) => {
        return i * 65
    })
    .attr('fill', 'grey')
    .classed('background', true);

    const redRects = svg.selectAll('rect.colorBar').data(data);

    redRects.enter()
    .append('rect')
    .attr('width', (d) => x_scale(d.MaximumlandareaPerc))
    .attr('height', 40)
    .attr('y', (d,i) => {
        return i * 65
    })
    .attr('fill', 'red')
    .classed('colorBar', true);

    const dataNames = svg.selectAll('text').data(data);

        dataNames.enter()
        .append('text')
        .attr('text-anchor', 'end')
        .attr('x', 550)
        .attr('y', (d,i) =>{
            return (i + 0.4) * 65
        })
        .text((d) => d.Empire)
        .attr('fill', 'white');
});







    
