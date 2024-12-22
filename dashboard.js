let options = document.querySelectorAll('.option');
let options2 = document.querySelectorAll('.option2');
let times = document.querySelectorAll('h6');
let time0 = document.querySelector('.daily');
let time1 = document.querySelector('.weekly');
let time2 = document.querySelector('.monthly');
let word1 = document.querySelector('#span1');
let word2 = document.querySelector('#span2');
let word3 = document.querySelector('#span3');
let word4 = document.querySelector('#span4');
let word5 = document.querySelector('#span5');
let word6 = document.querySelector('#span6');
let word7 = document.querySelector('#span7');
let word8 = document.querySelector('#span8');
let word9 = document.querySelector('#span9');
let word10 = document.querySelector('#span10');
let word11= document.querySelector('#span11');
let word12 = document.querySelector('#span12');
time1.style.opacity = '100%';


document.addEventListener('DOMContentLoaded', ()=>{
    time1.removeEventListener('mouseleave', mouseleft1);
});

//detecting mouse over and mouse leave in option buttons
for(let option of options)
{
    option.addEventListener('mouseover', (event)=>{
        event.target.style.opacity = '100%';
        option.style.cursor = 'pointer';
    });
    option.addEventListener('mouseleave',(event)=>{
        event.target.style.opacity = '40%';

    })
}

//functions

//function for hovering for options
let mouseleft = (event)=>{
    event.target.style.opacity = '50%';}

//function for mouse leaving for options
let mousecame = (event)=>{
event.target.style.opacity = '100%';
event.target.style.cursor = 'pointer';}

//function for hovering for times
let mousecame1 = (event)=>{
    event.target.style.opacity = '100%';
    event.target.style.cursor = 'pointer';}

//function for mouse leaving for times
let mouseleft1 = (event)=>{
    event.target.style.opacity = '50%';
}


//DEFAULT RENDERING OF INFORMATION
function dataRender(data)
{
    //WEEKLY
    let print = data[0]['timeframes']['weekly']['current'];
    word1.innerHTML = print + 'hrs';
    print = data[0]['timeframes']['weekly']['previous'];
    word2.innerHTML = `Lastweek - ${print}hrs`;

    print = data[1]['timeframes']['weekly']['current'];
    word3.innerHTML = print + 'hrs';
    print = data[1]['timeframes']['weekly']['previous'];
    word4.innerHTML = `Lastweek - ${print}hrs`;

    print = data[2]['timeframes']['weekly']['current'];
    word5.innerHTML = print + 'hrs';
    print = data[2]['timeframes']['weekly']['previous'];
    word6.innerHTML = `Lastweek - ${print}hrs`;

    print = data[3]['timeframes']['weekly']['current'];
    word7.innerHTML = print + 'hrs';
    print = data[3]['timeframes']['weekly']['previous'];
    word8.innerHTML = `Lastweek - ${print}hrs`;

    print = data[4]['timeframes']['weekly']['current'];
    word9.innerHTML = print + 'hrs';
    print = data[4]['timeframes']['weekly']['previous'];
    word10.innerHTML = `Lastweek - ${print}hrs`;
    
    print = data[5]['timeframes']['weekly']['current'];
    word11.innerHTML = print + 'hrs';
    print = data[5]['timeframes']['weekly']['previous'];
    word12.innerHTML = `Lastweek - ${print}hrs`;
    


    renderData2(data);
    
    



    

}


//Same as above---detecting hover state for option buttons
for(let option of options2)
    {
        option.addEventListener('mouseover', mousecame);
        option.addEventListener('mouseleave', mouseleft);
            
    }

//iterating through the daily, weekly and monthly button to add 
//listeners for mouse enter and mouse leave
    for(let time of times)
    {
        time.addEventListener('mouseenter', mousecame1);
        time.addEventListener('mouseleave', mouseleft1);

    }

