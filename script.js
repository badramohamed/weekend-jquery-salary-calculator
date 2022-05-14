console.log('in script js');

$(document).ready(onReady);

function onReady( ) {
    console.log('so ready!');

   let titleHeader = $('h1');
   // let titleHeader = <h1>.. </h1>

   console.log('title header is', titleHeader)
   // console.log('titleHeader', <h1>....</h1>)

   $(document).on(click, #submit-btn, onsubmit);
}