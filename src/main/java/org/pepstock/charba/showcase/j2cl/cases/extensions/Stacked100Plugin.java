package org.pepstock.charba.showcase.j2cl.cases.extensions;

import org.pepstock.charba.client.resources.AbstractInjectableResource;

public class Stacked100Plugin extends AbstractInjectableResource {

	static final String ID = "stacked100";

	private static final String[] CONTENT = {
			"/**",
			" * Skipped minification because the original files appears to be already minified.",
			" * Original file: /npm/chartjs-plugin-stacked100@1.2.0/build/index.js",
			" *",
			" * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files",
			" */",
			"!function(t,a){\"object\"==typeof exports&&\"object\"==typeof module?module.exports=a():\"function\"==typeof define&&define.amd?define([],a):\"object\"==typeof exports?exports.ChartjsPluginStacked100=a():t.ChartjsPluginStacked100=a()}(self,(function(){return(()=>{\"use strict\";var t={d:(a,e)=>{for(var n in e)t.o(e,n)&&!t.o(a,n)&&Object.defineProperty(a,n,{enumerable:!0,get:e[n]})},o:(t,a)=>Object.prototype.hasOwnProperty.call(t,a),r:t=>{\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(t,\"__esModule\",{value:!0})}},a={};t.r(a),t.d(a,{default:()=>f});var e=function(t,a,e){if(e||2===arguments.length)for(var n,r=0,o=a.length;r<o;r++)!n&&r in a||(n||(n=Array.prototype.slice.call(a,0,r)),n[r]=a[r]);return t.concat(n||Array.prototype.slice.call(a))},n=function(t,a){return\"object\"==typeof(e=t)&&e?a?t.x:t.y:t;var e},r=function(t){t.originalData=t.datasets.map((function(t){return a=t.data,e([],a,!0);var a}))",
			"},o=function(){return(o=Object.assign||function(t){for(var a,e=1,n=arguments.length;e<n;e++)for(var r in a=arguments[e])Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);return t}).apply(this,arguments)},i=function(t,a,e){if(e||2===arguments.length)for(var n,r=0,o=a.length;r<o;r++)!n&&r in a||(n||(n=Array.prototype.slice.call(a,0,r)),n[r]=a[r]);return t.concat(n||Array.prototype.slice.call(a))},c=Symbol(),u=function(t,a,e,r,o){var u,l=(null===(u=null==t?void 0:t.datasets)||void 0===u?void 0:u.reduce((function(t,a){var e,n=(null===(e=null==a?void 0:a.data)||void 0===e?void 0:e.length)||0;return n>t?n:t}),0))||0,d=i([],new Array(l),!0).map((function(r,i){return t.datasets.reduce((function(t,r,u){var l=r.stack||c;t[l]||(t[l]=0);var d=Math.abs(n(r.data[i],e)||0)*a[u];return o?t[l]<d&&(t[l]=d):t[l]+=d,t}),{})}));return t.datasets.map((function(t){return t.data.map((function(a,o){var i=d[o][t.stack||c],u=n(a,e);return u&&i?function(t,a){var e=Math.pow(10,a);return Math.round(100*t*e)/e}(",
			"u/i,r):0}))}))},l=function(t,a){t&&t.forEach((function(t,e){a[e].data=t}))},d=function(t){return\"y\"===t.options.indexAxis};const f={id:\"stacked100\",beforeInit:function(t,a,e){if(e.enable){var r=e.replaceTooltipLabel,i=void 0===r||r,c=e.fixNegativeScale,u=void 0===c||c,l=e.individual,f=void 0!==l&&l,s=d(t),p=s?\"x\":\"y\",v=t.data.datasets.some((function(t){return t.data.some((function(t){return(n(t,s)||0)<0}))}));[\"x\",\"y\"].forEach((function(a){var e=a===p?function(t,a){var e={max:100};return t?a?o({min:-100},e):e:o({min:0},e)}(v,u):{},n=o(o({stacked:!f},e),t.options.scales[a]);t.options.scales[a]=n})),i&&(t.options.plugins.tooltip.callbacks.label=function(t){return function(a){var e=a.chart.data,r=a.datasetIndex,o=a.dataIndex,i=e.datasets[r].label||\"\",c=e.originalData[r][o],u=e.calculatedData[r][o],l=n(c,t);return\"\".concat(i,\": \").concat(u,\"% (\").concat(l,\")\")}}(s))}},beforeUpdate:function(t,a,e){if(e.enable){var n=t.data;r(n);var o=n.datasets.map((function(a,e){var n,",
			"r;return(null!==(r=null===(n=t.getDatasetMeta(e))||void 0===n?void 0:n.hidden)&&void 0!==r?r:a.hidden)?0:1})),i=function(t){if(!(\"precision\"in t))return 1;if(\"number\"!=typeof t.precision)return 1;var a=Math.floor(t.precision);return a<0||a>16?1:a}(e);n.calculatedData=u(n,o,d(t),i,e.individual),l(n.calculatedData,n.datasets)}},afterUpdate:function(t,a,e){if(e.enable){var n=t.data;l(n.originalData,n.datasets)}}};return a})()}));",
			"Chart.register(ChartjsPluginStacked100.default);"
		};

	Stacked100Plugin() {
		super(ID, CONTENT);
	}

}
