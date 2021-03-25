var brand= {
    'name': 'img',
    'desc': 'This is a horizontical bar, more functionality of this bar to be added',
    'src': 'images/ehh3dlowres.png',
    'id': 'brand',
    'class': 'brand'
}
var actionSpaceHeaderUserMenu = {
    "name": "div",
    class: 'container menu',
    id:'actionSpaceHeaderUserMenu',
    "span": [
        {
            'name': 'a',
            'href': '#action',
            'textContent': 'action',
        },
        {
            'name': 'a',
            'href': '#people',
            'textContent': 'People'
        },
        {
            'name': 'a',
            'href': '#setting',
            'textContent': 'setting'
        },
        {
            'name': 'a',
            'href': '#about',
            'textContent': 'about',

        },
        {
            'name': 'button',
            'class': "material-icons",
            'textContent': 'more_vert',
        }
    ]

}
var header={
    'name': 'div',
    'desc': 'This is a horizontical bar, more functionality of this bar to be added',
    'id': 'header',
    'class': 'row',
    //  'innerText':"header",
    'brand': brand,
    'searchBar': {
        'name': 'input',
        'desc': 'This is a horizontical bar, more functionality of this bar to be added',
        'id': 'actionSearch',
        'placeholder': "search here...",
      'autocomplete': "off"
    },
    'menu': actionSpaceHeaderUserMenu,
}
var leftSideNavBar= {
    name: 'section',
    id: "navigationSection",
    class: "column",
    inside_navigationSection: {
        name: 'div', id: "inside_navigationSection",
        sideBar_header: {
            name: 'div',
            id:'side_bar_header',
            class: "justify_SpaceBetween container",
            brand: {
                name: 'div',
                class: "brand_logo",
                textContent: 'Sunil Kumar',
                    },
            sideBarControlMenu: {
                name: 'div',
                class: "HeaderControl align_center justify_center",
                button1: {
                    name: 'button',class: "mode_toggle_btn mr-15", id: "MainHeaderHamburger1",
                        },
                button2: {
                    name: 'i','class': "material-icons",'textContent': 'add_box',
                        },
            },

        },
        sideBar_CollectionList: {
            name: 'div',
                class: 'collection_list',
                    collectionItem: {
                name: 'div',
                    class: "collection",
                        items: [
                            {
                                name: 'div',
                                class: 'item',
                                item1: {
                                    name: 'i',
                                    'class': "material-icons icon mr - 10",
                                    'textContent': 'add',
                                },
                                item2: {
                                    name: 'div',
                                    'class': "collection_name",
                                    'textContent': 'new file',
                                    'data-command': '[{"command":"new ","entity": "actionContent","value":"innerHTML"}]',
                                }

                            },
                            {
                                name: 'div',
                                class: 'item',
                                item1: {
                                    name: 'i',
                                    'class': "material-icons icon mr - 10",
                                    'textContent': 'folder_open',
                                },
                                item2: {
                                    name: 'div',
                                    'class': "collection_name",
                                    'textContent': 'add folder',
                                    'onclick': "processFS.OpenDirectory(event);"
                                }

                            },
                            {
                                name: 'div',
                                class: 'item',
                                item1: {
                                    name: 'i',
                                    'class': "material-icons icon mr - 10",
                                    'textContent': 'save',
                                },
                                item2: {
                                    name: 'div',
                                    'class': "collection_name",
                                    'textContent': 'save',
                                }

                            },


                        ]
            }
        },
        hr: {
            name: 'div',
                class: 'hr',
                },

        sideBar_Collection_withDropDown: {
            name: 'div',
                class: 'collection_list_with_drop_down',
                    collectionTitle: {
                name: 'div',
                    class: "miniHeading",
                        textContent: "Collections/Folder",
                    },
            collectionItem: {
                name: 'div',
                    class: "collection drop_down",
                        innerHTML: `
                      <li><span class="parent collection">my Stories</span>
                      <ul class="nested">
                      <li>story 1</li>
                    <li>story 2</li>
                    <li>story 3</li>
                    <li>story 4</li>
                    <li>
                        <li><span class="parent">my Nested Stories</span>
                            <ul class="nested">
                                <li>story 1</li>
                                <li>story 2</li>
                                <li>story 3</li>
                                <li>story 4</li>
                            </ul>
                        </li>
                        errands
                    </li>

                    <li><span class="parent">recent Stories</span>
                        <ul class="nested">
                            <li>leaf</li>
                            <li>leaf</li>

                        </ul>
                    </li>
                </ul>
            </li>
            <span class="hozintalLine"></span>
            <li><span class="parent">Recent Files</span>
                <ul class="nested">
                    <li>story 1</li>
                    <li>story 2</li>
                    <li>story 3</li>
                    <li>story 4</li>
                    <li>
                    <li><span class="parent">my Nested Stories</span>
                        <ul class="nested">
                            <li>story 1</li>
                            <li>story 2</li>
                            <li>story 3</li>
                            <li>story 4</li>
                        </ul>
                    </li>
                    errands
            </li>

            <li><span class="parent">recent Stories</span>
                <ul class="nested">
                    <li>leaf</li>
                    <li>leaf</li>

                </ul>
            </li>
            </ul>
            </li>
            <span class="hozintalLine"></span>
            <li><span class="parent">Starred</span>
                <ul class="nested">
                    <li>story 1</li>
                    <li>story 2</li>
                    <li>story 3</li>
                    <li>story 4</li>
                    <li>
                    <li><span class="parent">my Nested Stories</span>
                        <ul class="nested">
                            <li>story 1</li>
                            <li>story 2</li>
                            <li>story 3</li>
                            <li>story 4</li>
                        </ul>
                    </li>
                    errands
            </li>

            <li><span class="parent">recent Stories</span>
                <ul class="nested">
                    <li>leaf</li>
                    <li>leaf</li>

                </ul>
            </li>
            </ul>
            </li>
            <li><span class="parent">Tags</span>
                <ul class="nested">
                    <li>story 1</li>
                    <li>story 2</li>
                    <li>story 3</li>
                    <li>story 4</li>
                    <li>
                    <li><span class="parent">my Nested Stories</span>
                        <ul class="nested">
                            <li>story 1</li>
                            <li>story 2</li>
                            <li>story 3</li>
                            <li>story 4</li>
                        </ul>
                    </li>
                    errands
            </li>

            <li><span class="parent">recent Stories</span>
                <ul class="nested">
                    <li>leaf</li>
                    <li>leaf</li>

                </ul>
            </li>
            </ul>
            </li>
            <li><span class="parent">Trash</span>
                <ul class="nested">
                    <li>story 1</li>
                    <li>story 2</li>
                    <li>story 3</li>
                    <li>story 4</li>
                    <li>
                    <li><span class="parent">my Nested Stories</span>
                        <ul class="nested">
                            <li>story 1</li>
                            <li>story 2</li>
                            <li>story 3</li>
                            <li>story 4</li>
                        </ul>
                    </li>
                    errands
            </li>

            <li><span class="parent">recent Stories</span>
                <ul class="nested">
                    <li>leaf</li>
                    <li>leaf</li>

                </ul>
            </li>
            </ul>
            </li>`
            }
        },
        sideBar_footer: {
            name: 'div',
                id: "SidebarFooter",
                    newCollectionBtn: {
                name: 'div',
                    class: 'newCollectionBtn flex align_center',
                        id: '',
                            'textContent': 'add Collections',
                                items: [
                                    {
                                        name: 'i',
                                        'class': "material-icons",
                                        'textContent': 'library_add',
                                    },

                                ]


            },
            footerIcons: {
                name: 'div',
                    class: 'footerIcon flex align_center',
                        id: 'footerIcon',
                            items: [
                                {
                                    name: 'i',
                                    'class': "material-icons",
                                    'textContent': 'favorite',
                                }, {
                                    name: 'i',
                                    'class': "material-icons",
                                    'textContent': 'download_for_offline',
                                }, {
                                    name: 'i',
                                    'class': "material-icons",
                                    'textContent': 'settings',
                                },
                            ]


            },

        },

    }
}
var workspaceHeader= {
    name: 'div',
    class: "workspaceHeader flex align_center row",
    MainHeaderHamburger: {
        name: 'div',
        class: "mode_toggle_btn mr-15",
        style: "background-color: #333;",
        id: "MainHeaderHamburger2"
    },
    pageNavigate: {
        name: 'div',
        class: "flex align_center",
        back: {
            name: 'i',
            'class': "material-icons",
            'textContent': 'navigate_before',
        },
        next: {
            name: 'i',
            'class': "material-icons",
            'textContent': 'navigate_next',
        },
    },
    workSpaceTitle: {
        name: 'div',
        class: "title_edit flex align_center",
        title: {
            name: 'div',
            class: 'title',
            textContent: 'WorkSpaceTitle',
            editBtn: {
                name: 'button',
                class: 'editBtn',
                textContent: 'Edit'
            }
        },

    },
    controlIcon: {
        name: 'div',
        class:'row',
        share: {
            name: "div",
            class: "share icon",
            icon: {
                name: 'i',
                'class': "material-icons",
                'textContent': 'share',
            },
        },
        heart: {
            name: "div",
            class: "heart icon",
            icon: {
                name: 'i',
                'class': "material-icons",
                'textContent': 'favorite',
            },

        },
        delete: {
            name: "div", class: "delete icon",
            icon: {
                name: 'i', 'class': "material-icons", 'textContent': 'delete',
            },

        },
        insertTitle: {
            name: 'div',
            class: 'icon',
            icon: {
                'name': 'i', 'class': "material-icons", 'textContent': 'title',
            },
        },
        icon2: {
            name: 'div',
            class: 'icon',
            icon: {
                'name': 'i', 'class': "material-icons", 'textContent': 'image',
            },
        },
        icon3: {
            name: 'div',
            class: 'icon',
            icon: {
                'name': 'i', 'class': "material-icons", 'textContent': 'format_list_bulleted',
            },
        },

        icon4: {
            name: 'div',
            class: 'icon',
            icon: {
                'name': 'i', 'class': "material-icons", 'textContent': 'attachment',
            },
        },

        icon5: {
            name: 'div',
            class: 'icon',
            icon: {
                'name': 'i', 'class': "material-icons", 'textContent': 'format_quote',
            },
        },

        icon6: {
            name: 'div',
            class: 'icon',
            icon: {
                'name': 'i', 'class': "material-icons", 'textContent': 'code',
            },
        },

        icon7: {
            name: 'div',
            class: 'icon',
            icon: {
                'name': 'i', 'class': "material-icons", 'textContent': 'horizontal_rule',
            },
        },

        icon8: {
            name: 'div',
            class: 'icon',
            icon: {
                'name': 'i', 'class': "material-icons", 'textContent': 'grid_on',
            },
        },



    }
}
var actionWorkSpace = {
    name: 'section',
    id: "actionWorkspaceSection",
    class: "column",
    'workspaceHeader': workspaceHeader,
  
   
}

