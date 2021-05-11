goog.module('org.pepstock.charba.client.dom.DOMBuilder');

goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('java.util.concurrent.atomic.AtomicInteger');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.pepstock.charba.client.dom.BaseEventTypes');
goog.require('org.pepstock.charba.client.dom.BaseNativeEvent.$Overlay');
goog.require('org.pepstock.charba.client.dom.elements.Canvas.$Overlay');
goog.require('org.pepstock.charba.client.dom.elements.Div.$Overlay');
goog.require('org.pepstock.charba.client.dom.elements.Heading.$Overlay');
goog.require('org.pepstock.charba.client.dom.elements.Img.$Overlay');
goog.require('org.pepstock.charba.client.dom.elements.LineBreak.$Overlay');
goog.require('org.pepstock.charba.client.dom.elements.Script.$Overlay');
goog.require('org.pepstock.charba.client.dom.elements.Span.$Overlay');
goog.require('org.pepstock.charba.client.dom.elements.Style.$Overlay');
goog.require('org.pepstock.charba.client.dom.elements.Table.$Overlay');
goog.require('org.pepstock.charba.client.dom.elements.TableCell.$Overlay');
goog.require('org.pepstock.charba.client.dom.elements.TableRow.$Overlay');
goog.require('org.pepstock.charba.client.dom.elements.TextNode.$Overlay');
goog.require('vmbootstrap.Casts');

const DOMBuilder = goog.require('org.pepstock.charba.client.dom.DOMBuilder$impl');
exports = DOMBuilder;

