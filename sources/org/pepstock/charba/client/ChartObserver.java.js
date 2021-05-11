goog.module('org.pepstock.charba.client.ChartObserver');

goog.require('java.lang.Object');
goog.require('java.util.HashMap');
goog.require('java.util.List');
goog.require('java.util.Map');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.Charts');
goog.require('org.pepstock.charba.client.MutationHandler');
goog.require('org.pepstock.charba.client.MutationItem');
goog.require('org.pepstock.charba.client.commons.JsHelper');
goog.require('org.pepstock.charba.client.dom.BaseElement.$Overlay');
goog.require('org.pepstock.charba.client.dom.BaseHtmlElement.$Overlay');
goog.require('org.pepstock.charba.client.dom.MutationObserver.$Overlay');
goog.require('org.pepstock.charba.client.dom.MutationRecord.$Overlay');
goog.require('vmbootstrap.Casts');

const ChartObserver = goog.require('org.pepstock.charba.client.ChartObserver$impl');
exports = ChartObserver;

