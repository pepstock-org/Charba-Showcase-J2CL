goog.module('org.pepstock.charba.showcase.j2cl.cases.extensions.Stacked100Plugin$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractInjectableResource = goog.require('org.pepstock.charba.client.resources.AbstractInjectableResource$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class Stacked100Plugin extends AbstractInjectableResource {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Stacked100Plugin} */
 static $create__() {
  Stacked100Plugin.$clinit();
  let $instance = new Stacked100Plugin();
  $instance.$ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_Stacked100Plugin__();
  return $instance;
 }
 
 $ctor__org_pepstock_charba_showcase_j2cl_cases_extensions_Stacked100Plugin__() {
  this.$ctor__org_pepstock_charba_client_resources_AbstractInjectableResource__java_lang_String__arrayOf_java_lang_String(Stacked100Plugin.f_ID__org_pepstock_charba_showcase_j2cl_cases_extensions_Stacked100Plugin, Stacked100Plugin.f_CONTENT__org_pepstock_charba_showcase_j2cl_cases_extensions_Stacked100Plugin_);
 }
 
 static $clinit() {
  Stacked100Plugin.$clinit = () =>{};
  Stacked100Plugin.$loadModules();
  AbstractInjectableResource.$clinit();
  Stacked100Plugin.f_CONTENT__org_pepstock_charba_showcase_j2cl_cases_extensions_Stacked100Plugin_ = /**@type {!Array<?string>}*/ ($Arrays.$init(["(function(Chart) {\n", "  var isObject = function(obj) {\n", "    var type = typeof obj;\n", "    return type === 'object' && !!obj;\n", "  }\n", "\n", "  var dataValue = function(dataPoint, isHorizontal) {\n", "    if (isObject(dataPoint)) {\n", "      return isHorizontal ? dataPoint.x : dataPoint.y;\n", "    }\n", "    return dataPoint;\n", "  }\n", "\n", "  var cloneArray = function(srcAry) {\n", "    var dstAry = [];\n", "    var length = srcAry.length;\n", "\n", "    for (var i = 0; i < length; i++) {\n", "      dstAry.push(srcAry[i]);\n", "    }\n", "    return dstAry;\n", "  };\n", "\n", "  var setOriginalData = function(data) {\n", "    data.originalData = data.datasets.map(function(dataset) {\n", "      return cloneArray(dataset.data);\n", "    });\n", "  };\n", "\n", "  // set calculated rate (xx%) to data.calculatedData\n", "  var calculateRate = function(chart, isHorizontal, precision) {\n", "    const data = chart.data;\n", "\tlet i = 0;\n", "    var visibles = data.datasets.map(function(dataset) {\n", "\t  return chart.isDatasetVisible(i++);\t\n", "    });\n", "    \n", "    var datasetDataLength = 0;\n", "    if (data && data.datasets && data.datasets[0] && data.datasets[0].data) {\n", "      datasetDataLength = data.datasets[0].data.length;\n", "    }\n", "    var totals = Array.apply(null, new Array(datasetDataLength)).map(function(el, i) {\n", "      return data.datasets.reduce(function(sum, dataset, j) {\n", "        var key = 'stack';\n", "        if (!sum[key]) sum[key] = 0;\n", "        sum[key] += dataValue(dataset.data[i], isHorizontal) * visibles[j];\n", "        return sum;\n", "      }, {});\n", "    });\n", "\n", "    data.calculatedData = data.datasets.map(function(dataset, i) {\n", "      return dataset.data.map(function(val, i) {\n", "        var total = totals[i].stack;\n", "        var dv = dataValue(val, isHorizontal);\n", "        return dv && total ? round(dv / total, precision) : 0;\n", "      });\n", "    });\n", "  };\n", "\n", "  var getPrecision = function(pluginOptions) {\n", "    // return the (validated) configured precision from pluginOptions or default 1\n", "    var defaultPrecision = 1;\n", "    if (!pluginOptions.hasOwnProperty('precision')) return defaultPrecision;\n", "    if (!pluginOptions.precision) return defaultPrecision;\n", "    var optionsPrecision = Math.floor(pluginOptions.precision);\n", "    if (isNaN(optionsPrecision)) return defaultPrecision;\n", "    if (optionsPrecision < 0 || optionsPrecision > 16) return defaultPrecision; \n", "    return optionsPrecision;\n", "  };\n", "\n", "  var round = function(value, precision) {\n", "    var multiplicator = Math.pow(10, precision);\n", "    return Math.round(value * 100 * multiplicator) / multiplicator;\n", "  };\n", "\n", "  var tooltipLabel = function(isHorizontal) {\n", "    return function(context) {\n", "\t  var data = context.chart.data;\n", "      var datasetIndex = context.datasetIndex;\n", "      var index = context.dataIndex;\n", "      var datasetLabel = context.label || '';\n", "      var originalValue = data.originalData[datasetIndex][index];\n", "      var rateValue = data.calculatedData[datasetIndex][index];\n", "\n", "      return '' + datasetLabel + ': ' + rateValue + '% (' + dataValue(originalValue, isHorizontal) + ')';\n", "    }\n", "  };\n", "\n", "  var reflectData = function(srcData, datasets) {\n", "    if (!srcData) return;\n", "\t\n", "    srcData.forEach(function(data, i) {\n", "\t  datasets[i].data = data;\n", "    });\n", "  };\n", "\n", "  var isHorizontalChart = function(chart) {\n", "    return chart.config.type === 'bar' && chart.options.indexAxis === 'y';\n", "  }\n", "\n", "  var Stacked100Plugin = {\n", "    id: 'stacked100',\n", "\n", "    beforeInit: function(chart, args, options) {\n", "      if (!options.enable) return;\n", "\n", "      var isVertical = (chart.config.type === 'bar' && chart.options.indexAxis === 'x') || chart.config.type === 'line';\n", "\n", "      Object.keys(chart.options.scales).forEach(key => {\n", "        const value = chart.options.scales[key];\n", "        if (isObject(value)) {\n", "          value.stacked = true;\n", "\t\t  const applyLimit = (isVertical && value.axis === 'y') || (!isVertical && value.axis === 'x');\n", "\t\t  if (applyLimit){\n", "            if (!value.min) value.min = 0;\n", "            if (!value.max) value.max = 100;\n", "\t\t  }\n", "        }\n", "      });\n", "\n", "      // Replace tooltips\n", "      if (options.hasOwnProperty('replaceTooltipLabel') && !options.replaceTooltipLabel) return;\n", "      chart.options.plugins.tooltip.callbacks.label = tooltipLabel(isHorizontalChart(chart));\n", "    },\n", "\n", "    beforeUpdate: function(chart, args, options) {\n", "      if (!options.enable) return;\n", "\n", "      setOriginalData(chart.data);\n", "      var precision = getPrecision(options);\n", "      calculateRate(chart, isHorizontalChart(chart), precision);\n", "\t  reflectData(chart.data.calculatedData, chart.data.datasets);\n", "    },\n", "\n", "    afterDraw: function(chart, args, options) {\n", "      if (!options.enable) return;\n", "      reflectData(chart.data.originalData, chart.data.datasets);\n", "    }\n", "  };\n", "\n", "  Chart.register(Stacked100Plugin);\n", "}.call(this, Chart));\n"], j_l_String));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Stacked100Plugin;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@const {?string}*/
Stacked100Plugin.f_ID__org_pepstock_charba_showcase_j2cl_cases_extensions_Stacked100Plugin = "stacked100";
/**@type {Array<?string>}*/
Stacked100Plugin.f_CONTENT__org_pepstock_charba_showcase_j2cl_cases_extensions_Stacked100Plugin_;
$Util.$setClassMetadata(Stacked100Plugin, "org.pepstock.charba.showcase.j2cl.cases.extensions.Stacked100Plugin");

exports = Stacked100Plugin;

//# sourceMappingURL=Stacked100Plugin.js.map
