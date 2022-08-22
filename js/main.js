const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0df6a0b62fmsh0f8b3e864db2e23p1542a8jsnfb94827f5977',
		'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
	}
};

// fetch('https://omgvamp-hearthstone-v1.p.rapidapi.com/info', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

let ranking = document.getElementById("rank_beer");
let str = "";

async function getResponse() {
  const response = await fetch(
    'https://omgvamp-hearthstone-v1.p.rapidapi.com/info',
    {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '0df6a0b62fmsh0f8b3e864db2e23p1542a8jsnfb94827f5977',
		    'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
      }
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  for(let i=0; i<data.classes.length; i=i+1) {
    str += "<div><a href='#'>"+ data.classes[i] +"</a></div>";
  }
  ranking.innerHTML = str;
  console.log("str : " + str);
}

// getResponse();

let str2 = "";
const info = document.getElementById("info_druid");

async function getResponseDruid() {
  const response = await fetch(
    'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/Druid',
    {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '0df6a0b62fmsh0f8b3e864db2e23p1542a8jsnfb94827f5977',
		    'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
      }
    }
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    totalData = data.length - 1000;
    for(let i=1000;i<data.length;i=i+1) {
      if(data[i].img == null) {
        str2 += "<img src='/images/noimage.jpg'></img>";
      }else {
        str2 += "<img src='"+data[i].img+"'></img>";
      }
    }
    info.innerHTML = str2;
    console.log("str2 : " + str2);
}

// getResponseDruid();

let str3 = "";

async function getAllBurgers() {
  const response = await fetch(
    'https://burgers1.p.rapidapi.com/burgers',
    {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '0df6a0b62fmsh0f8b3e864db2e23p1542a8jsnfb94827f5977',
		    'X-RapidAPI-Host': 'burgers1.p.rapidapi.com'
      }
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  console.log(data);
  data.forEach((burger, index) => {
    str3 += "<div class='burger'><h2><strong>"+ burger.restaurant +"</strong></h2>";
    str3 += "<h4><b>"+ burger.name +"</b></h4>"
    str3 += "<p>"+ burger.ingredients +"</p>";
    str3 += "<div>"+ burger.addresses[0].country + "</div>";
    str3 += "<div>"+ burger.web +"</div>";
    str3 += "</div>";
  });
  info.innerHTML = str3;
}

getAllBurgers();
