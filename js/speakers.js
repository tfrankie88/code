document.addEventListener('DOMContentLoaded', () => {
  const dropdownButtons = document.querySelectorAll('.circle-speak');
  const dropdowns = document.querySelectorAll('.expanded');
  const arrows = document.querySelectorAll('.circle-speak i');
  const links = document.querySelector('.speaker-links');
  let speakers = document.querySelectorAll('.speaker-box')

  const carouselButtons = document.querySelectorAll('.carousel-button')

  // More info functionality
  for (let y = 0; y < dropdownButtons.length; y++) {
    let click = 0;
    dropdownButtons[y].addEventListener('click', () => {
      click += 1;
      if((click%2) !== 0) {
        dropdowns[y].classList.add('show');
        dropdowns[y].classList.remove('hide');
        links.style.marginTop= '100px';
        arrows[y].classList.add('up-arrow');
        arrows[y].classList.remove('down-arrow');
      } else {
          click = 0;
          dropdowns[y].classList.remove('show');
          dropdowns[y].classList.add('hide');
          links.style.marginTop = '0';
          arrows[y].classList.remove('up-arrow')
          arrows[y].classList.add('down-arrow')
      };
    });
  }

  // Old Carousel functionality

  var currentSpeakers = [];
  var numberOfSpeakerBoxes;

  if (document.documentElement.clientWidth > 950) {
    numberOfSpeakerBoxes = 3;
  } else if (document.documentElement.clientWidth > 700) {
    numberOfSpeakerBoxes = 2;
  } else {
    numberOfSpeakerBoxes = 1;
  }

  for (x = 0; x < speakers.length; x++) {
    currentSpeakers.push(speakers[x])
    if (x >= 3) {
      currentSpeakers[x].classList.add('hide')
    }
  }

  for (i = 0; i < carouselButtons.length; i++) {
    carouselButtons[i].addEventListener('click', () => {
      for (j = 0; j < currentSpeakers.length; j++) {
        if (j < 3) {
          currentSpeakers[j].classList.remove('hide')
        } else {
          currentSpeakers[j].classList.add('hide')
        }
      }
      var droppedSpeaker = currentSpeakers.shift()
      currentSpeakers.push(droppedSpeaker);
    })
  }


})
