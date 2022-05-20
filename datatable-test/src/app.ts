//import "datatables.net";
//import "bootstrap";
import "datatables.net-bs4";
import "datatables.net-fixedheader";
import "datatables.net-fixedcolumns";

export default class app {

    constructor() {
        let table = new FilesTable();
    }
}

export class FilesTable {

    private spinningWheel = $('.status span');

    constructor() {
        let files = [
            {
            "type": "items",
            "id": "urn:adsk.wipprod:dm.lineage",
            "attributes": {
                "displayName": "M006-80580.rvt",
                "createTime": "2017-02-14T09:26:59.0000000Z",
                "createUserId": "B4SPNKUH9",
                "createUserName": "",
                "lastModifiedTime": "2017-02-14T09:26:59.0000000Z",
                "lastModifiedUserId": "B4SKUH9",
                "lastModifiedUserName": "",
                "hidden": false,
                "reserved": false,
                "extension": {
                    "type": "items:autodesk.core:File",
                    "version": "1.0",
                    "schema": {
                        "href": ""
                    },
                    "data": {}
                }
            },
            "links": {
                "self": {
                    "href": ""
                }
            },
            "relationships": {
                "tip": {
                    "data": {
                        "type": "versions",
                        "id": ""
                    },
                    "links": {
                        "related": {
                            "href": ""
                        }
                    }
                },
                "versions": {
                    "links": {
                        "related": {
                            "href": ""
                        }
                    }
                },
                "parent": {
                    "data": {
                        "type": "folders",
                        "id": ""
                    },
                    "links": {
                        "related": {
                            "href": ""
                        }
                    }
                },
                "refs": {
                    "links": {
                        "self": {
                            "href": ""
                        },
                        "related": {
                            "href": ""
                        }
                    }
                },
                "links": {
                    "links": {
                        "self": {
                            "href": ""
                        }
                    }
                }
            }
        },
            {
                "type": "items",
                "id": "urn:adsk.wipprod:dm.lineage",
                "attributes": {
                    "displayName": "M006-80580.rvt",
                    "createTime": "2017-02-14T09:26:59.0000000Z",
                    "createUserId": "B4SPNKUH9",
                    "createUserName": "",
                    "lastModifiedTime": "2017-02-14T09:26:59.0000000Z",
                    "lastModifiedUserId": "B4SKUH9",
                    "lastModifiedUserName": "",
                    "hidden": false,
                    "reserved": false,
                    "extension": {
                        "type": "items:autodesk.core:File",
                        "version": "1.0",
                        "schema": {
                            "href": ""
                        },
                        "data": {}
                    }
                },
                "links": {
                    "self": {
                        "href": ""
                    }
                },
                "relationships": {
                    "tip": {
                        "data": {
                            "type": "versions",
                            "id": ""
                        },
                        "links": {
                            "related": {
                                "href": ""
                            }
                        }
                    },
                    "versions": {
                        "links": {
                            "related": {
                                "href": ""
                            }
                        }
                    },
                    "parent": {
                        "data": {
                            "type": "folders",
                            "id": ""
                        },
                        "links": {
                            "related": {
                                "href": ""
                            }
                        }
                    },
                    "refs": {
                        "links": {
                            "self": {
                                "href": ""
                            },
                            "related": {
                                "href": ""
                            }
                        }
                    },
                    "links": {
                        "links": {
                            "self": {
                                "href": ""
                            }
                        }
                    }
                }
            },
            {
                "type": "items",
                "id": "urn:adsk.wipprod:dm.lineage",
                "attributes": {
                    "displayName": "M006-80580.rvt",
                    "createTime": "2017-02-14T09:26:59.0000000Z",
                    "createUserId": "B4SPNKUH9",
                    "createUserName": "",
                    "lastModifiedTime": "2017-02-14T09:26:59.0000000Z",
                    "lastModifiedUserId": "B4SKUH9",
                    "lastModifiedUserName": "",
                    "hidden": false,
                    "reserved": false,
                    "extension": {
                        "type": "items:autodesk.core:File",
                        "version": "1.0",
                        "schema": {
                            "href": ""
                        },
                        "data": {}
                    }
                },
                "links": {
                    "self": {
                        "href": ""
                    }
                },
                "relationships": {
                    "tip": {
                        "data": {
                            "type": "versions",
                            "id": ""
                        },
                        "links": {
                            "related": {
                                "href": ""
                            }
                        }
                    },
                    "versions": {
                        "links": {
                            "related": {
                                "href": ""
                            }
                        }
                    },
                    "parent": {
                        "data": {
                            "type": "folders",
                            "id": ""
                        },
                        "links": {
                            "related": {
                                "href": ""
                            }
                        }
                    },
                    "refs": {
                        "links": {
                            "self": {
                                "href": ""
                            },
                            "related": {
                                "href": ""
                            }
                        }
                    },
                    "links": {
                        "links": {
                            "self": {
                                "href": ""
                            }
                        }
                    }
                }
            }
        ];

        this.populateFiles(files);
    }

