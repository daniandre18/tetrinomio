
function cargarPieza () {
    $.ajax({
        url: document.URL+"cargarPieza",
        type: "GET",
        dataType: "json",
        success: function (responseJson) {
            var trHTML = '';
            return responseJson[0].data;
        },
        error: function (xhr, status) {
            console.log("error");
        },
           
    })
}

function rotarPieza (status) {
    $.ajax({
        url: document.URL+"rotarPieza?status="+status,
        type: "GET",
        dataType: "json",
        success: function (responseJson) {
            var trHTML = '';
            return responseJson[0].data;
        },
        error: function (xhr, status) {
            console.log("error");
        },
           
    })
}

function bajarPieza (posX) {
    $.ajax({
        url: document.URL+"bajarPieza?posX="+posX,
        type: "GET",
        dataType: "json",
        success: function (responseJson) {
            var trHTML = '';
            return responseJson[0].data;
        },
        error: function (xhr, status) {
            console.log("error");
        },
           
    })
}

function moverPieza (dir) {
    $.ajax({
        url: document.URL+"moverPieza?dir="+dir,
        type: "GET",
        dataType: "json",
        success: function (responseJson) {
            var trHTML = '';
            return responseJson[0].data;
        },
        error: function (xhr, status) {
            console.log("error");
        },
           
    })
}
   