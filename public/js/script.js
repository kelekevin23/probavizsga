$(function () {
    const token = $('meta[name="csrf-token"]').attr("content");

    const ajaxhivas = new Ajax(token);
    ajaxhivas.selectAjax("/szakdogaVisszaad", adatfelvesz);

    function adatfelvesz(adatok) {
        let kiir = "";
        kiir += "<tr>";
        kiir += "<th>Szakdolgozat címe</th>";
        kiir += "<th>Készítők neve</th>";
        kiir += "<th>Github link</th>";
        kiir += "<th>Szakdolgozta elérhetősége</th>";
        kiir += "<th></th>";
        kiir += "<th></th>";
        kiir += "</tr>";

        $(".tablazat").html(kiir);
        adatok.forEach((element, index) => {
            const elem = new Szakdoga(element, index);
        });
    }

    $("#uj").on("click", () => {
        const data = {
            szakdoganev: $("#szakdoga_nev").val(),
            tagokneve: $("#tagokneve").val(),
            oldallink: $("#oldallink").val(),
            githublink: $("#githublink").val(),
        };
        console.log(data);
        ajaxhivas.insertAjax("/szakdogaUj", data);
    });
    let volt = false;
    $(window).on("torol", (event) => {
        const data = {
            nev: event.detail,
        };
        if (!volt) {
            ajaxhivas.deleteAjax("/szakdogakTorol/" + event.detail, data);
            volt = true;
        }
    });
});
