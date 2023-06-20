 


window.onload = function() {
    var searchBox = document.getElementById('searchBox');
    var searchButton = document.getElementById('searchButton');
    var originalContent = document.getElementById('originalContent');
    var foundContent = document.getElementById('foundContent');
    var suggestionsList = document.getElementById('suggestions');

    searchButton.addEventListener('click', function() {
        searchAndHighlight(searchBox.value.trim());
    });

    searchBox.addEventListener('input', function() {
        searchAndHighlight(searchBox.value.trim());
    });

    function searchAndHighlight(searchText) {
        var searchRegex = new RegExp(searchText, 'gi');
        var highlightedContent = originalContent.innerHTML.replace(searchRegex, function(match) {
            return '<span class="highlight">' + match + '</span>';
        });

        originalContent.innerHTML = originalContent.innerHTML.replace(/<span class="highlight">|<\/span>/g, '');
        foundContent.innerHTML = highlightedContent;

        // Generate suggestions for autocomplete
        generateSuggestions(searchText);
    }

    function generateSuggestions(searchText) {
        // Clear existing suggestions
        suggestionsList.innerHTML = '';

        // Add fixed sentences to suggestions
        var fixedSentences = [
            "Physics",
            "The scope of physics",
      
            "Mechanics",
			"The study of gravitation",
			"The study of heat, thermodynamics, and statistical mechanics",
			"Statistical mechanics",
			"The study of electricity and magnetism",
			"Optics",
			"Atomic and chemical physics",
			"Condensed-matter physics",
			"Nuclear physics",
			"Particle physics",
			"Quantum mechanics",
			"Relativistic mechanics",
			"Conservation laws and symmetry",
			"Fundamental forces and fields",
			"The methodology of physics",
			"Relations between physics and other disciplines and society",
			"Influence of physics on related disciplines",
			"Influence of related disciplines on physics",
        ]

        fixedSentences.forEach(function(sentence) {
            var option = document.createElement('option');
            option.value = sentence;
            suggestionsList.appendChild(option);
        });

        // Get all words from the original content
        var words = originalContent.textContent.toLowerCase().split(/\W+/);

        // Filter words that match the search text
        var matchingWords = words.filter(function(word) {
            return word.startsWith(searchText.toLowerCase());
        });

        // Add matching words to the suggestions list
        matchingWords.forEach(function(word) {
            var option = document.createElement('option');
            option.value = word;
            suggestionsList.appendChild(option);
        });
    }
};
