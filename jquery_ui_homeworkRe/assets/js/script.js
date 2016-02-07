$(function () {
    var counter = 0;

    $('#submit-btn').button();

    $( "#from, #to" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1,
        onSelect: function (selectedDate) {
            if (this.id == 'from') {
              var dateMin = $('#from').datepicker("getDate");
              var rMin = new Date(dateMin.getFullYear(), dateMin.getMonth(),dateMin.getDate() + 1); 
              var rMax = new Date(dateMin.getFullYear(), dateMin.getMonth(),dateMin.getDate() + 3); 

                $('#to').val($.datepicker.formatDate('mm/dd/yy', new Date(rMax)));                    
            }      
        }
    });

    $("#available-reservations li").draggable({
        appendTo: "body",
        helper: "clone"
    });
    
    $("#selected-reservations ol").droppable({
        activeClass: "ui-state-default",
        hoverClass: "ui-state-hover",
        drop: function(event, ui) {

            var current = $(this);
            current.find(".placeholder").remove();
            var reservationId = ui.draggable.attr("data-id");
            
            if (current.find("[data-id=" + reservationId + "]").length) {
                return;
            }

            if (counter >= 3) {
                return;
            }

            $("<li></li>", {
                "text": ui.draggable.text(),
                "data-id": reservationId
            }).appendTo(this);
            counter++;
            // remove
            var selectedReservationsId = current.closest('#selected-reservations').attr('id');
            $("#selected-reservations:not(#"+selectedReservationsId+") [data-id="+reservationId+"]").remove();
            
        }
    }).sortable({
        items: "li:not(.placeholder)",
        sort: function() {
            $(this).removeClass("ui-state-default");
        }

    });
});
