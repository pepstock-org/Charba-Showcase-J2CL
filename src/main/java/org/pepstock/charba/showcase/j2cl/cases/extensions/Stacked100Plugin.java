package org.pepstock.charba.showcase.j2cl.cases.extensions;

import org.pepstock.charba.client.resources.AbstractInjectableResource;

public class Stacked100Plugin extends AbstractInjectableResource {

	static final String ID = "stacked100";

	private static final String[] CONTENT = { "(function(Chart) {\n", "  var isObject = function(obj) {\n", "    var type = typeof obj;\n", "    return type === 'object' && !!obj;\n", "  }\n", "\n",
			"  var dataValue = function(dataPoint, isHorizontal) {\n", "    if (isObject(dataPoint)) {\n", "      return isHorizontal ? dataPoint.x : dataPoint.y;\n", "    }\n", "\n", "    return dataPoint;\n", "  }\n", "\n",
			"  var cloneArray = function(srcAry) {\n", "    var dstAry = [];\n", "    var length = srcAry.length;\n", "\n", "    for (var i = 0; i < length; i++) {\n", "      dstAry.push(srcAry[i]);\n", "    }\n", "    return dstAry;\n", "  };\n", "\n",
			"  var setOriginalData = function(data) {\n", "    data.originalData = data.datasets.map(function(dataset) {\n", "      return cloneArray(dataset.data);\n", "    });\n", "  };\n", "\n",
			"  // set calculated rate (xx%) to data.calculatedData\n", "  var calculateRate = function(data, isHorizontal, precision) {\n", "    var visibles = data.datasets.map(function(dataset) {\n", "      if (!dataset._meta) return true;\n", "\n",
			"      for (var i in dataset._meta) {\n", "        return !dataset._meta[i].hidden;\n", "      }\n", "    });\n", "    \n", "    var datasetDataLength = 0;\n", "    if (data && data.datasets && data.datasets[0] && data.datasets[0].data) {\n",
			"      datasetDataLength = data.datasets[0].data.length;\n", "    }\n", "    var totals = Array.apply(null, new Array(datasetDataLength)).map(function(el, i) {\n", "      return data.datasets.reduce(function(sum, dataset, j) {\n",
			"        var key = dataset.stack;\n", "        if (!sum[key]) sum[key] = 0;\n", "        sum[key] += dataValue(dataset.data[i], isHorizontal) * visibles[j];\n", "\n", "        return sum;\n", "      }, {});\n", "    });\n", "\n",
			"    data.calculatedData = data.datasets.map(function(dataset, i) {\n", "      return dataset.data.map(function(val, i) {\n", "        var total = totals[i][dataset.stack];\n", "        var dv = dataValue(val, isHorizontal);\n",
			"        return dv && total ? round(dv / total, precision) : 0;\n", "      });\n", "    });\n", "  };\n", "\n", "  var getPrecision = function(pluginOptions) {\n",
			"    // return the (validated) configured precision from pluginOptions or default 1\n", "    var defaultPrecision = 1;\n", "    if (!pluginOptions.hasOwnProperty(\"precision\")) return defaultPrecision;\n",
			"    if (!pluginOptions.precision) return defaultPrecision;\n", "    var optionsPrecision = Math.floor(pluginOptions.precision);\n", "    if (isNaN(optionsPrecision)) return defaultPrecision;\n",
			"    if (optionsPrecision < 0 || optionsPrecision > 16) return defaultPrecision; \n", "    return optionsPrecision;\n", "  };\n", "\n", "  var round = function(value, precision) {\n", "    var multiplicator = Math.pow(10, precision);\n",
			"    return Math.round(value * 100 * multiplicator) / multiplicator;\n", "  };\n", "\n", "  var tooltipLabel = function(isHorizontal) {\n", "    return function(tooltipItem, data) {\n", "      var datasetIndex = tooltipItem.datasetIndex;\n",
			"      var index = tooltipItem.index;\n", "      var datasetLabel = data.datasets[datasetIndex].label || \"\";\n", "      var originalValue = data.originalData[datasetIndex][index];\n",
			"      var rateValue = data.calculatedData[datasetIndex][index];\n", "\n", "      return \"\" + datasetLabel + \": \" + rateValue + \"% (\" + dataValue(originalValue, isHorizontal) + \")\";\n", "    }\n", "  };\n", "\n",
			"  var reflectData = function(srcData, datasets) {\n", "    if (!srcData) return;\n", "\n", "    srcData.forEach(function(data, i) {\n", "      datasets[i].data = data;\n", "    });\n", "  };\n", "\n",
			"  var isHorizontalChart = function(chartInstance) {\n", "    return chartInstance.config.type === \"horizontalBar\";\n", "  }\n", "\n", "  var Stacked100Plugin = {\n", "    id: \"stacked100\",\n", "\n",
			"    beforeInit: function(chartInstance, pluginOptions) {\n", "      if (!pluginOptions.enable) return;\n", "\n", "      var xAxes = chartInstance.options.scales.xAxes;\n", "      var yAxes = chartInstance.options.scales.yAxes;\n",
			"      var isVertical = chartInstance.config.type === \"bar\" || chartInstance.config.type === \"line\";\n", "\n", "      [xAxes, yAxes].forEach(function(axes) {\n", "        axes.forEach(function(hash) {\n",
			"          hash.stacked = true;\n", "        });\n", "      });\n", "      (isVertical ? yAxes : xAxes).forEach(function(hash) {\n", "        if (!hash.ticks.min) hash.ticks.min = 0;\n", "        if (!hash.ticks.max) hash.ticks.max = 100;\n",
			"      });\n", "\n", "      // Replace tooltips\n", "      if (pluginOptions.hasOwnProperty(\"replaceTooltipLabel\") && !pluginOptions.replaceTooltipLabel) return;\n",
			"      chartInstance.options.tooltips.callbacks.label = tooltipLabel(isHorizontalChart(chartInstance));\n", "    },\n", "\n", "    beforeDatasetsUpdate: function(chartInstance, pluginOptions) {\n", "      if (!pluginOptions.enable) return;\n",
			"\n", "      setOriginalData(chartInstance.data);\n", "      var precision = getPrecision(pluginOptions);\n", "      calculateRate(chartInstance.data, isHorizontalChart(chartInstance), precision);\n",
			"      reflectData(chartInstance.data.calculatedData, chartInstance.data.datasets);\n", "    },\n", "\n", "    afterDatasetsUpdate: function(chartInstance, pluginOptions) {\n", "      if (!pluginOptions.enable) return;\n", "\n",
			"      reflectData(chartInstance.data.originalData, chartInstance.data.datasets);\n", "    }\n", "  };\n", "\n", "  Chart.pluginService.register(Stacked100Plugin);\n", "}.call(this, Chart));\n" };

	Stacked100Plugin() {
		super(ID, CONTENT);
	}

}
