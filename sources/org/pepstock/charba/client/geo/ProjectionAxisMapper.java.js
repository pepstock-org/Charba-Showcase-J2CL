goog.module('org.pepstock.charba.client.geo.ProjectionAxisMapper');

goog.require('java.util.List');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.ArrayDouble.$Overlay');
goog.require('org.pepstock.charba.client.commons.ArrayListHelper');
goog.require('org.pepstock.charba.client.commons.NativeObject.$Overlay');
goog.require('org.pepstock.charba.client.commons.NativeObjectContainer');
goog.require('org.pepstock.charba.client.geo.ProjectionAxisMapper.Property');
goog.require('org.pepstock.charba.client.geo.enums.Projection');
goog.require('org.pepstock.charba.client.items.Undefined');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.primitives.$double');

const ProjectionAxisMapper = goog.require('org.pepstock.charba.client.geo.ProjectionAxisMapper$impl');
exports = ProjectionAxisMapper;

