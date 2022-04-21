class Szakdoga {
    constructor(adat, index) {
        this.adat = adat;
        this.index = index;
        this.megjelenit(this.adat, this.index);
    }
    megjelenit(obj, index) {
        let kiir = "";
        kiir += "<tr>";
        kiir += "<td>" + obj.szakdoga_nev + "</td>";
        kiir += "<td>" + obj.tagokneve + "</td>";
        kiir +=
            "<td><a href=" +
            obj.githublink +
            ">" +
            obj.githublink +
            "</a></td>";
        kiir +=
            "<td><a href=" + obj.oldallink + ">" + obj.oldallink + "</a></td>";
        kiir +=
            "<td><button class=modositashoz id=" +
            index +
            " >Módosít</button></td>>";
        kiir +=
            "<td><form><button class=torol id=" +
            index +
            " value=" +
            obj.szakdoga_nev +
            ">Töröl</button></form></td>";
        kiir += "</tr>";

        $(".tablazat").append(kiir);

        $(".torol").on("click", (event) => {
            let esemeny = new CustomEvent("torol", {
                detail: event.target.value,
            });
            window.dispatchEvent(esemeny);
        });

        $(".modositashoz").on("click", () => {
            $("#modosit").prop("disabled", false);
            $("#szakdoga_nev").val(obj.szakdoga_nev);
            $("#tagokneve").val(obj.tagokneve);
            $("#oldallink").val(obj.oldallink);
            $("#githublink").val(obj.githublink);
        });
    }
}
