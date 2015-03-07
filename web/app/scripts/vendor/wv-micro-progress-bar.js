/*! this (c) 2013, Rico Sta. Cruz
 *  http://ricostacruz.com/nprogress */
/**
 * Modified by Tyson Phalp (tyson@getweave.com) to
 * allow multiple prog bars on same page. Also,
 * does NOT rely on jquery.
 */
;(function(window, factory) {

  if (typeof module === 'function') {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(function() {
      return factory();
    });
  } else {
    window.NProgress = factory;
  }

})(window, function() {

  this.version = '0.2.0';

  var Settings = this.settings = {
    minimum: 0.08,
    easing: 'ease',
    positionUsing: '',
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    showSpinner: true,
    barSelector: '[role="bar"]',
    spinnerSelector: '[role="spinner"]',
    parent: 'body',
    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  };

  /**
   * Updates configuration.
   *
   *     this.configure({
   *       minimum: 0.1
   *     });
   */
  this.configure = function(options) {
    var key, value;
    for (key in options) {
      value = options[key];
      if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
    }

    return this;
  };

  /**
   * Last number.
   */

  this.status = null;

  /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     this.set(0.4);
   *     this.set(1.0);
   */

  this.set = function(n) {
    var that = this;
    var started = this.isStarted();

    n = clamp(n, Settings.minimum, 1);
    this.status = (n === 1 ? null : n);

    var progress = this.render(!started),
      bar = progress.querySelector(Settings.barSelector),
      speed = Settings.speed,
      ease = Settings.easing;

    progress.offsetWidth;
    /* Repaint */

    queue(function(next) {
      // Set positionUsing if it hasn't already been set
      if (Settings.positionUsing === '') {
        Settings.positionUsing = that.getPositioningCSS();
      }

      // Add transition
      css(bar, barPositionCSS(n, speed, ease));

      if (n === 1) {
        // Fade out
        css(progress, {
          transition: 'none',
          opacity: 1
        });
        progress.offsetWidth;
        /* Repaint */

        setTimeout(function() {
          css(progress, {
            transition: 'all ' + speed + 'ms linear',
            opacity: 0
          });
          setTimeout(function() {
            that.remove();
            next();
          }, speed);
        }, speed);
      } else {
        css(progress, {
          opacity: 1
        });
        setTimeout(next, speed);
      }
    });

    return this;
  };

  this.isStarted = function() {
    return typeof this.status === 'number';
  };

  /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     this.start();
   *
   */
  this.start = function() {
    var that = this;
    if (!that.status) that.set(0);

    var work = function() {
      setTimeout(function() {
        if (!that.status) return;
        that.trickle();
        work();
      }, Settings.trickleSpeed);
    };

    if (Settings.trickle) work();

    return this;
  };

  /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     this.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     this.done(true);
   */

  this.done = function(force) {
    if (!force && !this.status) return this;

    return this.inc(0.3 + 0.5 * Math.random()).set(1);
  };

  /**
   * Increments by a random amount.
   */

  this.inc = function(amount) {
    var n = this.status;

    if (!n) {
      return this.start();
    } else {
      if (typeof amount !== 'number') {
        amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
      }

      n = clamp(n + amount, 0, 0.994);
      return this.set(n);
    }
  };

  this.trickle = function() {
    return this.inc(Math.random() * Settings.trickleRate);
  };

  /**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */

  this.render = function(fromStart) {
    if (isRendered()) return document.getElementById(Settings.parent);

//    addClass(document.getElementById(Settings.parent), 'nprogress-busy');

    var progress = document.createElement('div');
    progress.id = Settings.parent + '-nprogress';
    addClass(progress, 'nprogress');
    progress.innerHTML = Settings.template;

    var bar = progress.querySelector(Settings.barSelector),
      perc = fromStart ? '-100' : toBarPerc(this.status || 0),
      spinner;

    css(bar, {
      transition: 'all 0 linear',
      transform: 'translate3d(' + perc + '%,0,0)'
    });

    if (!Settings.showSpinner) {
      spinner = progress.querySelector(Settings.spinnerSelector);
      spinner && removeElement(spinner);
    }

    addClass(document.getElementById(Settings.parent), 'nprogress-parent');
    document.getElementById(Settings.parent) && document.getElementById(Settings.parent).appendChild(progress);

    return progress;
  };

  /**
   * Removes the element. Opposite of render().
   */

  this.remove = function() {
    removeClass(document.getElementById(Settings.parent), 'nprogress-parent');
//    removeClass(document.getElementById(Settings.parent), 'nprogress-busy');
    var progress = document.getElementById(Settings.parent + '-nprogress');
    progress && removeElement(progress);
  };

  /**
   * Checks if the progress bar is rendered.
   */

  var isRendered = function() {
    return !!document.getElementById(Settings.parent + '-nprogress');
  };

  /**
   * Determine which positioning CSS rule to use.
   */

  this.getPositioningCSS = function() {
    // Sniff on document.body.style
    var bodyStyle = document.body.style;

    // Sniff prefixes
    var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
      ('MozTransform' in bodyStyle) ? 'Moz' :
        ('msTransform' in bodyStyle) ? 'ms' :
          ('OTransform' in bodyStyle) ? 'O' : '';

    if (vendorPrefix + 'Perspective' in bodyStyle) {
      // Modern browsers with 3D support, e.g. Webkit, IE10
      return 'translate3d';
    } else if (vendorPrefix + 'Transform' in bodyStyle) {
      // Browsers without 3D support, e.g. IE9
      return 'translate';
    } else {
      // Browsers without translate() support, e.g. IE7-8
      return 'margin';
    }
  };

  /**
   * Helpers
   */

  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  /**
   * (Internal) converts a percentage (`0..1`) to a bar translateX
   * percentage (`-100%..0%`).
   */

  function toBarPerc(n) {
    return (-1 + n) * 100;
  }


  /**
   * (Internal) returns the correct CSS for changing the bar's
   * position given an n percentage, and speed and ease from Settings
   */

  function barPositionCSS(n, speed, ease) {
    var barCSS;

    if (Settings.positionUsing === 'translate3d') {
      barCSS = { transform: 'translate3d(' + toBarPerc(n) + '%,0,0)' };
    } else if (Settings.positionUsing === 'translate') {
      barCSS = { transform: 'translate(' + toBarPerc(n) + '%,0)' };
    } else {
      barCSS = { 'margin-left': toBarPerc(n) + '%' };
    }

    barCSS.transition = 'all ' + speed + 'ms ' + ease;

    return barCSS;
  }

  /**
   * (Internal) Queues a function to be executed.
   */

  var queue = (function() {
    var pending = [];

    function next() {
      var fn = pending.shift();
      if (fn) {
        fn(next);
      }
    }

    return function(fn) {
      pending.push(fn);
      if (pending.length == 1) next();
    };
  })();

  /**
   * (Internal) Applies css properties to an element, similar to the jQuery
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it
   * does not perform any manipulation of values prior to setting styles.
   */

  var css = (function() {
    var cssPrefixes = [ 'Webkit', 'O', 'Moz', 'ms' ],
      cssProps = {};

    function camelCase(string) {
      return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
        return letter.toUpperCase();
      });
    }

    function getVendorProp(name) {
      var style = document.body.style;
      if (name in style) return name;

      var i = cssPrefixes.length,
        capName = name.charAt(0).toUpperCase() + name.slice(1),
        vendorName;
      while (i--) {
        vendorName = cssPrefixes[i] + capName;
        if (vendorName in style) return vendorName;
      }

      return name;
    }

    function getStyleProp(name) {
      name = camelCase(name);
      return cssProps[name] || (cssProps[name] = getVendorProp(name));
    }

    function applyCss(element, prop, value) {
      prop = getStyleProp(prop);
      element.style[prop] = value;
    }

    return function(element, properties) {
      var args = arguments,
        prop,
        value;

      if (args.length == 2) {
        for (prop in properties) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
        }
      } else {
        applyCss(element, args[1], args[2]);
      }
    }
  })();

  /**
   * (Internal) Determines if an element or space separated list of class names contains a class name.
   */

  function hasClass(element, name) {
    if (!element) {
      return;
    }
    var list = typeof element == 'string' ? element : classList(element);
    return list.indexOf(' ' + name + ' ') >= 0;
  }

  /**
   * (Internal) Adds a class to an element.
   */

  function addClass(element, name) {
    if (element) {
      var oldList = classList(element),
        newList = oldList + name;

      if (hasClass(oldList, name)) return;

      // Trim the opening space.
      element.className = newList.substring(1);
    }
  }

  /**
   * (Internal) Removes a class from an element.
   */

  function removeClass(element, name) {
    if (element) {
      var oldList = classList(element),
        newList;

      if (!hasClass(element, name)) return;

      // Replace the class name.
      newList = oldList.replace(' ' + name + ' ', ' ');

      // Trim the opening and closing spaces.
      element.className = newList.substring(1, newList.length - 1);
    }
  }

  /**
   * (Internal) Gets a space separated list of the class names on the element.
   * The list is wrapped with a single space on each end to facilitate finding
   * matches within the list.
   */

  function classList(element) {
    if (element) {
      return (' ' + (element.className || '') + ' ').replace(/\s+/gi, ' ');
    }
  }

  /**
   * (Internal) Removes an element from the DOM.
   */

  function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
  }

});
