/*
Template Name: Ubold - Responsive Bootstrap 5 Admin Dashboard
Author: CoderThemes
Website: https://coderthemes.com/
Contact: support@coderthemes.com
File: Layout
*/


/**
 * LeftSidebar
 * @param {*} $
 */

easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
};

scrollTo = function (element, to, duration) {
    var start = element.scrollTop, change = to - start, currentTime = 0, increment = 20;
    var animateScroll = function () {
        currentTime += increment;
        var val = easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if (currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
}

!function ($) {
    'use strict';

    var LeftSidebar = function () {
        this.body = $('body'), this.window = $(window)
    };


    /**
     * Initilizes the menu
     */
    LeftSidebar.prototype.initMenu = function () {
        var self = this;


        // Left menu collapse
        // Todo: remove this
        // console.log($('.button-menu-mobile'))
        $('.button-menu-mobile').on('click', function (event) {
            event.preventDefault();
            // console.log("ss")
            self.body.toggleClass('sidebar-enable');
        });

        // sidebar - main menu
        if ($("#side-menu").length) {
            var navCollapse = $('#side-menu li .collapse');

            // open one menu at a time only
            navCollapse.on({
                'show.bs.collapse': function (event) {
                    var parent = $(event.target).parents('.collapse.show');
                    $('#side-menu .collapse.show').not(parent).collapse('hide');
                }
            });

            // activate the menu in left side bar (Vertical Menu) based on url
            $("#side-menu a").each(function () {
                var pageUrl = window.location.href.split(/[?#]/)[0];
                if (this.href == pageUrl) {
                    $(this).addClass("active");
                    $(this).parent().addClass("menuitem-active");
                    $(this).parent().parent().parent().addClass("show");
                    $(this).parent().parent().parent().parent().addClass("menuitem-active"); // add active to li of the current link

                    var firstLevelParent = $(this).parent().parent().parent().parent().parent().parent();
                    if (firstLevelParent.attr('id') !== 'sidebar-menu') firstLevelParent.addClass("show");

                    $(this).parent().parent().parent().parent().parent().parent().parent().addClass("menuitem-active");

                    var secondLevelParent = $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent();
                    if (secondLevelParent.attr('id') !== 'wrapper') secondLevelParent.addClass("show");

                    var upperLevelParent = $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent();
                    if (!upperLevelParent.is('body')) upperLevelParent.addClass("menuitem-active");
                }

                setTimeout(function () {
                    var activatedItem = document.querySelector('li.menuitem-active .active');
                    if (activatedItem != null) {
                        var simplebarContent = document.querySelector('.left-side-menu .simplebar-content-wrapper');
                        var offset = activatedItem.offsetTop - 300;
                        if (simplebarContent && offset > 100) {
                            scrollTo(simplebarContent, offset, 600);
                        }
                    }
                }, 200);
            });
        }


        // handling two columns menu if present
        var twoColSideNav = $("#two-col-sidenav-main");
        if (twoColSideNav.length) {
            var twoColSideNavItems = $("#two-col-sidenav-main .nav-link");
            var sideSubMenus = $(".twocolumn-menu-item");

            // showing/displaying tooltip based on screen size
            // if (this.window.width() >= 585) {
            //     twoColSideNavItems.tooltip('enable');
            // } else {
            //     twoColSideNavItems.tooltip('disable');
            // }

            var nav = $('.twocolumn-menu-item .nav-second-level');
            var navCollapse = $('#two-col-menu li .collapse');

            // open one menu at a time only
            navCollapse.on({
                'show.bs.collapse': function () {
                    var nearestNav = $(this).closest(nav).closest(nav).find(navCollapse);
                    if (nearestNav.length) nearestNav.not($(this)).collapse('hide'); else navCollapse.not($(this)).collapse('hide');
                }
            });

            twoColSideNavItems.on('click', function (e) {
                var target = $($(this).attr('href'));

                if (target.length) {
                    e.preventDefault();

                    twoColSideNavItems.removeClass('active');
                    $(this).addClass('active');

                    sideSubMenus.removeClass("d-block");
                    target.addClass("d-block");

                    // showing full sidebar if menu item is clicked
                    console.log($.ThemeCustomizer);
                    if (window.themeCustomizer)
                        window.themeCustomizer.changeLeftbarSize('default');
                    return false;
                }
                return true;
            });

            // activate menu with no child
            var pageUrl = window.location.href; //.split(/[?#]/)[0];
            twoColSideNavItems.each(function () {
                if (this.href === pageUrl) {
                    $(this).addClass('active');
                }
            });


            // activate the menu in left side bar (Two column) based on url
            $("#two-col-menu a").each(function () {
                if (this.href == pageUrl) {
                    $(this).addClass("active");
                    $(this).parent().addClass("menuitem-active");
                    $(this).parent().parent().parent().addClass("show");
                    $(this).parent().parent().parent().parent().addClass("menuitem-active"); // add active to li of the current link

                    var firstLevelParent = $(this).parent().parent().parent().parent().parent().parent();
                    if (firstLevelParent.attr('id') !== 'sidebar-menu') firstLevelParent.addClass("show");

                    $(this).parent().parent().parent().parent().parent().parent().parent().addClass("menuitem-active");

                    var secondLevelParent = $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent();
                    if (secondLevelParent.attr('id') !== 'wrapper') secondLevelParent.addClass("show");

                    var upperLevelParent = $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent();
                    if (!upperLevelParent.is('body')) upperLevelParent.addClass("menuitem-active");

                    // opening menu
                    var matchingItem = null;
                    var targetEl = '#' + $(this).parents('.twocolumn-menu-item').attr("id");
                    $("#two-col-sidenav-main .nav-link").each(function () {
                        if ($(this).attr('href') === targetEl) {
                            matchingItem = $(this);
                        }
                    });
                    if (matchingItem) matchingItem.trigger('click');
                }
            });
        }
    },

        /**
         * Initilize the left sidebar size based on screen size
         */
        LeftSidebar.prototype.initLayout = function () {
            // in case of small size, activate the small menu
            //Todo --- removed
            // if ((this.window.width() >= 768 && this.window.width() <= 1028) || this.body.data('keep-enlarged')) {
            //     this.changeSize('condensed');
            // } else {
            //     this.changeSize('default');
            // }
        },

        /**
         * Initilizes the menu
         */
        LeftSidebar.prototype.init = function () {
            var self = this;
            this.initMenu();
            this.initLayout();

            // on window resize, make menu flipped automatically
            this.window.on('resize', function (e) {
                e.preventDefault();
                self.initLayout();
            });
        },

        $.LeftSidebar = new LeftSidebar, $.LeftSidebar.Constructor = LeftSidebar
}(window.jQuery),


    /**
     * Topbar
     * @param {*} $
     */
    function ($) {
        'use strict';

        var Topbar = function () {
            this.body = $('body'), this.window = $(window)
        };

        /**
         * Initilizes the menu
         */
        Topbar.prototype.initMenu = function () {
            // Serach Toggle
            $('#top-search').on('click', function (e) {
                $('#search-dropdown').addClass('d-block');
            });

            // hide search on opening other dropdown
            $('.topbar-dropdown').on('show.bs.dropdown', function () {
                $('#search-dropdown').removeClass('d-block');
            });

            //activate the menu in topbar(horizontal menu) based on url
            $(".navbar-nav a").each(function () {
                var pageUrl = window.location.href.split(/[?#]/)[0];
                if (this.href == pageUrl) {
                    $(this).addClass("active");
                    $(this).parent().addClass("active");
                    $(this).parent().parent().addClass("active");

                    $(this).parent().parent().parent().addClass("active");
                    $(this).parent().parent().parent().parent().addClass("active");
                    if ($(this).parent().parent().parent().parent().hasClass('mega-dropdown-menu')) {
                        $(this).parent().parent().parent().parent().parent().addClass("active");
                        $(this).parent().parent().parent().parent().parent().parent().addClass("active");

                    } else {
                        var child = $(this).parent().parent()[0].querySelector('.dropdown-item');
                        if (child) {
                            var pageUrl = window.location.href.split(/[?#]/)[0];
                            if (child.href == pageUrl || child.classList.contains('dropdown-toggle')) child.classList.add("active");
                        }
                    }
                    var el = $(this).parent().parent().parent().parent().addClass("active").prev();
                    if (el.hasClass("nav-link")) el.addClass('active');
                }
            });

            // Topbar - main menu
            $('.navbar-toggle').on('click', function (event) {
                $(this).toggleClass('open');
                $('#navigation').slideToggle(400);
            });


            //Horizontal Menu (For SM Screen)
            var AllNavs = document.querySelectorAll('ul.navbar-nav .dropdown .dropdown-toggle');

            var isInner = false;

            AllNavs.forEach(function (element) {
                element.addEventListener('click', function (event) {
                    if (!element.parentElement.classList.contains('nav-item')) {
                        isInner = true;
                        element.parentElement.parentElement.classList.add('show');
                        var parent = element.parentElement.parentElement.parentElement.querySelector('.nav-link');
                        parent.ariaExpanded = true;
                        parent.classList.add("show");
                        bootstrap.Dropdown.getInstance(element).show();
                    }
                });

                element.addEventListener('hide.bs.dropdown', function (event) {
                    if (isInner) {
                        event.preventDefault();
                        event.stopPropagation();
                        isInner = false;
                    }
                });
            });

        },


            /**
             * Initilizes the menu
             */
            Topbar.prototype.init = function () {
                this.initMenu();
            }, $.Topbar = new Topbar, $.Topbar.Constructor = Topbar
    }(window.jQuery),


    /**
     * RightBar
     * @param {*} $
     */
    function ($) {
        'use strict';

        var RightBar = function () {
            this.body = $('body'), this.window = $(window)
        };

        /**
         * Toggles the right sidebar
         */
        RightBar.prototype.toggleRightSideBar = function () {
            var self = this;
            self.body.toggleClass('right-bar-enabled');
        },

            /**
             * Initilizes the right side bar
             */
            RightBar.prototype.init = function () {
                var self = this;

                // right side-bar toggle
                $(document).on('click', '.right-bar-toggle', function () {
                    self.toggleRightSideBar();
                });

                $(document).on('click', 'body', function (e) {
                    // hiding search bar
                    if ($(e.target).closest('#top-search').length !== 1) {
                        $('#search-dropdown').removeClass('d-block');
                    }
                    if ($(e.target).closest('.right-bar-toggle, .right-bar').length > 0) {
                        return;
                    }

                    if ($(e.target).closest('.left-side-menu, .side-nav').length > 0 || $(e.target).hasClass('button-menu-mobile') || $(e.target).closest('.button-menu-mobile').length > 0) {
                        return;
                    }

                    $('body').removeClass('right-bar-enabled');
                    $('body').removeClass('sidebar-enable');

                });

                // overall color scheme

            },

            $.RightBar = new RightBar, $.RightBar.Constructor = RightBar
    }(window.jQuery),


    /**
     * Layout and theme manager
     * @param {*} $
     */

    function ($) {
        'use strict';

        // Layout and theme manager

        var LayoutThemeApp = function () {
        };

        LayoutThemeApp.prototype.init = function () {
            this.leftSidebar = $.LeftSidebar;
            this.leftSidebar.init()
            this.topbar = $.Topbar;

            this.themeCustomizer = $.ThemeCustomizer;
            this.themeCustomizer.init();

            this.leftSidebar.parent = this;
            this.topbar.parent = this;
            this.topbar.init()

            // initilize the menu
        },

            $.LayoutThemeApp = new LayoutThemeApp, $.LayoutThemeApp.Constructor = LayoutThemeApp


    }(window.jQuery),


    function ($) {
        'use strict';

        // Layout and theme manager

        var ThemeCustomizer = function () {
            this.body = document.body;
            this.defaultConfig = {
                leftbar: {
                    color: 'light', size: 'default'
                },
                menu: {
                    position: 'fixed'
                },
                layout: {
                    color: 'light', width: 'fluid', mode: 'default',
                },
                topbar: {
                    color: 'light'
                },
                sidebar: {
                    user: true
                }
            }
        };


        ThemeCustomizer.prototype.initConfig = function () {
            var config = JSON.parse(JSON.stringify(this.defaultConfig));
            config['leftbar']['color'] = this.body.getAttribute('data-leftbar-color') != null ? this.body.getAttribute('data-leftbar-color') : this.defaultConfig.leftbar.color;
            config['leftbar']['size'] = this.body.getAttribute('data-leftbar-size') != null ? this.body.getAttribute('data-leftbar-size') : this.defaultConfig.leftbar.size;
            config['menu']['position'] = this.body.getAttribute('data-leftbar-position') != null ? this.body.getAttribute('data-leftbar-position') : this.defaultConfig.menu.position;
            config['layout']['color'] = this.body.getAttribute('data-theme') != null ? this.body.getAttribute('data-theme') : this.defaultConfig.layout.color;
            config['layout']['width'] = this.body.getAttribute('data-layout-width') != null ? this.body.getAttribute('data-layout-width') : this.defaultConfig.layout.width;
            config['layout']['mode'] = this.body.getAttribute('data-layout-mode') != null ? this.body.getAttribute('data-layout-mode') : this.defaultConfig.layout.mode;
            config['topbar']['color'] = this.body.getAttribute('data-topbar-color') != null ? this.body.getAttribute('data-topbar-color') : this.defaultConfig.topbar.color;
            config['sidebar']['user'] = this.body.getAttribute('data-sidebar-user') != null ? this.body.getAttribute('data-sidebar-user') : this.defaultConfig.sidebar.user;
            this.defaultConfig = JSON.parse(JSON.stringify(config));
            // console.log(this.defaultConfig);
            this.config = config;
            this.setSwitchFromConfig();
        }

        ThemeCustomizer.prototype.changeLeftbarColor = function (color) {
            this.config.leftbar.color = color;
            this.body.setAttribute('data-leftbar-color', color);
            this.setSwitchFromConfig();
        }

        ThemeCustomizer.prototype.changeMenuPosition = function (position) {
            this.config.menu.position = position;
            this.body.setAttribute('data-menu-position', position);
            this.setSwitchFromConfig();
        }

        ThemeCustomizer.prototype.changeLeftbarSize = function (size) {
            if (this.config.layout.mode !== 'topnav') {
                this.config.leftbar.size = size;
                this.body.setAttribute('data-leftbar-size', size);
                this.setSwitchFromConfig();
            }
        }

        ThemeCustomizer.prototype.changeLayoutMode = function (mode) {
            this.config.layout.mode = mode;
            this.body.setAttribute('data-layout-mode', mode);
            this.setSwitchFromConfig();
        }

        ThemeCustomizer.prototype.changeLayoutColor = function (color) {
            this.config.layout.color = color;
            this.body.setAttribute('data-theme', color);
            this.setSwitchFromConfig();
        }

        ThemeCustomizer.prototype.changeLayoutWidth = function (width) {
            this.config.layout.width = width;
            this.body.setAttribute('data-layout-width', width);
            if (width == 'boxed') {
                this.changeLeftbarSize('condensed');
            } else {
                this.changeLeftbarSize('default');
            }

            this.setSwitchFromConfig();
        }

        ThemeCustomizer.prototype.changeTopbarColor = function (color) {
            this.config.topbar.color = color;
            this.body.setAttribute('data-topbar-color', color);
            this.setSwitchFromConfig();
        }

        ThemeCustomizer.prototype.changeSidebarUser = function (showUser) {
            this.config.sidebar.user = showUser;
            if (showUser) {
                this.body.setAttribute('data-sidebar-user', showUser);
            } else {
                this.body.removeAttribute('data-sidebar-user');
            }
            this.setSwitchFromConfig();
        }

        ThemeCustomizer.prototype.resetTheme = function () {
            this.config = JSON.parse(JSON.stringify(this.defaultConfig));
            this.changeLeftbarColor(this.config.leftbar.color);
            this.changeMenuPosition(this.config.menu.position);
            this.changeLeftbarSize(this.config.leftbar.size);
            this.changeLayoutColor(this.config.layout.color);
            this.changeLayoutWidth(this.config.layout.width);
            this.changeLayoutMode(this.config.layout.mode);
            this.changeTopbarColor(this.config.topbar.color);
            this.changeSidebarUser(this.config.sidebar.user);
        }

        ThemeCustomizer.prototype.initSwitchListener = function () {
            var self = this;
            document.querySelectorAll('input[name=leftbar-color]').forEach(function (element) {
                element.addEventListener('change', function (e) {
                    self.changeLeftbarColor(element.value);
                })
            });
            document.querySelectorAll('input[name=leftbar-size]').forEach(function (element) {
                element.addEventListener('change', function (e) {
                    self.changeLeftbarSize(element.value);
                })
            });
            document.querySelectorAll('input[name=menu-position]').forEach(function (element) {
                element.addEventListener('change', function (e) {
                    self.changeMenuPosition(element.value);

                })
            });
            document.querySelectorAll('input[name=layout-color]').forEach(function (element) {
                element.addEventListener('change', function (e) {
                    self.changeLayoutColor(element.value);
                })
            });
            document.querySelectorAll('input[name=layout-width]').forEach(function (element) {
                element.addEventListener('change', function (e) {
                    self.changeLayoutWidth(element.value);
                })
            });

            document.querySelectorAll('input[name=layout-mode]').forEach(function (element) {
                element.addEventListener('change', function (e) {
                    self.changeLayoutMode(element.value);
                })
            });
            document.querySelectorAll('input[name=topbar-color]').forEach(function (element) {
                element.addEventListener('change', function (e) {
                    self.changeTopbarColor(element.value);
                })
            });
            document.querySelectorAll('input[name=sidebar-user]').forEach(function (element) {
                element.addEventListener('change', function (e) {
                    self.changeSidebarUser(element.checked);
                })
            });
            if (document.querySelector('#resetBtn')) {
                document.querySelector('#resetBtn').addEventListener('click', function (e) {
                    // console.log("w" + "")
                    self.resetTheme();
                });
            }


            if (document.querySelector('.button-menu-mobile')) {
                document.querySelector('.button-menu-mobile').addEventListener('click', function () {
                    if (self.config.leftbar.size === 'default') {
                        self.changeLeftbarSize('condensed');
                    } else {
                        self.changeLeftbarSize('default');
                    }
                });
            }

        }

        ThemeCustomizer.prototype.initWindowSize = function () {
            var self = this;
            window.addEventListener('resize', function (e) {
                if (window.innerWidth >= 750 && window.innerWidth <= 1028) {
                    self.changeLeftbarSize('condensed');
                } else {
                    self.changeLeftbarSize('default');

                }
            })
        }


        ThemeCustomizer.prototype.setSwitchFromConfig = function () {
            document.querySelectorAll('.right-bar input[type=checkbox]').forEach(function (checkbox) {
                checkbox.checked = false;
            })
            var config = this.config;
            if (config) {
                var leftbarColorSwitch = document.querySelector('input[type=checkbox][name=leftbar-color][value=' + config.leftbar.color + ']');
                var leftbarSizeSwitch = document.querySelector('input[type=checkbox][name=leftbar-size][value=' + config.leftbar.size + ']');
                var menuPositionSwitch = document.querySelector('input[type=checkbox][name=menu-position][value=' + config.menu.position + ']');

                var layoutColorSwitch = document.querySelector('input[type=checkbox][name=layout-color][value=' + config.layout.color + ']');
                var layoutSizeSwitch = document.querySelector('input[type=checkbox][name=layout-width][value=' + config.layout.width + ']');
                var layoutModeSwitch = document.querySelector('input[type=checkbox][name=layout-mode][value=' + config.layout.type + ']');

                var topbarColorSwitch = document.querySelector('input[type=checkbox][name=topbar-color][value=' + config.topbar.color + ']');
                var sidebarUserSwitch = document.querySelector('input[type=checkbox][name=sidebar-user]');


                if (leftbarColorSwitch) leftbarColorSwitch.checked = true;
                if (leftbarSizeSwitch) leftbarSizeSwitch.checked = true;
                if (menuPositionSwitch) menuPositionSwitch.checked = true;

                if (layoutColorSwitch) layoutColorSwitch.checked = true;
                if (layoutSizeSwitch) layoutSizeSwitch.checked = true;
                if (layoutModeSwitch) layoutModeSwitch.checked = true;

                if (topbarColorSwitch) topbarColorSwitch.checked = true;
                if (sidebarUserSwitch && config.sidebar.user.toString() === "true") sidebarUserSwitch.checked = true;
            }
        }


        /**
         * Init
         */
        ThemeCustomizer.prototype.init = function () {
            this.initConfig();
            this.initSwitchListener();
            this.initWindowSize();
            window.themeCustomizer = this;
        },

            $.ThemeCustomizer = new ThemeCustomizer, $.ThemeCustomizer.Constructor = ThemeCustomizer


    }(window.jQuery);

