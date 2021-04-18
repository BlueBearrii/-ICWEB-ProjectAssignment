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

$(".dynamic_number").waypoint(
  function () {
    setCounter();
  },
  {
    offset: "100%",
  }
);

function bannerSlider() {
  const images = [
    "https://images.unsplash.com/photo-1529338296731-c4280a44fc48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    "https://img.freepik.com/free-photo/side-view-cropped-unrecognizable-business-people-working-common-desk_1098-20474.jpg?size=626&ext=jpg",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b2ZmaWNlJTIwd29ya2VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    "https://image.freepik.com/free-photo/cheerful-big-smile-from-happy-executive-office-workplace-isolate-white-background_1258-3881.jpg",
  ];
  var index = 0;

  setInterval(function () {
    $("header").css("background-image", "url(" + images[index] + ")");
    index == images.length - 1 ? (index = 0) : index++;
  }, 5000);
}

const btns = document.querySelectorAll(".btn_great_work");
function tabs(index) {
  updateLists(index);
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");

      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      } else {
      }

      this.className += " active";
    });
  }
}

const rowGallery = document.getElementById("tabs_images");
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
function updateLists(index) {
  console.log(index);
  function createElement(src) {
    const newImageElement = document.createElement("img");
    newImageElement.src = src;
    newImageElement.className = "col-md-3 img-fluid p-0";
    newImageElement.id = "img_style";
    newImageElement.alt = "...";

    return newImageElement;
  }

  while (rowGallery.firstChild) {
    rowGallery.removeChild(rowGallery.firstChild);
  }

  if (index == 0) {
    for(i = 0 ; i< arrGallery.length; i++){
      rowGallery.appendChild(createElement(arrGallery[i].src));
    }
    
  }
  if (index == 1) {
    for(i = 0 ; i< arrGallery.length; i++){
      if(arrGallery[i].type == "branding"){
        rowGallery.appendChild(createElement(arrGallery[i].src));
      }
    }
  }
  if (index == 2) {
    for(i = 0 ; i< arrGallery.length; i++){
      if(arrGallery[i].type == "design"){
        rowGallery.appendChild(createElement(arrGallery[i].src));
      }
    }
  }
  if (index == 3) {
    for(i = 0 ; i< arrGallery.length; i++){
      if(arrGallery[i].type == "photo"){
        rowGallery.appendChild(createElement(arrGallery[i].src));
      }
    }
  }
  if (index == 4) {
    for(i = 0 ; i< arrGallery.length; i++){
      if(arrGallery[i].type == "coffee"){
        rowGallery.appendChild(createElement(arrGallery[i].src));
      }
    }
  }
}

function smoothScroll() {
  var elmnt = document.getElementById("service");
  elmnt.scrollIntoView();
}
