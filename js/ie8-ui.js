/*!
 * IE8 UI Components JavaScript Library
 * Version: 1.0.0
 * Description: JavaScript components and utilities for Internet Explorer 8
 * Author: yqq-a
 * License: MIT
 */

;(function(window, document, undefined) {
    'use strict';

    // ========================================
    // IE8 COMPATIBILITY LAYER
    // ========================================

    // Console fix for IE8
    if (typeof window.console === 'undefined') {
        window.console = {
            log: function() {},
            warn: function() {},
            error: function() {},
            info: function() {}
        };
    }

    // Array.prototype.forEach fix for IE8
    if (!Array.prototype.forEach) {
        Array.prototype.forEach = function(callback, thisArg) {
            var T, k;
            if (this == null) {
                throw new TypeError(' this is null or not defined');
            }
            var O = Object(this);
            var len = parseInt(O.length) || 0;
            if (typeof callback !== "function") {
                throw new TypeError(callback + ' is not a function');
            }
            if (arguments.length > 1) {
                T = thisArg;
            }
            k = 0;
            while (k < len) {
                var kValue;
                if (k in O) {
                    kValue = O[k];
                    callback.call(T, kValue, k, O);
                }
                k++;
            }
        };
    }

    // Array.prototype.indexOf fix for IE8
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function(searchElement, fromIndex) {
            var k;
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }
            var O = Object(this);
            var len = parseInt(O.length) || 0;
            if (len === 0) {
                return -1;
            }
            var n = +fromIndex || 0;
            if (Math.abs(n) === Infinity) {
                n = 0;
            }
            if (n >= len) {
                return -1;
            }
            k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
            while (k < len) {
                if (k in O && O[k] === searchElement) {
                    return k;
                }
                k++;
            }
            return -1;
        };
    }

    // Function.prototype.bind fix for IE8
    if (!Function.prototype.bind) {
        Function.prototype.bind = function(oThis) {
            if (typeof this !== 'function') {
                throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
            }
            var aArgs = Array.prototype.slice.call(arguments, 1),
                fToBind = this,
                fNOP = function() {},
                fBound = function() {
                    return fToBind.apply(this instanceof fNOP ? this : oThis,
                        aArgs.concat(Array.prototype.slice.call(arguments)));
                };
            if (this.prototype) {
                fNOP.prototype = this.prototype;
            }
            fBound.prototype = new fNOP();
            return fBound;
        };
    }

    // Object.keys fix for IE8
    if (!Object.keys) {
        Object.keys = function(obj) {
            var keys = [];
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    keys.push(key);
                }
            }
            return keys;
        };
    }

    // ========================================
    // IE8UI NAMESPACE
    // ========================================

    var IE8UI = window.IE8UI || {};

    // ========================================
    // UTILITY FUNCTIONS
    // ========================================

    IE8UI.utils = {
        // Cross-browser event handling
        addEvent: function(element, event, handler) {
            if (element.addEventListener) {
                element.addEventListener(event, handler, false);
            } else if (element.attachEvent) {
                element.attachEvent('on' + event, handler);
            } else {
                element['on' + event] = handler;
            }
        },

        removeEvent: function(element, event, handler) {
            if (element.removeEventListener) {
                element.removeEventListener(event, handler, false);
            } else if (element.detachEvent) {
                element.detachEvent('on' + event, handler);
            } else {
                element['on' + event] = null;
            }
        },

        // Cross-browser class manipulation
        hasClass: function(element, className) {
            if (element.classList) {
                return element.classList.contains(className);
            }
            return new RegExp('\\b' + className + '\\b').test(element.className);
        },

        addClass: function(element, className) {
            if (element.classList) {
                element.classList.add(className);
            } else if (!this.hasClass(element, className)) {
                element.className += ' ' + className;
            }
        },

        removeClass: function(element, className) {
            if (element.classList) {
                element.classList.remove(className);
            } else {
                element.className = element.className.replace(new RegExp('\\b' + className + '\\b', 'g'), '');
            }
        },

        toggleClass: function(element, className) {
            if (this.hasClass(element, className)) {
                this.removeClass(element, className);
            } else {
                this.addClass(element, className);
            }
        },

        // Cross-browser element selection
        $: function(selector) {
            if (typeof selector === 'string') {
                if (selector.charAt(0) === '#') {
                    return document.getElementById(selector.slice(1));
                } else if (selector.charAt(0) === '.') {
                    var className = selector.slice(1);
                    var elements = document.getElementsByTagName('*');
                    var result = [];
                    for (var i = 0; i < elements.length; i++) {
                        if (this.hasClass(elements[i], className)) {
                            result.push(elements[i]);
                        }
                    }
                    return result;
                } else {
                    return document.getElementsByTagName(selector);
                }
            }
            return selector;
        },

        // Get/Set element data attributes
        getData: function(element, key) {
            if (element.dataset) {
                return element.dataset[key];
            }
            return element.getAttribute('data-' + key);
        },

        setData: function(element, key, value) {
            if (element.dataset) {
                element.dataset[key] = value;
            } else {
                element.setAttribute('data-' + key, value);
            }
        },

        // Cross-browser AJAX
        ajax: function(options) {
            var xhr;
            if (window.XMLHttpRequest) {
                xhr = new XMLHttpRequest();
            } else if (window.ActiveXObject) {
                xhr = new ActiveXObject('Microsoft.XMLHTTP');
            }

            var method = options.method || 'GET';
            var url = options.url || '';
            var data = options.data || null;
            var success = options.success || function() {};
            var error = options.error || function() {};

            xhr.open(method, url, true);
            
            if (method === 'POST') {
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            }

            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        success(xhr.responseText, xhr.status);
                    } else {
                        error(xhr.status, xhr.statusText);
                    }
                }
            };

            xhr.send(data);
        },

        // Extend objects
        extend: function(target, source) {
            for (var key in source) {
                if (source.hasOwnProperty(key)) {
                    target[key] = source[key];
                }
            }
            return target;
        },

        // Prevent default event behavior
        preventDefault: function(event) {
            if (event.preventDefault) {
                event.preventDefault();
            } else {
                event.returnValue = false;
            }
        },

        // Stop event propagation
        stopPropagation: function(event) {
            if (event.stopPropagation) {
                event.stopPropagation();
            } else {
                event.cancelBubble = true;
            }
        }
    };

    // ========================================
    // MODAL COMPONENT
    // ========================================

    IE8UI.Modal = function(element, options) {
        this.element = element;
        this.options = IE8UI.utils.extend({
            backdrop: true,
            keyboard: true,
            show: true
        }, options || {});

        this.isShown = false;
        this.backdrop = null;

        this.init();
    };

    IE8UI.Modal.prototype = {
        init: function() {
            var self = this;
            
            // Close button handler
            var closeBtn = IE8UI.utils.$('.modal-close')[0];
            if (closeBtn) {
                IE8UI.utils.addEvent(closeBtn, 'click', function(e) {
                    self.hide();
                    IE8UI.utils.preventDefault(e);
                });
            }

            // Backdrop click handler
            if (this.options.backdrop) {
                IE8UI.utils.addEvent(this.element, 'click', function(e) {
                    if (e.target === self.element) {
                        self.hide();
                    }
                });
            }

            // Keyboard handler
            if (this.options.keyboard) {
                IE8UI.utils.addEvent(document, 'keydown', function(e) {
                    var keyCode = e.keyCode || e.which;
                    if (keyCode === 27 && self.isShown) { // ESC key
                        self.hide();
                    }
                });
            }

            if (this.options.show) {
                this.show();
            }
        },

        show: function() {
            if (this.isShown) return;

            this.isShown = true;
            this.element.style.display = 'block';
            IE8UI.utils.addClass(this.element, 'in');

            // Simple fade in effect for IE8
            var opacity = 0;
            var self = this;
            var fadeIn = function() {
                opacity += 10;
                self.element.style.filter = 'alpha(opacity=' + opacity + ')';
                if (opacity < 100) {
                    setTimeout(fadeIn, 30);
                }
            };
            fadeIn();
        },

        hide: function() {
            if (!this.isShown) return;

            this.isShown = false;
            IE8UI.utils.removeClass(this.element, 'in');

            // Simple fade out effect for IE8
            var opacity = 100;
            var self = this;
            var fadeOut = function() {
                opacity -= 10;
                self.element.style.filter = 'alpha(opacity=' + opacity + ')';
                if (opacity > 0) {
                    setTimeout(fadeOut, 30);
                } else {
                    self.element.style.display = 'none';
                }
            };
            fadeOut();
        },

        toggle: function() {
            return this.isShown ? this.hide() : this.show();
        }
    };

    // ========================================
    // DROPDOWN COMPONENT
    // ========================================

    IE8UI.Dropdown = function(element, options) {
        this.element = element;
        this.options = options || {};
        this.menu = null;
        this.isOpen = false;

        this.init();
    };

    IE8UI.Dropdown.prototype = {
        init: function() {
            var self = this;
            this.menu = this.element.parentNode.getElementsByClassName('dropdown-menu')[0];

            IE8UI.utils.addEvent(this.element, 'click', function(e) {
                self.toggle();
                IE8UI.utils.preventDefault(e);
                IE8UI.utils.stopPropagation(e);
            });

            // Close on outside click
            IE8UI.utils.addEvent(document, 'click', function() {
                if (self.isOpen) {
                    self.close();
                }
            });
        },

        toggle: function() {
            return this.isOpen ? this.close() : this.open();
        },

        open: function() {
            if (this.isOpen) return;

            IE8UI.utils.addClass(this.element.parentNode, 'open');
            this.isOpen = true;
        },

        close: function() {
            if (!this.isOpen) return;

            IE8UI.utils.removeClass(this.element.parentNode, 'open');
            this.isOpen = false;
        }
    };

    // ========================================
    // TAB COMPONENT
    // ========================================

    IE8UI.Tab = function(element, options) {
        this.element = element;
        this.options = options || {};

        this.init();
    };

    IE8UI.Tab.prototype = {
        init: function() {
            var self = this;
            IE8UI.utils.addEvent(this.element, 'click', function(e) {
                self.show();
                IE8UI.utils.preventDefault(e);
            });
        },

        show: function() {
            var target = this.element.getAttribute('href') || IE8UI.utils.getData(this.element, 'target');
            
            if (target) {
                // Remove active class from all tabs in the same nav
                var nav = this.element.parentNode.parentNode;
                var tabs = nav.getElementsByTagName('a');
                for (var i = 0; i < tabs.length; i++) {
                    IE8UI.utils.removeClass(tabs[i].parentNode, 'active');
                }

                // Add active class to current tab
                IE8UI.utils.addClass(this.element.parentNode, 'active');

                // Hide all tab panes
                var container = document.getElementById(target.replace('#', ''));
                if (container && container.parentNode) {
                    var panes = container.parentNode.getElementsByClassName('tab-pane');
                    for (var j = 0; j < panes.length; j++) {
                        panes[j].style.display = 'none';
                        IE8UI.utils.removeClass(panes[j], 'active');
                    }
                }

                // Show target pane
                if (container) {
                    container.style.display = 'block';
                    IE8UI.utils.addClass(container, 'active');
                }
            }
        }
    };

    // ========================================
    // ALERT COMPONENT
    // ========================================

    IE8UI.Alert = function(element, options) {
        this.element = element;
        this.options = options || {};

        this.init();
    };

    IE8UI.Alert.prototype = {
        init: function() {
            var self = this;
            var closeBtn = this.element.getElementsByClassName('alert-close')[0];
            
            if (closeBtn) {
                IE8UI.utils.addEvent(closeBtn, 'click', function(e) {
                    self.close();
                    IE8UI.utils.preventDefault(e);
                });
            }
        },

        close: function() {
            var self = this;
            
            // Simple fade out animation
            var opacity = 100;
            var fadeOut = function() {
                opacity -= 10;
                self.element.style.filter = 'alpha(opacity=' + opacity + ')';
                if (opacity > 0) {
                    setTimeout(fadeOut, 30);
                } else {
                    if (self.element.parentNode) {
                        self.element.parentNode.removeChild(self.element);
                    }
                }
            };
            fadeOut();
        }
    };

    // ========================================
    // TOOLTIP COMPONENT
    // ========================================

    IE8UI.Tooltip = function(element, options) {
        this.element = element;
        this.options = IE8UI.utils.extend({
            placement: 'top',
            trigger: 'hover',
            delay: 0,
            title: ''
        }, options || {});

        this.tooltip = null;
        this.enabled = true;

        this.init();
    };

    IE8UI.Tooltip.prototype = {
        init: function() {
            var self = this;
            var title = this.element.getAttribute('title') || IE8UI.utils.getData(this.element, 'title') || this.options.title;
            
            if (!title) return;

            // Remove title attribute to prevent default tooltip
            this.element.removeAttribute('title');
            IE8UI.utils.setData(this.element, 'original-title', title);

            if (this.options.trigger === 'hover') {
                IE8UI.utils.addEvent(this.element, 'mouseenter', function() {
                    self.show();
                });
                IE8UI.utils.addEvent(this.element, 'mouseleave', function() {
                    self.hide();
                });
            } else if (this.options.trigger === 'click') {
                IE8UI.utils.addEvent(this.element, 'click', function(e) {
                    self.toggle();
                    IE8UI.utils.preventDefault(e);
                });
            }
        },

        show: function() {
            if (!this.enabled) return;

            var title = IE8UI.utils.getData(this.element, 'original-title');
            if (!title) return;

            this.tooltip = document.createElement('div');
            this.tooltip.className = 'tooltip ' + this.options.placement;
            this.tooltip.innerHTML = '<div class="tooltip-inner">' + title + '</div>';
            
            document.body.appendChild(this.tooltip);

            // Position tooltip
            this.setPosition();

            // Show tooltip
            IE8UI.utils.addClass(this.tooltip, 'in');
        },

        hide: function() {
            if (this.tooltip) {
                IE8UI.utils.removeClass(this.tooltip, 'in');
                var self = this;
                setTimeout(function() {
                    if (self.tooltip && self.tooltip.parentNode) {
                        self.tooltip.parentNode.removeChild(self.tooltip);
                        self.tooltip = null;
                    }
                }, 150);
            }
        },

        toggle: function() {
            return this.tooltip ? this.hide() : this.show();
        },

        setPosition: function() {
            if (!this.tooltip) return;

            var elementRect = this.element.getBoundingClientRect();
            var tooltipRect = this.tooltip.getBoundingClientRect();
            
            var top, left;

            switch (this.options.placement) {
                case 'top':
                    top = elementRect.top - tooltipRect.height - 5;
                    left = elementRect.left + (elementRect.width - tooltipRect.width) / 2;
                    break;
                case 'bottom':
                    top = elementRect.bottom + 5;
                    left = elementRect.left + (elementRect.width - tooltipRect.width) / 2;
                    break;
                case 'left':
                    top = elementRect.top + (elementRect.height - tooltipRect.height) / 2;
                    left = elementRect.left - tooltipRect.width - 5;
                    break;
                case 'right':
                    top = elementRect.top + (elementRect.height - tooltipRect.height) / 2;
                    left = elementRect.right + 5;
                    break;
            }

            this.tooltip.style.top = (top + window.pageYOffset) + 'px';
            this.tooltip.style.left = (left + window.pageXOffset) + 'px';
        }
    };

    // ========================================
    // PROGRESS BAR COMPONENT
    // ========================================

    IE8UI.ProgressBar = function(element, options) {
        this.element = element;
        this.options = IE8UI.utils.extend({
            value: 0,
            animated: false
        }, options || {});

        this.bar = this.element.getElementsByClassName('progress-bar')[0];

        this.init();
    };

    IE8UI.ProgressBar.prototype = {
        init: function() {
            this.setValue(this.options.value);
        },

        setValue: function(value) {
            value = Math.max(0, Math.min(100, value));
            
            if (this.bar) {
                this.bar.style.width = value + '%';
                this.bar.innerHTML = value + '%';
            }

            // Store current value
            this.options.value = value;
        },

        getValue: function() {
            return this.options.value;
        },

        increment: function(step) {
            step = step || 1;
            this.setValue(this.getValue() + step);
        }
    };

    // ========================================
    // FORM VALIDATION
    // ========================================

    IE8UI.FormValidator = function(form, options) {
        this.form = form;
        this.options = IE8UI.utils.extend({
            errorClass: 'has-error',
            successClass: 'has-success',
            onSubmit: true,
            onBlur: true
        }, options || {});

        this.init();
    };

    IE8UI.FormValidator.prototype = {
        init: function() {
            var self = this;

            if (this.options.onSubmit) {
                IE8UI.utils.addEvent(this.form, 'submit', function(e) {
                    if (!self.validate()) {
                        IE8UI.utils.preventDefault(e);
                    }
                });
            }

            if (this.options.onBlur) {
                var inputs = this.form.getElementsByTagName('input');
                for (var i = 0; i < inputs.length; i++) {
                    IE8UI.utils.addEvent(inputs[i], 'blur', function() {
                        self.validateField(this);
                    });
                }
            }
        },

        validate: function() {
            var isValid = true;
            var inputs = this.form.getElementsByTagName('input');
            
            for (var i = 0; i < inputs.length; i++) {
                if (!this.validateField(inputs[i])) {
                    isValid = false;
                }
            }

            return isValid;
        },

        validateField: function(field) {
            var isValid = true;
            var value = field.value;
            var required = field.getAttribute('required') !== null;
            var type = field.getAttribute('type');
            var pattern = field.getAttribute('pattern');

            // Required validation
            if (required && !value) {
                this.setFieldError(field, 'This field is required');
                isValid = false;
            }
            // Email validation
            else if (type === 'email' && value && !this.isValidEmail(value)) {
                this.setFieldError(field, 'Please enter a valid email address');
                isValid = false;
            }
            // Pattern validation
            else if (pattern && value && !new RegExp(pattern).test(value)) {
                this.setFieldError(field, 'Please enter a valid value');
                isValid = false;
            }
            else {
                this.setFieldSuccess(field);
            }

            return isValid;
        },

        setFieldError: function(field, message) {
            var group = this.getFieldGroup(field);
            IE8UI.utils.removeClass(group, this.options.successClass);
            IE8UI.utils.addClass(group, this.options.errorClass);

            // Remove existing error message
            this.removeErrorMessage(group);

            // Add error message
            var errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.innerHTML = message;
            errorDiv.style.color = '#a94442';
            errorDiv.style.fontSize = '11px';
            errorDiv.style.marginTop = '5px';
            group.appendChild(errorDiv);
        },

        setFieldSuccess: function(field) {
            var group = this.getFieldGroup(field);
            IE8UI.utils.removeClass(group, this.options.errorClass);
            IE8UI.utils.addClass(group, this.options.successClass);
            this.removeErrorMessage(group);
        },

        getFieldGroup: function(field) {
            var parent = field.parentNode;
            while (parent && !IE8UI.utils.hasClass(parent, 'form-group')) {
                parent = parent.parentNode;
            }
            return parent || field.parentNode;
        },

        removeErrorMessage: function(group) {
            var errorMsg = group.getElementsByClassName('error-message')[0];
            if (errorMsg) {
                group.removeChild(errorMsg);
            }
        },

        isValidEmail: function(email) {
            var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }
    };

    // ========================================
    // AUTO INITIALIZATION
    // ========================================

    IE8UI.init = function() {
        // Initialize dropdowns
        var dropdowns = IE8UI.utils.$('.dropdown-toggle');
        for (var i = 0; i < dropdowns.length; i++) {
            new IE8UI.Dropdown(dropdowns[i]);
        }

        // Initialize tabs
        var tabs = IE8UI.utils.$('[data-toggle="tab"]');
        for (var j = 0; j < tabs.length; j++) {
            new IE8UI.Tab(tabs[j]);
        }

        // Initialize alerts
        var alerts = IE8UI.utils.$('.alert-dismissible');
        for (var k = 0; k < alerts.length; k++) {
            new IE8UI.Alert(alerts[k]);
        }

        // Initialize tooltips
        var tooltips = IE8UI.utils.$('[data-toggle="tooltip"]');
        for (var l = 0; l < tooltips.length; l++) {
            new IE8UI.Tooltip(tooltips[l]);
        }

        // Add table striping for IE8
        var tables = IE8UI.utils.$('.table-striped');
        for (var m = 0; m < tables.length; m++) {
            var rows = tables[m].getElementsByTagName('tr');
            for (var n = 0; n < rows.length; n++) {
                if (n % 2 === 1) {
                    IE8UI.utils.addClass(rows[n], 'odd');
                }
            }
        }
    };

    // ========================================
    // READY STATE
    // ========================================

    // Document ready function for IE8
    function ready(fn) {
        if (document.readyState !== 'loading') {
            fn();
        } else if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', fn);
        } else {
            document.attachEvent('onreadystatechange', function() {
                if (document.readyState !== 'loading') {
                    fn();
                }
            });
        }
    }

    // Auto-initialize components when DOM is ready
    ready(function() {
        IE8UI.init();
    });

    // Export to global namespace
    window.IE8UI = IE8UI;

})(window, document);
