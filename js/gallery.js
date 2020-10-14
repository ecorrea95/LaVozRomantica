var cant = 12;

var galleryImage = document.getElementById('galleryImage');

for (var i=0; i<cant; i++) {

  // Creo div
  var div = document.createElement("div");

  // Creo tag a
  var a_tag = document.createElement("a");

  // Creo tag img
  var image = document.createElement("img");

  // Variable numero de foto
  var numero = "img/galeria" + (i+1) + ".jpg";

  // Img dentro del tag a y seteo atributos
  a_tag.appendChild(image);
  a_tag.setAttribute('class',"thumbnail");
  a_tag.setAttribute('href',"#");
  a_tag.setAttribute("data-image-id","");
  a_tag.setAttribute('data-toggle',"modal");
  a_tag.setAttribute('data-title',"");
  a_tag.setAttribute('data-image',numero);
  a_tag.setAttribute('data-target',"#image-gallery");

  //Img y atributos
  image.src = numero;
  image.className = "img-thumbnail sized";

  // div atributos
  div.className = "col-lg-3 col-md-4 col-xs-6 thumb";

  //tag a dentro del div
  div.appendChild(a_tag);

  // div adentro del div principal
  galleryImage.appendChild(div);
}

let modalId = $('#image-gallery');

$(document)
  .ready(function () {

    loadGallery(true, 'a.thumbnail');

    //This function disables buttons when needed
    function disableButtons(counter_max, counter_current) {
      $('#show-previous-image, #show-next-image')
        .show();
      if (counter_max === counter_current) {
        $('#show-next-image')
          .hide();
      } else if (counter_current === 1) {
        $('#show-previous-image')
          .hide();
      }
    }

    /**
     *
     * @param setIDs        Sets IDs when DOM is loaded. If using a PHP counter, set to false.
     * @param setClickAttr  Sets the attribute for the click handler.
     */

    function loadGallery(setIDs, setClickAttr) {
      let current_image,
        selector,
        counter = 0;

      $('#show-next-image, #show-previous-image')
        .click(function () {
          if ($(this)
            .attr('id') === 'show-previous-image') {
            current_image--;
          } else {
            current_image++;
          }

          selector = $('[data-image-id="' + current_image + '"]');
          updateGallery(selector);
        });

      function updateGallery(selector) {
        let $sel = selector;
        current_image = $sel.data('image-id');
        $('#image-gallery-title')
          .text($sel.data('title'));
        $('#image-gallery-image')
          .attr('src', $sel.data('image'));
        disableButtons(counter, $sel.data('image-id'));
      }

      if (setIDs == true) {
        $('[data-image-id]')
          .each(function () {
            counter++;
            $(this)
              .attr('data-image-id', counter);
          });
      }
      $(setClickAttr)
        .on('click', function () {
          updateGallery($(this));
        });
    }
  });

// build key actions
$(document)
  .keydown(function (e) {
    switch (e.which) {
      case 37: // left
        if ((modalId.data('bs.modal') || {})._isShown && $('#show-previous-image').is(":visible")) {
          $('#show-previous-image')
            .click();
        }
        break;

      case 39: // right
        if ((modalId.data('bs.modal') || {})._isShown && $('#show-next-image').is(":visible")) {
          $('#show-next-image')
            .click();
        }
        break;

      default:
        return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
  });
