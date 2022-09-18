const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name1 = document.getElementById('name1')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bgs_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML = '<img src="https://loremflickr.com/400/400/laptop" alt=""/>'
  title.innerHTML = 'Lorem ipsum dolor sit amet'
  excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eum. quia placeat numquam minus dolores?'
  profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/women/46.jpg" alt=""/>'
  name1.innerHTML = 'Jane Doe'
  date.innerHTML = 'September 17, 2022'

  animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
  animated_bgs_texts.forEach(bg.classList.remove('animated-bg-text'))
}