const ul = document.getElementById("ul");

ul.onclick = function (event) {
    if (event.target.tagName != "LI") return ;
    if (event.ctrlKey || event.metaKey) {
        return multiselection(event.target);
    }
    else {
        return singleselection(event.target);
    }
  }

ul.onmousedown = function() {
return false ;
    };      

    function multiselection(li) { // متغیر تابع هر اسمی میتونه داشته باشه از kj تا
      li.classList.toggle("selected"); // 
    }

    function singleselection(li) {
      let selected = ul.querySelectorAll('.selected');
      for (let x of selected) {
      x.classList.remove("selected");
      }
    
    li.classList.add("selected");
    }