var actionSpaceBody = {
    name: 'div',
    class: 'container row',
    id: 'actionSpaceBody',
    sidebarSection: leftSideNavBar,
    workSpaceSection: actionWorkSpace,
}
var footer= {
    name: 'div',
    class: 'workspaceFooter',
    p: {
        name: 'p',
        textContent: 'https://www.0dot1.live',
    }
}
var vistorBody= {
    name: 'div',
    class: 'container row',
    textContent:`a new lightweight, modern and fully customizable work-space.
works in chrome and firefox browsers or  without them, be it on apple, mac, ubuntu, android or iOs.
As long as you have the secret-key[ kind of a password ], you own your own secure ecosystem for a seamless, integrated experience across devices & services.
For creators, collaborators, buyers, retailers, educators & influencers, the hardest working animal on this planet,
us :)
It's @ctionSpaces are full of action, drama, integration, automation, pinch of comedy and a dash of Ai.
							`,
}
var basicWebLayoutVisitorV1 = {
    id: 'actionSpaceLayoutContainer',
    class: 'container column',
    section: header,
    section2: actionSpaceBody,
    section3: footer,
}
var actionLayoutUserV3 = {
    
    id:'actionSpaceLayoutContainer',
    class: 'container column',
    section: header,
    section2: actionSpaceBody,
    section3: footer,
}
var peopleLayoutUserV3 = {
    id: 'actionSpaceLayoutContainer',
    class: 'container column',
    section: header,
    section2: actionSpaceBody,
    section3: footer,
}
var settingBody = {
    name: 'div',
    textContent:'setting'
}
var settingLayoutUserV3 = {
    id: 'actionSpaceLayoutContainer',
    class: 'container column',
    section: header,
    section2: actionSpaceBody,
    section3: footer,
}


var actionSpaceView = {
    'vistor': basicWebLayoutVisitorV1,
    'action': actionLayoutUserV3,
    'people': peopleLayoutUserV3,
    'setting': settingLayoutUserV3,
    
}