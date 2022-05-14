console.log('in script js');

$(document).ready(onReady);

function onReady( ) {
    console.log('so ready!');

   let titleHeader = $('h1');
   // let titleHeader = <h1>.. </h1>

   console.log('title header is', titleHeader)
   // console.log('titleHeader', <h1>....</h1>)

   $(document).on('click', '#submit-btn', onsubmit);


}
function onsubmit() {
    let firstName=$('.first-name').val();
    console.log('firstName', firstName);
    
    let lastName= $('.last-name').val();
    console.log('last-name', lastName);
    
   let idNumber= $('.id-number').val();
    console.log('id-number', idNumber);

    let Title= $('.title-name').val();
    console.log('title-name', Title);
    
    let annualSalary= $('.annual-salary').val();
    console.log('annual-salary', annualSalary);

}