    public populateFiles(files) {

        return new Promise((resolve, reject) => {
            try {
                if ($.fn.dataTable.isDataTable('#table-files')) {
                    let table = $('#table-files').DataTable();
                    table.clear().draw();
                    table.destroy();
                }

                if (files.length > 0) {

                    let elements = [];

                    $.each(files, (index: number, item) => {

                        let element = `<tr>
                                <td>${index + 1}</td>
                                <td>${item.attributes.displayName}</td>
                                <td>${item.attributes.versionNumber}</td>
                                <td>${new Date(item.attributes.createTime).toLocaleDateString()}</td>
                                <td>${(parseInt(item.attributes.storageSize) / 1024 / 1024).toFixed(2)} </td>
                                <td>
                                    <button type="button" class="btn btn-sm btn-outline-secondary link-download" title="download" role="button" >
                                        <i class="fa fa-cloud-download" aria-hidden="true"></i>
                                    </button>                       
                                </td>
                                <td>
                                    <div class="progress-bar-container">
                                        <div class="d-flex justify-content-between align-items-center mb-1 max-width-progress-wrap">
                                            <p class="progress-text text-success"></p>
                                            <p class="progress-number"></p>
                                        </div>
                                        <div class="progress progress-md">
                                            <div class="progress-bar bg-success" role="progressbar" style="width: 0;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" title="progress-bar"></div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-sm btn-outline-secondary link-qr" title="qr" role="button" data-link="">
                                        <i class="mdi mdi-qrcode-scan" aria-hidden="true"></i>
                                    </button>
                                </td>
                            </tr>`;

                        elements.push(element);

                    });

                    $('tbody').html(elements.join('\r\n'));

                    //https://datatables.net/blog/2014-10-22

                    let tableFiles = $('#table-files')
                        .on('init.dt', (event, settings, json) => {

                        }).DataTable({
                            //fixheader: true,
                            responsive: true,
                            //searchHighlight: true,
                            //filter: 'applied',
                            //fixedcolumns: true,
                            paging: false,
                            order: [[1, 'asc']],
                            columns: [

                                { orderable: true, width: '10%' },
                                { orderable: true, width: '25%' },
                                { orderable: true, width: '5%' },
                                { orderable: true, width: '10%' },
                                { orderable: true, width: '10%' },
                                { orderable: false, width: '5%' },
                                { orderable: false, width: '25%' },
                                { orderable: true, width: '10%' },

                            ],
                            autoWidth: false
                        })
                        .on('draw', function (event, settings) {

                            var body = $(event.currentTarget).find('tbody');
                            //body.unhighlight();
                            //body.highlight(tableFiles.search());

                        });


                } 

                let table = $('#tab-files').find('table');

                table.find('input.checkbox-toggle-all').removeAttr('checked');

                resolve('Files populated successfully.');

            } catch (e) {
                reject(e);
            }
        });
    }
}
