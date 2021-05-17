var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var json = JSON.parse(this.responseText);
        console.log(json)
        $.each(json ,function(k,v){
            var x = "<li><a href='"+v.LINK+"'>"+v.HTML+"</a></li>";
            $("#myUL").append(x);
        });
//        var x = "<li><a href='"++"'>"++"</a></li>";
    }
  };
  xhttp.open("GET", "movie.json", true);
  xhttp.send();



//<li><a href="#">American Sniper</a></li>