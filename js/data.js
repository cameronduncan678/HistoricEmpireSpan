//Qoute and card status
var cardVisible = false;

//Function for dynamic SVG canvas height
function svgCanvasHeight(dataArray) {
  return dataArray.length * 65 + 20;
}

d3.csv('../data/empireData.csv').then((data) => {
  console.log(data);
  data.forEach((el) => {
    el.span = Number(el.span);
  });

  const canvasWidth = 585;
  const canvasHeight = svgCanvasHeight(data);

  const svg = d3
    .select('#data-canvas')
    .attr('width', canvasWidth)
    .attr('height', canvasHeight);

  //Scales
  var x_scale = d3.scaleLinear().domain([0, 50]).range([0, 585]);

  const greyRects = svg.selectAll('rect.background').data(data);

  greyRects
    .enter()
    .append('rect')
    .attr('width', 550)
    .attr('height', 40)
    .attr('y', (d, i) => {
      return i * 65;
    })
    .attr('fill', 'rgb(59, 59, 59)')
    .classed('background', true)

    //Card onclick logic
    .on('click', function (data) {
      if (!cardVisible) {
        cardVisible = true;
        $('#quote').slideUp();
        $('#HistoryCard').slideDown();
      }
      $('#historyCard-title').html(data.name);
      $('#historyCard-span').html(data.span + '%');
      $('#historyCard-text').html(data.history);
    });

  const redRects = svg.selectAll('rect.colorBar').data(data);

  redRects
    .enter()
    .append('rect')
    .attr('width', (d) => x_scale(d.span))
    .attr('height', 40)
    .attr('y', (d, i) => {
      return i * 65;
    })
    .attr('fill', 'rgba(184,27,27,1)')
    .classed('colorBar', true)

    //Card onclick logic
    .on('click', function (data) {
      if (!cardVisible) {
        cardVisible = true;
        $('#quote').slideUp();
        $('#HistoryCard').slideDown();
      }
      $('#historyCard-title').html(data.name);
      $('#historyCard-span').html(data.span + '%');
      $('#historyCard-text').html(data.history);
    });

  const dataNames = svg.selectAll('text').data(data);

  dataNames
    .enter()
    .append('text')
    .attr('text-anchor', 'end')
    .attr('x', 540)
    .attr('y', (d, i) => {
      return (i + 0.4) * 65;
    })
    .text((d) => d.name)
    .attr('font-size', '20px')
    .attr('fill', 'white')

    //Card onclick logic
    .on('click', function (data) {
      if (!cardVisible) {
        cardVisible = true;
        $('#quote').slideUp();
        $('#HistoryCard').slideDown();
      }
      $('#historyCard-title').html(data.name);
      $('#historyCard-span').html(data.span + '%');
      $('#historyCard-text').html(data.history);
    });
});
