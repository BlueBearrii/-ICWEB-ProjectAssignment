const counters = document.querySelectorAll(".dynamic_number");
const speed = 100;
var arrCount = [];

counters.forEach((counter) => {
  arrCount.push(parseInt(counter.innerHTML));
});

function setCounter() {
  counters.forEach((counter, index) => {
    const target = arrCount[index];

    var _counter = 0;

    const interval = target / speed;

    setInterval(function () {
      if (_counter < target) {
        counter.innerHTML = Math.ceil(_counter);
        _counter = _counter + interval;
      } else {
        clearInterval();
      }
    }, 1);
  });
}

// Waypoint => when element visible on screen will call setCounter()
$(".dynamic_number").waypoint(
  function () {
    setCounter();
  },
  {
    offset: "100%",
  }
);


// Set opacity of navigation bar when mouse scrolling 
$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
    $("#nav_style").css("background-color", "rgba(0, 0, 0, 0.6)");
  } else {
    $("#nav_style").css("background-color", "rgba(0, 0, 0, 0.0)");
  }
});

// Get button elements on great work tab
const btns = document.querySelectorAll(".btn_great_work");
// Function trigger great work tab => index,label
function tabs(index, label) {
  for (var i = 0; i < btns.length; i++) {
    if (i == index) {
      btns[i].className = "btn_great_work active";
      updateLists(label);
    } else {
      btns[i].className = "btn_great_work";
    }
  }
}


// Get images elements on great work tab
const images = document.querySelectorAll("#img_style");
const arrGallery = [
  {
    src: "https://www.bkkmenu.com/files/2019/09/CafeHoo181.JPG",
    type: "branding",
  },
  {
    src: "https://cdn.nohat.cc/thumb/f/720/99f961665e6b4bba8f3f.jpg",
    type: "coffee",
  },
  {
    src:
      "https://p1.pxfuel.com/preview/263/1003/641/white-background-modern-internet-white.jpg",
    type: "photo",
  },
  {
    src:
      "https://images.unsplash.com/photo-1596079890744-c1a0462d0975?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    type: "design",
  },
  {
    src:
      "https://media.istockphoto.com/photos/the-setup-for-success-picture-id1165916723?k=6&m=1165916723&s=612x612&w=0&h=jk4D-OaGU9laTNFlLdPrYd-dJYuJPhKr1DVYixQ0N3s=",
    type: "photo",
  },
  {
    src:
      "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    type: "branding",
  },
  {
    src:
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    type: "design",
  },
  {
    src:
      "https://img.freepik.com/free-photo/modern-interior-meeting-room-marketing-office-with-evening-sunset-empty-large-loft-style-conference-space-with-chairs-tables-furniture-clean-glass-windows_44651-340.jpg?size=626&ext=jpg&ga=GA1.2.1588707983.1618358400",
    type: "branding",
  },
];

// Function update gallery when select type on great work tab
function updateLists(_label) {
  if (_label == "all") {
    for (var i = 0; i < arrGallery.length; i++) {
      images[i].className = "col-md-3 img-fluid p-0";
    }
  } else {
    for (var i = 0; i < arrGallery.length; i++) {
      if (arrGallery[i].type == _label) {
        images[i].className = "col-md-3 img-fluid p-0";
      } else {
        images[i].className = "d-none";
      }
    }
  }
}


// On button clicked will scrollview to service element
function smoothScroll() {
  var elmnt = document.getElementById("service");
  elmnt.scrollIntoView();
}

const current_url = window.location.href;
const url_object = new URL(current_url);
document.getElementById("service_a_tag").href = `${url_object.hostname}/#service`
console.log(url_object);


