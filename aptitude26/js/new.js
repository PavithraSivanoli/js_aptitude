var upstreamd=parseInt(prompt("enter upstreamd"));
var upstreamt=parseInt(prompt("enter  upstreamt"));
var downstreamd=parseInt(prompt("enter downstreamd"));
var downstreamt=parseInt(prompt("enter downstreamt"));
upstreamspeed=upstreamd/upstreamt;
downstreamspeed=downstreamd/downstreamt;
b=1/2*(downstreamspeed+upstreamspeed);
alert("total:"+b+"km/hr");