//function for changing displayed information after click
function renderData2(data)
{

    time0.addEventListener('click', ()=>{
        time0.removeEventListener('mouseleave', mouseleft1);
        time1.addEventListener('mouseleave', mouseleft1);
        time2.addEventListener('mouseleave', mouseleft1);
        time0.style.opacity = '100%';
        time1.style.opacity = '50%';
        time2.style.opacity = '50%';

        //updating of DOM to display related information
        print = data[0]['timeframes']['daily']['current'];
    word1.innerHTML = print + 'hrs';
    print = data[0]['timeframes']['daily']['previous'];
    word2.innerHTML = `Yesterday - ${print}hrs`;
    
    print = data[1]['timeframes']['daily']['current'];
    word3.innerHTML = print + 'hrs';
    print = data[1]['timeframes']['daily']['previous'];
    word4.innerHTML = `Yesterday - ${print}hrs`;

    print = data[2]['timeframes']['daily']['current'];
    word5.innerHTML = print + 'hrs';
    print = data[2]['timeframes']['daily']['previous'];
    word6.innerHTML = `Yesterday - ${print}hrs`;

    print = data[3]['timeframes']['daily']['current'];
    word7.innerHTML = print + 'hrs';
    print = data[3]['timeframes']['daily']['previous'];
    word8.innerHTML = `Yesterday - ${print}hrs`;

    print = data[4]['timeframes']['daily']['current'];
    word9.innerHTML = print + 'hrs';
    print = data[4]['timeframes']['daily']['previous'];
    word10.innerHTML = `Yesterday - ${print}hrs`;

    print = data[5]['timeframes']['daily']['current'];
    word11.innerHTML = print + 'hrs';
    print = data[5]['timeframes']['daily']['previous'];
    word12.innerHTML = `Yesterday - ${print}hrs`;

    });

    //used for the selection functionality..so incase a button is clicked
    //the others turn slightly transparent and the mouseleave event is 
    //disabled for the clicked element
    time1.addEventListener('click', ()=>{
        time1.removeEventListener('mouseleave', mouseleft1);
        time0.addEventListener('mouseleave', mouseleft1);
        time2.addEventListener('mouseleave', mouseleft1);
        time1.style.opacity = '100%';
        time0.style.opacity = '50%';
        time2.style.opacity = '50%';


    //WEEKLY
    //updating of DOM to display related information

    let print = data[0]['timeframes']['weekly']['current'];
    word1.innerHTML = print + 'hrs';
    print = data[0]['timeframes']['weekly']['previous'];
    word2.innerHTML = `Lastweek - ${print}hrs`;

    print = data[1]['timeframes']['weekly']['current'];
    word3.innerHTML = print + 'hrs';
    print = data[1]['timeframes']['weekly']['previous'];
    word4.innerHTML = `Lastweek - ${print}hrs`;

    print = data[2]['timeframes']['weekly']['current'];
    word5.innerHTML = print + 'hrs';
    print = data[2]['timeframes']['weekly']['previous'];
    word6.innerHTML = `Lastweek - ${print}hrs`;

    print = data[3]['timeframes']['weekly']['current'];
    word7.innerHTML = print + 'hrs';
    print = data[3]['timeframes']['weekly']['previous'];
    word8.innerHTML = `Lastweek - ${print}hrs`;

    print = data[4]['timeframes']['weekly']['current'];
    word9.innerHTML = print + 'hrs';
    print = data[4]['timeframes']['weekly']['previous'];
    word10.innerHTML = `Lastweek - ${print}hrs`;
    
    print = data[5]['timeframes']['weekly']['current'];
    word11.innerHTML = print + 'hrs';
    print = data[5]['timeframes']['weekly']['previous'];
    word12.innerHTML = `Lastweek - ${print}hrs`;
    
    });

    time2.addEventListener('click', ()=>{
        time2.removeEventListener('mouseleave', mouseleft1);
        time0.addEventListener('mouseleave', mouseleft1);
        time1.addEventListener('mouseleave', mouseleft1);
        
        time2.style.opacity = '100%';
        time0.style.opacity = '50%';
        time1.style.opacity = '50%';

    //MONTHLY
    //undating of DOM to display related information
    print = data[0]['timeframes']['monthly']['current'];
    word1.innerHTML = print + 'hrs';
    print = data[0]['timeframes']['monthly']['previous'];
    word2.innerHTML = `LastMonth - ${print}hrs`;

    print = data[1]['timeframes']['monthly']['current'];
    word3.innerHTML = print + 'hrs';
    print = data[1]['timeframes']['monthly']['previous'];
    word4.innerHTML = `LastMonth - ${print}hrs`;

    print = data[2]['timeframes']['monthly']['current'];
    word5.innerHTML = print + 'hrs';
    print = data[2]['timeframes']['monthly']['previous'];
    word6.innerHTML = `LastMonth - ${print}hrs`;
    
    print = data[3]['timeframes']['monthly']['current'];
    word7.innerHTML = print + 'hrs';
    print = data[3]['timeframes']['monthly']['previous'];
    word8.innerHTML = `LastMonth - ${print}hrs`;
    
    print = data[4]['timeframes']['monthly']['current'];
    word9.innerHTML = print + 'hrs';
    print = data[4]['timeframes']['monthly']['previous'];
    word10.innerHTML = `LastMonth - ${print}hrs`;

    print = data[5]['timeframes']['monthly']['current'];
    word11.innerHTML = print + 'hrs';
    print = data[5]['timeframes']['monthly']['previous'];
    word12.innerHTML = `LastMonth - ${print}hrs`;
   
    });
}

    fetch('data.json').then((response) => {  
        if(!response.ok) return console.log('Oops! Something went wrong.');
        
        return response.json();
      }).then((data) => {
            dataRender(data);
      });
    