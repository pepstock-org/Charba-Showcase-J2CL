goog.module('org.pepstock.charba.client.geo.ProjectionAxis');

goog.require('java.lang.Class');
goog.require('java.lang.IllegalArgumentException');
goog.require('java.lang.String');
goog.require('java.util.List');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.IsChart');
goog.require('org.pepstock.charba.client.configuration.Axis');
goog.require('org.pepstock.charba.client.configuration.AxisType');
goog.require('org.pepstock.charba.client.controllers.ControllerType');
goog.require('org.pepstock.charba.client.enums.AxisKind');
goog.require('org.pepstock.charba.client.enums.ScaleDataType');
goog.require('org.pepstock.charba.client.geo.BaseGeoChart');
goog.require('org.pepstock.charba.client.geo.BubbleMapChart');
goog.require('org.pepstock.charba.client.geo.ChoroplethChart');
goog.require('org.pepstock.charba.client.geo.ProjectionAxis.ProjectionAxisRemappedOptionsFactory');
goog.require('org.pepstock.charba.client.geo.ProjectionAxisMapper');
goog.require('org.pepstock.charba.client.geo.enums.Projection');
goog.require('org.pepstock.charba.client.options.ExtendedScale');
goog.require('org.pepstock.charba.client.options.ScaleId');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');
goog.require('vmbootstrap.Objects');

const ProjectionAxis = goog.require('org.pepstock.charba.client.geo.ProjectionAxis$impl');
exports = ProjectionAxis;

