/*
 Highstock JS v8.1.0 (2020-05-05)

 Indicator series type for Highstock

 (c) 2010-2019 Daniel Studencki

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/acceleration-bands",["highcharts","highcharts/modules/stock"],function(d){a(d);a.Highcharts=d;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function d(a,c,d,h){a.hasOwnProperty(c)||(a[c]=h.apply(null,d))}a=a?a._modules:{};d(a,"mixins/multipe-lines.js",[a["parts/Globals.js"],a["parts/Utilities.js"]],function(a,c){var d=
c.defined,h=c.error,q=c.merge,l=a.seriesTypes.sma;return{pointArrayMap:["top","bottom"],pointValKey:"top",linesApiNames:["bottomLine"],getTranslatedLinesNames:function(b){var a=[];(this.pointArrayMap||[]).forEach(function(f){f!==b&&a.push("plot"+f.charAt(0).toUpperCase()+f.slice(1))});return a},toYData:function(b){var a=[];(this.pointArrayMap||[]).forEach(function(f){a.push(b[f])});return a},translate:function(){var b=this,a=b.pointArrayMap,f=[],c;f=b.getTranslatedLinesNames();l.prototype.translate.apply(b,
arguments);b.points.forEach(function(d){a.forEach(function(a,h){c=d[a];null!==c&&(d[f[h]]=b.yAxis.toPixels(c,!0))})})},drawGraph:function(){var b=this,a=b.linesApiNames,f=b.points,c=f.length,r=b.options,u=b.graph,v={options:{gapSize:r.gapSize}},m=[],k;b.getTranslatedLinesNames(b.pointValKey).forEach(function(b,a){for(m[a]=[];c--;)k=f[c],m[a].push({x:k.x,plotX:k.plotX,plotY:k[b],isNull:!d(k[b])});c=f.length});a.forEach(function(a,f){m[f]?(b.points=m[f],r[a]?b.options=q(r[a].styles,v):h('Error: "There is no '+
a+' in DOCS options declared. Check if linesApiNames are consistent with your DOCS line names." at mixin/multiple-line.js:34'),b.graph=b["graph"+a],l.prototype.drawGraph.call(b),b["graph"+a]=b.graph):h('Error: "'+a+" doesn't have equivalent in pointArrayMap. To many elements in linesApiNames relative to pointArrayMap.\"")});b.points=f;b.options=r;b.graph=u;l.prototype.drawGraph.call(b)}}});d(a,"indicators/acceleration-bands.src.js",[a["parts/Globals.js"],a["parts/Utilities.js"],a["mixins/multipe-lines.js"]],
function(a,c,d){var h=c.correctFloat,q=c.merge;c=c.seriesType;var l=a.seriesTypes.sma;c("abands","sma",{params:{period:20,factor:.001,index:3},lineWidth:1,topLine:{styles:{lineWidth:1}},bottomLine:{styles:{lineWidth:1}},dataGrouping:{approximation:"averages"}},q(d,{pointArrayMap:["top","middle","bottom"],pointValKey:"middle",nameBase:"Acceleration Bands",nameComponents:["period","factor"],linesApiNames:["topLine","bottomLine"],getValues:function(a,c){var b=c.period,d=c.factor;c=c.index;var r=a.xData,
u=(a=a.yData)?a.length:0,v=[],m=[],k=[],q=[],w=[],e;if(!(u<b)){for(e=0;e<=u;e++){if(e<u){var g=a[e][2];var n=a[e][1];var t=d;g=h(n-g)/(h(n+g)/2)*1E3*t;v.push(a[e][1]*h(1+2*g));m.push(a[e][2]*h(1-2*g))}if(e>=b){g=r.slice(e-b,e);var p=a.slice(e-b,e);t=l.prototype.getValues.call(this,{xData:g,yData:v.slice(e-b,e)},{period:b});n=l.prototype.getValues.call(this,{xData:g,yData:m.slice(e-b,e)},{period:b});p=l.prototype.getValues.call(this,{xData:g,yData:p},{period:b,index:c});g=p.xData[0];t=t.yData[0];n=
n.yData[0];p=p.yData[0];k.push([g,t,p,n]);q.push(g);w.push([t,p,n])}}return{values:k,xData:q,yData:w}}}}));""});d(a,"masters/indicators/acceleration-bands.src.js",[],function(){})});
//# sourceMappingURL=acceleration-bands.js.map