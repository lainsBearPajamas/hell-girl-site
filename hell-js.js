function renderPage(time) {
 if (time === 0) {
  buttonElement.classList.add('sell-button-activated');
  document.querySelector('body').classList.add('body-activated');
  document.querySelector('.empty-div').classList.add('empty-div-activated');
 }
}


const buttonElement = document.querySelector('.js-sell-button');
buttonElement.addEventListener('click', () => {
  const now = new Date();
  console.log(now);
  const time = now.getHours();
  console.log(time);
  const timeArtificial = new Date('2024-06-02T00:00:01');
  const hoursArtificial = timeArtificial.getHours();
  console.log(hoursArtificial);
  console.log(timeArtificial); 
  renderPage(hoursArtificial);
})