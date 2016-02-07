$(function () {
	var items = [],
        ERROR_TYPES = Object.freeze({
            REQUIRED: 'Please enter value for this field.'
        }),
        $tableHeader = $('#table-container thead'),
        $tableBody = $('#table-container table tbody'),
        $name = $('#name'),
        $email = $('#email'),
        $departureDate = $('#from');


    var clearAllErrors = function () {
        $('.error').remove();
    };

    var cleanAllInputs = function () {
        $('input').val('');
    };

    var getAndValidateFormData = function () {
        
        var data = {
                name: $name.val(),
                email: $email.val(),
                departureDate: $departureDate.val()
            },

            isValid = false;

        clearAllErrors();
        
        var $error = $('<span/>').attr('class', 'error'),
            $errorFieldRequired = $error.text(ERROR_TYPES.REQUIRED).clone();
        
        if (data.name === '') {
            $name.after($errorFieldRequired.clone());
        }

        if (data.email === '') {
            $email.after($errorFieldRequired.clone());
        }

        if (data.departureDate === '') {
            $departureDate.after($errorFieldRequired.clone());
        }

        if ($('#form-container .error').length > 0) {
            return null;
        }

        return data;
    };

    $("#submit-btn").on('click', function(event) {
        event.preventDefault();
    
        var data = getAndValidateFormData();
        
        if (data === null) {
            return;
        }
        
        /*if (isEditing) {
            data.id = isEditing;
            items = updateItemById(data, items);
            isEditing = false;
        } else {
            data.id = new Date().getTime();
            items.push(data);
        }*/

        // reRenderItems(items, $tableBody);
        
        cleanAllInputs();
        alert('form successfully submitted');

    });

});