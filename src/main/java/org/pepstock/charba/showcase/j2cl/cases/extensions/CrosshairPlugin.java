/**
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at
    
      http://www.apache.org/licenses/LICENSE-2.0
    
    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
*/
package org.pepstock.charba.showcase.j2cl.cases.extensions;

import org.pepstock.charba.client.resources.AbstractInjectableResource;

/**
 * Contains the content of <code>chartjs-plugin-crosshair.min.js</code> to inject.<br>
 * 
 * @author Andrea "Stock" Stocchero
 *
 */
public final class CrosshairPlugin extends AbstractInjectableResource {
	
	static final String ID = "crosshair";

	// encoded javascript content of chartjs-plugin-crosshair.min.js
	private static final String[] CONTENT = {
		"/*!",
		" * chartjs-plugin-crosshair v1.2.0",
		" * https://chartjs-plugin-crosshair.netlify.com",
		" * (c) 2021 Chart.js Contributors",
		" * Released under the MIT license",
		" */",
		"!function(t,e){\"object\"==typeof exports&&\"undefined\"!=typeof module?e(require(\"chart.js\"),require(\"chart.js/helpers\")):\"function\"==typeof define&&define.amd?define([\"chart.js\",\"chart.js/helpers\"],e):e((t=t||self).Chart,t.Chart.helpers)}(this,(function(t,e){\"use strict\";var a={line:{color:\"#F66\",width:1,dashPattern:[]},sync:{enabled:!0,group:1,suppressTooltips:!1},zoom:{enabled:!0,zoomboxBackgroundColor:\"rgba(66,133,244,0.2)\",zoomboxBorderColor:\"#48F\",zoomButtonText:\"Reset Zoom\",zoomButtonClass:\"reset-zoom\"},snap:{enabled:!1},callbacks:{beforeZoom:function(t,e){return!0},afterZoom:function(t,e){}}},s={id:\"crosshair\",afterInit:function(t){if(t.config.options.scales.x){var e=t.config.options.scales.x.type;if(\"linear\"===e||\"time\"===e||\"category\"===e||\"logarithmic\"===e)void 0===t.options.plugins.crosshair&&(t.options.plugins.crosshair=a),t.crosshair={enabled:!1,suppressUpdate:!1,x:null,originalData:[],originalXRange:{},dragStarted:!1,dragStartX:null,dragEn",
		"dX:null,suppressTooltips:!1,ignoreNextEvents:0,reset:function(){this.resetZoom(t,!1,!1)}.bind(this)},this.getOption(t,\"sync\",\"enabled\")&&(t.crosshair.syncEventHandler=function(e){this.handleSyncEvent(t,e)}.bind(this),t.crosshair.resetZoomEventHandler=function(e){var a=this.getOption(t,\"sync\",\"group\");e.chartId!==t.id&&e.syncGroup===a&&this.resetZoom(t,!0)}.bind(this),window.addEventListener(\"sync-event\",t.crosshair.syncEventHandler),window.addEventListener(\"reset-zoom-event\",t.crosshair.resetZoomEventHandler)),t.panZoom=this.panZoom.bind(this,t)}},destroy:function(t){this.getOption(t,\"sync\",\"enabled\")&&(window.removeEventListener(\"sync-event\",t.crosshair.syncEventHandler),window.removeEventListener(\"reset-zoom-event\",t.crosshair.resetZoomEventHandler))},panZoom:function(t,e){if(0!==t.crosshair.originalData.length){var a=t.crosshair.end-t.crosshair.start,s=t.crosshair.min,r=t.crosshair.max;e<0?(t.crosshair.start=Math.max(t.crosshair.start+e,s),t.crosshair.end=t.crossh",
		"air.start===s?s+a:t.crosshair.end+e):(t.crosshair.end=Math.min(t.crosshair.end+e,t.crosshair.max),t.crosshair.start=t.crosshair.end===r?r-a:t.crosshair.start+e),this.doZoom(t,t.crosshair.start,t.crosshair.end)}},getOption:function(t,s,r){return e.valueOrDefault(t.options.plugins.crosshair[s]?t.options.plugins.crosshair[s][r]:void 0,a[s][r])},getXScale:function(t){return t.data.datasets.length?t.scales[t.getDatasetMeta(0).xAxisID]:null},getYScale:function(t){return t.scales[t.getDatasetMeta(0).yAxisID]},handleSyncEvent:function(t,e){var a=this.getOption(t,\"sync\",\"group\");if(e.chartId!==t.id&&e.syncGroup===a){var s=this.getXScale(t);if(s){var r=void 0===e.original.native.buttons?e.original.native.which:e.original.native.buttons;\"mouseup\"===e.original.type&&(r=0);var o={type:\"click\"==e.original.type?\"mousemove\":e.original.type,chart:t,x:s.getPixelForValue(e.xValue),y:e.original.y,native:{buttons:r},stop:!0};t._eventHandler(o)}}},afterEvent:function(t,e){if(0==t.config.options.sca",
		"les.x.length)return;let a=e.event;var s=t.config.options.scales.x.type;if(\"linear\"===s||\"time\"===s||\"category\"===s||\"logarithmic\"===xscaleType){var r=this.getXScale(t);if(r)if(t.crosshair.ignoreNextEvents>0)t.crosshair.ignoreNextEvents-=1;else{var o=void 0===a.native.buttons?a.native.which:a.native.buttons;\"mouseup\"===a.native.type&&(o=0);var i=this.getOption(t,\"sync\",\"enabled\"),n=this.getOption(t,\"sync\",\"group\");if(!a.stop&&i)(e=new CustomEvent(\"sync-event\")).chartId=t.id,e.syncGroup=n,e.original=a,e.xValue=r.getValueForPixel(a.x),window.dispatchEvent(e);var c=this.getOption(t,\"sync\",\"suppressTooltips\");if(t.crosshair.suppressTooltips=a.stop&&c,t.crosshair.enabled=\"mouseout\"!==a.type&&a.x>r.getPixelForValue(r.min)&&a.x<r.getPixelForValue(r.max),!t.crosshair.enabled&&!t.crosshair.suppressUpdate)return a.x>r.getPixelForValue(r.max)&&(t.crosshair.suppressUpdate=!0,t.update(\"none\")),t.crosshair.dragStarted=!1,!1;t.crosshair.suppressUpdate=!1;var l=this.getOption",
		"(t,\"zoom\",\"enabled\");if(1===o&&!t.crosshair.dragStarted&&l&&(t.crosshair.dragStartX=a.x,t.crosshair.dragStarted=!0),t.crosshair.dragStarted&&0===o){t.crosshair.dragStarted=!1;var d=r.getValueForPixel(t.crosshair.dragStartX),h=r.getValueForPixel(t.crosshair.x);Math.abs(t.crosshair.dragStartX-t.crosshair.x)>1&&this.doZoom(t,d,h),t.update(\"none\")}t.crosshair.x=a.x,t.draw()}}},afterDraw:function(t){if(t.crosshair.enabled)return t.crosshair.dragStarted?this.drawZoombox(t):(this.drawTraceLine(t),this.interpolateValues(t),this.drawTracePoints(t)),!0},beforeTooltipDraw:function(t){return!t.crosshair.dragStarted&&!t.crosshair.suppressTooltips},resetZoom:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(a){if(t.crosshair.originalData.length>0)for(var s=0;s<t.data.datasets.length;s++){var r=t.data.datasets[s];r.data=t.crosshair.originalData.shift(0)}t.crosshair.originalXRange.min?(t.options.scales.x.min=t",
		".crosshair.originalXRange.min,t.crosshair.originalXRange.min=null):delete t.options.scales.x.min,t.crosshair.originalXRange.max?(t.options.scales.x.max=t.crosshair.originalXRange.max,t.crosshair.originalXRange.max=null):delete t.options.scales.x.max}t.crosshair.button&&t.crosshair.button.parentNode&&(t.crosshair.button.parentNode.removeChild(t.crosshair.button),t.crosshair.button=!1);var o=this.getOption(t,\"sync\",\"enabled\");if(!e&&a&&o){var i=this.getOption(t,\"sync\",\"group\"),n=new CustomEvent(\"reset-zoom-event\");n.chartId=t.id,n.syncGroup=i,window.dispatchEvent(n)}a&&t.update(\"none\")},doZoom:function(t,s,r){if(s>r){var o=s;s=r,r=o}if(!e.valueOrDefault(t.options.plugins.crosshair.callbacks?t.options.plugins.crosshair.callbacks.beforeZoom:void 0,a.callbacks.beforeZoom)(s,r))return!1;if(t.crosshair.dragStarted=!1,t.options.scales.x.min&&0===t.crosshair.originalData.length&&(t.crosshair.originalXRange.min=t.options.scales.x.min),t.options.scales.x.max&&0===t.crosshair.originalDa",
		"ta.length&&(t.crosshair.originalXRange.max=t.options.scales.x.max),!t.crosshair.button){var i=document.createElement(\"button\"),n=this.getOption(t,\"zoom\",\"zoomButtonText\"),c=this.getOption(t,\"zoom\",\"zoomButtonClass\"),l=document.createTextNode(n);i.appendChild(l),i.className=c,i.addEventListener(\"click\",function(){this.resetZoom(t)}.bind(this)),t.canvas.parentNode.appendChild(i),t.crosshair.button=i}t.options.scales.x.min=s,t.options.scales.x.max=r;var d=0===t.crosshair.originalData.length;if(\"category\"!==t.config.options.scales.x.type)for(var h=0;h<t.data.datasets.length;h++){var g=[],p=0,u=!1,x=!1;d&&(t.crosshair.originalData[h]=t.data.datasets[h].data);for(var m=t.crosshair.originalData[h],v=0;v<m.length;v++){var f=m[v],y=void 0!==f.x?f.x:NaN;y>=s&&!u&&p>0&&(g.push(m[p-1]),u=!0),y>=s&&y<=r&&g.push(f),y>r&&!x&&p<m.length&&(g.push(f),x=!0),p+=1}t.data.datasets[h].data=g}if(t.crosshair.start=s,t.crosshair.end=r,d){var b=this.getXScale(t);t.crosshair.min=b.min,t.crosshair.max",
		"=b.max}t.crosshair.ignoreNextEvents=2,t.update(\"none\"),this.getOption(t,\"callbacks\",\"afterZoom\")(s,r)},drawZoombox:function(t){var e=this.getYScale(t),a=this.getOption(t,\"zoom\",\"zoomboxBorderColor\"),s=this.getOption(t,\"zoom\",\"zoomboxBackgroundColor\");t.ctx.beginPath(),t.ctx.rect(t.crosshair.dragStartX,e.getPixelForValue(e.max),t.crosshair.x-t.crosshair.dragStartX,e.getPixelForValue(e.min)-e.getPixelForValue(e.max)),t.ctx.lineWidth=1,t.ctx.strokeStyle=a,t.ctx.fillStyle=s,t.ctx.fill(),t.ctx.fillStyle=\"\",t.ctx.stroke(),t.ctx.closePath()},drawTraceLine:function(t){var e=this.getYScale(t),a=this.getOption(t,\"line\",\"width\"),s=this.getOption(t,\"line\",\"color\"),r=this.getOption(t,\"line\",\"dashPattern\"),o=this.getOption(t,\"snap\",\"enabled\"),i=t.crosshair.x;o&&t._active.length&&(i=t._active[0].element.x),t.ctx.beginPath(),t.ctx.setLineDash(r),t.ctx.moveTo(i,e.getPixelForValue(e.max)),t.ctx.lineWidth=a,t.ctx.strokeStyle=s,t.ctx.lineTo(i,e.getPixelForValue(e.min)),t.ctx",
		".stroke(),t.ctx.setLineDash([])},drawTracePoints:function(t){for(var e=0;e<t.data.datasets.length;e++){var a=t.data.datasets[e],s=t.getDatasetMeta(e),r=t.scales[s.yAxisID];!s.hidden&&a.interpolate&&(t.ctx.beginPath(),t.ctx.arc(t.crosshair.x,r.getPixelForValue(a.interpolatedValue),3,0,2*Math.PI,!1),t.ctx.fillStyle=\"white\",t.ctx.lineWidth=2,t.ctx.strokeStyle=a.borderColor,t.ctx.fill(),t.ctx.stroke())}},interpolateValues:function(t){for(var e=0;e<t.data.datasets.length;e++){var a=t.data.datasets[e],s=t.getDatasetMeta(e),r=t.scales[s.xAxisID].getValueForPixel(t.crosshair.x);if(!s.hidden&&a.interpolate){var o=a.data,i=o.findIndex((function(t){return t.x>=r})),n=o[i-1],c=o[i];if(t.data.datasets[e].steppedLine&&n)a.interpolatedValue=n.y;else if(n&&c){var l=(c.y-n.y)/(c.x-n.x);a.interpolatedValue=n.y+(r-n.x)*l}else a.interpolatedValue=NaN}}}};t.Chart.register(s),t.Interaction.modes.interpolate=function(e,a,s){for(var r=[],o=0;o<e.data.datasets.length;o++)if(e.data.datasets[o].interpolate){var",
		" i=e.getDatasetMeta(o);if(!i.hidden){var n=e.scales[i.xAxisID],c=e.scales[i.yAxisID],l=n.getValueForPixel(a.x);if(!(l>n.max||l<n.min)){var d=e.data.datasets[o].data,h=d.findIndex((function(t){return t.x>=l}));if(-1!==h){var g=d[h-1],p=d[h];if(g&&p)var u=(p.y-g.y)/(p.x-g.x),x=g.y+(l-g.x)*u;if(e.data.datasets[o].steppedLine&&g&&(x=g.y),!isNaN(x)){var m=c.getPixelForValue(x);if(!isNaN(m)){var v={hasValue:function(){return!0},tooltipPosition:function(){return this._model},_model:{x:a.x,y:m},skip:!1,stop:!1,x:l,y:x};r.push({datasetIndex:o,element:v,index:0})}}}}}}var f=t.Interaction.modes.x(e,a,s);for(h=0;h<f.length;h++){var y=f[h];e.data.datasets[y.datasetIndex].interpolate||r.push(y)}return r}}));"
	};
	
	/**
	 * Creates the injectable resource with <code>chartjs-plugin-crosshair.min.js</code> content.
	 */
	public CrosshairPlugin() {
		super(ID, CONTENT);
	}

}
