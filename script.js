console.log('in script js');

$(document).ready(onReady);

function onReady( ) {
    console.log('so ready!');

   let titleHeader = $('h1');
   // let titleHeader = <h1>.. </h1>

   console.log('title header is', titleHeader)
   // console.log('titleHeader', <h1>....</h1>)

   $(document).on('click', '#submit-btn', onsubmit);
   $(document).on('click', '.delete-btn', onDelete);


}
function onDelete(){
    let  tr= $(this).parent().parent();
    let employee= $(this)
    .parent()
    .siblings()
    .first()
    .text();
alert('uh oh deleted ${employee}.', employee);
tr.remove();

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



$('#salary-table').append(`
'<tr> 
    <td>${firstName}</td>
    <td> ${lastName}</td>
    <td> ${idNumber}</td>
    <td> ${Title}</td>
    <td class=annualSalary${annualSalary}"</td>
    <td> <button class="delete-btn"> delete </button> 
</td');
</tr>

`);

$('.firstName').val('');
$('.lastName').val('');
$('.idNumber').val('');
$('.title').val('');
$('.annualSalary').val();



}





     
