!function(){"use strict";function c(d){this.options=a.extend({},b.defaults,c.defaults,d),this.element=this.options.element,this.$element=a(this.element),this.createWrapper(),this.createWaypoint()}var a=window.jQuery,b=window.Waypoint;c.prototype.createWaypoint=function(){var c=this.options.handler;this.waypoint=new b(a.extend({},this.options,{element:this.wrapper,handler:a.proxy(function(a){var b=this.options.direction.indexOf(a)>-1,d=b?this.$element.outerHeight(!0):"";this.$wrapper.height(d),this.$element.toggleClass(this.options.stuckClass,b),c&&c.call(this,a)},this)}))},c.prototype.createWrapper=function(){this.options.wrapper&&this.$element.wrap(this.options.wrapper),this.$wrapper=this.$element.parent(),this.wrapper=this.$wrapper[0]},c.prototype.destroy=function(){this.$element.parent()[0]===this.wrapper&&(this.waypoint.destroy(),this.$element.removeClass(this.options.stuckClass),this.options.wrapper&&this.$element.unwrap())},c.defaults={wrapper:'<div class="sticky-wrapper" />',stuckClass:"stuck",direction:"down right"},b.Sticky=c}();