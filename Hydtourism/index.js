var suggestions = ["Hyderabad", "Secunderabad","Birla Temple","Mecca Masjid","Charminar","Qutb Shahi Tombs","Golconda","Botanical Garden","Nehru Zoological Park","Lumbini Park","DLF Street","Old City Food shops","Paradise Biryani","Begum Bazar","Forum Sujana Mall","Chudi Bazar","Inorbit Mall","Gurudwara","St. Joseph's Cathedral"];
var suggestionList = document.getElementById("suggestionList");

function toggleSearch() {
  var input = document.getElementById("searchInput");
  input.style.display = (input.style.display === "block") ? "none" : "block";
  if (input.style.display === "block") {
    input.focus();
  } else {
    hideSuggestions();
  }
}

function showSuggestions(input) {
  var inputField = document.getElementById("searchInput");
  suggestionList.innerHTML = "";

  if (!input) {
    suggestionList.style.display = "none";
    return;
  }

  var filteredSuggestions = suggestions.filter(function(suggestion) {
    return suggestion.toLowerCase().includes(input.toLowerCase());
  });

  if (filteredSuggestions.length === 0) {
    suggestionList.style.display = "none";
    return;
  }

  filteredSuggestions.forEach(function(suggestion) {
    var li = document.createElement("li");
    li.textContent = suggestion;
    li.className = "suggestion-item";
    li.addEventListener("click", function() {
      inputField.value = suggestion;
      hideSuggestions();
    });
    suggestionList.appendChild(li);
  });

  suggestionList.style.display = "block";
  inputField.style.display = "none";
}

function hideSuggestions() {
  suggestionList.style.display = "none";
}

document.getElementById('inquiryForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const arrivalDate = document.getElementById('arrivalDate').value;
    const duration = document.getElementById('duration').value;
    const adults = document.getElementById('adults').value;
    const children = document.getElementById('children').value;
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
  
    if (!arrivalDate || !duration || !adults || !children || !name || !phone || !email) {
      alert('Please fill all mandatory fields');
      return;
    }
    
  });
