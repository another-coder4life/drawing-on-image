const canvas = new fabric.Canvas('canvas', {isDrawingMode: false});

canvas.setBackgroundImage('/bg.jpg', canvas.renderAll.bind(canvas));

canvas.freeDrawingBrush.color = 'white';
canvas.freeDrawingBrush.width = 10;

$('#draw').on('click', function () {
    canvas.isDrawingMode = !canvas.isDrawingMode;
});

$('#rectangle').on('click', function () {
    canvas.isDrawingMode = false;
    const rectangle = new fabric.Rect({
        left: 40,
        top: 40,
        width: 60,
        height: 60,
        fill: 'transparent',
        stroke: 'white',
        strokeWidth: 7,
    });
    canvas.add(rectangle);
});

$('#circle').on('click', function () {
    canvas.isDrawingMode = false;
    const circle = new fabric.Circle({
        left: 40,
        top: 40,
        radius: 60,
        fill: 'transparent',
        stroke: 'white',
        strokeWidth: 7,
    });
    canvas.add(circle);
});

$('#text').on('click', function () {
    canvas.isDrawingMode = false;
    const text = new fabric.IText('Text', {
        left: 40,
        top: 40,
        objecttype: 'text',
        fontFamily: 'arial black',
        fill: 'white',
    });
    canvas.add(text);
});

$('#remove').on('click', function () {
    canvas.isDrawingMode = false;
    canvas.remove(canvas.getActiveObject());
});

canvas.on('selection:created', function () {
    $('#remove').prop('disabled', '');
});
canvas.on('selection:cleared', function () {
    $('#remove').prop('disabled', 'disabled');
});

$('#tosvg').on('click', function () {
    $('#svg').html('<h1>SVG:</h1><br>' + canvas.toSVG());
});