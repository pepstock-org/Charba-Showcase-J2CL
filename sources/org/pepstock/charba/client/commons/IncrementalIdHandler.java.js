goog.module('org.pepstock.charba.client.commons.IncrementalIdHandler');

goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('java.util.HashMap');
goog.require('java.util.Map');
goog.require('java.util.concurrent.atomic.AtomicInteger');
goog.require('java.util.function.Function');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.commons.Checker');
goog.require('org.pepstock.charba.client.commons.IncrementalIdHandler.Property');
goog.require('org.pepstock.charba.client.commons.NativeObjectContainer');
goog.require('org.pepstock.charba.client.items.Undefined');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Objects');

const IncrementalIdHandler = goog.require('org.pepstock.charba.client.commons.IncrementalIdHandler$impl');
exports = IncrementalIdHandler;

