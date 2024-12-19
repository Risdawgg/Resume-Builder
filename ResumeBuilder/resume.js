//? Remove Items

function removeExperience() {
  const div = document.getElementById('experience')
  const Tag = div.querySelector('div')
  if (Tag) {
    Tag.remove()
  }
}
function removeEducation() {
  const div = document.getElementById('education')
  const Tag = div.querySelector('div')
  console.log(Tag)
  if (Tag) {
    Tag.remove()
  }
}

function removeExpertise() {
  const div = document.getElementById('expertise')
  const Tag = div.querySelector('div')
  if (Tag) {
    Tag.remove()
  }
}

function removeSkills() {
  const div = document.getElementById('skills')
  const Tag = div.querySelector('div')
  if (Tag) {
    Tag.remove()
  }
}

//? Add Items
function addExperience() {
  const div = document.getElementById('experience')
  const Tag = div.querySelector('div')
  if (Tag) {
    const newDiv = document.createElement('div')
    newDiv.innerHTML = `
<div class="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
      <input type="text"  id="heading" placeholder=" Your Company">
      <input type="text" placeholder=" Duration" />
      <input type="text" placeholder=" Position" />
    </div>
    `
    div.appendChild(newDiv)
  }
}

function addEducation() {
  const div = document.getElementById('education')
  const Tag = div.querySelector('div')
  if (Tag) {
    const newDiv = document.createElement('div')
    newDiv.innerHTML = `
<div class="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
      <input type="text"  id="heading" placeholder="Degree">
      <input type="text" placeholder="Institution" />
      <input type="text" placeholder="Duration" />
    </div>
    `
    div.appendChild(newDiv)
  }
}

function addExpertise() {
  const div = document.getElementById('expertise')
  const Tag = div.querySelector('div')
  if (Tag) {
    const newDiv = document.createElement('div')
    newDiv.innerHTML = `
<div class=" grid grid-cols-1">
      <input type="text"  id="heading" placeholder="Your Expertise">
     
    </div>
    `
    div.appendChild(newDiv)
  }
}

function addSkills() {
  const div = document.getElementById('skills')
  const Tag = div.querySelector('div')
  if (Tag) {
    const newDiv = document.createElement('div')
    newDiv.innerHTML = `
    <div class=" grid grid-cols-1">
      <input type="text"  id="heading" placeholder="Your Skills">
    </div>
    `
    div.appendChild(newDiv)
  }
}

//? Submit
function submit() {
  alert('Your resume has been submitted')
}
