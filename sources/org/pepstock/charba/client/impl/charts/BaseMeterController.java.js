goog.module('org.pepstock.charba.client.impl.charts.BaseMeterController');

goog.require('java.lang.Math');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.ChartNode');
goog.require('org.pepstock.charba.client.Controller');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.callbacks.ScriptableUtils');
goog.require('org.pepstock.charba.client.colors.IsColor');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.controllers.AbstractController');
goog.require('org.pepstock.charba.client.controllers.ControllerContext.$Overlay');
goog.require('org.pepstock.charba.client.controllers.ControllerProvider');
goog.require('org.pepstock.charba.client.controllers.ControllerType');
goog.require('org.pepstock.charba.client.data.Dataset');
goog.require('org.pepstock.charba.client.dom.elements.Canvas.$Overlay');
goog.require('org.pepstock.charba.client.dom.elements.Context2dItem.$Overlay');
goog.require('org.pepstock.charba.client.dom.enums.TextBaseline');
goog.require('org.pepstock.charba.client.enums.Render');
goog.require('org.pepstock.charba.client.enums.TextAlign');
goog.require('org.pepstock.charba.client.impl.charts.BaseMeterController.BaseMeterControllerProvier');
goog.require('org.pepstock.charba.client.impl.charts.GaugeChart');
goog.require('org.pepstock.charba.client.impl.charts.MeterChart');
goog.require('org.pepstock.charba.client.impl.charts.MeterContext');
goog.require('org.pepstock.charba.client.impl.charts.MeterDataset');
goog.require('org.pepstock.charba.client.impl.charts.MeterOptions');
goog.require('org.pepstock.charba.client.items.DatasetElement');
goog.require('org.pepstock.charba.client.items.FontItem');
goog.require('org.pepstock.charba.client.utils.Utilities');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Objects');
goog.require('vmbootstrap.Primitives');

const BaseMeterController = goog.require('org.pepstock.charba.client.impl.charts.BaseMeterController$impl');
exports = BaseMeterController;

