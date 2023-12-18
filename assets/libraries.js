$(document).ready(function() {
    $('.search-select').each(function() {
        var select = $(this);
        var placeholderText = select.data('placeholder') || 'Search';
        var searchInput = $('<input type="text" class="search-input" placeholder="' + placeholderText + '">');
        var suggestionsDiv = $('<div class="suggestions"></div>');

        select.before(searchInput);
        searchInput.after(suggestionsDiv);

        searchInput.on('keydown', function(e) {
            var suggestions = suggestionsDiv.find('div');
            var active = suggestionsDiv.find('.active');
        
            // Handling navigation with arrow keys
            if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                e.preventDefault(); // Prevent scrolling the page
                if (e.key === 'ArrowDown') {
                    if (active.length && active.next().length) {
                        active.removeClass('active').next().addClass('active');
                    } else {
                        suggestions.removeClass('active');
                        suggestions.first().addClass('active');
                    }
                } else if (e.key === 'ArrowUp') {
                    if (active.length && active.prev().length) {
                        active.removeClass('active').prev().addClass('active');
                    } else {
                        suggestions.removeClass('active');
                        suggestions.last().addClass('active');
                    }
                }
            } else if (e.key === 'Enter' && active.length) {
                e.preventDefault(); // Prevent form submission
                searchInput.val(active.text());
                suggestionsDiv.hide();
            }
        });
        
        searchInput.on('keyup', function(e) {
            if (!['ArrowDown', 'ArrowUp', 'Enter'].includes(e.key)) {
                var searchTerm = $(this).val().toLowerCase();
                suggestionsDiv.empty();
        
                if (searchTerm) {
                    select.find('option').each(function() {
                        var optionText = $(this).text();
                        if (optionText.toLowerCase().indexOf(searchTerm) > -1) {
                            suggestionsDiv.append('<div>' + optionText + '</div>');
                        }
                    });
                    suggestionsDiv.show();
                } else {
                    suggestionsDiv.hide();
                }
            }
        });
        

        suggestionsDiv.on('click', 'div', function() {
            searchInput.val($(this).text());
            suggestionsDiv.hide();
        });

        $(document).click(function(event) { 
            if (!$(event.target).closest('.search-input, .suggestions').length) {
                $('.suggestions').hide();
            }        
        });
    });
});
