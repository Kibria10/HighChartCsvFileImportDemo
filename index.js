document.addEventListener('DOMContentLoaded',()=>{
const options = {
        chart: {
            renderTo: 'chart',
            defaultSeriesType: 'column'
        },
        title: {
            text: 'Kar kase koita Fruit ase'
        },
        xAxis: {
            title: {
                text: 'People'
            },
        },
        yAxis: {
            title: {
                text: 'Fruit Rate'
            },
        },
    };

fetch('data.csv').then(res=>{

	return res.text();
})
.then(csv =>{
	options.data = {csv};
	Highcharts.chart('container', options)

});
});
