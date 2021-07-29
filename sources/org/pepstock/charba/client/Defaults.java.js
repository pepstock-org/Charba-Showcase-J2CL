goog.module('org.pepstock.charba.client.Defaults');

goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('java.lang.StringBuilder');
goog.require('java.util.ArrayList');
goog.require('java.util.Arrays');
goog.require('java.util.Collections');
goog.require('java.util.HashMap');
goog.require('java.util.List');
goog.require('java.util.Map');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.Chart.$Overlay');
goog.require('org.pepstock.charba.client.ChartEnvelop');
goog.require('org.pepstock.charba.client.ChartOptions');
goog.require('org.pepstock.charba.client.Charts');
goog.require('org.pepstock.charba.client.Defaults.InternalDefaultScale');
goog.require('org.pepstock.charba.client.Defaults.InternalDefaultScales');
goog.require('org.pepstock.charba.client.Defaults.NativeChartHandler');
goog.require('org.pepstock.charba.client.Defaults.WrapperDefaults');
goog.require('org.pepstock.charba.client.GlobalOptions');
goog.require('org.pepstock.charba.client.GlobalScale');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.JsChartHelper');
goog.require('org.pepstock.charba.client.Overrides');
goog.require('org.pepstock.charba.client.Type');
goog.require('org.pepstock.charba.client.commons.ArrayObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.Constants');
goog.require('org.pepstock.charba.client.commons.Key');
goog.require('org.pepstock.charba.client.commons.Merger');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.configuration.AxisType');
goog.require('org.pepstock.charba.client.controllers.ControllerType');
goog.require('org.pepstock.charba.client.controllers.Controllers');
goog.require('org.pepstock.charba.client.defaults.globals.DefaultsBuilder');
goog.require('org.pepstock.charba.client.events.ChartClickEvent');
goog.require('org.pepstock.charba.client.events.ChartHoverEvent');
goog.require('org.pepstock.charba.client.events.IsChartEvent');
goog.require('org.pepstock.charba.client.events.IsLegendEvent');
goog.require('org.pepstock.charba.client.events.LegendClickEvent');
goog.require('org.pepstock.charba.client.events.LegendHoverEvent');
goog.require('org.pepstock.charba.client.events.LegendLeaveEvent');
goog.require('org.pepstock.charba.client.items.DatasetElementOptions');
goog.require('org.pepstock.charba.client.items.LegendLabelItem');
goog.require('org.pepstock.charba.client.items.TooltipItem');
goog.require('org.pepstock.charba.client.items.TooltipLabelColor');
goog.require('org.pepstock.charba.client.items.TooltipLabelPointStyle');
goog.require('org.pepstock.charba.client.items.Undefined');
goog.require('org.pepstock.charba.client.options.Scale');
goog.require('org.pepstock.charba.client.plugins.GlobalPlugins');
goog.require('org.pepstock.charba.client.resources.ResourcesType');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const Defaults = goog.require('org.pepstock.charba.client.Defaults$impl');
exports = Defaults;
