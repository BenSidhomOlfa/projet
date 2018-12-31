$(document).ready(function () {
  var nombre = -1;
  $("#ch").click(function () {

    $("#chaises").empty();
    var val = $('#ch').find(":selected").val();
    var image = "<img src='images/chaise.jpg'/>";

    for (var i = 0; i < val; i++) {
      $("#chaises").append(image);
    }
    nombre = val;
  });
  var date;
  $('#date').Zebra_DatePicker({
    format: 'd/m/Y', onSelect: function () {
      var date1 = $(this).context.value;
      date = date1;
    }
  });

  $("#b1").click(function () {
    var nom = $('#nom').val();
    var n = nom.length;
    var tel = $('#tel').val();
    var t = tel.length;

    if (nombre == -1) {
      alert('veuillez sélectionner le nombre de places ');
    }
    else if (n < 10 || isNaN(nom) == false) {
      alert('nom et prenom tres courts!');
    } else if (t < 8 || t > 8) {
      alert('N de tel invalide');
    }
    else {
      var civ;
      if ($('input[name="civilite"]').is(':checked')) {
        $("input[name=civilite]:checked").each(
          function () {
            var civ1 = $(this).val();
            if (civ1 == "mme") {
              civ1 = "Madame";
            }
            else if (civ1 == "mlle") {
              civ1 = "Mademoiselle";
            }
            else if (civ1 == "m") {
              civ1 = "Monsieur";
            }
            civ = civ1;
          });

        $("#ticket").empty();
        var resumer = '<div> Bonjour ' + civ + '<strong> ' + nom + '</strong> </br> Votre commande du <U>' + date + '</U> a été bien validée les plats commandés sont :</div></br>';
        $("#ticket").append(resumer);
        var prix = 0;
        $("input[name=cmd]:checked").each(
          function () {
            var prix1 = $(this).data('prix');
            prix = prix + parseFloat(prix1);
            var commande = $(this).context.value;
            var menu = commande;
            var menu1 = '<ul> <li>' + menu + '</li> </ul>';

            $("#ticket").append(menu1);

          });
        var prix2 = 'le montant total de la commande est de ' + prix * nombre + ' Dinars';
        $("#ticket").append(prix2);

      }
      else {
        alert(' la civilite est obligatoire!');
      }
    }

  });




});